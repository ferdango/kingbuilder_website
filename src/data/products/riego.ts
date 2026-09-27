import { IMG } from "../images";
import type { Product } from "../types";

const CAT = "riego-y-supresion-de-polvo";

export const RIEGO: Product[] = [
  {
    slug: "camion-cisterna-kb-75k",
    category: CAT,
    name: "Camión cisterna KB-75K",
    model: "KB-75K",
    tagline: "Máxima capacidad de riego para vías de acarreo de alto tránsito.",
    summary:
      "Cisterna de 75 700 L montada sobre chasis minero de 100 t, con rociadores inteligentes y cañón monitor para supresión de polvo y combate de incendios.",
    badge: "Destacado",
    year: 2025,
    images: [IMG.waterSpray, IMG.truckRoad, IMG.pitTruck, IMG.trucksRow],
    keySpecs: [
      { label: "Capacidad del tanque", metric: "75 700 L", imperial: "20 000 gal" },
      { label: "Potencia bruta", metric: "765 kW", imperial: "1 025 hp" },
      { label: "Caudal máximo de riego", metric: "6 814 L/min", imperial: "1 800 gal/min" },
    ],
    overview: {
      heading: "Control del polvo · Mayor visibilidad · Menor riesgo",
      text: "El KB-75K mantiene las vías de acarreo húmedas y estables durante todo el turno. Su sistema de riego regula el caudal según la velocidad del camión y la geocerca de cada tramo, de modo que solo se usa el agua necesaria. El resultado: mejor visibilidad para los operadores, menos desgaste de neumáticos y componentes, y un aire más limpio para todo el sitio.",
    },
    benefits: [
      { title: "Mayor seguridad y productividad", text: "Vías sin polvo significan más visibilidad, menos incidentes y ciclos de acarreo más rápidos." },
      { title: "Conectividad escalable", text: "Telemetría integrada con KB Fleet y KB Command para planificar el riego por tramos y turnos." },
      { title: "Menores costos de operación", text: "Riego proporcional a la velocidad: hasta 30 % menos agua y combustible por kilómetro regado." },
    ],
    features: [
      {
        title: "Mejor seguridad en el sitio",
        subtitle: "Visibilidad en todo momento",
        text: "Cámaras perimetrales, alarma de retroceso y luces LED de trabajo 360° protegen al operador y a quienes trabajan alrededor.",
        points: ["Monitor de cámaras de 10\" en cabina", "Escaleras y pasarelas con barandas", "Parada de emergencia a nivel de piso"],
        image: IMG.truckRoad,
      },
      {
        title: "Cabina cómoda",
        subtitle: "Comodidad del operador",
        text: "Asiento con suspensión neumática, climatización automática y bajo nivel de ruido para jornadas largas en altura.",
        points: ["72 dB(A) de ruido interior", "Controles de riego en el apoyabrazos", "Estructura ROPS/FOPS certificada"],
        image: IMG.manTruck,
      },
      {
        title: "Productividad optimizada",
        subtitle: "Alcance sus metas de producción",
        text: "El cañón monitor de 50 m y los cabezales independientes permiten regar vías, rampas y frentes de carguío con un solo equipo.",
        points: ["4 rociadores traseros y 2 laterales", "Cañón monitor controlado por joystick", "Modo de riego intermitente"],
        image: IMG.pitTrucks,
      },
      {
        title: "Eficiencia y sostenibilidad",
        subtitle: "Use solo el agua que necesita",
        text: "El control proporcional ajusta el caudal a la velocidad de avance y evita encharcamientos que dañan la vía.",
        points: ["Riego por geocerca", "Reportes de consumo por turno", "Compatible con aditivos supresores"],
        image: IMG.dumpTop,
      },
    ],
    specs: [
      {
        title: "Motor",
        rows: [
          { label: "Tipo de motor", metric: "Diésel V12, Tier 4 Final / Etapa V" },
          { label: "Potencia bruta (SAE J1995)", metric: "765 kW", imperial: "1 025 hp" },
          { label: "Potencia neta (SAE J1349)", metric: "700 kW", imperial: "939 hp" },
          { label: "Cilindrada", metric: "32,1 L", imperial: "1 959 pulg³" },
        ],
      },
      {
        title: "Tanque y sistema de riego",
        rows: [
          { label: "Capacidad del tanque", metric: "75 700 L", imperial: "20 000 gal" },
          { label: "Material del tanque", metric: "Acero de alta resistencia con deflectores internos" },
          { label: "Caudal máximo", metric: "6 814 L/min", imperial: "1 800 gal/min" },
          { label: "Alcance del cañón monitor", metric: "50 m", imperial: "164 pies" },
          { label: "Cabezales de rociado", metric: "4 traseros + 2 laterales" },
        ],
      },
      {
        title: "Operación",
        rows: [
          { label: "Velocidad máxima con carga", metric: "67,1 km/h", imperial: "41,7 mph" },
          { label: "Peso bruto objetivo", metric: "164 654 kg", imperial: "363 000 lb" },
          { label: "Diámetro de giro", metric: "28,4 m", imperial: "93,2 pies" },
        ],
      },
      {
        title: "Neumáticos y cabina",
        rows: [
          { label: "Neumático estándar", metric: "27.00R49 (E4)" },
          { label: "Ruido interior", metric: "72 dB(A)" },
          { label: "Estructuras de protección", metric: "ROPS ISO 3471 · FOPS ISO 3449" },
        ],
      },
    ],
    standard: [
      { title: "Sistema de riego", items: ["Bomba centrífuga de accionamiento hidráulico", "Control proporcional a la velocidad", "Cañón monitor frontal", "Filtro de succión de acero inoxidable"] },
      { title: "Seguridad", items: ["Cámaras perimetrales con monitor", "Alarma de retroceso", "Luces LED de trabajo 360°", "Sistema de supresión de incendios en motor"] },
      { title: "Tecnología", items: ["Módulo de telemetría KB Fleet", "Pantalla táctil de riego", "Registro de consumo de agua"] },
    ],
    optional: [
      { title: "Opciones", items: ["Kit de riego inteligente KB AquaSmart", "Dosificador de aditivos supresores", "Sistema anticolisión KB Proximity", "Paquete para gran altitud (> 4 500 m s. n. m.)"] },
    ],
    attributes: {
      tipo: ["Camión cisterna minero"],
      aplicacion: ["Tajo abierto", "Vías y accesos"],
      modalidad: ["Venta", "Alquiler"],
    },
  },
  {
    slug: "camion-cisterna-articulado-kb-40k",
    category: CAT,
    name: "Cisterna articulada KB-40K",
    model: "KB-40K",
    tagline: "Tracción total para riego en rampas y terrenos difíciles.",
    summary:
      "Cisterna de 40 000 L sobre chasis articulado 6×6: ideal para rampas pronunciadas, accesos de construcción y vías con baja capacidad portante.",
    year: 2024,
    images: [IMG.roadTanker, IMG.loaderTrucks, IMG.dumpTop],
    keySpecs: [
      { label: "Capacidad del tanque", metric: "40 000 L", imperial: "10 567 gal" },
      { label: "Potencia bruta", metric: "373 kW", imperial: "500 hp" },
      { label: "Caudal máximo de riego", metric: "3 800 L/min", imperial: "1 004 gal/min" },
    ],
    overview: {
      heading: "Agilidad donde otros equipos no llegan",
      text: "La KB-40K combina la maniobrabilidad de un chasis articulado con un sistema de riego de alto caudal. Llega a rampas, botaderos y accesos en construcción donde un camión rígido perdería tracción, manteniendo el polvo bajo control desde la primera fase del proyecto.",
    },
    benefits: [
      { title: "Tracción 6×6 permanente", text: "Opera con seguridad en pendientes de hasta 18 % y superficies blandas." },
      { title: "Versatilidad", text: "Riego de vías, apoyo a compactación y reserva contra incendios en un solo equipo." },
      { title: "Bajo costo por hora", text: "Menor consumo de combustible y mantenimiento simplificado frente a equipos de mayor tonelaje." },
    ],
    features: [
      { title: "Chasis articulado", subtitle: "Estabilidad en pendiente", text: "Bloqueo de diferenciales automático y suspensión oscilante para mantener las seis ruedas en contacto con el terreno.", points: ["Pendiente máxima 18 %", "Bloqueo automático de diferenciales", "Freno de servicio en baño de aceite"], image: IMG.loaderTrucks },
      { title: "Riego de precisión", subtitle: "Patrones configurables", text: "Tres patrones de riego seleccionables desde la cabina para adaptar el ancho y la intensidad a cada tramo.", points: ["Ancho de riego de 6 a 18 m", "Cañón monitor opcional", "Válvulas eléctricas independientes"], image: IMG.roadTanker },
      { title: "Mantenimiento simple", subtitle: "Más horas disponibles", text: "Puntos de servicio agrupados a nivel de piso y tanque con compuerta de inspección para limpieza rápida.", points: ["Intervalos de 500 h", "Drenaje rápido del tanque", "Diagnóstico remoto"], image: IMG.dumpTop },
    ],
    specs: [
      { title: "Motor", rows: [
        { label: "Tipo de motor", metric: "Diésel 6 cilindros, Tier 3 / Etapa IIIA" },
        { label: "Potencia bruta", metric: "373 kW", imperial: "500 hp" },
      ] },
      { title: "Tanque y riego", rows: [
        { label: "Capacidad del tanque", metric: "40 000 L", imperial: "10 567 gal" },
        { label: "Caudal máximo", metric: "3 800 L/min", imperial: "1 004 gal/min" },
        { label: "Ancho de riego", metric: "6 – 18 m", imperial: "20 – 59 pies" },
      ] },
      { title: "Operación", rows: [
        { label: "Velocidad máxima", metric: "55 km/h", imperial: "34,2 mph" },
        { label: "Peso bruto", metric: "72 500 kg", imperial: "159 835 lb" },
        { label: "Pendiente máxima", metric: "18 %" },
        { label: "Neumáticos", metric: "29.5R25" },
      ] },
    ],
    standard: [
      { title: "Incluido", items: ["Bomba de riego hidráulica", "Tres patrones de riego", "Cámara de retroceso", "Telemetría básica"] },
    ],
    optional: [
      { title: "Opciones", items: ["Cañón monitor frontal", "Kit KB AquaSmart", "Carrete de manguera contra incendios"] },
    ],
    attributes: {
      tipo: ["Cisterna articulada"],
      aplicacion: ["Tajo abierto", "Vías y accesos"],
      modalidad: ["Venta", "Alquiler"],
    },
  },
  {
    slug: "cisterna-subterranea-kb-20s",
    category: CAT,
    name: "Cisterna subterránea KB-20S",
    model: "KB-20S",
    tagline: "Bajo perfil para riego y servicios en galerías y rampas.",
    summary:
      "Cisterna de 20 000 L con altura de 2,8 m para labores subterráneas: riego de rampas, lavado de frentes y abastecimiento de agua industrial.",
    year: 2023,
    images: [IMG.undergroundLoader, IMG.tunnelLit, IMG.railWorkers],
    keySpecs: [
      { label: "Capacidad del tanque", metric: "20 000 L", imperial: "5 283 gal" },
      { label: "Altura total", metric: "2,8 m", imperial: "9,2 pies" },
      { label: "Potencia bruta", metric: "250 kW", imperial: "335 hp" },
    ],
    overview: {
      heading: "Diseñada para la mina subterránea",
      text: "Con un perfil compacto y cabina cerrada presurizada, la KB-20S circula por rampas y galerías estándar manteniendo las vías húmedas y el polvo en suspensión bajo control, lo que mejora la calidad del aire y la visibilidad en interior mina.",
    },
    benefits: [
      { title: "Perfil compacto", text: "2,8 m de altura y 3,0 m de ancho para secciones de galería estándar." },
      { title: "Aire más limpio", text: "Reduce el polvo respirable en rampas y cámaras de carguío." },
      { title: "Multifunción", text: "Riego, lavado de frentes y abastecimiento a perforadoras." },
    ],
    features: [
      { title: "Cabina presurizada", subtitle: "Protección del operador", text: "Cabina cerrada con filtración HEPA y aire acondicionado para ambientes con polvo y alta temperatura.", points: ["Filtración HEPA", "ROPS/FOPS", "Iluminación LED de alto rendimiento"], image: IMG.tunnelLit },
      { title: "Riego frontal y trasero", subtitle: "Cobertura completa", text: "Rociadores delanteros y traseros para regar en ambos sentidos sin maniobras en galerías estrechas.", points: ["Riego bidireccional", "Manguera de lavado de 30 m", "Bomba de alta presión"], image: IMG.undergroundLoader },
    ],
    specs: [
      { title: "Dimensiones", rows: [
        { label: "Altura total", metric: "2,8 m", imperial: "9,2 pies" },
        { label: "Ancho total", metric: "3,0 m", imperial: "9,8 pies" },
      ] },
      { title: "Tanque y riego", rows: [
        { label: "Capacidad", metric: "20 000 L", imperial: "5 283 gal" },
        { label: "Caudal máximo", metric: "1 500 L/min", imperial: "396 gal/min" },
      ] },
      { title: "Tren de fuerza", rows: [
        { label: "Potencia bruta", metric: "250 kW", imperial: "335 hp" },
        { label: "Velocidad máxima", metric: "25 km/h", imperial: "15,5 mph" },
        { label: "Emisiones", metric: "Tier 4 Final con filtro de partículas" },
      ] },
    ],
    standard: [
      { title: "Incluido", items: ["Cabina presurizada con HEPA", "Riego bidireccional", "Manguera de lavado", "Extintores y supresión automática"] },
    ],
    optional: [
      { title: "Opciones", items: ["Localización de personal y equipos KB Deep", "Sistema anticolisión KB Proximity"] },
    ],
    attributes: {
      tipo: ["Cisterna de bajo perfil"],
      aplicacion: ["Minería subterránea"],
      modalidad: ["Venta", "Alquiler"],
    },
  },
  {
    slug: "riego-inteligente-kb-aquasmart",
    category: CAT,
    name: "Riego inteligente KB AquaSmart",
    model: "AquaSmart",
    tagline: "Convierte cualquier cisterna en un sistema de riego conectado.",
    summary:
      "Kit de automatización que regula el caudal por velocidad y geocerca, registra cada litro aplicado y se integra con tu centro de control.",
    badge: "Nuevo",
    year: 2026,
    images: [IMG.dumpTop, IMG.controlRoom, IMG.waterSpray],
    keySpecs: [
      { label: "Ahorro de agua", metric: "hasta 30 %" },
      { label: "Precisión de geocerca", metric: "±1 m", imperial: "±3,3 pies" },
      { label: "Instalación", metric: "1 turno (12 h)" },
    ],
    overview: {
      heading: "Cada litro, donde se necesita",
      text: "KB AquaSmart instala sensores de velocidad, válvulas proporcionales y un controlador con GNSS en tu flota de cisternas. El sistema decide cuánto regar en cada tramo según la velocidad, el tipo de vía y las reglas definidas desde el centro de control.",
    },
    benefits: [
      { title: "Menos agua, menos costo", text: "Evita el riego excesivo que genera barro, derrapes y daños en la vía." },
      { title: "Trazabilidad total", text: "Mapas de riego y reportes por turno para auditorías ambientales." },
      { title: "Retrofit universal", text: "Compatible con cisternas de 20 000 a 120 000 L de cualquier marca." },
    ],
    features: [
      { title: "Riego por geocerca", subtitle: "Reglas por tramo", text: "Define zonas de riego intenso, moderado o prohibido (cruces, rampas, talleres) desde el mapa.", points: ["Editor de zonas web", "Actualización remota de reglas", "Alertas de riego fuera de zona"], image: IMG.pitAerial },
      { title: "Tablero de consumo", subtitle: "KPI en tiempo real", text: "Litros por kilómetro, cobertura por turno y disponibilidad de cada cisterna en un solo tablero.", points: ["Exportación a Excel y API", "Integración con KB Command", "Histórico de 24 meses"], image: IMG.controlRoom },
    ],
    specs: [
      { title: "Controlador", rows: [
        { label: "Pantalla", metric: "10\" táctil, IP66" },
        { label: "Posicionamiento", metric: "GNSS multibanda, ±1 m", imperial: "±3,3 pies" },
        { label: "Comunicación", metric: "LTE / Wi-Fi / radio" },
      ] },
      { title: "Compatibilidad", rows: [
        { label: "Capacidad de cisternas", metric: "20 000 – 120 000 L", imperial: "5 283 – 31 700 gal" },
        { label: "Alimentación", metric: "24 V CC" },
      ] },
    ],
    standard: [
      { title: "Incluido", items: ["Controlador y antena GNSS", "Válvulas proporcionales", "Sensor de velocidad", "Licencia de plataforma por 12 meses", "Instalación y capacitación"] },
    ],
    optional: [
      { title: "Opciones", items: ["Caudalímetro electromagnético", "Sensor de nivel de tanque", "Soporte gestionado 24/7"] },
    ],
    attributes: {
      tipo: ["Kit de automatización"],
      aplicacion: ["Tajo abierto", "Vías y accesos"],
      modalidad: ["Venta", "Servicio gestionado"],
    },
  },
  {
    slug: "canon-nebulizador-kb-mist-60",
    category: CAT,
    name: "Cañón nebulizador KB Mist-60",
    model: "Mist-60",
    tagline: "Niebla fina que atrapa el polvo en chancadoras y acopios.",
    summary:
      "Cañón de nebulización de 60 m de alcance para controlar polvo en suspensión en chancado, fajas transportadoras, acopios y zonas de voladura.",
    year: 2022,
    images: [IMG.drillRig, IMG.saltMine, IMG.tailings],
    keySpecs: [
      { label: "Alcance", metric: "60 m", imperial: "197 pies" },
      { label: "Cobertura", metric: "11 300 m²", imperial: "121 700 pies²" },
      { label: "Consumo de agua", metric: "50 – 100 L/min", imperial: "13 – 26 gal/min" },
    ],
    overview: {
      heading: "Supresión de polvo en suspensión",
      text: "El KB Mist-60 atomiza el agua en gotas de 50 a 150 µm que capturan las partículas finas antes de que se dispersen, con un consumo de agua muy inferior al riego convencional.",
    },
    benefits: [
      { title: "Alto alcance", text: "Cubre acopios y zonas de descarga completas desde un solo punto." },
      { title: "Bajo consumo", text: "Hasta 90 % menos agua que el riego con mangueras." },
      { title: "Montaje flexible", text: "Sobre remolque, pedestal fijo o torre." },
    ],
    features: [
      { title: "Oscilación programable", subtitle: "Cobertura automática", text: "Rotación de 0 a 320° e inclinación de −10 a 50° programables según el viento y el área a proteger.", points: ["Control remoto por radio", "Sensor de viento opcional", "Modo automático por horario"], image: IMG.saltMine },
    ],
    specs: [
      { title: "Desempeño", rows: [
        { label: "Alcance", metric: "60 m", imperial: "197 pies" },
        { label: "Tamaño de gota", metric: "50 – 150 µm" },
        { label: "Rotación", metric: "0 – 320°" },
      ] },
      { title: "Datos técnicos", rows: [
        { label: "Potencia del ventilador", metric: "30 kW", imperial: "40 hp" },
        { label: "Peso", metric: "1 800 kg", imperial: "3 968 lb" },
      ] },
    ],
    attributes: {
      tipo: ["Nebulizador"],
      aplicacion: ["Planta de procesos", "Tajo abierto"],
      modalidad: ["Venta", "Alquiler"],
    },
  },
];
