import type { Job, JobSummary } from "./types";

// Ofertas laborales de demostración. En producción se reemplazan por la
// integración con el ATS (bolsa de trabajo) que use King Builder.

const AREAS = {
  "Ingeniería": {
    responsibilities: [
      "Elaborar y revisar ingeniería de detalle, metrados y especificaciones técnicas.",
      "Coordinar con clientes, supervisión y especialidades para asegurar la constructibilidad.",
      "Controlar alcance, costo y plazo del proyecto con indicadores semanales.",
      "Participar en revisiones de riesgos, lecciones aprendidas y mejora continua.",
    ],
    requirements: [
      "Título profesional en ingeniería civil, mecánica o afín, colegiado y habilitado.",
      "Experiencia mínima de 3 años en proyectos mineros o industriales.",
      "Dominio de AutoCAD / Civil 3D y MS Project o Primavera P6.",
      "Disponibilidad para trabajar en unidades mineras a gran altitud.",
    ],
  },
  "Operaciones": {
    responsibilities: [
      "Ejecutar las actividades de obra según el plan de trabajo y los estándares de seguridad.",
      "Supervisar al personal a cargo y asegurar el uso correcto de EPP y equipos.",
      "Reportar avance diario, incidencias y requerimientos de recursos.",
      "Aplicar herramientas de gestión de riesgos (IPERC, ATS, PETAR).",
    ],
    requirements: [
      "Secundaria completa o técnico en construcción, operación de equipos o afín.",
      "Experiencia mínima de 2 años en minería a tajo abierto o subterránea.",
      "Licencia de conducir vigente (A-IIIc para operadores).",
      "Certificado de aptitud médica para trabajo en altura geográfica.",
    ],
  },
  "Tecnología e innovación": {
    responsibilities: [
      "Diseñar, implementar y mantener soluciones de conectividad, monitoreo y automatización.",
      "Documentar arquitecturas, configuraciones y procedimientos de operación.",
      "Brindar soporte de segundo nivel a clientes y equipos de campo.",
      "Evaluar nuevas tecnologías y proponer mejoras a la plataforma KB.",
    ],
    requirements: [
      "Título en ingeniería de telecomunicaciones, electrónica, sistemas o afín.",
      "Experiencia de 2 a 5 años en redes industriales, IoT o desarrollo de software.",
      "Certificaciones de fabricante deseables (redes, nube, ciberseguridad).",
      "Inglés técnico intermedio.",
    ],
  },
  "Seguridad, salud y medio ambiente": {
    responsibilities: [
      "Implementar el sistema de gestión SSOMA en los frentes de trabajo.",
      "Realizar inspecciones, observaciones preventivas y auditorías internas.",
      "Liderar investigaciones de incidentes y hacer seguimiento a las acciones correctivas.",
      "Capacitar al personal en estándares, procedimientos y respuesta a emergencias.",
    ],
    requirements: [
      "Título en ingeniería de seguridad, industrial, ambiental o afín.",
      "Experiencia mínima de 3 años en minería (D.S. 024-2016-EM y modificatorias).",
      "Conocimiento de ISO 45001 e ISO 14001.",
      "Disponibilidad para régimen atípico de trabajo.",
    ],
  },
  "Mantenimiento": {
    responsibilities: [
      "Ejecutar mantenimientos preventivos, predictivos y correctivos de equipos.",
      "Diagnosticar fallas mecánicas, eléctricas e hidráulicas.",
      "Registrar las intervenciones en el sistema de gestión de mantenimiento.",
      "Cumplir los procedimientos de bloqueo y etiquetado (LOTO).",
    ],
    requirements: [
      "Técnico titulado en mecánica de equipo pesado, electricidad o afín.",
      "Experiencia mínima de 3 años en mantenimiento de equipos mineros.",
      "Manejo de herramientas de diagnóstico electrónico.",
      "Certificaciones de fabricante deseables.",
    ],
  },
  "Administración y finanzas": {
    responsibilities: [
      "Gestionar procesos administrativos, contables o de personal del área.",
      "Elaborar reportes de gestión y conciliaciones periódicas.",
      "Asegurar el cumplimiento de políticas internas y normativa tributaria y laboral.",
      "Coordinar con proyectos y áreas de soporte.",
    ],
    requirements: [
      "Bachiller o titulado en contabilidad, administración, economía o afín.",
      "Experiencia de 2 años en empresas de construcción o minería.",
      "Excel avanzado y experiencia en ERP.",
      "Orientación al detalle y trabajo en equipo.",
    ],
  },
  "Comercial": {
    responsibilities: [
      "Desarrollar relaciones con clientes mineros y detectar nuevas oportunidades.",
      "Elaborar propuestas técnico-económicas junto a ingeniería y preventa.",
      "Gestionar el pipeline comercial en el CRM.",
      "Representar a King Builder en ferias y eventos del sector.",
    ],
    requirements: [
      "Título en ingeniería o administración.",
      "Experiencia mínima de 4 años en ventas B2B al sector minero.",
      "Red de contactos en operaciones mineras del Perú.",
      "Disponibilidad para viajar.",
    ],
  },
  "Cadena de suministro": {
    responsibilities: [
      "Gestionar compras, almacenes o logística de materiales y equipos.",
      "Evaluar y homologar proveedores nacionales e internacionales.",
      "Controlar inventarios y asegurar la trazabilidad de los materiales.",
      "Coordinar el transporte hacia las unidades mineras.",
    ],
    requirements: [
      "Técnico o profesional en administración, ingeniería industrial o afín.",
      "Experiencia de 2 años en logística de proyectos.",
      "Manejo de ERP y Excel intermedio.",
      "Conocimiento de comercio exterior deseable.",
    ],
  },
} as const;

