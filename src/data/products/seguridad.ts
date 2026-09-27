import { IMG } from "../images";
import type { Product } from "../types";

const CAT = "seguridad-operacional";

export const SEGURIDAD: Product[] = [
  {
    slug: "sistema-anticolision-kb-proximity",
    category: CAT,
    name: "Sistema anticolisión KB Proximity",
    model: "KB Proximity",
    tagline: "Detección 360° de personas y vehículos, con intervención automática.",
    summary:
      "Sistema de prevención de colisiones con UWB, GNSS y radar: alerta al operador y, si es necesario, reduce la velocidad o detiene el equipo.",
    badge: "Más solicitado",
    year: 2025,
    images: [IMG.pitTruck, IMG.manTruck, IMG.trucksRow],
    keySpecs: [
      { label: "Detección", metric: "360°" },
      { label: "Rango vehículo-vehículo", metric: "5 – 200 m", imperial: "16 – 656 pies" },
      { label: "Nivel de control", metric: "Alerta · Advertencia · Intervención" },
    ],
    overview: {
      heading: "Cada interacción, bajo control",
      text: "KB Proximity combina tecnologías complementarias para detectar personas, vehículos livianos y equipos pesados en cualquier condición de visibilidad. Las alertas se escalan según la distancia y la velocidad relativa, y la intervención automática evita el impacto.",
    },
    benefits: [
      { title: "Menos incidentes", text: "Alertas tempranas y diferenciadas por tipo de interacción." },
      { title: "Intervención automática", text: "Reducción de velocidad y frenado en eventos críticos." },
      { title: "Datos para prevenir", text: "Mapas de calor de interacciones para rediseñar vías y accesos." },
    ],
    features: [
      { title: "Fusión de sensores", subtitle: "Detección confiable", text: "UWB para personas, GNSS para vehículos y radar para objetos sin tag.", points: ["Funciona con polvo, niebla y de noche", "Tags personales IP67", "Batería de 30 días"], image: IMG.manTruck },
      { title: "Pantalla en cabina", subtitle: "Información clara", text: "Pantalla con zonas de alerta y sonidos diferenciados para evitar la fatiga de alarmas.", points: ["Alertas visuales, sonoras y hápticas", "Registro de eventos", "Configuración por tipo de equipo"], image: IMG.pitTruck },
    ],
    specs: [
      { title: "Detección", rows: [
        { label: "Tecnologías", metric: "UWB + GNSS + radar" },
        { label: "Rango vehículo-vehículo", metric: "5 – 200 m", imperial: "16 – 656 pies" },
        { label: "Rango persona-vehículo", metric: "hasta 60 m", imperial: "hasta 197 pies" },
      ] },
      { title: "Componentes", rows: [
        { label: "Tag personal", metric: "IP67 · 30 días de batería" },
        { label: "Unidad de cabina", metric: "Pantalla 7\" · 12/24 V CC" },
      ] },
    ],
    standard: [
      { title: "Incluido", items: ["Unidades de cabina y antenas", "Tags personales", "Software de gestión de eventos", "Instalación y capacitación"] },
    ],
    optional: [
      { title: "Opciones", items: ["Interfaz de intervención de velocidad", "Integración con KB Command", "Soporte en sitio"] },
    ],
    attributes: {
      tipo: ["Anticolisión"],
      aplicacion: ["Tajo abierto", "Minería subterránea"],
      modalidad: ["Venta", "Servicio gestionado"],
    },
  },
  {
    slug: "deteccion-de-fatiga-kb-vigil",
    category: CAT,
    name: "Detección de fatiga KB Vigil",
    model: "KB Vigil",
    tagline: "Un copiloto que nunca se distrae.",
    summary:
      "Cámara infrarroja en cabina que detecta microsueños y distracciones en menos de 1 segundo, con alertas al operador y al centro de control.",
    year: 2024,
    images: [IMG.manTruck, IMG.controlRoom],
    keySpecs: [
      { label: "Tiempo de alerta", metric: "< 1 s" },
      { label: "Cámara", metric: "IR 940 nm, día y noche" },
      { label: "Procesamiento", metric: "En el borde (edge)" },
    ],
    overview: {
      heading: "Fatiga detectada antes del incidente",
      text: "KB Vigil analiza la posición de la cabeza, el cierre de párpados y la dirección de la mirada para identificar fatiga y distracción, incluso con lentes de sol. Los eventos se confirman en el centro de control para una respuesta inmediata.",
    },
    benefits: [
      { title: "Alerta inmediata", text: "Vibración del asiento y alarma sonora en la cabina." },
      { title: "Gestión de riesgo", text: "Reportes por operador, turno y horario." },
      { title: "Privacidad", text: "Procesamiento local; solo se envían los eventos." },
    ],
    features: [],
    specs: [
      { title: "Datos técnicos", rows: [
        { label: "Cámara", metric: "IR 940 nm" },
        { label: "Tiempo de alerta", metric: "< 1 s" },
        { label: "Alimentación", metric: "12 / 24 V CC" },
      ] },
    ],
    attributes: {
      tipo: ["Fatiga y distracción"],
      aplicacion: ["Tajo abierto", "Minería subterránea", "Vías y accesos"],
      modalidad: ["Venta", "Servicio gestionado"],
    },
  },
  {
    slug: "videovigilancia-perimetral-kb-sentinel",
    category: CAT,
    name: "Videovigilancia perimetral KB Sentinel",
    model: "KB Sentinel",
    tagline: "Analítica de video que ve lo que importa.",
    summary:
      "Cámaras térmicas y PTZ con analítica de inteligencia artificial para intrusión, uso de EPP y control vehicular, sobre torres solares autónomas.",
    year: 2023,
    images: [IMG.cctvMulti, IMG.cctvPole, IMG.controlRoomLarge],
    keySpecs: [
      { label: "Detección humana", metric: "hasta 1 500 m", imperial: "hasta 4 921 pies" },
      { label: "Analítica", metric: "Intrusión · EPP · vehículos" },
      { label: "Almacenamiento", metric: "30 días" },
    ],
    overview: {
      heading: "Seguridad patrimonial y operacional",
      text: "KB Sentinel protege perímetros, polvorines, almacenes y accesos. La analítica filtra falsas alarmas y solo notifica eventos relevantes al centro de control.",
    },
    benefits: [
      { title: "Menos falsas alarmas", text: "Clasificación de personas, vehículos y fauna." },
      { title: "Despliegue rápido", text: "Torres solares sin necesidad de red eléctrica." },
      { title: "Integración", text: "Eventos visibles en KB Command." },
    ],
    features: [],
    specs: [
      { title: "Cámaras", rows: [
        { label: "Tipos", metric: "Térmica, PTZ, bullet" },
        { label: "Detección humana", metric: "hasta 1 500 m", imperial: "hasta 4 921 pies" },
      ] },
      { title: "Plataforma", rows: [
        { label: "Almacenamiento", metric: "30 días (ampliable)" },
        { label: "Analítica", metric: "IA en el borde" },
      ] },
    ],
    attributes: {
      tipo: ["Videovigilancia"],
      aplicacion: ["Planta de procesos", "Campamentos", "Tajo abierto"],
      modalidad: ["Venta", "Servicio gestionado"],
    },
  },
  {
    slug: "control-de-accesos-kb-gate",
    category: CAT,
    name: "Control de accesos biométrico KB Gate",
    model: "KB Gate",
    tagline: "Solo ingresa quien está apto para trabajar.",
    summary:
      "Pórticos y torniquetes con reconocimiento facial, validación de EPP por visión artificial y alcoholímetro integrado, conectados a RR. HH. y SSOMA.",
    year: 2025,
    images: [IMG.workersSite, IMG.modularBlue, IMG.workerSteel],
    keySpecs: [
      { label: "Reconocimiento facial", metric: "< 1 s" },
      { label: "Validaciones", metric: "Identidad · EPP · alcohol" },
      { label: "Registros", metric: "50 000 usuarios" },
    ],
    overview: {
      heading: "Accesos seguros y trazables",
      text: "KB Gate verifica en segundos que cada persona esté autorizada, capacitada y con su equipo de protección completo antes de ingresar a zonas operativas, campamentos o plantas.",
    },
    benefits: [
      { title: "Cumplimiento automático", text: "Bloqueo por inducción vencida o EPP incompleto." },
      { title: "Conteo en emergencias", text: "Personal presente por zona en tiempo real." },
      { title: "Integración", text: "Conexión con sistemas de RR. HH., SSOMA y KB Command." },
    ],
    features: [],
    specs: [
      { title: "Datos técnicos", rows: [
        { label: "Reconocimiento facial", metric: "< 1 s" },
        { label: "Capacidad", metric: "50 000 usuarios" },
        { label: "Configuraciones", metric: "Torniquete, pórtico peatonal y vehicular" },
      ] },
    ],
    attributes: {
      tipo: ["Control de accesos"],
      aplicacion: ["Campamentos", "Planta de procesos", "Tajo abierto"],
      modalidad: ["Venta", "Proyecto llave en mano"],
    },
  },
];
