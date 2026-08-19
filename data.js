// Datos extraídos tal cual de historial-dieta-marco.json (7 etapas, 2019-2022)
const NUTRI_DATA = {
  "meta": {
    "paciente": "Marco González Hierro",
    "altura_m": 1.82,
    "fecha_nacimiento": "1991-09-07",
    "deporte": "CrossFit",
    "fuente": "7 planes dietéticos históricos (2019-2022), duplicados eliminados"
  },
  "etapas": [
    {
      "id": 1,
      "fecha": "2019-09-09",
      "edad": 28,
      "tipo_fase": "definicion",
      "composicion": { "peso_kg": 94.3, "imc": 28.5, "peso_objetivo_kg": "83-85" },
      "objetivo": "Bajar el porcentaje graso y mejorar la composición corporal mediante un buen entrenamiento y una dieta que aporte la proteína necesaria.",
      "estrategia_nutricional": "Dieta hipocalórica, alta en proteína y fibra para dar saciedad, combinada con entrenamiento de fuerza.",
      "puntos_clave": [
        "Pesarse mínimo 1x/semana (miércoles), nunca tras un día de abuso/libre; apuntar en bloc de notas y traer a consulta",
        "Mínimo pan posible, siempre integral y ración controlada",
        "Mínimo aceite: referencia de 5 cucharaditas de postre/día",
        "Cereales, pan y pasta integrales",
        "Cocciones suaves: vapor, plancha, horno",
        "Evitar alcohol en días de dieta (máx. 1 cerveza 33cl o copa de vino; más permitido en días libres)",
        "Máximo 1 comida fuera de casa por semana"
      ],
      "entrenamiento_semanal": {
        "lunes": "Squash", "martes": "CrossFit + Paseo", "miercoles": "Squash",
        "jueves": "CrossFit + Paseo", "viernes": "Squash", "sabado": "CrossFit + Paseo",
        "domingo": "Paseo + Descanso"
      },
      "notas_entrenamiento": "Podómetro instalado en el móvil, objetivo 12.000-14.000 pasos/día para movilizar grasa y subir gasto energético.",
      "plan_semanal": {
        "lunes": {
          "desayuno": "Café con leche sin lactosa + tostada de pan de centeno con tomate triturado y 40g de pavo + fruta",
          "almuerzo": "1-2 frutas (melón, piña, sandía o manzana)",
          "comida": "Tupper de garbanzos con tomate triturado y lata de atún al natural + fruta",
          "merienda": "Antes de entrenar: café pre-entreno + plátano",
          "cena": "Pescado blanco al horno + brócoli y patata hervido/vapor/lekue + 1/3 tarrina QFB"
        },
        "martes": {
          "desayuno": "Café con leche sin lactosa + tortilla de 2 huevos con 40g de pavo + fruta",
          "almuerzo": "1-2 frutas",
          "comida": "Tupper grande: base de ensalada + vasito de arroz integral + 180g de carne a la plancha troceada",
          "merienda": "Antes de entrenar: café pre-entreno + plátano",
          "cena": "Tortilla de 2 huevos con champis y cebolla + 2 rebanadas orowheat + 1/3 tarrina QFB"
        },
        "miercoles": {
          "desayuno": "50g de avena reposada toda la noche en leche sin lactosa y canela; café por la mañana + fruta",
          "almuerzo": "1-2 frutas",
          "comida": "Tupper de alubias con verduras salteadas + fruta",
          "merienda": "Antes de entrenar: café pre-entreno + plátano",
          "cena": "150g de salmón a la plancha + patata mediana al micro + verduras salteadas + 1/3 tarrina QFB"
        },
        "jueves": {
          "desayuno": "Elegir cualquiera de las 3 opciones de desayuno (L, M o X)",
          "almuerzo": "1-2 frutas",
          "comida": "200g de carne blanca a la plancha + vasito de arroz + guisantes salteados",
          "merienda": "Antes de entrenar: café pre-entreno + plátano",
          "cena": "Tortilla de 2 huevos con champis y cebolla + 2 rebanadas orowheat + 1/3 tarrina QFB"
        },
        "viernes": {
          "desayuno": "Elegir cualquiera de las 3 opciones de desayuno",
          "almuerzo": "1-2 frutas",
          "comida": "Tupper de garbanzos con tomate triturado y lata de atún al natural + fruta",
          "merienda": "Antes de entrenar: café pre-entreno + plátano",
          "cena": "150g de carne roja a la plancha + pimientos salteados/horno + 1/3 tarrina QFB + fruta troceada"
        },
        "sabado_domingo": {
          "desayuno": "Elegir cualquiera de las opciones de desayuno",
          "almuerzo": "Fruta (opcional)",
          "comida": "200g de pollo asado + 150g de arroz integral cocido + yogur",
          "merienda": "Días sin entreno: sándwich de pavo + lomo embuchado + fruta",
          "cena": "2 fajitas con relleno de pimientos, cebolla, calabacín y carne de pavo/pollo + fruta"
        }
      },
      "productos_recomendados": [
        "Queso Burgos desnatado 0%", "Pan de centeno y avena (Veritas)", "Arroz SOS integral tradicional",
        "Quinoa integral (Brillante)", "Copos de avena gruesos (Biográ)", "Pan de centeno (Hacendado)",
        "Dátiles sin hueso (Hacendado)"
      ],
      "consejos_personalizados": [
        "Spray de aliño casero: agua + zumo de limón + un poco de salsa de soja + un dedo de aceite",
        "Usar pan de centeno por ser más saciante",
        "Base de ensaladas: lechuga, tomate, cebolla, brotes de soja, zanahoria y maíz; extras (aguacate, atún, huevo, legumbres, pasta, queso, jamón) se marcan aparte"
      ]
    },

    {
      "id": 2,
      "fecha": "2020-04-29",
      "edad": 28,
      "tipo_fase": "dieta_inversa",
      "composicion": { "peso_kg": 79, "imc": 23.8, "peso_objetivo_kg": null },
      "objetivo": "Mejorar la composición corporal mediante la ganancia de masa muscular y la fuerza.",
      "estrategia_nutricional": "Mantener el peso conseguido y aumentar masa muscular mediante entrenamiento de fuerza (progresión y sobrecarga progresiva) como protagonista. Menos importancia a la nutrición: dieta normocalórica con proteína suficiente. Descanso: media de 7-9h diarias de calidad.",
      "plan_semanal": {
        "desayuno_opciones": [
          "2-3 tortitas de avena (copos/avena en polvo + claras + leche) con plátano y miel de topping",
          "Tazón de leche desnatada + 60-70g de avena + cazo de proteína en polvo, 2-3 min al micro",
          "Tortilla de 2 huevos + 50g de pavo + 2 rebanadas de pan tostado"
        ],
        "lunes": {
          "comida": "Garbanzos con tomate triturado y lata de atún al natural + fruta",
          "entre_horas": "Tazón: 1/2 QFB + fruta + 5-7 frutos secos",
          "cena": "2 hamburguesas de pavo + pimientos + vasito de quinoa/cuscús + 100g de queso fresco desnatado + mermelada 0"
        },
        "martes": {
          "comida": "Pasta integral + fritada de pisto + 2 huevos cocidos/plancha + yogur",
          "entre_horas": "Post-entreno: batido de leche desnatada + plátano + cazo de proteína",
          "cena": "200g de pescado blanco + boniato y verduras al horno + fruta + 8 frutos secos"
        },
        "miercoles": {
          "comida": "Guisantes, patata, cebolla y 100g de taquitos de jamón + fruta",
          "entre_horas": "Sándwich de pavo y queso light + fruta",
          "cena": "180g de carne roja a la plancha + pimientos salteados + boniato al lekue + 100g queso fresco desnatado + mermelada 0"
        },
        "jueves": {
          "comida": "Arroz integral + boloñesa vegana (tomate/fritada de pisto + soja texturizada) + fruta",
          "entre_horas": "2 tostadas con tomate triturado + jamón serrano + fruta",
          "cena": "180g de pescado azul al papillote con verduras + vasito de cuscús + yogur con miel"
        },
        "viernes": {
          "comida": "Bol: patata cocida + tomate abundante + 100g de queso fresco desnatado + lata de atún al natural, aliñar",
          "cena": "Fajitas caseras: tortillas + pimientos, cebolla, carne blanca + guacamole + plátano + 2 onzas de chocolate"
        },
        "sabado_domingo": {
          "comida": "200g de pollo asado + 150g de arroz integral cocido + yogur",
          "cena": "2 huevos a la plancha + vasito de arroz integral + fritada de pisto + 100g queso fresco desnatado + mermelada 0"
        }
      },
      "productos_recomendados": [
        "Queso Burgos desnatado 0%", "Cous cous (Brillante)", "Quinoa integral (Brillante)",
        "Sofrito de hortalizas/fritada (Eroski)", "Soja texturizada fina (Hacendado)", "Whey Isolate 100% (Prozis)"
      ],
      "consejos_personalizados": [
        "Spray de aliño casero: agua + zumo de limón + salsa de soja + un dedo de aceite",
        "Pan de centeno por ser más saciante",
        "Base de ensaladas: lechuga, tomate, cebolla, brotes de soja, zanahoria y maíz; extras se marcan aparte"
      ]
    },

    {
      "id": 3,
      "fecha": "2020-06-02",
      "edad": 28,
      "tipo_fase": "dieta_inversa",
      "composicion": { "peso_kg": 77.9, "imc": 23.5, "peso_objetivo_kg": null },
      "objetivo": "Mejorar la composición corporal mediante la ganancia de masa muscular y la fuerza.",
      "estrategia_nutricional": "Igual que la etapa del 29/04/2020: mantener peso, fuerza como protagonista, dieta normocalórica con proteína suficiente, descanso 7-9h.",
      "diferencias_vs_etapa_anterior": [
        "Comida del jueves ampliada a arroz/quinoa/cuscús/pasta + boloñesa vegana",
        "Comida del viernes con queso feta + huevo cocido en vez de atún + queso fresco",
        "Entre horas del martes pasa a ser PRE-ENTRENO en vez de POST-ENTRENO",
        "Porciones de carne roja (miércoles) y pescado azul (jueves) suben a 200g (antes 180g)"
      ],
      "plan_semanal": {
        "desayuno_opciones": [
          "2-3 tortitas de avena con plátano y miel",
          "Tazón de leche desnatada + 60-70g de avena + cazo de proteína",
          "Tortilla de 2 huevos + 50g de pavo + 2 rebanadas de pan tostado"
        ],
        "lunes": {
          "comida": "Garbanzos con tomate triturado y atún al natural + fruta",
          "entre_horas": "Tazón: 1/2 QFB + fruta + 5-7 frutos secos",
          "cena": "2 hamburguesas de pavo + pimientos + vasito de quinoa/cuscús + 100g queso fresco + mermelada 0"
        },
        "martes": {
          "comida": "Pasta integral + fritada de pisto + 2 huevos + yogur",
          "entre_horas": "Pre-entreno: batido leche desnatada + plátano + cazo proteína",
          "cena": "200g de pescado blanco + boniato y verduras al horno + fruta + 8 frutos secos"
        },
        "miercoles": {
          "comida": "Guisantes, patata, cebolla y 100g de taquitos de jamón + fruta",
          "entre_horas": "Sándwich de pavo y queso light + fruta",
          "cena": "200g de carne roja a la plancha + pimientos salteados + boniato al lekue + 100g queso fresco + mermelada 0"
        },
        "jueves": {
          "comida": "Arroz/quinoa/cuscús/pasta + boloñesa vegana (fritada + soja texturizada) + fruta",
          "entre_horas": "2 tostadas con tomate triturado + jamón serrano + fruta",
          "cena": "200g de pescado azul al papillote con verduras + vasito de cuscús + yogur con miel"
        },
        "viernes": {
          "comida": "Bol: patata cocida + tomate abundante + 100g de queso feta + huevo cocido, aliñar + yogur",
          "cena": "Fajitas caseras con carne blanca y guacamole + plátano + 2 onzas de chocolate"
        },
        "sabado_domingo": {
          "comida": "200g de pollo asado + 150g de arroz integral + yogur",
          "cena": "2 huevos a la plancha + vasito de arroz integral + fritada de pisto + 100g queso fresco + mermelada 0"
        }
      },
      "productos_recomendados": [
        "Queso Burgos desnatado 0%", "Cous cous (Brillante)", "Quinoa integral (Brillante)",
        "Sofrito de hortalizas/fritada (Eroski)", "Soja texturizada fina (Hacendado)", "Whey Isolate 100% (Prozis)"
      ],
      "consejos_personalizados": [
        "Spray de aliño: agua + limón + soja + aceite",
        "Pan de centeno saciante",
        "Base de ensaladas estándar + extras marcados aparte"
      ]
    },

    {
      "id": 4,
      "fecha": "2020-11-04",
      "edad": 29,
      "tipo_fase": "ganancia_muscular",
      "composicion": { "peso_kg": 84, "imc": 23.5, "peso_objetivo_kg": null },
      "objetivo": "Mejorar la composición corporal mediante la ganancia de masa muscular y la fuerza.",
      "entrenamiento_semanal": {
        "lunes": "Mobility Pre + WOD + Core", "martes": "Mobility Pre + WOD", "miercoles": "Descanso",
        "jueves": "Mobility Pre + WOD + Core", "viernes": "Mobility Pre + WOD",
        "sabado": "Mobility Pre + WOD / Monte", "domingo": "Monte"
      },
      "plan_semanal": {
        "desayuno_opciones": [
          "2-3 rebanadas de pan tostado + queso cottage + jamón de pavo + tomates cherry + fruta",
          "Tazón de leche desnatada + cazo de proteína (diluir) + 60-80g de copos de avena, 2-3 min al micro",
          "Tortilla de 2 huevos + 50g de pavo + 2 rebanadas de pan tostado (fin de semana)"
        ],
        "curro_diario": "Fruta (mandarinas/manzanas/piña) + máx. 40g de edamame + café con leche (martes y jueves: sándwich de lomo embuchado/atún en vez de edamame)",
        "lunes": { "comida": "Plato grande: legumbre con verduras (potaje) + añadir arroz + fruta", "merienda": "Pre-entreno: plátano + café. Post: batido", "cena": "150-200g de arroz + boloñesa vegana (fritada + 50g soja texturizada) + huevo a la plancha + yogur proteico" },
        "martes": { "comida": "200g de pasta integral cocida + fritada de pisto + 150g de pechuga a la plancha + yogur", "merienda": "Día sin entreno I: tazón de kéfir + arándanos/fresas", "cena": "Tortilla de 2 huevos + lata de atún/60g de pavo + 100-150g de pasta cocida + yogur proteico" },
        "miercoles": { "comida": "Plato grande: legumbre con verduras (potaje) + añadir arroz + fruta", "merienda": "Día sin entreno II: tazón 1/2 tarrina QFB + fruta troceada + 20g de frutos secos", "cena": "120-150g de hamburguesa de seitan/tofu + vasito de quinoa (125g) + fritada de pisto + yogur proteico" },
        "jueves": { "comida": "200g de arroz basmati + boloñesa vegana (fritada + 50g soja texturizada) + yogur", "cena": "150-180g de salmón a la plancha + 100-150g de pasta cocida + salsa de soja + yogur proteico" },
        "viernes": { "comida": "200g de noodles de arroz + 100g de gambas salteadas con cebolla y pimiento + salsa de soja + yogur", "cena": "Tortilla de 2 huevos + 50g de taquitos de jamón serrano + vasito de arroz (125g) + yogur proteico" },
        "sabado_domingo": { "comida": "Tazón de puré de verduras + pescado al horno con patatas y cebolla", "cena": "2 huevos a la plancha + vasito de arroz integral + fritada de pisto + yogur proteico" }
      },
      "nota": "El acompañamiento habitual de la cena en esta etapa es 'yogur proteico' (no 'RECENA' - eso corresponde a la etapa de 03/05/2021)."
    },

    {
      "id": 5,
      "fecha": "2021-05-03",
      "edad": 29,
      "tipo_fase": "ganancia_muscular",
      "composicion": { "peso_kg": "86-87", "imc": 23.5, "peso_objetivo_kg": 80 },
      "objetivo": "Mejorar la composición corporal mediante la ganancia de masa muscular y la fuerza.",
      "puntos_clave": [
        "Control de peso opcional: 1x/semana (miércoles) o 3x/semana (martes, jueves, sábado) haciendo media semanal",
        "Nunca pesarse tras un día de abuso (agua/glucógeno falsean el dato)",
        "Obligatorio apuntar el peso en app (weightfit Android / weightbot iOS) o papel, enviar resumen los miércoles por WhatsApp y traerlo a consulta",
        "Pan de calidad y saciante (centeno); ración controlada: 1 rebanada de molde o 3 dedos de barra máximo, en comida y cena",
        "Aceite de oliva virgen extra, bajar fritos/empanados/rebozados, uso de spray recomendado",
        "Alcohol solo el fin de semana, de forma controlada",
        "Mínimo de picoteo en casa; máximo 1 comida fuera de casa por semana"
      ],
      "esquema_nutricional": "Basado en el Plato de Harvard (Hidratos / Verduras / Proteínas) para conseguir un ligero déficit calórico, aportando todos los macronutrientes en las comidas principales.",
      "entrenamiento_semanal": {
        "lunes": "Mobility Pre + WOD + Core", "martes": "Mobility Pre + Fuerza", "miercoles": "Mobility Pre + WOD",
        "jueves": "Descanso", "viernes": "Mobility Pre + Fuerza", "sabado": "Mobility Pre + WOD + Core", "domingo": "Monte"
      },
      "plan_semanal": {
        "lunes": {
          "desayuno": "Tazón: 60g copos de avena reposados en leche + canela; calentar por la mañana + leche + 1/2 plátano",
          "curro": "Tupper: 1/2 tarrina QFB + pera y manzana troceada",
          "comida": "Tupper: vainas/puerros con patatas o brócoli con zanahoria o menestra de verduras + tupper: lomos de cerdo/solomillo a la plancha + pimientos y champis",
          "merienda": "Pre: plátano + café + creatina, hidratarse. Post: cenar pronto",
          "cena": "Tortilla de 2 huevos + atún/jamón york 40-50g / 2 lonchas queso proteico + 2 rebanadas pan de centeno + RECENA (tazón de leche desnatada + prote + 40g cornflakes)"
        },
        "martes": {
          "desayuno": "Tazón: 1/2 tarrina queso fresco batido + fresas y 1/2 plátano troceado + 20g nueces/15g crema de cacahuete",
          "curro": "Sándwich de centeno con jamón de pavo y lomo embuchado",
          "comida": "Tupper: tomate cortado con cebolleta y atún + tupper: legumbre con verduras (potaje, sin arroz, solo berza si se quiere)",
          "merienda": "Pre: plátano + café + creatina, hidratarse. Post: cenar pronto",
          "cena": "Lomo de salmón (máx. 180g) a la plancha, con 2 rebanadas de pan de centeno y tomate triturado + RECENA"
        },
        "miercoles": {
          "desayuno": "Tazón: 60g copos de avena reposados en leche + canela + leche + 1/2 plátano",
          "curro": "Tupper: 1/2 tarrina QFB + pera y manzana troceada",
          "comida": "Tupper grande: lechuga, tomate, cebolla, patata cocida 200g, atún al natural, huevo cocido y maíz + yopro",
          "merienda": "Pre: plátano + café + creatina, hidratarse. Post: cenar pronto",
          "cena": "200g de pechuga de pollo a la plancha + bol de lechuga y cebolleta aliñada + champis y calabacín salteado abundante + RECENA"
        },
        "jueves": {
          "desayuno": "Tazón: 1/2 tarrina queso fresco batido + fresas y plátano + nueces/crema de cacahuete",
          "curro": "Sándwich de centeno con jamón de pavo y lomo embuchado",
          "comida": "Tupper: tomate cortado con cebolleta y atún + tupper: legumbre con verduras (potaje)",
          "merienda": "Día sin entreno: batido de proteína + creatina + 3-4 tortitas de arroz con crema de cacahuete",
          "cena": "200g de merluza rebozada solo con huevo a la plancha + vasito de arroz integral/basmati + tazón 1/2 QFB + pera y manzana"
        },
        "viernes": {
          "desayuno": "Tazón: 60g copos de avena reposados en leche + canela + leche + 1/2 plátano",
          "curro": "Tupper: 1/2 tarrina QFB + pera y manzana troceada",
          "comida": "Tupper grande: pasta integral cocida 200g + brócoli, cebolla y calabacín salteado + 150g pechuga a la plancha + salsa de soja + yopro",
          "merienda": "Pre: plátano + café + creatina, hidratarse. Post: cenar pronto",
          "cena": "Revuelto de 2 huevos con pimientos y ajos/champis y cebolla + 2 rebanadas de pan de centeno tostado + RECENA"
        },
        "sabado": {
          "desayuno": "Igual que L/X/V + café pre-entreno",
          "curro": "Post: batido de proteína + creatina + fruta",
          "comida": "Tomate cortado + cebolleta picada + ventresca de calidad escurrida + pescado al horno + patata 300g",
          "merienda": "Tazón 1/2 QFB + pera y manzana + 2 tortitas de arroz con crema de cacahuete",
          "cena": "Sandwich casero: 2 pisos (3 rebanadas) lechuga, tomate, jamón york, 30g jamón serrano a la plancha/2 lonchas queso proteico + huevos a la plancha + yopro"
        },
        "domingo": {
          "desayuno": "Tazón 1/2 tarrina queso fresco batido + fresas y plátano + nueces/crema de cacahuete",
          "curro": "Fruta (mandarinas/manzanas/piña) + café con leche sin azúcar",
          "comida": "Pollo al horno con boniato: 1-2 muslos de pollo con cama de calabacín y boniato abundante + yopro",
          "merienda": "Tazón 1/2 QFB + pera y manzana + 2 tortitas de arroz con crema de cacahuete",
          "cena": "Revuelto de 2 huevos con pimientos y ajos/champis y cebolla + fruta"
        }
      },
      "nota": "RECENA = tazón de leche desnatada + proteína en polvo + 40g de cereales tipo cornflakes, antes de dormir. Solo el jueves se sustituye por un tazón de QFB + fruta.",
      "productos_recomendados": [
        "Arla Protein Delite 5% (34g proteína)", "Pan Sannia centeno y avena (Eroski)",
        "YoPro 15g proteína (vainilla/plátano)", "Oatibix avena suave (Weetabix)", "Corn Flakes (Carrefour)"
      ]
    },

    {
      "id": 6,
      "fecha": "2021-11-17",
      "edad": 30,
      "tipo_fase": "rendimiento",
      "composicion": { "peso_kg": 84, "imc": 23.5, "peso_objetivo_kg": null },
      "objetivo": "Mejorar la composición corporal para conseguir rendimiento.",
      "puntos_clave": [
        "Control de peso opcional (1x/semana miércoles, o 3x/semana martes-jueves-sábado con media semanal)",
        "Pan de calidad y saciante: centeno o espelta con semillas",
        "Aceite de oliva virgen extra, conciencia de uso en aliños/refritos, spray recomendado",
        "Alcohol solo fin de semana, controlado",
        "Mínimo picoteo en casa; máximo 1 comida fuera de casa/semana"
      ],
      "esquema_nutricional": "Plato para deportista de rendimiento: mitad verduras/hortalizas (crudas o cocinadas), un cuarto de pan/pasta/arroz/cereales/legumbres/patata, un cuarto de pescado/carne/aves/huevos. Primer escalón de la educación nutricional de un deportista de rendimiento.",
      "entrenamiento_semanal": {
        "lunes": "Mobility Pre + WOD + Core", "martes": "Mobility Pre + WOD", "miercoles": "Descanso",
        "jueves": "Mobility Pre + WOD + Core", "viernes": "Mobility Pre + WOD",
        "sabado": "Mobility Pre + WOD / Monte", "domingo": "Monte"
      },
      "nota_ambiguedad": "En el PDF, la fila de 'Merienda' de lunes a viernes tiene celdas combinadas y solo aparecen dos textos distintos (uno para día de entreno y 'DIA SIN ENTRENO' para otro), seguidos de 'elegir según situación' para el resto de columnas. Se asigna 'día sin entreno' al martes siguiendo el orden de lectura de la tabla, pero el día de descanso real según el cuadro de entrenamiento es el miércoles - conviene revisar el PDF original si esto es importante para el seguimiento.",
      "plan_semanal": {
        "desayuno_diario": "AYUNO: hidratarse con infusión/café solo o aguado/americano. Sobre las 10-11h, tomar la media mañana.",
        "lunes": { "curro": "Tupper: dejar reposando 50g copos de avena en leche semi la noche antes; añadir cazo de proteína por la mañana y calentar", "comida": "Tupper grande: legumbre de bote bien limpiada + fritada de pisto/verduras pochadas/menestra salteada + fruta", "merienda": "Pre: plátano + 2-3 dátiles + café con creatina (8g). Post: batido de proteína con bebida vegetal/leche + 2-3 tortitas de arroz con mermelada 0%", "cena": "200g de pechuga de pollo/merluza rebozada solo con huevo + piperrada + vasito de arroz integral/basmati + yogur proteico/yopro" },
        "martes": { "curro": "Tupper: 1/2 tarrina QFB/ALPRO + manzana troceada + canela + infusión/café", "comida": "Tupper grande: patata cocida + tomate cortado + atún bien escurrido + queso fresco desnatado + cebolla picada + maíz, aliñar + yopro/yogur proteico", "merienda": "Día sin entreno: sándwich de pavo y lomo embuchado con tomate", "cena": "Tortilla de 2 huevos + atún/60g de pavo + 1-2 rebanadas de pan de centeno con fritada untada + ALPRO + fruta" },
        "miercoles": { "curro": "Igual que lunes (avena + proteína)", "comida": "Igual que lunes (legumbre + fritada de pisto)", "cena": "180g de salmón a la plancha + verduras salteadas + vasito de arroz basmati/quinoa + yogur proteico/yopro" },
        "jueves": { "curro": "Igual que martes (QFB/ALPRO + manzana)", "comida": "Igual que martes (patata + atún + queso fresco)", "cena": "Revuelto de 2 huevos con champis y cebolla/calabacín/setas y ajos + taquitos de jamón + 1-2 rebanadas de pan de centeno con fritada untada + ALPRO + fruta" },
        "viernes": { "curro": "Igual que lunes/miércoles", "comida": "Igual que lunes/miércoles", "cena": "200g de pechuga de pollo/merluza rebozada solo con huevo + piperrada + vasito de arroz integral/basmati + yogur proteico/yopro" },
        "sabado": { "desayuno": "Tazón: dejar reposando 70-80g copos de avena en leche semi la noche antes; cazo de proteína, calentar antes de comer", "mm": "Post: batido de proteína", "comida": "En casa: puré de calabacín + pescado blanco al horno con patata y zanahoria en airfryer", "merienda": "2 rebanadas de pan con tomate y jamón serrano + tazón ALPRO + fruta troceada", "cena": "Comida libre fuera / pizza casera (masa fina + fritada de pisto o salsa de tomate con verdura + carne picada de ternera, queso y salsa barbacoa / jamón serrano y queso / jamón york, champis y queso) + postre: arroz con leche" },
        "domingo": { "desayuno": "Igual que sábado", "comida": "Legumbre de bote bien limpiada + fritada de pisto/verduras pochadas/menestra salteada + fruta", "merienda": "2 rebanadas de pan con tomate y jamón serrano + tazón ALPRO + fruta troceada", "cena": "Puré de verdura + 2 huevos a la plancha + 2 rebanadas de pan con fritada de pisto untado + yopro" }
      },
      "productos_recomendados": [
        "Quesos frescos batidos 0% (varias marcas: Sannia, Pastoret, Carrefour, Hacendado)",
        "Pan Rustik Bakery masa madre, centeno y pipas", "Sofrito de hortalizas/fritada (Eroski)"
      ]
    },

    {
      "id": 7,
      "fecha": "2022-05-09",
      "edad": 30,
      "tipo_fase": "definicion",
      "composicion": { "peso_kg": "91-92", "sum6p_mm": 81.5, "sum6p_objetivo_mm": 60 },
      "objetivo": "Mejorar la composición corporal para conseguir el porcentaje graso más bajo jamás conseguido.",
      "nota_metodologica": "A partir de esta etapa se usa la suma de 6 pliegues cutáneos (SUM6P) en vez de IMC para medir composición corporal.",
      "puntos_clave": [
        "Control de peso opcional (1x/semana miércoles, o 3x/semana martes-jueves-sábado con media semanal)",
        "Pan de calidad y saciante: centeno o espelta con semillas",
        "Aceite de oliva virgen extra, spray recomendado",
        "Alcohol solo fin de semana, controlado",
        "Mínimo picoteo en casa; máximo 1 comida fuera de casa/semana"
      ],
      "esquema_nutricional": "Mismo plato de rendimiento: mitad verduras/hortalizas, un cuarto de pan/pasta/arroz/cereales/legumbres/patata, un cuarto de pescado/carne/aves/huevos.",
      "entrenamiento_semanal": {
        "lunes": "Mobility Pre + WOD + Core", "martes": "OPEN", "miercoles": "Mobility Pre + WOD + Core",
        "jueves": "Descanso *día de pasear/progresiones", "viernes": "Mobility Pre + WOD + Core",
        "sabado": "Futbito", "domingo": "Descanso *día de pasear/progresiones"
      },
      "notas_entrenamiento": [
        "Paseos diarios: hacer el máximo de pasos posibles",
        "Días de descanso: paseo diario mínimo de 1h, acumulando 12.000-14.000 pasos",
        "Progresiones: 5 min andar rápido (calentar) + 10x(2' correr suave / 1' andar recuperación) + 5 min vuelta a la calma"
      ],
      "nota_ambiguedad": "Igual que en la etapa de 17/11/2021, la fila de 'Merienda' tiene celdas combinadas en el PDF. El texto 'DIA SIN ENTRENO' se asigna al martes por orden de lectura de la tabla, aunque el día de descanso real según el cuadro de entrenamiento es el jueves - conviene revisar el PDF original si esto es relevante.",
      "plan_semanal_fase1": {
        "desayuno_diario": "AYUNO: hidratarse con infusión/café solo o aguado/americano. Media mañana sobre las 10-11h.",
        "lunes": { "curro": "Tupper: 1/2 ALPRO/QFB + melón troceado + cacao desgrasado/canela", "comida": "Tupper grande: legumbre de bote + tomate cortado + zanahoria rallada + cebolla dulce + maíz cocido + huevo cocido, aliño aparte + fruta", "merienda": "Pre: café con creatina (8g) + plátano + 4 tortitas de arroz con mermelada 0%. Post: batido de proteína con bebida vegetal", "cena": "200g de pechuga de pollo/merluza rebozada solo con huevo + piperrada + 150-200g de patata al airfryer + tazón QFB/ALPRO + arándanos/fresas" },
        "martes": { "curro": "Tupper: 1/2 ALPRO/QFB + manzana y pera troceado + canela/cacao desgrasado", "comida": "Tupper grande: lechuga + patata cocida (250g) + tomate cortado + zanahoria rallada + cebolla picada + maíz cocido + tofu ahumado + yopro/yogur proteico", "merienda": "Día sin entreno: sándwich de pavo braseado con tomate cortado + 4 tortitas de arroz con mermelada 0%", "cena": "Revuelto de 2 huevos con champis y cebolla abundante + 50-60g de pavo braseado + tazón QFB/ALPRO + arándanos/fresas" },
        "miercoles": { "curro": "Igual que lunes (melón + cacao)", "comida": "Tupper grande: 180g pechuga de pavo al ajillo a la plancha + vasito de quinoa + judías verdes abundantes salteadas + yogur proteico + manzana", "cena": "200g de merluza/rape/bacalao al horno con calabacín abundante + 250g de patata, todo horneado + tazón QFB/ALPRO + arándanos/fresas" },
        "jueves": { "curro": "Igual que martes (manzana y pera)", "comida": "Igual que lunes (legumbre)", "cena": "Igual que lunes (pollo/merluza + piperrada + patata)" },
        "viernes": { "curro": "Igual que lunes", "comida": "Tupper grande: 200g de merluza rebozada solo con huevo + 250g de boniato al vapor/airfryer + verduras salteadas abundantes + fruta", "cena": "Sandwich casero: 3 rebanadas de pan de centeno + tomate cortado abundante + jamón de pavo braseado + lechuga + 1 huevo cocido + queso de untar light + tazón QFB/ALPRO + arándanos/fresas" },
        "sabado": { "desayuno": "Pre: tazón 1/2 ALPRO/QFB + plátano y kiwi troceado", "mm": "Post: batido de proteína", "comida": "En casa: ensalada de tomate aliñado + pescado blanco al horno con calabacín y patata", "merienda": "Tazón QFB/ALPRO + arándanos/fresas", "cena": "Comida libre fuera / pizza casera (masa fina + fritada de pisto o salsa de tomate con verdura + carne picada de ternera, queso y salsa barbacoa / jamón serrano y queso / jamón york, champis y queso) + postre: arroz con leche" },
        "domingo": { "desayuno": "Tupper: 1/2 ALPRO/QFB + manzana y pera troceado + canela/cacao desgrasado", "comida": "Bol: legumbre de bote + tomate cortado + zanahoria rallada + cebolla dulce + maíz cocido + huevo cocido, aliño aparte + fruta", "merienda": "Tazón QFB/ALPRO + arándanos/fresas", "cena": "Ensalada de tomate aliñada + tortilla de 2 huevos con jamón de pavo braseado" }
      }
    }
  ]
};
