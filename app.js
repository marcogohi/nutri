/* ====================== Helpers de datos ====================== */

const FASE_LABELS = {
  definicion: "Definición",
  dieta_inversa: "Dieta inversa",
  ganancia_muscular: "Ganancia muscular",
  rendimiento: "Rendimiento",
};

const FASE_ORDER = ["definicion", "dieta_inversa", "ganancia_muscular", "rendimiento"];

const DAY_LABELS = {
  lunes: "Lunes", martes: "Martes", miercoles: "Miércoles", jueves: "Jueves",
  viernes: "Viernes", sabado: "Sábado", domingo: "Domingo",
  sabado_domingo: "Sábado y domingo",
};

const MEAL_LABELS = {
  desayuno: "Desayuno", almuerzo: "Almuerzo", curro: "Trabajo",
  entre_horas: "Entre horas", comida: "Comida", merienda: "Merienda",
  mm: "Media mañana", cena: "Cena",
};

function fasecolor(tipo) {
  return getComputedStyle(document.documentElement).getPropertyValue(`--fase-${tipo}`).trim();
}

function parseFechaISO(str) {
  return new Date(str + "T00:00:00");
}

function formatFechaCorta(str) {
  return parseFechaISO(str).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" });
}

// Devuelve un número representativo del peso (para graficar), aunque el dato original sea un rango "86-87"
function pesoNumerico(peso_kg) {
  if (peso_kg == null) return null;
  if (typeof peso_kg === "number") return peso_kg;
  const nums = String(peso_kg).match(/[\d.]+/g);
  if (!nums) return null;
  const vals = nums.map(Number);
  return vals.reduce((a, b) => a + b, 0) / vals.length;
}

function pesoDisplay(peso_kg) {
  if (peso_kg == null) return "—";
  return `${peso_kg} kg`;
}

// Métrica de composición corporal: IMC (etapas 1-6) o SUM6P (etapa 7+)
function compMetric(etapa) {
  const c = etapa.composicion || {};
  if (c.sum6p_mm != null) {
    let v = `${c.sum6p_mm} mm`;
    if (c.sum6p_objetivo_mm != null) v += ` (obj. ${c.sum6p_objetivo_mm} mm)`;
    return { label: "SUM6P", value: v };
  }
  if (c.imc != null) {
    return { label: "IMC", value: String(c.imc) };
  }
  return null;
}

function getPlan(etapa) {
  return etapa.plan_semanal || etapa.plan_semanal_fase1 || null;
}

const DAY_KEYS = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo", "sabado_domingo"];

function isDayKey(key) {
  return DAY_KEYS.includes(key);
}

function mealLabel(key) {
  return MEAL_LABELS[key] || key.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());
}

/* ====================== Estado ====================== */

const etapas = [...NUTRI_DATA.etapas].sort((a, b) => a.fecha.localeCompare(b.fecha));
let activeFilter = "todas";

/* ====================== Gráfico principal ====================== */

