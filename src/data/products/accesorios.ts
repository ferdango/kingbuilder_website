import { IMG } from "../images";
import type { Product } from "../types";

const CAT = "accesorios-e-implementos";

export const ACCESORIOS: Product[] = [
  {
    slug: "desbrozadora-de-martillos-kb-fm-220",
    category: CAT,
    name: "Desbrozadora de martillos KB FM-220",
    model: "FM-220",
    tagline: "Mantenimiento de bermas, accesos y campamentos sin cambiar de equipo.",
    summary:
      "Desbrozadora hidráulica de 2,2 m para excavadoras de 20 a 30 t. Corta maleza y arbustos de hasta 60 mm en bermas, taludes y derechos de vía.",
    badge: "Nuevo",
    year: 2026,
    images: [IMG.excavatorArm, IMG.excavatorRocky, IMG.dozers],
    keySpecs: [
      { label: "Ancho de corte", metric: "2 200 mm", imperial: "86,6 pulg" },
      { label: "Peso", metric: "1 150 kg", imperial: "2 535 lb" },
      { label: "Caudal hidráulico requerido", metric: "120 – 160 L/min", imperial: "32 – 42 gal/min" },
    ],
    overview: {
      heading: "Accesos despejados, operación segura",
      text: "La FM-220 mantiene limpias las bermas de seguridad, cunetas y taludes de accesos mineros y campamentos. Su rotor de martillos articulados tritura la vegetación y la deja como mantillo, sin necesidad de recogerla.",
    },
    benefits: [
      { title: "Alcance con brazo de excavadora", text: "Trabaja en taludes y cunetas donde los equipos agrícolas no llegan." },
      { title: "Martillos de alta resistencia", text: "Acero templado reversible para duplicar la vida útil." },
      { title: "Protección integral", text: "Faldón de cadenas y cubierta reforzada contra proyección de piedras." },
    ],
    features: [
      { title: "Rotor equilibrado", subtitle: "Corte limpio y parejo", text: "24 martillos dispuestos en hélice para un corte continuo y bajas vibraciones en el brazo.", points: ["2 000 rpm", "Rodamientos sellados", "Altura de corte regulable"], image: IMG.excavatorArm },
      { title: "Motor hidráulico de pistones", subtitle: "Eficiencia energética", text: "Motor de pistones con válvula antirretorno que protege el circuito ante impactos.", points: ["Presión máx. 250 bar", "Drenaje externo", "Enganche rápido universal"], image: IMG.excavatorRocky },
    ],
    specs: [
      { title: "Dimensiones y peso", rows: [
        { label: "Ancho de corte", metric: "2 200 mm", imperial: "86,6 pulg" },
        { label: "Peso", metric: "1 150 kg", imperial: "2 535 lb" },
        { label: "Altura de corte", metric: "20 – 200 mm", imperial: "0,8 – 7,9 pulg" },
      ] },
      { title: "Sistema hidráulico", rows: [
        { label: "Caudal requerido", metric: "120 – 160 L/min", imperial: "32 – 42 gal/min" },
        { label: "Presión máxima", metric: "250 bar", imperial: "3 626 psi" },
      ] },
      { title: "Rotor", rows: [
        { label: "Número de martillos", metric: "24" },
        { label: "Velocidad del rotor", metric: "2 000 rpm" },
        { label: "Diámetro máximo de corte", metric: "60 mm", imperial: "2,4 pulg" },
      ] },
    ],
    standard: [
      { title: "Incluido", items: ["Martillos de acero templado", "Faldón de cadenas", "Mangueras y acoples", "Soporte de enganche"] },
    ],
    optional: [
      { title: "Opciones", items: ["Cuchillas en Y para pasto", "Rodillo trasero de apoyo", "Kit de enganche rápido específico"] },
    ],
    compatible: ["Excavadoras de 20 a 30 t", "Retroexcavadoras con enganche rápido", "Brazos de desbroce hidráulicos"],
    attributes: {
      tipo: ["Desbrozadora"],
      aplicacion: ["Vías y accesos", "Campamentos"],
      modalidad: ["Venta", "Alquiler"],
    },
  },
  {
    slug: "martillo-hidraulico-kb-hb-3000",
    category: CAT,
    name: "Martillo hidráulico KB HB-3000",
    model: "HB-3000",
    tagline: "Reducción secundaria y demolición con energía constante.",
    summary:
      "Martillo de 3 000 kg para excavadoras de 30 a 45 t, con amortiguación de nitrógeno y lubricación automática para trabajo continuo.",
    badge: "Más solicitado",
    year: 2024,
    images: [IMG.excavatorBreaker, IMG.excavatorRidge, IMG.saltMine],
    keySpecs: [
      { label: "Energía de impacto", metric: "5 400 J", imperial: "3 983 lb·pie" },
      { label: "Peso operativo", metric: "3 000 kg", imperial: "6 614 lb" },
      { label: "Frecuencia", metric: "350 – 500 golpes/min" },
    ],
    overview: {
      heading: "Potencia que no se detiene",
      text: "El HB-3000 fue diseñado para reducción de bolones en parrillas de chancado, desatado de rocas y demolición de concreto. Su carcasa silenciada reduce vibraciones y ruido, y la lubricación automática evita paradas por falta de grasa.",
    },
    benefits: [
      { title: "Mayor disponibilidad", text: "Lubricación automática y bujes reemplazables en campo." },
      { title: "Protección del portador", text: "Amortiguadores superiores e inferiores absorben el rebote." },
      { title: "Operación silenciosa", text: "Carcasa cerrada que reduce el ruido hasta 10 dB." },
    ],
    features: [
      { title: "Anti-golpe en vacío", subtitle: "Cuida el martillo y la excavadora", text: "El sistema detiene el impacto cuando la herramienta pierde contacto con la roca.", points: ["Menos desgaste de bujes", "Menos fatiga en pasadores", "Operación más segura"], image: IMG.excavatorBreaker },
    ],
    specs: [
      { title: "Desempeño", rows: [
        { label: "Energía de impacto", metric: "5 400 J", imperial: "3 983 lb·pie" },
        { label: "Frecuencia", metric: "350 – 500 golpes/min" },
        { label: "Diámetro de herramienta", metric: "155 mm", imperial: "6,1 pulg" },
      ] },
      { title: "Sistema hidráulico", rows: [
        { label: "Caudal de aceite", metric: "160 – 230 L/min", imperial: "42 – 61 gal/min" },
        { label: "Presión de trabajo", metric: "150 – 170 bar", imperial: "2 176 – 2 466 psi" },
      ] },
      { title: "Peso", rows: [{ label: "Peso operativo", metric: "3 000 kg", imperial: "6 614 lb" }] },
    ],
    standard: [
      { title: "Incluido", items: ["Puntero y cincel", "Lubricación automática", "Kit de mangueras", "Carcasa silenciada"] },
    ],
    optional: [
      { title: "Opciones", items: ["Kit para trabajo subacuático", "Sistema de monitoreo de horas de golpe", "Herramienta de punta roma"] },
    ],
    compatible: ["Excavadoras de 30 a 45 t", "Brazos rompedores estacionarios"],
    attributes: {
      tipo: ["Martillo hidráulico"],
      aplicacion: ["Tajo abierto", "Planta de procesos", "Minería subterránea"],
      modalidad: ["Venta", "Alquiler"],
    },
  },
  {
    slug: "cucharon-para-roca-kb-heavy-duty",
    category: CAT,
    name: "Cucharón para roca KB Heavy Duty",
    model: "HD-460",
    tagline: "Carguío de roca fragmentada con máxima vida útil.",
    summary:
      "Cucharón de 4,6 m³ en acero antidesgaste para excavadoras de 70 a 90 t, con labio reforzado, dientes de alta penetración y protectores laterales.",
    year: 2023,
    images: [IMG.bucketDesert, IMG.excavatorPit, IMG.excavatorsPit],
    keySpecs: [
      { label: "Capacidad colmada (SAE)", metric: "4,6 m³", imperial: "6,0 yd³" },
      { label: "Ancho", metric: "2 150 mm", imperial: "84,6 pulg" },
      { label: "Peso", metric: "4 850 kg", imperial: "10 692 lb" },
    ],
    overview: {
      heading: "Diseñado para roca abrasiva",
      text: "Placas antidesgaste de 450–500 HB en las zonas de mayor contacto, geometría optimizada para llenado rápido y un sistema de dientes sin martillo que reduce el tiempo de cambio.",
    },
    benefits: [
      { title: "Más toneladas por hora", text: "Perfil de llenado rápido que reduce el tiempo de ciclo." },
      { title: "Menos paradas", text: "Dientes y protectores reemplazables en minutos." },
      { title: "Vida útil extendida", text: "Acero antidesgaste en labio, laterales y fondo." },
    ],
    features: [
      { title: "Sistema de dientes sin martillo", subtitle: "Cambio seguro y rápido", text: "Retenedores integrados que se liberan con una llave, sin golpes ni riesgo de proyección.", points: ["5 dientes de penetración", "Protectores entre dientes", "Protectores laterales"], image: IMG.bucketDesert },
    ],
    specs: [
      { title: "Dimensiones", rows: [
        { label: "Capacidad colmada (SAE)", metric: "4,6 m³", imperial: "6,0 yd³" },
        { label: "Ancho", metric: "2 150 mm", imperial: "84,6 pulg" },
        { label: "Peso", metric: "4 850 kg", imperial: "10 692 lb" },
      ] },
      { title: "Materiales", rows: [
        { label: "Placas antidesgaste", metric: "450 – 500 HB" },
        { label: "Número de dientes", metric: "5" },
      ] },
    ],
    compatible: ["Excavadoras de 70 a 90 t"],
    attributes: {
      tipo: ["Cucharón"],
      aplicacion: ["Tajo abierto"],
      modalidad: ["Venta"],
    },
  },
  {
    slug: "desgarrador-kb-r-90",
    category: CAT,
    name: "Desgarrador de un vástago KB R-90",
    model: "R-90",
    tagline: "Escarificación profunda para preparar el terreno sin voladura.",
    summary:
      "Desgarrador de un vástago con ajuste hidráulico de ángulo para tractores de orugas de 45 a 70 t. Penetración de hasta 1,58 m.",
    year: 2022,
    images: [IMG.dozers, IMG.excavatorRidge],
    keySpecs: [
      { label: "Penetración máxima", metric: "1 580 mm", imperial: "62,2 pulg" },
      { label: "Peso", metric: "5 600 kg", imperial: "12 346 lb" },
      { label: "Vástagos", metric: "1" },
    ],
    overview: {
      heading: "Menos voladura, más control",
      text: "El R-90 fractura roca blanda y material compacto para facilitar el carguío y la construcción de plataformas, reduciendo la necesidad de perforación y voladura en zonas cercanas a infraestructura.",
    },
    benefits: [
      { title: "Ángulo variable", text: "Ajuste hidráulico del vástago para cada tipo de material." },
      { title: "Puntas reemplazables", text: "Puntas y protectores de desgaste de cambio rápido." },
      { title: "Estructura reforzada", text: "Bastidor en paralelogramo que mantiene el ángulo de ataque." },
    ],
    features: [],
    specs: [
      { title: "Datos técnicos", rows: [
        { label: "Penetración máxima", metric: "1 580 mm", imperial: "62,2 pulg" },
        { label: "Peso", metric: "5 600 kg", imperial: "12 346 lb" },
        { label: "Ajuste de ángulo", metric: "Hidráulico" },
      ] },
    ],
    compatible: ["Tractores de orugas de 45 a 70 t"],
    attributes: {
      tipo: ["Desgarrador"],
      aplicacion: ["Tajo abierto", "Vías y accesos"],
      modalidad: ["Venta"],
    },
  },
];