type Area = keyof typeof AREAS;

const TITLES: [string, Area, string][] = [
  ["Ingeniero(a) residente de obra", "Ingeniería", "Supervisor"],
  ["Ingeniero(a) de costos y presupuestos", "Ingeniería", "Especialista"],
  ["Ingeniero(a) estructural", "Ingeniería", "Especialista"],
  ["Ingeniero(a) de planeamiento y control de proyectos", "Ingeniería", "Especialista"],
  ["Ingeniero(a) civil de oficina técnica", "Ingeniería", "Analista / Técnico"],
  ["Jefe(a) de proyecto — campamentos modulares", "Ingeniería", "Jefatura / Gerencia"],
  ["Supervisor(a) de movimiento de tierras", "Operaciones", "Supervisor"],
  ["Operador(a) de camión cisterna", "Operaciones", "Analista / Técnico"],
  ["Operador(a) de excavadora", "Operaciones", "Analista / Técnico"],
  ["Capataz de estructuras metálicas", "Operaciones", "Supervisor"],
  ["Supervisor(a) de montaje modular", "Operaciones", "Supervisor"],
  ["Jefe(a) de guardia", "Operaciones", "Jefatura / Gerencia"],
  ["Ingeniero(a) de redes LTE/5G privadas", "Tecnología e innovación", "Especialista"],
  ["Especialista en fibra óptica", "Tecnología e innovación", "Especialista"],
  ["Desarrollador(a) full stack — plataforma KB", "Tecnología e innovación", "Analista / Técnico"],
  ["Analista de datos operacionales", "Tecnología e innovación", "Analista / Técnico"],
  ["Técnico(a) en telecomunicaciones", "Tecnología e innovación", "Analista / Técnico"],
  ["Ingeniero(a) de automatización y control", "Tecnología e innovación", "Especialista"],
  ["Practicante de ingeniería de telecomunicaciones", "Tecnología e innovación", "Practicante"],
  ["Supervisor(a) SSOMA", "Seguridad, salud y medio ambiente", "Supervisor"],
  ["Ingeniero(a) de seguridad", "Seguridad, salud y medio ambiente", "Especialista"],
  ["Médico(a) ocupacional", "Seguridad, salud y medio ambiente", "Especialista"],
  ["Especialista ambiental", "Seguridad, salud y medio ambiente", "Especialista"],
  ["Coordinador(a) de respuesta a emergencias", "Seguridad, salud y medio ambiente", "Supervisor"],
  ["Técnico(a) mecánico de equipo pesado", "Mantenimiento", "Analista / Técnico"],
  ["Técnico(a) electricista industrial", "Mantenimiento", "Analista / Técnico"],
  ["Planner de mantenimiento", "Mantenimiento", "Especialista"],
  ["Soldador(a) homologado 6G", "Mantenimiento", "Analista / Técnico"],
  ["Analista contable", "Administración y finanzas", "Analista / Técnico"],
  ["Especialista en compensaciones", "Administración y finanzas", "Especialista"],
  ["Asistente de recursos humanos de obra", "Administración y finanzas", "Analista / Técnico"],
  ["Practicante de finanzas", "Administración y finanzas", "Practicante"],
  ["Ejecutivo(a) comercial — minería", "Comercial", "Especialista"],
  ["Ingeniero(a) de preventa", "Comercial", "Especialista"],
  ["Key account manager", "Comercial", "Jefatura / Gerencia"],
  ["Comprador(a) de equipos y repuestos", "Cadena de suministro", "Analista / Técnico"],
  ["Almacenero(a) de obra", "Cadena de suministro", "Analista / Técnico"],
  ["Analista de logística de proyectos", "Cadena de suministro", "Analista / Técnico"],
];

