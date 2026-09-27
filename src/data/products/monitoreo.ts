import { IMG } from "../images";
import type { Product } from "../types";

const CAT = "monitoreo-y-automatizacion";

export const MONITOREO: Product[] = [
  {
    slug: "centro-de-operaciones-remotas-kb-command",
    category: CAT,
    name: "Centro de operaciones remotas KB Command",
    model: "KB Command",
    tagline: "Toda la operación en una sola pantalla.",
    summary:
      "Diseño e implementación de centros de control integrados: flota, geotecnia, seguridad, energía y producción en tiempo real, en sitio o en Lima.",
    badge: "Nuevo",
    year: 2026,
    images: [IMG.controlRoomLarge, IMG.controlRoom, IMG.serverRack, IMG.teamMeeting],
    keySpecs: [
      { label: "Puestos de operación", metric: "4 – 40" },
      { label: "Video wall", metric: "hasta 48 m²", imperial: "hasta 517 pies²" },
      { label: "Implementación", metric: "12 – 20 semanas" },
    ],
    overview: {
      heading: "Decisiones rápidas con información confiable",
      text: "KB Command integra los sistemas de tu operación en una plataforma unificada. Diseñamos la sala, la ergonomía, la red y el software, y acompañamos al equipo en la transición hacia la operación remota.",
    },
    benefits: [
      { title: "Visión integral", text: "Flota, seguridad y producción correlacionadas en tiempo real." },
      { title: "Operación remota", text: "Menos personal expuesto en zonas de riesgo y a gran altitud." },
      { title: "Mejora continua", text: "Tableros de KPI y analítica para optimizar cada turno." },
    ],
    features: [
      { title: "Plataforma unificada", subtitle: "Un solo mapa, todos los datos", text: "Capas de flota, geotecnia, cámaras, riego y energía sobre el modelo 3D del sitio.", points: ["Alarmas priorizadas", "Bitácora digital de turno", "Roles y permisos"], image: IMG.controlRoom },
      { title: "Ergonomía certificada", subtitle: "Diseñado para turnos de 12 h", text: "Consolas, iluminación y acústica diseñadas según ISO 11064.", points: ["Consolas regulables", "Iluminación indirecta", "Control acústico"], image: IMG.controlRoomLarge },
    ],
    specs: [
      { title: "Sala", rows: [
        { label: "Puestos de operación", metric: "4 – 40" },
        { label: "Video wall", metric: "hasta 48 m²", imperial: "hasta 517 pies²" },
        { label: "Norma de ergonomía", metric: "ISO 11064" },
      ] },
      { title: "Plataforma", rows: [
        { label: "Integraciones", metric: "OPC-UA · MQTT · API REST" },
        { label: "Disponibilidad", metric: "99,9 %" },
        { label: "Ubicación", metric: "En sitio o remota" },
      ] },
    ],
    standard: [
      { title: "Alcance", items: ["Diseño de sala y ergonomía", "Infraestructura de red y servidores", "Plataforma de integración", "Capacitación y acompañamiento"] },
    ],
    optional: [
      { title: "Opciones", items: ["Operación asistida por KB 24/7", "Gemelo digital del sitio", "Sala de respaldo"] },
    ],
    attributes: {
      tipo: ["Centro de control"],
      aplicacion: ["Tajo abierto", "Minería subterránea", "Planta de procesos"],
      modalidad: ["Proyecto llave en mano", "Servicio gestionado"],
    },
  },
  {
    slug: "telemetria-de-flota-kb-fleet",
    category: CAT,
    name: "Telemetría y gestión de flota KB Fleet",
    model: "KB Fleet",
    tagline: "Cada ciclo de acarreo, medido y optimizado.",
    summary:
      "Plataforma de gestión de flota con GNSS de alta precisión: ciclos, carga útil, tiempos de espera y consumo de combustible por equipo y operador.",
    badge: "Más solicitado",
    year: 2025,
    images: [IMG.trucksParked, IMG.controlRoom, IMG.pitTrucks],
    keySpecs: [
      { label: "Precisión GNSS", metric: "±0,5 m (RTK ±2 cm)" },
      { label: "Frecuencia de reporte", metric: "1 s" },
      { label: "Equipos por licencia", metric: "Ilimitados" },
    ],
    overview: {
      heading: "Productividad visible, costos bajo control",
      text: "KB Fleet instala un módulo en cada equipo y entrega KPI de productividad en tiempo real. Identifica colas en palas, tiempos muertos y rutas ineficientes para aumentar las toneladas movidas por hora.",
    },
    benefits: [
      { title: "Más toneladas por hora", text: "Asignación dinámica de camiones a palas." },
      { title: "Menos combustible", text: "Detección de ralentí excesivo y rutas largas." },
      { title: "Mantenimiento predictivo", text: "Alertas por códigos de falla y horas de motor." },
    ],
    features: [],
    specs: [
      { title: "Hardware", rows: [
        { label: "Precisión GNSS", metric: "±0,5 m · RTK ±2 cm" },
        { label: "Comunicación", metric: "LTE privada / pública, Wi-Fi" },
        { label: "Protección", metric: "IP67 · vibración MIL-STD-810" },
      ] },
      { title: "Software", rows: [
        { label: "Frecuencia de reporte", metric: "1 s" },
        { label: "Integraciones", metric: "API REST · ERP · BI" },
      ] },
    ],
    attributes: {
      tipo: ["Software y telemetría"],
      aplicacion: ["Tajo abierto", "Minería subterránea"],
      modalidad: ["Servicio gestionado"],
    },
  },
  {
    slug: "monitoreo-geotecnico-kb-slope",
    category: CAT,
    name: "Monitoreo geotécnico de taludes KB Slope",
    model: "KB Slope",
    tagline: "Alerta temprana ante movimientos de talud.",
    summary:
      "Radar interferométrico, prismas robóticos y sensores inalámbricos para detectar deformaciones submilimétricas en taludes y botaderos.",
    year: 2024,
    images: [IMG.openPit, IMG.pitAerial, IMG.tailings],
    keySpecs: [
      { label: "Precisión", metric: "0,1 mm" },
      { label: "Alcance del radar", metric: "4 500 m", imperial: "2,8 mi" },
      { label: "Barrido completo", metric: "3 min" },
    ],
    overview: {
      heading: "Seguridad geotécnica 24/7",
      text: "KB Slope combina radar, prismas y sensores in situ en un solo sistema de alertas, con umbrales configurados junto a tu equipo de geotecnia y notificación inmediata al centro de control.",
    },
    benefits: [
      { title: "Detección temprana", text: "Tendencias de deformación antes de que sean visibles." },
      { title: "Alertas multicanal", text: "Sirenas, SMS, correo y KB Command." },
      { title: "Autonomía energética", text: "Estaciones solares para zonas remotas." },
    ],
    features: [],
    specs: [
      { title: "Radar", rows: [
        { label: "Precisión", metric: "0,1 mm" },
        { label: "Alcance", metric: "4 500 m", imperial: "2,8 mi" },
        { label: "Barrido", metric: "360° en 3 min" },
      ] },
    ],
    attributes: {
      tipo: ["Monitoreo geotécnico"],
      aplicacion: ["Tajo abierto"],
      modalidad: ["Venta", "Servicio gestionado"],
    },
  },
  {
    slug: "topografia-con-drones-kb-survey",
    category: CAT,
    name: "Topografía con drones KB Survey",
    model: "KB Survey",
    tagline: "Levantamientos precisos sin exponer a tu personal.",
    summary:
      "Levantamientos LiDAR y fotogramétricos para volumetría de acopios, conciliación de avance y control de obra, a más de 5 000 m s. n. m.",
    year: 2025,
    images: [IMG.droneFlying, IMG.droneMountains, IMG.pitAerial],
    keySpecs: [
      { label: "Precisión", metric: "3 cm", imperial: "1,2 pulg" },
      { label: "Cobertura diaria", metric: "400 ha", imperial: "988 acres" },
      { label: "Altitud operativa", metric: "hasta 5 500 m s. n. m.", imperial: "hasta 18 045 pies" },
    ],
    overview: {
      heading: "Del vuelo al entregable en 24 horas",
      text: "Planificamos, volamos y procesamos. Recibes nubes de puntos, modelos digitales de terreno, ortofotos y reportes de volumetría listos para tu equipo de planeamiento.",
    },
    benefits: [
      { title: "Menos exposición", text: "Sin topógrafos en taludes ni zonas de tránsito." },
      { title: "Más frecuencia", text: "Conciliaciones semanales en lugar de mensuales." },
      { title: "Datos integrados", text: "Entregables compatibles con los principales software mineros." },
    ],
    features: [],
    specs: [
      { title: "Sensores", rows: [
        { label: "LiDAR", metric: "Multirretorno, 240 000 pts/s" },
        { label: "Cámara RGB", metric: "45 MP" },
      ] },
      { title: "Entregables", rows: [
        { label: "Formatos", metric: "LAS, DXF, GeoTIFF, informes PDF" },
        { label: "Plazo", metric: "24 – 48 h" },
      ] },
    ],
    attributes: {
      tipo: ["Drones"],
      aplicacion: ["Tajo abierto", "Planta de procesos", "Vías y accesos"],
      modalidad: ["Servicio gestionado"],
    },
  },
  {
    slug: "sensores-iot-kb-sense",
    category: CAT,
    name: "Sensores IoT industriales KB Sense",
    model: "KB Sense",
    tagline: "Mide lo que antes era invisible.",
    summary:
      "Sensores inalámbricos de vibración, temperatura, presión y nivel con baterías de hasta 5 años, para mantenimiento predictivo en planta y mina.",
    year: 2023,
    images: [IMG.serverLights, IMG.drillRig, IMG.workerSteel],
    keySpecs: [
      { label: "Autonomía de batería", metric: "hasta 5 años" },
      { label: "Alcance LoRaWAN", metric: "10 km", imperial: "6,2 mi" },
      { label: "Protección", metric: "IP68" },
    ],
    overview: {
      heading: "Mantenimiento basado en condición",
      text: "KB Sense conecta fajas, chancadoras, bombas y tanques a la plataforma de monitoreo. Los modelos de analítica detectan fallas incipientes y programan la intervención antes de la parada.",
    },
    benefits: [
      { title: "Instalación sin cables", text: "Montaje magnético o roscado en minutos." },
      { title: "Largo alcance", text: "Gateways LoRaWAN o LTE-M según el sitio." },
      { title: "Analítica incluida", text: "Alertas por tendencia, no solo por umbral." },
    ],
    features: [],
    specs: [
      { title: "Sensores", rows: [
        { label: "Variables", metric: "Vibración, temperatura, presión, nivel, caudal" },
        { label: "Protección", metric: "IP68" },
        { label: "Certificación", metric: "ATEX / IECEx (opcional)" },
      ] },
      { title: "Comunicación", rows: [
        { label: "Protocolos", metric: "LoRaWAN · LTE-M" },
        { label: "Alcance", metric: "10 km", imperial: "6,2 mi" },
      ] },
    ],
    attributes: {
      tipo: ["Sensores IoT"],
      aplicacion: ["Planta de procesos", "Minería subterránea"],
      modalidad: ["Venta", "Servicio gestionado"],
    },
  },
];
