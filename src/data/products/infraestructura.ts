import { IMG } from "../images";
import type { Product } from "../types";

const CAT = "infraestructura-y-obras-civiles";

export const INFRAESTRUCTURA: Product[] = [
  {
    slug: "campamento-modular-kb-camp",
    category: CAT,
    name: "Campamento modular KB Camp",
    model: "KB Camp",
    tagline: "Campamentos para gran altitud, listos en semanas.",
    summary:
      "Módulos habitacionales, comedores, oficinas y servicios para 50 a 1 200 personas, con aislamiento térmico y diseño sísmico para los Andes.",
    badge: "Destacado",
    year: 2025,
    images: [IMG.modularGray, IMG.modularBlue, IMG.modularStairs, IMG.workersSite],
    keySpecs: [
      { label: "Capacidad", metric: "50 – 1 200 personas" },
      { label: "Altitud de diseño", metric: "hasta 5 000 m s. n. m.", imperial: "hasta 16 404 pies" },
      { label: "Plazo de montaje", metric: "desde 45 días" },
    ],
    overview: {
      heading: "Confort y seguridad para tu gente en la sierra",
      text: "KB Camp integra ingeniería, fabricación, transporte y montaje de campamentos completos. Los módulos se fabrican en planta con control de calidad y se ensamblan en sitio con mínima obra húmeda, reduciendo plazos, residuos y riesgos.",
    },
    benefits: [
      { title: "Aislamiento para gran altitud", text: "Paneles sándwich de alta densidad y ventanas termopanel para temperaturas bajo cero." },
      { title: "Diseño sismorresistente", text: "Estructura calculada según la Norma E.030 para Zona 4." },
      { title: "Escalable y reubicable", text: "Crece con el proyecto y se desmonta para reutilizarse en la siguiente fase." },
    ],
    features: [
      { title: "Módulos habitacionales", subtitle: "Descanso de calidad", text: "Habitaciones individuales o dobles con baño, calefacción y aislamiento acústico entre ambientes.", points: ["Calefacción eléctrica o por aire", "Aislamiento acústico 45 dB", "Mobiliario incluido"], image: IMG.modularStairs },
      { title: "Servicios completos", subtitle: "Todo en un solo contrato", text: "Comedores, cocinas industriales, lavandería, tópico, gimnasio y áreas de recreación.", points: ["Plantas de tratamiento de agua", "Grupos electrógenos y respaldo solar", "Conectividad Wi-Fi en todo el campamento"], image: IMG.modularBlue },
      { title: "Montaje industrializado", subtitle: "Menos riesgo en obra", text: "Fabricación en planta y montaje en seco para reducir horas-hombre en altura y exposición al clima.", points: ["Control de calidad en planta", "Montaje por grúa", "Mínima obra húmeda"], image: IMG.modularGray },
    ],
    specs: [
      { title: "Diseño", rows: [
        { label: "Capacidad", metric: "50 – 1 200 personas" },
        { label: "Altitud de diseño", metric: "hasta 5 000 m s. n. m.", imperial: "hasta 16 404 pies" },
        { label: "Norma sísmica", metric: "E.030 · Zona 4" },
        { label: "Viento de diseño", metric: "120 km/h", imperial: "75 mph" },
        { label: "Carga de nieve", metric: "150 kg/m²", imperial: "30,7 lb/pie²" },
      ] },
      { title: "Módulo estándar", rows: [
        { label: "Dimensiones", metric: "6,0 × 2,4 × 2,6 m", imperial: "20 × 8 × 8,5 pies" },
        { label: "Transmitancia térmica", metric: "U ≤ 0,35 W/m²·K" },
        { label: "Aislamiento acústico", metric: "45 dB" },
      ] },
      { title: "Plazos", rows: [
        { label: "Ingeniería", metric: "2 – 4 semanas" },
        { label: "Montaje", metric: "desde 45 días" },
      ] },
    ],
    standard: [
      { title: "Alcance", items: ["Ingeniería de detalle y permisos", "Fabricación y transporte", "Montaje e instalaciones eléctricas y sanitarias", "Mobiliario básico", "Puesta en marcha"] },
    ],
    optional: [
      { title: "Servicios opcionales", items: ["Operación y mantenimiento del campamento", "Control de accesos biométrico KB Gate", "Planta solar híbrida", "Conectividad LTE privada KB Core"] },
    ],
    attributes: {
      tipo: ["Edificación modular"],
      aplicacion: ["Campamentos"],
      modalidad: ["Proyecto llave en mano", "Alquiler"],
    },
  },
  {
    slug: "nave-de-mantenimiento-kb-steel",
    category: CAT,
    name: "Nave de mantenimiento KB Steel",
    model: "KB Steel",
    tagline: "Talleres para flotas de ultra gran tonelaje.",
    summary:
      "Naves de estructura metálica con luces de hasta 40 m y puentes grúa de hasta 50 t, diseñadas para el mantenimiento de camiones mineros y equipos auxiliares.",
    year: 2024,
    images: [IMG.steelFrame, IMG.steelRoof, IMG.steelSite, IMG.workerStructure],
    keySpecs: [
      { label: "Luz libre", metric: "hasta 40 m", imperial: "hasta 131 pies" },
      { label: "Altura libre", metric: "hasta 18 m", imperial: "hasta 59 pies" },
      { label: "Puente grúa", metric: "hasta 50 t", imperial: "hasta 55 t cortas" },
    ],
    overview: {
      heading: "Ingeniería estructural a la medida de tu flota",
      text: "Diseñamos, fabricamos y montamos talleres de mantenimiento, almacenes y naves de proceso. Cada nave se calcula para las cargas de viento, nieve y sismo del sitio, con bahías dimensionadas para el equipo más grande de tu flota.",
    },
    benefits: [
      { title: "Diseño integral", text: "Estructura, cimentaciones, instalaciones y equipamiento en un solo proyecto." },
      { title: "Montaje seguro", text: "Uniones empernadas y premontaje en piso para reducir trabajos en altura." },
      { title: "Durabilidad", text: "Protección anticorrosiva con sistemas de pintura C4/C5." },
    ],
    features: [
      { title: "Bahías para camiones de 400 t", subtitle: "Espacio y altura", text: "Portones de hasta 12 m de altura y fosas de inspección para equipos de ultra gran tonelaje.", points: ["Portones seccionales o enrollables", "Fosas de lubricación", "Iluminación LED de alta bahía"], image: IMG.steelRoof },
    ],
    specs: [
      { title: "Estructura", rows: [
        { label: "Luz libre", metric: "hasta 40 m", imperial: "hasta 131 pies" },
        { label: "Altura libre", metric: "hasta 18 m", imperial: "hasta 59 pies" },
        { label: "Área típica", metric: "2 000 – 6 000 m²", imperial: "21 500 – 64 600 pies²" },
        { label: "Normas de diseño", metric: "AISC 360 · E.090 · E.030" },
      ] },
      { title: "Equipamiento", rows: [
        { label: "Puente grúa", metric: "hasta 50 t", imperial: "hasta 55 t cortas" },
        { label: "Protección anticorrosiva", metric: "ISO 12944 · C4 / C5" },
      ] },
    ],
    standard: [
      { title: "Alcance", items: ["Ingeniería estructural y de especialidades", "Fabricación y pintura", "Montaje y cobertura", "Instalaciones eléctricas"] },
    ],
    optional: [
      { title: "Opciones", items: ["Puente grúa y monorrieles", "Sistema contra incendios", "Paneles solares en cubierta"] },
    ],
    attributes: {
      tipo: ["Estructura metálica"],
      aplicacion: ["Planta de procesos", "Tajo abierto"],
      modalidad: ["Proyecto llave en mano"],
    },
  },
  {
    slug: "vias-de-acarreo-kb-haul",
    category: CAT,
    name: "Vías de acarreo KB Haul",
    model: "KB Haul",
    tagline: "Vías diseñadas para más velocidad, menos desgaste y cero incidentes.",
    summary:
      "Diseño y construcción de vías de acarreo, rampas y accesos con estructura de pavimento granular, drenaje y bermas de seguridad según estándares mineros.",
    year: 2023,
    images: [IMG.trucksRow, IMG.pitAerial, IMG.dozers, IMG.loaderTrucks],
    keySpecs: [
      { label: "Ancho de calzada", metric: "hasta 40 m", imperial: "hasta 131 pies" },
      { label: "Pendiente máxima", metric: "8 %" },
      { label: "Movimiento diario", metric: "hasta 25 000 m³", imperial: "hasta 32 700 yd³" },
    ],
    overview: {
      heading: "La vía es parte del equipo",
      text: "Una vía bien diseñada reduce la resistencia a la rodadura, el consumo de combustible y el desgaste de neumáticos. Integramos topografía con drones, diseño geométrico, estructura de pavimento y señalización en un mismo servicio.",
    },
    benefits: [
      { title: "Menor costo por tonelada", text: "Menos resistencia a la rodadura y mayores velocidades seguras." },
      { title: "Seguridad", text: "Bermas, peraltes y visibilidad diseñados para el equipo más grande." },
      { title: "Control de calidad", text: "Compactación verificada y registros digitales por tramo." },
    ],
    features: [],
    specs: [
      { title: "Diseño geométrico", rows: [
        { label: "Ancho de calzada", metric: "hasta 40 m", imperial: "hasta 131 pies" },
        { label: "Pendiente máxima", metric: "8 %" },
        { label: "Altura de berma", metric: "≥ ¾ del diámetro del neumático" },
      ] },
      { title: "Construcción", rows: [
        { label: "Movimiento diario", metric: "hasta 25 000 m³", imperial: "hasta 32 700 yd³" },
        { label: "Compactación", metric: "≥ 95 % Proctor modificado" },
      ] },
    ],
    standard: [
      { title: "Alcance", items: ["Levantamiento topográfico", "Diseño geométrico y de pavimento", "Movimiento de tierras", "Drenaje y señalización"] },
    ],
    attributes: {
      tipo: ["Movimiento de tierras"],
      aplicacion: ["Tajo abierto", "Vías y accesos"],
      modalidad: ["Proyecto llave en mano"],
    },
  },
  {
    slug: "oficinas-y-salas-modulares-kb-office",
    category: CAT,
    name: "Oficinas y salas técnicas KB Office",
    model: "KB Office",
    tagline: "Espacios de trabajo modulares, presurizados y conectados.",
    summary:
      "Oficinas, salas eléctricas y salas de control modulares de 1 a 3 pisos, con presurización, climatización y cableado estructurado.",
    year: 2024,
    images: [IMG.modularBlue, IMG.modularStairs, IMG.controlRoom],
    keySpecs: [
      { label: "Superficie por módulo", metric: "14,4 m²", imperial: "155 pies²" },
      { label: "Configuración", metric: "1 a 3 pisos" },
      { label: "Plazo", metric: "desde 30 días" },
    ],
    overview: {
      heading: "Listas para operar desde el primer día",
      text: "KB Office entrega espacios terminados: mobiliario, climatización, iluminación, red de datos y energía. Ideales para oficinas de obra, salas de control, laboratorios y salas eléctricas.",
    },
    benefits: [
      { title: "Presurización", text: "Protección contra polvo para salas eléctricas y de control." },
      { title: "Plug & play", text: "Conexión rápida a energía y datos en sitio." },
      { title: "Reubicables", text: "Se trasladan con el avance del proyecto." },
    ],
    features: [],
    specs: [
      { title: "Módulo", rows: [
        { label: "Superficie por módulo", metric: "14,4 m²", imperial: "155 pies²" },
        { label: "Configuración", metric: "1 a 3 pisos" },
        { label: "Aislamiento acústico", metric: "45 dB" },
      ] },
    ],
    attributes: {
      tipo: ["Edificación modular"],
      aplicacion: ["Campamentos", "Planta de procesos"],
      modalidad: ["Venta", "Alquiler", "Proyecto llave en mano"],
    },
  },
];