const LOCATIONS: [string, string][] = [
  ["San Isidro, Lima", "Lima"],
  ["Arequipa", "Arequipa"],
  ["Moquegua", "Moquegua"],
  ["Chalhuanca, Apurímac", "Apurímac"],
  ["Espinar, Cusco", "Cusco"],
  ["Cajamarca", "Cajamarca"],
  ["Huari, Áncash", "Áncash"],
  ["Marcona, Ica", "Ica"],
  ["Tacna", "Tacna"],
];

const OFFICE_AREAS: Area[] = ["Administración y finanzas", "Comercial", "Tecnología e innovación"];

function build(): Job[] {
  const jobs: Job[] = [];
  const base = Date.UTC(2026, 8, 26); // 26 set 2026
  let n = 0;
  // Dos rondas sobre los títulos con distintas sedes → ~48 avisos
  for (let round = 0; round < 2; round++) {
    TITLES.forEach(([title, area, level], i) => {
      if (round === 1 && i % 3 === 2) return; // no todas se repiten
      const officeRole = OFFICE_AREAS.includes(area) && round === 0;
      const [location, region] = officeRole ? LOCATIONS[0] : LOCATIONS[1 + ((i * 5 + round * 3) % (LOCATIONS.length - 1))];
      const contract = level === "Practicante" ? "Prácticas profesionales" : (i + round) % 4 === 0 ? "Por proyecto" : "Tiempo completo";
      const schedule = officeRole ? ((i % 2 === 0) ? "Híbrido" : "Presencial 5×2") : (i + round) % 3 === 0 ? "Régimen 20×10" : "Régimen 14×7";
      const daysAgo = (n * 7 + round * 11) % 72;
      const posted = new Date(base - daysAgo * 86400000).toISOString().slice(0, 10);
      n++;
      const id = `KB-${2600 + n * 7}`;
      jobs.push({
        id,
        title,
        area,
        location,
        region,
        contract,
        schedule,
        level,
        posted,
        summary: `Buscamos ${title.toLowerCase()} para sumarse a nuestros proyectos de construcción y tecnología minera en ${location}. Formarás parte de un equipo que trabaja con los más altos estándares de seguridad, calidad e innovación.`,
        responsibilities: [...AREAS[area].responsibilities],
        requirements: [...AREAS[area].requirements],
      });
    });
  }
  return jobs.sort((a, b) => b.posted.localeCompare(a.posted));
}

export const JOBS: Job[] = build();

export const JOB_BENEFITS = [
  "Remuneración competitiva y bonos por desempeño",
  "Seguro EPS y seguro de vida desde el primer día",
  "Programas de capacitación y certificación técnica",
  "Línea de carrera en proyectos de gran envergadura",
  "Movilidad, alimentación y alojamiento en unidad minera",
  "Cultura de seguridad: nadie se expone a un riesgo no controlado",
];

export function toJobSummary(j: Job): JobSummary {
  const { id, title, area, location, region, contract, schedule, level, posted } = j;
  return { id, title, area, location, region, contract, schedule, level, posted };
}
