import { IMG } from "../images";
import type { Product } from "../types";

const CAT = "conectividad-y-telecomunicaciones";

export const CONECTIVIDAD: Product[] = [
  {
    slug: "red-lte-5g-privada-kb-core",
    category: CAT,
    name: "Red LTE/5G privada KB Core",
    model: "KB Core",
    tagline: "La columna vertebral de la mina conectada.",
    summary:
      "Red celular privada con núcleo en sitio para voz, video, telemetría y operación remota, con cobertura de hasta 15 km por celda.",
    badge: "Destacado",
    year: 2025,
    images: [IMG.towersSunset, IMG.cellTower, IMG.serverRack, IMG.pitAerial],
    keySpecs: [
      { label: "Cobertura por celda", metric: "hasta 15 km", imperial: "hasta 9,3 mi" },
      { label: "Latencia", metric: "< 20 ms (LTE) · < 10 ms (5G)" },
      { label: "Disponibilidad", metric: "99,99 %" },
    ],
    overview: {
      heading: "Una sola red para toda la operación",
      text: "KB Core reemplaza redes Wi-Fi y radios dispersas por una red celular privada, segura y con calidad de servicio garantizada. Conecta camiones, perforadoras, sensores, cámaras y personas, y habilita la teleoperación y la autonomía.",
    },
    benefits: [
      { title: "Cobertura en tajos profundos", text: "Planificación de radio con modelos 3D del tajo para eliminar zonas sin señal." },
      { title: "Seguridad de nivel industrial", text: "Tarjetas SIM privadas, cifrado de extremo a extremo y núcleo on-premise." },
      { title: "Lista para la autonomía", text: "Baja latencia y calidad de servicio por aplicación para equipos autónomos." },
    ],
    features: [
      { title: "Núcleo on-premise redundante", subtitle: "Operación sin depender de Internet", text: "El núcleo de red se instala en tu sala técnica con redundancia geográfica opcional.", points: ["Conmutación automática", "Gestión centralizada", "Actualizaciones sin interrupciones"], image: IMG.serverRack },
      { title: "Calidad de servicio por aplicación", subtitle: "Prioridad a lo crítico", text: "La telemetría de seguridad y la teleoperación tienen prioridad sobre el video y los datos administrativos.", points: ["Segmentación por slices", "Prioridad para PTT/PoC", "Monitoreo de KPI de red"], image: IMG.cellTower },
      { title: "Integración total", subtitle: "Un ecosistema conectado", text: "Compatible con KB Fleet, KB Proximity, KB Sentinel y plataformas de terceros.", points: ["API abiertas", "Terminales industriales certificados", "Soporte 24/7"], image: IMG.controlRoom },
    ],
    specs: [
      { title: "Radio", rows: [
        { label: "Tecnologías", metric: "LTE / 5G NR (NSA y SA)" },
        { label: "Cobertura por celda", metric: "hasta 15 km", imperial: "hasta 9,3 mi" },
        { label: "Bandas", metric: "Según asignación del MTC" },
      ] },
      { title: "Desempeño", rows: [
        { label: "Latencia", metric: "< 20 ms (LTE) · < 10 ms (5G SA)" },
        { label: "Dispositivos simultáneos", metric: "10 000+" },
        { label: "Disponibilidad", metric: "99,99 %" },
      ] },
      { title: "Núcleo", rows: [
        { label: "Ubicación", metric: "On-premise, redundante" },
        { label: "Servicios", metric: "Datos, VoLTE, PTT/PoC, video" },
      ] },
    ],
    standard: [
      { title: "Alcance", items: ["Estudio y planificación de radio", "Núcleo de red y estaciones base", "Instalación y puesta en marcha", "Capacitación del equipo de TI"] },
    ],
    optional: [
      { title: "Opciones", items: ["Operación como servicio gestionado", "Torres remolcables KB Tower", "Extensión subterránea KB Deep"] },
    ],
    attributes: {
      tipo: ["Red celular privada"],
      aplicacion: ["Tajo abierto", "Minería subterránea", "Planta de procesos"],
      modalidad: ["Proyecto llave en mano", "Servicio gestionado"],
    },
  },
  {
    slug: "torre-remolcable-kb-tower",
    category: CAT,
    name: "Torre remolcable KB Tower",
    model: "KB Tower",
    tagline: "Cobertura donde avanza el minado, en menos de 2 horas.",
    summary:
      "Torre de comunicaciones sobre remolque con mástil telescópico de 18 m y energía solar-híbrida, para extender la red a nuevos frentes.",
    year: 2024,
    images: [IMG.towerSky, IMG.solarDesert, IMG.towersSunset],
    keySpecs: [
      { label: "Altura del mástil", metric: "18 m", imperial: "59 pies" },
      { label: "Autonomía sin sol", metric: "7 días" },
      { label: "Despliegue", metric: "< 2 h" },
    ],
    overview: {
      heading: "La red se mueve con la operación",
      text: "Los frentes de minado cambian cada semana. KB Tower permite reubicar celdas LTE, radios y cámaras sin obras civiles, con energía autónoma y monitoreo remoto del estado del equipo.",
    },
    benefits: [
      { title: "Sin obras civiles", text: "Se nivela con estabilizadores y se despliega con un solo operador." },
      { title: "Energía autónoma", text: "Paneles solares, baterías de litio y generador de respaldo." },
      { title: "Monitoreo remoto", text: "Estado de energía, mástil y equipos visible desde el centro de control." },
    ],
    features: [],
    specs: [
      { title: "Mástil", rows: [
        { label: "Altura extendida", metric: "18 m", imperial: "59 pies" },
        { label: "Viento (mástil retraído)", metric: "160 km/h", imperial: "99 mph" },
      ] },
      { title: "Energía", rows: [
        { label: "Paneles solares", metric: "4 × 450 W" },
        { label: "Respaldo", metric: "Generador diésel automático" },
        { label: "Autonomía sin sol", metric: "7 días" },
      ] },
      { title: "Remolque", rows: [
        { label: "Peso", metric: "3 200 kg", imperial: "7 055 lb" },
        { label: "Ejes", metric: "1, con frenos" },
      ] },
    ],
    attributes: {
      tipo: ["Infraestructura de telecom"],
      aplicacion: ["Tajo abierto", "Vías y accesos"],
      modalidad: ["Venta", "Alquiler"],
    },
  },
  {
    slug: "backbone-de-fibra-optica-minera",
    category: CAT,
    name: "Backbone de fibra óptica minera",
    model: "KB Fiber",
    tagline: "Anillos de fibra redundantes entre mina, planta y campamento.",
    summary:
      "Diseño, tendido y certificación de redes de fibra óptica aérea y subterránea con cable armado y topología en anillo.",
    year: 2022,
    images: [IMG.fiberSwitch, IMG.serverLights, IMG.workersTablet],
    keySpecs: [
      { label: "Capacidad", metric: "hasta 96 hilos" },
      { label: "Distancia sin repetidor", metric: "40 km", imperial: "24,9 mi" },
      { label: "Topología", metric: "Anillo redundante" },
    ],
    overview: {
      heading: "Capacidad para las próximas décadas",
      text: "Una red de fibra bien diseñada soporta la operación actual y la futura: autonomía, video de alta definición y gemelos digitales. Certificamos cada tramo con OTDR y entregamos documentación as-built georreferenciada.",
    },
    benefits: [
      { title: "Cable armado", text: "Protección antirroedores y contra impactos en tendidos mineros." },
      { title: "Redundancia", text: "Anillos con conmutación automática ante cortes." },
      { title: "Documentación completa", text: "Planos as-built y reportes OTDR por tramo." },
    ],
    features: [],
    specs: [
      { title: "Cable", rows: [
        { label: "Tipo de fibra", metric: "Monomodo G.652D" },
        { label: "Capacidad", metric: "hasta 96 hilos" },
        { label: "Protección", metric: "Armadura de acero corrugado" },
      ] },
      { title: "Red", rows: [
        { label: "Distancia sin repetidor", metric: "40 km", imperial: "24,9 mi" },
        { label: "Tendido", metric: "Aéreo, canalizado o directamente enterrado" },
      ] },
    ],
    attributes: {
      tipo: ["Fibra óptica"],
      aplicacion: ["Tajo abierto", "Planta de procesos", "Campamentos"],
      modalidad: ["Proyecto llave en mano"],
    },
  },
  {
    slug: "conectividad-subterranea-kb-deep",
    category: CAT,
    name: "Conectividad subterránea KB Deep",
    model: "KB Deep",
    tagline: "Voz, datos y localización en cada galería.",
    summary:
      "Red Wi-Fi 6 industrial y cable radiante para minas subterráneas, con localización de personal y equipos en tiempo real.",
    badge: "Nuevo",
    year: 2026,
    images: [IMG.tunnelLit, IMG.railWorkers, IMG.undergroundLoader],
    keySpecs: [
      { label: "Alcance por punto de acceso", metric: "300 m de galería", imperial: "984 pies" },
      { label: "Localización", metric: "±3 m", imperial: "±10 pies" },
      { label: "Protección", metric: "IP67" },
    ],
    overview: {
      heading: "La mina subterránea, tan conectada como la superficie",
      text: "KB Deep lleva conectividad de banda ancha a rampas, cámaras y frentes de avance. Cada trabajador y equipo lleva un tag que reporta su ubicación, lo que agiliza la evacuación y la gestión de emergencias.",
    },
    benefits: [
      { title: "Evacuación más rápida", text: "Conteo de personal por zona en tiempo real." },
      { title: "Despliegue modular", text: "Los nodos avanzan con el desarrollo de la mina." },
      { title: "Ambientes extremos", text: "Equipos IP67 para humedad, polvo y vibración." },
    ],
    features: [],
    specs: [
      { title: "Red", rows: [
        { label: "Tecnología", metric: "Wi-Fi 6 industrial + cable radiante" },
        { label: "Throughput", metric: "hasta 1,2 Gbps" },
        { label: "Alcance por punto de acceso", metric: "300 m", imperial: "984 pies" },
      ] },
      { title: "Entorno", rows: [
        { label: "Protección", metric: "IP67" },
        { label: "Temperatura de operación", metric: "−20 a 60 °C", imperial: "−4 a 140 °F" },
      ] },
    ],
    attributes: {
      tipo: ["Red subterránea"],
      aplicacion: ["Minería subterránea"],
      modalidad: ["Proyecto llave en mano", "Servicio gestionado"],
    },
  },
];