function buildMainChart() {
  const svg = document.getElementById("chart-svg");
  const tooltip = document.getElementById("chart-tooltip");
  const wrap = document.getElementById("chart-wrap");
  const W = 720, H = 300;
  const padL = 46, padR = 16, padT = 18, padB = 30;

  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.innerHTML = "";

  const dates = etapas.map((e) => parseFechaISO(e.fecha));
  const weights = etapas.map((e) => pesoNumerico(e.composicion.peso_kg));
  const minDate = dates[0].getTime();
  const maxDate = dates[dates.length - 1].getTime();
  const minW = Math.floor((Math.min(...weights) - 3) / 5) * 5;
  const maxW = Math.ceil((Math.max(...weights) + 3) / 5) * 5;

  const xScale = (t) => padL + ((t - minDate) / (maxDate - minDate || 1)) * (W - padL - padR);
  const yScale = (w) => H - padB - ((w - minW) / (maxW - minW || 1)) * (H - padT - padB);

  const ns = "http://www.w3.org/2000/svg";
  const el = (tag, attrs) => {
    const n = document.createElementNS(ns, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  };

  // Gridlines + Y ticks
  const steps = 4;
  for (let i = 0; i <= steps; i++) {
    const w = minW + ((maxW - minW) * i) / steps;
    const y = yScale(w);
    svg.appendChild(el("line", { class: "gridline", x1: padL, x2: W - padR, y1: y, y2: y }));
    const label = el("text", { class: "tick-label", x: padL - 8, y: y + 4, "text-anchor": "end" });
    label.textContent = Math.round(w);
    svg.appendChild(label);
  }

  // Área + línea
  const linePts = etapas.map((e, i) => `${xScale(dates[i].getTime())},${yScale(weights[i])}`);
  const areaPts = [`${xScale(dates[0].getTime())},${H - padB}`, ...linePts, `${xScale(dates[dates.length - 1].getTime())},${H - padB}`];
  svg.appendChild(el("polygon", { class: "chart-area", points: areaPts.join(" ") }));
  svg.appendChild(el("polyline", { class: "chart-line", points: linePts.join(" ") }));

  // Etiquetas de fecha en eje X (solo etapas), evitando solapes entre fechas próximas
  const MIN_LABEL_GAP = 54;
  let lastLabelX = -Infinity;
  etapas.forEach((e, i) => {
    const x = xScale(dates[i].getTime());
    if (x - lastLabelX < MIN_LABEL_GAP) return;
    lastLabelX = x;
    const label = el("text", { class: "tick-label", x, y: H - 8, "text-anchor": "middle" });
    label.textContent = parseFechaISO(e.fecha).toLocaleDateString("es-ES", { month: "short", year: "2-digit" });
    svg.appendChild(label);
  });

  // Puntos
  etapas.forEach((e, i) => {
    const x = xScale(dates[i].getTime());
    const y = yScale(weights[i]);
    const dimmed = activeFilter !== "todas" && e.tipo_fase !== activeFilter;
    const pt = el("circle", {
      class: "chart-point",
      cx: x, cy: y, r: 6,
      fill: fasecolor(e.tipo_fase),
      "data-id": e.id,
      opacity: dimmed ? 0.25 : 1,
    });
    pt.addEventListener("mouseenter", (ev) => showChartTooltip(ev, e));
    pt.addEventListener("mousemove", (ev) => positionTooltip(ev));
    pt.addEventListener("mouseleave", hideChartTooltip);
    pt.addEventListener("click", () => openDetail(e.id));
    svg.appendChild(pt);
  });

  function showChartTooltip(ev, etapa) {
    const metric = compMetric(etapa);
    tooltip.innerHTML = `
      <div class="tt-title">${formatFechaCorta(etapa.fecha)}</div>
      <div class="tt-row">Peso: ${pesoDisplay(etapa.composicion.peso_kg)}</div>
      ${metric ? `<div class="tt-row">${metric.label}: ${metric.value}</div>` : ""}
      <div class="tt-row" style="margin-top:4px;max-width:220px;">${etapa.objetivo}</div>
    `;
    tooltip.classList.add("visible");
    positionTooltip(ev);
  }

  function positionTooltip(ev) {
    const rect = wrap.getBoundingClientRect();
    tooltip.style.left = ev.clientX - rect.left + 14 + "px";
    tooltip.style.top = ev.clientY - rect.top - 10 + "px";
  }

  function hideChartTooltip() {
    tooltip.classList.remove("visible");
  }
}

/* ====================== Filtro por tipo de fase ====================== */

function buildFilterBar() {
  const bar = document.getElementById("filter-bar");
  bar.innerHTML = "";
  const opts = [{ key: "todas", label: "Todas" }, ...FASE_ORDER.map((k) => ({ key: k, label: FASE_LABELS[k] }))];
  opts.forEach((opt) => {
    const chip = document.createElement("button");
    chip.className = "chip";
    chip.type = "button";
    chip.setAttribute("aria-pressed", String(activeFilter === opt.key));
    chip.innerHTML = opt.key === "todas" ? opt.label : `<span class="legend-dot" style="background:${fasecolor(opt.key)}"></span>${opt.label}`;
    chip.addEventListener("click", () => {
      activeFilter = opt.key;
      buildFilterBar();
      buildTimeline();
      buildMainChart();
    });
    bar.appendChild(chip);
  });
}

/* ====================== Timeline ====================== */

function buildTimeline() {
  const grid = document.getElementById("timeline-grid");
  grid.innerHTML = "";
  const filtered = etapas.filter((e) => activeFilter === "todas" || e.tipo_fase === activeFilter);

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="empty-msg">No hay etapas para este filtro.</p>`;
    return;
  }

  filtered.forEach((e) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "etapa-card";
    card.style.setProperty("--fase-color", fasecolor(e.tipo_fase));
    card.innerHTML = `
      <span class="card-fecha">${formatFechaCorta(e.fecha)} · ${e.edad} años</span>
      <span class="card-peso">${pesoDisplay(e.composicion.peso_kg)}</span>
      <span class="card-fase"><span class="legend-dot" style="background:${fasecolor(e.tipo_fase)}"></span>${FASE_LABELS[e.tipo_fase]}</span>
      <span class="card-objetivo">${e.objetivo}</span>
    `;
    card.addEventListener("click", () => openDetail(e.id));
    grid.appendChild(card);
  });
}

/* ====================== Vista de detalle ====================== */

function renderEntrenamientoTable(entrenamiento) {
  const days = Object.keys(entrenamiento);
  return `
    <table class="week-table">
      <tr>${days.map((d) => `<th>${DAY_LABELS[d] || d}</th>`).join("")}</tr>
      <tr>${days.map((d) => `<td>${entrenamiento[d]}</td>`).join("")}</tr>
    </table>
  `;
}

function renderPlanSemanal(plan) {
  let html = "";
  const notas = [];
  const dayEntries = [];

  for (const key of Object.keys(plan)) {
    if (isDayKey(key)) {
      dayEntries.push([key, plan[key]]);
    } else if (key === "desayuno_opciones" && Array.isArray(plan[key])) {
      notas.push(`<div class="detail-block"><h4>Opciones de desayuno</h4><ul>${plan[key].map((o) => `<li>${o}</li>`).join("")}</ul></div>`);
    } else if (typeof plan[key] === "string") {
      notas.push(`<p style="margin-bottom:10px;color:var(--text-secondary);font-size:13px;"><strong>${mealLabel(key)}:</strong> ${plan[key]}</p>`);
    }
  }

  html += notas.join("");
  html += dayEntries
    .map(([key, meals]) => {
      const rows = Object.keys(meals)
        .map((mk) => `<div class="meal-row"><span class="meal-label">${mealLabel(mk)}</span><span>${meals[mk]}</span></div>`)
        .join("");
      return `<details class="meal-day"><summary>${DAY_LABELS[key] || key}</summary><div class="meal-rows">${rows}</div></details>`;
    })
    .join("");

  return html;
}

function renderDetail(etapa) {
  const metric = compMetric(etapa);
  const plan = getPlan(etapa);

  let html = `
    <div class="detail-header">
      <div>
        <span class="card-fecha">${formatFechaCorta(etapa.fecha)} · ${etapa.edad} años</span>
        <h3>${pesoDisplay(etapa.composicion.peso_kg)}${etapa.composicion.peso_objetivo_kg ? ` <span style="color:var(--text-muted);font-size:14px;">→ objetivo ${pesoDisplay(etapa.composicion.peso_objetivo_kg)}</span>` : ""}</h3>
      </div>
      <button class="close-btn" id="detail-close" aria-label="Cerrar">&times;</button>
    </div>
    <span class="badge"><span class="legend-dot" style="background:${fasecolor(etapa.tipo_fase)}"></span>${FASE_LABELS[etapa.tipo_fase]}${metric ? ` · ${metric.label} ${metric.value}` : ""}</span>

    <div class="detail-block">
      <h4>Objetivo</h4>
      <p>${etapa.objetivo}</p>
    </div>
  `;

  if (etapa.nota_metodologica) {
    html += `<div class="detail-block"><p style="font-size:12.5px;">${etapa.nota_metodologica}</p></div>`;
  }

  const estrategia = etapa.estrategia_nutricional || etapa.esquema_nutricional;
  if (estrategia) {
    html += `<div class="detail-block"><h4>Estrategia nutricional</h4><p>${estrategia}</p></div>`;
  }

  if (etapa.puntos_clave) {
    html += `<div class="detail-block"><h4>Puntos clave</h4><ul class="tip-list">${etapa.puntos_clave.map((p) => `<li>${p}</li>`).join("")}</ul></div>`;
  }

  if (etapa.diferencias_vs_etapa_anterior) {
    html += `<div class="detail-block"><h4>Diferencias respecto a la etapa anterior</h4><ul class="tip-list">${etapa.diferencias_vs_etapa_anterior.map((p) => `<li>${p}</li>`).join("")}</ul></div>`;
  }

  if (etapa.entrenamiento_semanal) {
    html += `<div class="detail-block"><h4>Entrenamiento semanal</h4>${renderEntrenamientoTable(etapa.entrenamiento_semanal)}</div>`;
    const notasEnt = etapa.notas_entrenamiento;
    if (notasEnt) {
      const lines = Array.isArray(notasEnt) ? notasEnt : [notasEnt];
      html += `<ul class="tip-list" style="margin-top:8px;">${lines.map((l) => `<li>${l}</li>`).join("")}</ul>`;
    }
  }

  if (plan) {
    html += `<div class="detail-block"><h4>Plan de comidas</h4>${renderPlanSemanal(plan)}</div>`;
  }

  if (etapa.productos_recomendados) {
    html += `<div class="detail-block"><h4>Productos recomendados</h4><ul class="product-list">${etapa.productos_recomendados.map((p) => `<li>${p}</li>`).join("")}</ul></div>`;
  }

  if (etapa.consejos_personalizados) {
    html += `<div class="detail-block"><h4>Consejos personalizados</h4><ul class="tip-list">${etapa.consejos_personalizados.map((p) => `<li>${p}</li>`).join("")}</ul></div>`;
  }

  if (etapa.nota) {
    html += `<div class="detail-block"><h4>Nota</h4><p>${etapa.nota}</p></div>`;
  }

  if (etapa.nota_ambiguedad) {
    html += `<details class="ambiguedad-note"><summary style="cursor:pointer;">Nota interna sobre esta etapa</summary><p style="margin-top:6px;">${etapa.nota_ambiguedad}</p></details>`;
  }

  return html;
}

function openDetail(id) {
  const etapa = etapas.find((e) => e.id === id);
  if (!etapa) return;
  const dialog = document.getElementById("detail-dialog");
  document.getElementById("detail-content").innerHTML = renderDetail(etapa);
  document.getElementById("detail-close").addEventListener("click", () => dialog.close());
  if (typeof dialog.showModal === "function") dialog.showModal();
}

/* ====================== Comparador ====================== */

function buildComparador() {
  const selA = document.getElementById("compare-a");
  const selB = document.getElementById("compare-b");
  const optionsHtml = etapas.map((e) => `<option value="${e.id}">${formatFechaCorta(e.fecha)} · ${FASE_LABELS[e.tipo_fase]}</option>`).join("");
  selA.innerHTML = optionsHtml;
  selB.innerHTML = optionsHtml;
  selA.value = etapas[0].id;
  selB.value = etapas[etapas.length - 1].id;
  selA.addEventListener("change", renderComparador);
  selB.addEventListener("change", renderComparador);
  renderComparador();
}

function comparadorColumn(etapa) {
  const metric = compMetric(etapa);
  const plan = getPlan(etapa);
  const comidaLunes = plan && plan.lunes && plan.lunes.comida ? plan.lunes.comida : "No disponible";
  const entrenamiento = etapa.entrenamiento_semanal
    ? Object.keys(etapa.entrenamiento_semanal).map((d) => `<div style="margin-bottom:2px;"><strong>${(DAY_LABELS[d] || d).slice(0, 3)}:</strong> ${etapa.entrenamiento_semanal[d]}</div>`).join("")
    : "No registrado en esta etapa";

  return `
    <div class="compare-col">
      <span class="badge"><span class="legend-dot" style="background:${fasecolor(etapa.tipo_fase)}"></span>${FASE_LABELS[etapa.tipo_fase]}</span>
      <h3>${pesoDisplay(etapa.composicion.peso_kg)}</h3>
      <span class="card-fecha">${formatFechaCorta(etapa.fecha)} · ${etapa.edad} años</span>

      <div class="compare-row">
        <div class="label">${metric ? metric.label : "Composición"}</div>
        <div class="value">${metric ? metric.value : "—"}</div>
      </div>
      <div class="compare-row">
        <div class="label">Objetivo</div>
        <div class="value">${etapa.objetivo}</div>
      </div>
      <div class="compare-row">
        <div class="label">Entrenamiento semanal</div>
        <div class="value">${entrenamiento}</div>
      </div>
      <div class="compare-row">
        <div class="label">Comida de ejemplo (lunes)</div>
        <div class="value">${comidaLunes}</div>
      </div>
    </div>
  `;
}

function renderComparador() {
  const idA = Number(document.getElementById("compare-a").value);
  const idB = Number(document.getElementById("compare-b").value);
  const a = etapas.find((e) => e.id === idA);
  const b = etapas.find((e) => e.id === idB);
  const grid = document.getElementById("compare-grid");
  grid.innerHTML = comparadorColumn(a) + comparadorColumn(b);
}

/* ====================== Registro de peso propio ====================== */

const LOG_KEY = "nutri_peso_registro";

function loadLog() {
  try {
    return JSON.parse(localStorage.getItem(LOG_KEY)) || [];
  } catch {
    return [];
  }
}

function saveLog(entries) {
  localStorage.setItem(LOG_KEY, JSON.stringify(entries));
}

function buildWeightLog() {
  const form = document.getElementById("weight-form");
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const fecha = document.getElementById("log-fecha").value;
    const peso = parseFloat(document.getElementById("log-peso").value);
    if (!fecha || isNaN(peso)) return;
    const entries = loadLog();
    entries.push({ fecha, peso });
    saveLog(entries);
    form.reset();
    renderWeightLog();
  });

  document.getElementById("log-fecha").valueAsDate = new Date();
  renderWeightLog();
}

function renderWeightLog() {
  const entries = loadLog().sort((a, b) => a.fecha.localeCompare(b.fecha));
  const tbody = document.getElementById("log-tbody");
  const statRow = document.getElementById("log-stats");
  const chartWrap = document.getElementById("log-chart-wrap");

  if (entries.length === 0) {
    tbody.innerHTML = "";
    document.getElementById("log-empty").style.display = "block";
    document.getElementById("log-table-wrap").style.display = "none";
    statRow.innerHTML = "";
    chartWrap.innerHTML = "";
    return;
  }

  document.getElementById("log-empty").style.display = "none";
  document.getElementById("log-table-wrap").style.display = "block";

  tbody.innerHTML = [...entries]
    .reverse()
    .map(
      (e, revIdx) => `
      <tr>
        <td>${formatFechaCorta(e.fecha)}</td>
        <td class="num">${e.peso.toFixed(1)} kg</td>
        <td><button class="del-btn" data-fecha="${e.fecha}" data-peso="${e.peso}">Eliminar</button></td>
      </tr>`
    )
    .join("");

  tbody.querySelectorAll(".del-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const fecha = btn.dataset.fecha;
      const peso = Number(btn.dataset.peso);
      const remaining = loadLog().filter((e) => !(e.fecha === fecha && e.peso === peso));
      saveLog(remaining);
      renderWeightLog();
    });
  });

  const first = entries[0].peso;
  const last = entries[entries.length - 1].peso;
  const delta = last - first;
  statRow.innerHTML = `
    <div class="stat-tile"><div class="stat-value">${last.toFixed(1)} kg</div><div class="stat-label">Último registro</div></div>
    <div class="stat-tile"><div class="stat-value" style="color:${delta <= 0 ? "var(--fase-ganancia_muscular)" : "var(--fase-dieta_inversa)"}">${delta > 0 ? "+" : ""}${delta.toFixed(1)} kg</div><div class="stat-label">Desde el primer registro</div></div>
    <div class="stat-tile"><div class="stat-value">${entries.length}</div><div class="stat-label">Registros</div></div>
  `;

  buildLogChart(entries);
}

function buildLogChart(entries) {
  const chartWrap = document.getElementById("log-chart-wrap");
  if (entries.length < 2) {
    chartWrap.innerHTML = `<p class="empty-msg">Añade al menos dos registros para ver la evolución.</p>`;
    return;
  }
  chartWrap.innerHTML = `<svg id="log-chart-svg" style="width:100%;height:auto;display:block;"></svg>`;
  const svg = document.getElementById("log-chart-svg");
  const W = 720, H = 180;
  const padL = 46, padR = 16, padT = 14, padB = 26;
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);

  const dates = entries.map((e) => parseFechaISO(e.fecha).getTime());
  const weights = entries.map((e) => e.peso);
  const minDate = dates[0], maxDate = dates[dates.length - 1];
  const minW = Math.floor((Math.min(...weights) - 1) * 2) / 2;
  const maxW = Math.ceil((Math.max(...weights) + 1) * 2) / 2;

  const xScale = (t) => padL + ((t - minDate) / (maxDate - minDate || 1)) * (W - padL - padR);
  const yScale = (w) => H - padB - ((w - minW) / (maxW - minW || 1)) * (H - padT - padB);

  const ns = "http://www.w3.org/2000/svg";
  const el = (tag, attrs) => {
    const n = document.createElementNS(ns, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  };

  for (let i = 0; i <= 3; i++) {
    const w = minW + ((maxW - minW) * i) / 3;
    const y = yScale(w);
    svg.appendChild(el("line", { class: "gridline", x1: padL, x2: W - padR, y1: y, y2: y }));
    const label = el("text", { class: "tick-label", x: padL - 8, y: y + 4, "text-anchor": "end" });
    label.textContent = w.toFixed(1);
    svg.appendChild(label);
  }

  const linePts = entries.map((e) => `${xScale(parseFechaISO(e.fecha).getTime())},${yScale(e.peso)}`);
  svg.appendChild(el("polyline", { class: "chart-line", points: linePts.join(" ") }));

  entries.forEach((e) => {
    const x = xScale(parseFechaISO(e.fecha).getTime());
    const y = yScale(e.peso);
    svg.appendChild(el("circle", { class: "chart-point", cx: x, cy: y, r: 5, fill: "var(--series-line)" }));
  });

  [entries[0], entries[entries.length - 1]].forEach((e, idx) => {
    const x = xScale(parseFechaISO(e.fecha).getTime());
    const y = yScale(e.peso);
    const label = el("text", {
      class: "tick-label", x, y: idx === 0 ? y - 12 : y - 12,
      "text-anchor": idx === 0 ? "start" : "end", fill: "var(--text-secondary)",
    });
    label.textContent = `${e.peso.toFixed(1)} kg`;
    svg.appendChild(label);
  });
}

/* ====================== Tema (claro/oscuro) ====================== */

function initTheme() {
  const btn = document.getElementById("theme-toggle");
  const stored = localStorage.getItem("nutri_theme");
  if (stored) document.documentElement.setAttribute("data-theme", stored);

  const updateLabel = () => {
    const current = document.documentElement.getAttribute("data-theme");
    btn.textContent = current === "dark" ? "☀︎ Claro" : current === "light" ? "☾ Oscuro" : "◐ Auto";
  };
  updateLabel();

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : current === "light" ? null : "dark";
    if (next) {
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("nutri_theme", next);
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.removeItem("nutri_theme");
    }
    updateLabel();
    buildMainChart();
    buildFilterBar();
    buildTimeline();
    renderComparador();
    renderWeightLog();
  });
}

/* ====================== Init ====================== */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  buildMainChart();
  buildFilterBar();
  buildTimeline();
  buildComparador();
  buildWeightLog();
  window.addEventListener("resize", () => {}); // el viewBox ya es responsive, no se requiere recalcular
});
