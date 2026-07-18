import { useEffect, useRef, useState } from 'react';

const WHATSAPP_NUMBER = '573206561668';
const SCHEDULE_CALL_URL = 'https://calendly.com/coachingcristian/diagnostico';
const WHATSAPP_MESSAGE = 'Hola Cristian, quiero información sobre tus programas de coaching.';
const PROFILE_IMAGE = '/brand/cristian-nunez-logo.png';
const HERO_BANNER_IMAGE = '/cristian-nunez-hero-banner.png';
const DIGITAL_RESOURCES_URL = 'https://cristiannunez.myshopify.com/collections/all';
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const shopifyResourceLinks = {
  comeMuevete: DIGITAL_RESOURCES_URL,
  comoComer: DIGITAL_RESOURCES_URL,
  musculacion: DIGITAL_RESOURCES_URL,
  vientrePlano: DIGITAL_RESOURCES_URL,
  suplementacion: DIGITAL_RESOURCES_URL,
  masAllaDelMiedo: DIGITAL_RESOURCES_URL,
};

const shopifyGuideLinks = {
  guiaViaje: DIGITAL_RESOURCES_URL,
  guiaEntrenamiento: DIGITAL_RESOURCES_URL,
  guiaMealPrep: DIGITAL_RESOURCES_URL,
  guiaSueno: DIGITAL_RESOURCES_URL,
  guiaRespiracion: DIGITAL_RESOURCES_URL,
  guiaSueloPelvico: DIGITAL_RESOURCES_URL,
  guiaDeficit90Dias: DIGITAL_RESOURCES_URL,
  guiaPreparacionAlimentos: DIGITAL_RESOURCES_URL,
  planEstrenimiento: DIGITAL_RESOURCES_URL,
};

const rebuildProgramStats = [
  '+2.000 procesos acompañados',
  'Método con plataforma',
  'Seguimiento y check-ins',
  'Reconstrucción real',
];

const rebuildService = {
  eyebrow: 'Transformación física y personal',
  modalTitle: 'Método Rebuild',
};

const rebuildProblems = [
  {
    title: 'Falta de estructura',
    text: 'Sin sistema, cada semana depende del ánimo, el tiempo libre o la fuerza de voluntad.',
  },
  {
    title: 'Alimentación improvisada',
    text: 'Comer “más o menos bien” funciona unos días. Luego vuelve la confusión.',
  },
  {
    title: 'Ciclos de abandono',
    text: 'Empiezas fuerte, te saturas, fallas, paras y vuelves a empezar desde cero.',
  },
  {
    title: 'Resultados que no se sostienen',
    text: 'Bajar peso no es suficiente si no construyes una forma de vivir que lo mantenga.',
  },
];

const rebuildSteps = [
  {
    title: 'Regular la Biología',
    icon: 'pulse',
    shortText:
      'Ordenamos entrenamiento, nutrición, descanso y energía para que tu cuerpo deje de trabajar en contra del proceso.',
    text:
      'Entrenamiento, nutrición, descanso, recuperación y energía. Primero se ordena el cuerpo para que el proceso tenga base real. Aquí se eliminan las decisiones al azar: qué comer, cómo entrenar, cómo recuperarte y cómo responder cuando el cuerpo cambia.',
  },
  {
    title: 'Reordenar los Hábitos',
    icon: 'system',
    shortText:
      'Convertimos las decisiones diarias en un sistema claro: menos improvisación, más estructura y seguimiento real.',
    text:
      'Rutinas, seguimiento, check-ins, decisiones diarias y estructura. El objetivo es dejar de depender de la motivación. No se trata de llenar tu vida de reglas, sino de crear un sistema que puedas sostener incluso en semanas difíciles.',
  },
  {
    title: 'Reconstruir la Identidad',
    icon: 'compass',
    shortText:
      'Trabajamos la coherencia, el diálogo interno y la forma en que actúas cuando la motivación ya no alcanza.',
    text:
      'Coherencia, responsabilidad, diálogo interno y una forma de actuar que sostenga los resultados cuando la vida se pone exigente. La meta es que tus acciones dejen de depender del impulso del momento y empiecen a responder a la persona que estás construyendo.',
  },
];

const rebuildIncludes = [
  {
    title: 'Nutrición personalizada',
    text: 'Un plan ajustado a tu objetivo, horarios, preferencias y capacidad real de adherencia.',
    icon: 'nutrition',
  },
  {
    title: 'Entrenamiento personalizado',
    text: 'Estructura de entrenamiento con progresión, técnica y ajustes según tu nivel.',
    icon: 'training',
  },
  {
    title: 'Seguimiento',
    text: 'No avanzas a ciegas. Se revisa el proceso y se ajusta según tu respuesta real.',
    icon: 'tracking',
  },
  {
    title: 'Check-ins',
    text: 'Puntos de control para medir avance, detectar errores y corregir antes de abandonar.',
    icon: 'checkin',
  },
  {
    title: 'Sesiones',
    text: 'Espacios para ordenar dudas, tomar decisiones y sostener dirección.',
    icon: 'sessions',
  },
  {
    title: 'Portal Rebuild',
    text: 'Recursos, clases, registros y herramientas organizadas en una plataforma clara.',
    icon: 'portal',
  },
];

const faqItems = [
  {
    question: '¿Método Rebuild es solo un plan de entrenamiento y nutrición?',
    answer:
      'No. Entrenamiento y nutrición son parte del proceso, pero no son todo el método. Rebuild también trabaja hábitos, seguimiento, estructura diaria, toma de decisiones e identidad. El objetivo no es que mejores unas semanas, sino que entiendas cómo sostener el cambio cuando la vida se pone exigente.',
  },
  {
    question: '¿Necesito tener experiencia entrenando?',
    answer:
      'No. El proceso se adapta a tu punto de partida. Lo importante es tener disposición para seguir una estructura, reportar con honestidad y permitir que el proceso se ajuste con base en tu respuesta real.',
  },
  {
    question: '¿Cuánto tiempo dura el proceso?',
    answer:
      'Depende del formato activo, pero el enfoque está pensado para generar cambios medibles y sostenibles. No se trabaja desde la urgencia de “bajar rápido”, sino desde un sistema que te permita avanzar sin volver al punto de inicio.',
  },
  {
    question: '¿Qué pasa si ya he abandonado otros procesos?',
    answer:
      'Precisamente por eso existe el método. Muchas personas no fallan por falta de ganas, sino porque empiezan sin estructura, sin seguimiento y sin herramientas para corregir cuando aparecen semanas difíciles.',
  },
  {
    question: '¿El plan de alimentación es personalizado?',
    answer:
      'Sí. La nutrición se adapta a tu objetivo, contexto, horarios, preferencias y capacidad real de adherencia. No se trata de comer perfecto, sino de tener una estrategia que puedas aplicar y ajustar.',
  },
  {
    question: '¿Tendré acompañamiento durante el proceso?',
    answer:
      'Sí. El seguimiento, los check-ins y los ajustes son parte central del método. La idea es que no avances a ciegas ni tengas que interpretar sola qué hacer cuando algo no funciona.',
  },
  {
    question: '¿Qué hace diferente a Método Rebuild?',
    answer:
      'No se enfoca solo en entregar un plan. Integra cuerpo, hábitos, seguimiento, educación y reconstrucción de identidad. El cambio físico es importante, pero lo que evita que vuelvas al punto de inicio es el sistema que sostiene tus decisiones.',
  },
];

const ebookResources = [
  {
    title: 'Come. Muévete. Y Ya.',
    description: 'Una guía simple para bajar de peso sin volverlo una odisea.',
    url: shopifyResourceLinks.comeMuevete,
  },
  {
    title: '¿Cómo comer? Alimentación a mi medida',
    description: 'Estructura práctica para entender porciones, comidas y decisiones diarias.',
    url: shopifyResourceLinks.comoComer,
  },
  {
    title: 'Musculación sin tonterías',
    description: 'Entrenamiento explicado sin humo para construir músculo con criterio.',
    url: shopifyResourceLinks.musculacion,
  },
  {
    title: 'Vientre Plano, Mente Clara',
    description: 'Hábitos digestivos, alimentación y pasos concretos para reducir inflamación.',
    url: shopifyResourceLinks.vientrePlano,
  },
  {
    title: 'Guía de suplementación',
    description: 'Una guía para entender qué suplementos tienen sentido y cuáles no.',
    url: shopifyResourceLinks.suplementacion,
  },
  {
    title: 'Más allá del miedo',
    description: 'Identidad, ego, comparación y dirección personal para avanzar con más claridad.',
    url: shopifyResourceLinks.masAllaDelMiedo,
  },
];

const guideResources = [
  {
    title: 'Guía de Viaje: Cumpliendo Mi Objetivo',
    description: 'Estrategias simples para viajar sin abandonar tu alimentación, entrenamiento ni objetivo físico.',
    url: shopifyGuideLinks.guiaViaje,
  },
  {
    title: 'Guía de Entrenamiento: Aprende Conmigo',
    description: 'Base práctica para entender ejercicios, técnica, progresión y entrenamiento con más criterio.',
    url: shopifyGuideLinks.guiaEntrenamiento,
  },
  {
    title: 'Guía Básica Meal Prep',
    description: 'Organización básica de comidas para ahorrar tiempo, comer mejor y reducir improvisación.',
    url: shopifyGuideLinks.guiaMealPrep,
  },
  {
    title: 'Guía de Sueño',
    description: 'Herramientas concretas para mejorar descanso, recuperación, energía y adherencia al proceso.',
    url: shopifyGuideLinks.guiaSueno,
  },
  {
    title: 'Guía de Respiración',
    description: 'Ejercicios prácticos para regular estrés, mejorar control corporal y conectar con tu recuperación.',
    url: shopifyGuideLinks.guiaRespiracion,
  },
  {
    title: 'Guía Suelo Pélvico para Hombres',
    description: 'Trabajo específico para fuerza, control, estabilidad y función del suelo pélvico masculino.',
    url: shopifyGuideLinks.guiaSueloPelvico,
  },
  {
    title: '¿Qué Pasará en los Próximos 90 Días de Iniciar un Déficit?',
    description: 'Una guía clara para entender cambios físicos, adaptaciones y expectativas reales durante el déficit.',
    url: shopifyGuideLinks.guiaDeficit90Dias,
  },
  {
    title: 'Guía de Preparación de Alimentos',
    description: 'Métodos simples para preparar alimentos de forma práctica, segura y sostenible.',
    url: shopifyGuideLinks.guiaPreparacionAlimentos,
  },
  {
    title: 'Plan de Acción – Estreñimiento',
    description: 'Pasos concretos para mejorar tránsito intestinal, digestión y hábitos que afectan la regularidad.',
    url: shopifyGuideLinks.planEstrenimiento,
  },
];

const testimonials = [
  {
    name: 'Sebastian',
    summary: 'Bajó 3 kilos y volvió a sentirse mejor con su ropa.',
    image: '/testimonials/01-testimonial.webp',
  },
  {
    name: 'Juan Libreros',
    summary: 'Celebró resultados físicos claros y más confianza en el proceso.',
    image: '/testimonials/02-testimonial.webp',
  },
  {
    name: 'Sahira Moreno',
    summary: 'Aprendió a ajustar su alimentación sin perder estructura.',
    image: '/testimonials/03-testimonial.webp',
  },
  {
    name: 'Juan Camilo Ortegon',
    summary: 'Reconoció el acompañamiento como un pilar para avanzar.',
    image: '/testimonials/04-testimonial.webp',
  },
  {
    name: 'Johana Florez',
    summary: 'Sostuvo 12 semanas gracias al seguimiento constante.',
    image: '/testimonials/05-testimonial.webp',
  },
  {
    name: 'Nathalia Garcia',
    summary: 'Vio progreso real en una semana de entrenamiento exigente.',
    image: '/testimonials/06-testimonial.webp',
  },
  {
    name: 'Sandra Garcia',
    summary: 'Se sintió mejor, menos inflamada y con cambios visibles.',
    image: '/testimonials/07-testimonial.webp',
  },
  {
    name: 'Alumna Rebuild',
    summary: 'Notó más confianza, menos grasa y mejores reportes de salud.',
    image: '/testimonials/08-testimonial.webp',
  },
  {
    name: 'Proceso físico',
    summary: 'El cambio visual mostró constancia y dirección.',
    image: '/testimonials/09-testimonial.webp',
  },
  {
    name: 'Alumna de coaching',
    summary: 'Valoró hábitos duraderos y una forma distinta de ver el proceso.',
    image: '/testimonials/10-testimonial.webp',
  },
  {
    name: 'Proceso femenino',
    summary: 'Transformación visible con mejor composición corporal.',
    image: '/testimonials/11-testimonial.webp',
  },
  {
    name: 'Deborah Gonzales',
    summary: 'Agradeció el apoyo y la guía durante el proceso.',
    image: '/testimonials/12-testimonial.webp',
  },
  {
    name: 'Respuesta de historia',
    summary: 'Reconoció el valor del método y del acompañamiento.',
    image: '/testimonials/13-testimonial.webp',
  },
  {
    name: 'Paola Amador',
    summary: 'Sintió menos inflamación, más dureza y avances reales.',
    image: '/testimonials/14-testimonial.webp',
  },
];

const featuredTestimonials = testimonials.slice(0, 3);
const moreTestimonials = testimonials.slice(3);

const aboutPhotos = [
  {
    src: '/about/01-escenario-classic.webp',
    label: '15x campeón',
    alt: 'Cristian Núñez compitiendo en escenario de fisicoculturismo',
  },
  {
    src: '/about/02-mens-physique.webp',
    label: 'Disciplina',
    alt: 'Cristian Núñez en tarima de Men’s Physique',
  },
  {
    src: '/about/03-medallas.webp',
    label: 'Logros construidos',
    alt: 'Cristian Núñez junto a trofeos y medallas deportivas',
  },
  {
    src: '/about/04-evento-audiencia.webp',
    label: 'Más de 2.000 procesos acompañados',
    alt: 'Cristian Núñez frente a una audiencia en un evento',
  },
  {
    src: '/about/06-presencia.webp',
    label: 'Autoridad en campo',
    alt: 'Cristian Núñez hablando en escenario',
  },
  {
    src: '/about/07-revision-medica.webp',
    label: 'Accidente 2024',
    alt: 'Cristian Núñez en revisión médica durante su proceso de recuperación',
  },
  {
    src: '/about/08-uci.webp',
    label: 'UCI y reconstrucción',
    alt: 'Cristian Núñez durante una etapa crítica en clínica',
  },
  {
    src: '/about/09-regreso.webp',
    label: 'Regreso',
    alt: 'Cristian Núñez en su regreso a escenarios de formación',
  },
  {
    src: '/about/10-equipo.webp',
    label: 'Nueva etapa',
    alt: 'Cristian Núñez junto a un equipo profesional en evento',
  },
];

const aboutMainVideo = '/media/sobre-mi-video.mp4';

function SectionHeader({ label, title, description }) {
  return (
    <div className="section-reveal mx-auto mb-10 max-w-3xl text-center sm:mb-14" data-section-reveal>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-accent">{label}</p>
      <h2 className="text-3xl font-semibold leading-tight text-smoke sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}

function RebuildIcon({ type, className = '' }) {
  const iconClass = `h-6 w-6 ${className}`;

  if (type === 'pulse') {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12h3.5l2-5 4 10 2.5-7H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 4a8 8 0 1 1-7.4 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      </svg>
    );
  }

  if (type === 'system') {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 3v3M17 3v3M5 9h14M6.5 5h11A2.5 2.5 0 0 1 20 7.5v10A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-10A2.5 2.5 0 0 1 6.5 5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m8 14 2 2 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === 'compass') {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="m15.8 8.2-2.1 5.5-5.5 2.1 2.1-5.5 5.5-2.1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === 'portal') {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 9h8M8 12h5M8 15h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'nutrition') {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 20c4-2.2 6.2-5.5 6.2-9.1 0-3-2-5.4-4.4-5.4-1.1 0-2 .4-2.8 1.2-.8-.8-1.7-1.2-2.8-1.2-2.4 0-4.4 2.4-4.4 5.4C3.8 14.5 6 17.8 12 20Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M14.5 4.5c.7-1 1.7-1.5 3-1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'training') {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 9v6M19 9v6M8 7v10M16 7v10M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'tracking') {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 19V5M5 19h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="m7.5 15 3.2-3.2 2.4 2.4L18 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === 'checkin') {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="m8.5 12 2 2 5-5M9 17h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === 'sessions') {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 8.5A3.5 3.5 0 0 1 8.5 5h7A3.5 3.5 0 0 1 19 8.5v4A3.5 3.5 0 0 1 15.5 16H12l-4 3v-3A3.5 3.5 0 0 1 5 12.5v-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }

  return <RebuildIcon type="portal" className={className} />;
}

function EbooksModal({ isOpen, onClose }) {
  const [view, setView] = useState('ebooks');

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) setView('ebooks');
  }, [isOpen]);

  if (!isOpen) return null;

  const isGuidesView = view === 'guides';

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/82 px-4 py-4 backdrop-blur-md sm:items-center sm:px-6"
      onClick={onClose}
      role="presentation"
    >
      <article
        className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/12 bg-[linear-gradient(145deg,rgba(11,15,20,0.96),rgba(25,38,50,0.94)_52%,rgba(13,47,80,0.9))] p-5 shadow-premium sm:p-8"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="ebooks-modal-title"
      >
        <div className="pointer-events-none absolute -left-20 top-12 h-64 w-64 rounded-full bg-accent/16 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-white/8 blur-3xl" />
        <div className="relative flex items-start justify-between gap-5">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">Recursos digitales</p>
            <h3 id="ebooks-modal-title" className="text-3xl font-semibold leading-tight text-smoke sm:text-5xl">
              {isGuidesView ? 'Más guías' : 'E-books y recursos digitales'}
            </h3>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              {isGuidesView
                ? 'Material práctico para seguir avanzando con estructura.'
                : 'Recursos prácticos para comer mejor, entrenar con más criterio y ordenar tus hábitos.'}
            </p>
          </div>
          <button
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl leading-none text-smoke transition duration-300 hover:border-accent/50 hover:bg-white/15"
            type="button"
            onClick={onClose}
            aria-label="Cerrar recursos digitales"
          >
            ×
          </button>
        </div>

        <div className="relative mt-8 max-h-[calc(92vh-12rem)] overflow-y-auto pr-1">
          {isGuidesView ? (
            <div className="space-y-5">
              <button
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] px-5 py-2 text-sm font-semibold text-smoke transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:bg-white/[0.09]"
                type="button"
                onClick={() => setView('ebooks')}
              >
                Volver a e-books
              </button>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {guideResources.map((guide) => (
                  <article
                    className="group flex min-h-[210px] flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.2)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.07]"
                    key={guide.title}
                  >
                    <h4 className="text-lg font-semibold leading-tight text-smoke">{guide.title}</h4>
                    <p className="mt-4 flex-1 text-sm leading-7 text-muted">{guide.description}</p>
                    <a
                      className="mt-5 inline-flex min-h-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.08] px-4 py-2 text-sm font-semibold text-smoke transition duration-300 hover:-translate-y-0.5 hover:bg-smoke hover:text-ink"
                      href={guide.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver en tienda
                    </a>
                  </article>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {ebookResources.map((resource) => (
                  <article
                    className="group flex min-h-[230px] flex-col rounded-2xl border border-white/10 bg-white/[0.055] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.22)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-white/[0.075]"
                    key={resource.title}
                  >
                    <h4 className="text-xl font-semibold leading-tight text-smoke">{resource.title}</h4>
                    <p className="mt-4 flex-1 text-sm leading-7 text-muted">{resource.description}</p>
                    <a
                      className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 bg-smoke px-5 py-2 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-accent"
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver en tienda
                    </a>
                  </article>
                ))}
              </div>

              <button
                className="group flex w-full items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-left shadow-[0_18px_55px_rgba(0,0,0,0.16)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/25 hover:bg-white/[0.055]"
                type="button"
                onClick={() => setView('guides')}
              >
                <span>
                  <span className="block text-lg font-semibold text-smoke">Más guías</span>
                  <span className="mt-2 block text-sm leading-7 text-muted">
                    Otros recursos prácticos de nutrición, entrenamiento, hábitos, recetas y seguimiento.
                  </span>
                </span>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-2xl font-light leading-none text-accent/75 transition duration-300 group-hover:border-accent/30 group-hover:text-accent">
                  +
                </span>
              </button>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}

function AboutCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = window.setInterval(() => {
      setCurrentSlide((slide) => (slide + 1) % aboutPhotos.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsPaused(true);
  };

  const handleTouchEnd = (event) => {
    if (touchStart === null) return;
    const touchEnd = event.changedTouches[0]?.clientX ?? touchStart;
    const delta = touchStart - touchEnd;

    if (Math.abs(delta) > 42) {
      setCurrentSlide((slide) => {
        if (delta > 0) return (slide + 1) % aboutPhotos.length;
        return (slide - 1 + aboutPhotos.length) % aboutPhotos.length;
      });
    }

    setTouchStart(null);
  };

  return (
    <div
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] p-3 shadow-premium backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/30"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={(event) => {
        setIsPaused(true);
        setTouchStart(event.touches[0]?.clientX ?? null);
      }}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink sm:aspect-[5/4] lg:aspect-[4/5]">
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {aboutPhotos.map((photo, index) => (
            <figure className="relative h-full min-w-full" key={photo.src}>
              <img
                className="h-full w-full object-cover"
                src={photo.src}
                alt={photo.alt}
                loading={index < 2 ? 'eager' : 'lazy'}
                decoding="async"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,15,20,0.08)_0%,rgba(11,15,20,0.12)_45%,rgba(11,15,20,0.72)_100%)]" />
              <figcaption className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-ink/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-smoke shadow-[0_14px_40px_rgba(0,0,0,0.28)] backdrop-blur-md">
                {photo.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4 px-1">
        <div className="flex gap-2">
          {aboutPhotos.map((photo, index) => (
            <button
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'w-8 bg-accent' : 'w-2.5 bg-white/25 hover:bg-white/45'
              }`}
              key={photo.src}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Ver foto ${index + 1}`}
            />
          ))}
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          {String(currentSlide + 1).padStart(2, '0')} / {String(aboutPhotos.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}

function AboutVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="aspect-[4/5] h-full w-full object-cover"
      src={aboutMainVideo}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="Video de Cristian Núñez"
    />
  );
}

function AboutStoryModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/82 px-4 py-4 backdrop-blur-md sm:items-center sm:px-6" onClick={onClose} role="presentation">
      <article
        className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/12 bg-[linear-gradient(145deg,rgba(11,15,20,0.96),rgba(25,38,50,0.94))] p-5 shadow-premium sm:p-8"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="about-modal-title"
      >
        <button className="absolute right-5 top-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl text-smoke transition duration-300 hover:border-accent/50 hover:bg-white/15" type="button" onClick={onClose} aria-label="Cerrar historia">
          ×
        </button>
        <div className="max-h-[calc(92vh-2.5rem)] overflow-y-auto pr-1">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="pt-10 lg:pt-0">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-accent">Sobre mí</p>
              <h3 id="about-modal-title" className="text-3xl font-semibold leading-tight text-smoke sm:text-5xl">
                Mi historia no empezó en el accidente, pero ahí cambió todo.
              </h3>
              <div className="mt-7 space-y-5 text-base leading-8 text-muted">
                <p>
                  Soy Cristian Núñez, mentor en rendimiento humano y transformación de identidad. Durante años construí mi autoridad desde la disciplina, el entrenamiento y la competencia. He acompañado más de 2.000 procesos de transformación física y personal, y también he sido 15 veces campeón en categorías como Fitness Model, Classic Bodybuilding y Men’s Physique.
                </p>
                <p>Pero mi historia no se sostiene solo en medallas.</p>
                <p>
                  En septiembre de 2024 tuve un accidente grave. Pasé casi un mes en UCI, viví momentos críticos y, después de salir del hospital, tuve una recaída que exigió otra cirugía. Perdí autonomía. Mi cuerpo dejó de responder como antes. Lo básico volvió a ser difícil.
                </p>
                <p>Ese proceso me obligó a mirar la reconstrucción de otra forma. Ya no desde el ego del rendimiento, sino desde la humildad de empezar otra vez.</p>
                <p>
                  Hoy acompaño desde ese lugar: con estructura, criterio y verdad. No vendo promesas rápidas. Trabajo con personas que necesitan ordenar su cuerpo, sus hábitos y su identidad para sostener resultados reales.
                </p>
                <p className="font-semibold text-smoke">La reconstrucción no es teoría para mí. Es experiencia vivida.</p>
              </div>
            </div>
            <AboutCarousel />
          </div>
        </div>
      </article>
    </div>
  );
}

function TestimonialCard({ testimonial, priority = false, className = '' }) {
  return (
    <article className={`group rounded-3xl border border-white/10 bg-white/[0.055] p-3 shadow-premium backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_26px_90px_rgba(112,150,195,0.16)] ${className}`}>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#070b10]">
        <img
          className="h-[460px] w-full object-contain object-top transition duration-500 group-hover:scale-[1.015] sm:h-[500px] lg:h-[520px]"
          src={testimonial.image}
          alt={`Testimonio de ${testimonial.name}`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
      <div className="px-2 pb-2 pt-5">
        <h3 className="text-lg font-semibold text-smoke">{testimonial.name}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">"{testimonial.summary}"</p>
      </div>
    </article>
  );
}

function FeaturedProofCard({ testimonial, priority = false }) {
  return (
    <article className="group w-[82vw] max-w-[330px] shrink-0 snap-center rounded-3xl border border-white/10 bg-white/[0.055] p-3 shadow-premium backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_24px_80px_rgba(112,150,195,0.16)] sm:w-auto sm:max-w-none">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#070b10]">
        <img
          className="h-[390px] w-full object-contain object-top transition duration-500 group-hover:scale-[1.015] sm:h-[420px] lg:h-[440px]"
          src={testimonial.image}
          alt={`Testimonio de ${testimonial.name}`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
      <div className="px-2 pb-2 pt-5">
        <h3 className="text-lg font-semibold text-smoke">{testimonial.name}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">"{testimonial.summary}"</p>
      </div>
    </article>
  );
}

function MoreTestimonialsCard({ className = '', onClick }) {
  return (
    <button
      className={`group flex cursor-pointer flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-center shadow-premium backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.055] ${className}`}
      type="button"
      onClick={onClick}
      aria-label="Ver más historias"
    >
      <span className="text-5xl font-light leading-none text-accent/80 transition duration-300 group-hover:text-accent">+</span>
      <span className="mt-4 text-base font-semibold text-smoke">Ver más historias</span>
    </button>
  );
}

function TestimonialsModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/82 px-4 py-4 backdrop-blur-md sm:items-center sm:px-6" onClick={onClose} role="presentation">
      <article
        className="relative max-h-[92vh] w-full max-w-7xl overflow-hidden rounded-3xl border border-white/12 bg-[linear-gradient(145deg,rgba(11,15,20,0.96),rgba(25,38,50,0.94))] p-5 shadow-premium sm:p-8"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="testimonials-modal-title"
      >
        <div className="mb-6 flex items-start justify-between gap-5">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-accent">Testimonios</p>
            <h3 id="testimonials-modal-title" className="text-3xl font-semibold text-smoke sm:text-5xl">Más historias reales</h3>
          </div>
          <button className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl text-smoke transition duration-300 hover:border-accent/50 hover:bg-white/15" type="button" onClick={onClose} aria-label="Cerrar testimonios">
            ×
          </button>
        </div>
        <div className="max-h-[calc(92vh-9rem)] overflow-y-auto pr-1">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {moreTestimonials.map((testimonial) => (
              <TestimonialCard testimonial={testimonial} key={testimonial.image} />
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [areTestimonialsOpen, setAreTestimonialsOpen] = useState(false);
  const [isEbooksOpen, setIsEbooksOpen] = useState(false);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-section-reveal]'));
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.22, rootMargin: '0px 0px -8% 0px' }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-smoke">
      <section className="relative isolate min-h-screen px-5 py-6 sm:px-8 lg:px-12">
        <img
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_50%]"
          src={HERO_BANNER_IMAGE}
          alt="Cristian Núñez"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,15,20,0.96)_0%,rgba(11,15,20,0.88)_34%,rgba(11,15,20,0.48)_58%,rgba(11,15,20,0.12)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_22%_16%,rgba(112,150,195,0.18),transparent_28rem)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 border-b border-white/10 pb-4 sm:gap-5 sm:pb-5">
          <a href="#" className="group flex min-w-0 items-center gap-2 sm:gap-3 lg:gap-4">
            <img
              className="h-8 w-auto shrink-0 object-contain drop-shadow-[0_10px_22px_rgba(112,150,195,0.22)] transition duration-500 group-hover:scale-[1.03] sm:h-9 lg:h-12"
              src={PROFILE_IMAGE}
              alt="Logo Cristian Núñez"
            />
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted md:flex">
            <a className="transition hover:text-smoke" href="#enfoque">
              Enfoque
            </a>
            <a className="transition hover:text-smoke" href="#servicios">
              Servicios
            </a>
            <a className="transition hover:text-smoke" href="#contacto">
              Contacto
            </a>
          </div>
          <a
            className="rounded-full border border-accent/50 px-5 py-2 text-sm font-semibold text-smoke transition hover:bg-accent hover:text-ink"
            href={SCHEDULE_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar llamada
          </a>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-12 py-20 sm:py-28 lg:grid-cols-[0.94fr_1.06fr] lg:py-32">
          <div>
            <p className="mb-6 max-w-max rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Rendimiento humano e identidad
            </p>
            <h1 className="max-w-5xl text-4xl font-semibold leading-[1.02] tracking-tight text-smoke sm:text-6xl lg:text-7xl">
              Reconstruye tu cuerpo. Ordena tu vida. Sostén tus resultados.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              Acompaño a personas ocupadas a mejorar su físico, recuperar energía y construir hábitos que puedan
              sostener cuando la vida se pone exigente.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a className="btn-rebuild" href={SCHEDULE_CALL_URL} target="_blank" rel="noopener noreferrer">
                Aplicar al Método Rebuild
              </a>
            </div>
          </div>
          <div className="hidden min-h-[460px] lg:block" aria-hidden="true" />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12" id="servicios">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Programas y Servicios"
            title="Método Rebuild"
            description="El servicio principal para ordenar cuerpo, hábitos e identidad con estructura y seguimiento real."
          />
          <div className="section-reveal overflow-hidden rounded-3xl border border-accent/25 bg-[linear-gradient(145deg,rgba(13,47,80,0.78),rgba(25,38,50,0.9)_45%,rgba(11,15,20,0.98))] p-7 shadow-premium sm:p-10 lg:p-12" data-section-reveal>
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent">{rebuildService.eyebrow}</p>
                <h2 className="text-4xl font-semibold leading-tight text-smoke sm:text-6xl">{rebuildService.modalTitle}</h2>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
                  Método Rebuild está diseñado para personas que quieren dejar de improvisar y construir una estructura
                  real para bajar grasa, recuperar energía y sostener resultados cuando la vida se pone exigente.
                </p>
                <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-smoke">
                  Este método existe para personas que ya entendieron que necesitan estructura, no otro intento improvisado.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {rebuildProgramStats.map((stat) => (
                  <div className="rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-4 shadow-[0_16px_44px_rgba(0,0,0,0.16)]" key={stat}>
                    <p className="text-sm font-semibold leading-6 text-smoke">{stat}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rebuild-pillar-flow mt-10 grid gap-5 lg:grid-cols-3">
              {rebuildSteps.map((step, index) => (
                <article
                  className="rebuild-pillar-card group relative rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.085]"
                  key={step.title}
                >
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-accent transition duration-300 group-hover:border-accent/45 group-hover:bg-accent/15 group-hover:text-smoke">
                    <RebuildIcon type={step.icon} />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent/80">Paso {index + 1}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-smoke">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{step.shortText}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="rounded-2xl border border-accent/25 bg-accent/10 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.2)]">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/30 bg-white/[0.08] text-accent">
                  <RebuildIcon type="portal" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Portal Rebuild</p>
                <p className="mt-4 text-base leading-8 text-smoke">
                  Una plataforma completa para centralizar el proceso: recursos, clases, registros, check-ins,
                  seguimiento, herramientas prácticas y organización del avance en un solo lugar.
                </p>
              </div>
              <div className="flex items-center rounded-2xl border border-white/10 bg-white/[0.045] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.16)]">
                <p className="text-xl font-semibold leading-9 text-smoke">
                  No estás recibiendo información suelta. Tienes un sistema organizado para avanzar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Qué problema resuelve"
            title="No necesitas más información suelta. Necesitas un sistema."
            description="Método Rebuild está diseñado para personas que no necesitan más información suelta, sino una estructura que les permita sostener resultados en la vida real."
          />
          <div className="section-reveal problem-circuit relative mx-auto max-w-6xl rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_center,rgba(112,150,195,0.12),rgba(25,38,50,0.34)_42%,rgba(11,15,20,0.78))] p-6 shadow-premium sm:p-8 lg:min-h-[620px]" data-section-reveal>
            <div className="problem-circuit-orbit hidden lg:block" aria-hidden="true" />
            <div className="problem-circuit-core relative mx-auto flex min-h-[220px] max-w-md flex-col items-center justify-center rounded-3xl border border-accent/25 bg-ink/74 p-7 text-center shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur lg:absolute lg:left-1/2 lg:top-1/2 lg:min-h-[260px] lg:-translate-x-1/2 lg:-translate-y-1/2">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">El ciclo</p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-smoke sm:text-3xl">Improvisar, frustrarse y volver a empezar.</h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                Rebuild corta el ciclo con estructura, seguimiento y reconstrucción real.
              </p>
            </div>
            <div className="mt-7 grid gap-5 lg:mt-0 lg:block">
              {rebuildProblems.map((problem, index) => (
                <article
                  className={`problem-node problem-node-${index + 1} group rounded-2xl border border-white/10 bg-white/[0.07] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-white/[0.095] lg:absolute lg:w-[285px]`}
                  key={problem.title}
                >
                  <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-sm font-semibold text-accent">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold leading-7 text-smoke">{problem.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{problem.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12" id="enfoque">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Cómo funciona"
            title="Tres pasos para reconstruir con orden."
            description="Primero se estabiliza la base. Después se organiza la ejecución. Finalmente se construye una identidad capaz de sostener el proceso."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {rebuildSteps.map((step, index) => (
              <article
                className="group rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-premium backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-[#eaf1f7] hover:shadow-[0_26px_80px_rgba(112,150,195,0.18)] active:-translate-y-0.5 sm:p-8"
                key={step.title}
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/35 bg-accent/10 text-accent transition duration-300 group-hover:bg-[#0d2f50] group-hover:text-smoke">
                    <RebuildIcon type={step.icon} />
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.22em] text-accent transition duration-300 group-hover:text-[#0d2f50]">
                    Paso {index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-smoke transition duration-300 group-hover:text-[#0d2f50]">{step.title}</h3>
                <p className="mt-5 leading-7 text-muted transition duration-300 group-hover:text-[#34495c]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Qué incluye"
            title="Una estructura completa para dejar de improvisar."
            description="No necesitas más información. Necesitas un sistema que te diga qué hacer, cuándo ajustar y cómo sostenerlo."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rebuildIncludes.map((item) => (
              <article className="group rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-premium backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-white/[0.075]" key={item.title}>
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-accent transition duration-300 group-hover:border-accent/40 group-hover:bg-accent/15 group-hover:text-smoke">
                  <RebuildIcon type={item.icon} />
                </span>
                <h3 className="text-xl font-semibold text-smoke">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-accent/25 bg-[linear-gradient(135deg,rgba(112,150,195,0.14),rgba(13,47,80,0.28))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.2)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Portal Rebuild</p>
            <p className="mt-3 max-w-4xl text-base leading-8 text-smoke">
              Una plataforma completa para centralizar el proceso: recursos, clases, registros, check-ins, seguimiento,
              herramientas prácticas y organización del avance en un solo lugar.
            </p>
            <p className="mt-4 max-w-4xl text-base font-semibold leading-8 text-smoke">
              No estás recibiendo información suelta. Tienes un sistema organizado para avanzar.
            </p>
          </div>
          <div className="mt-9 flex justify-center">
            <a className="btn-rebuild" href={SCHEDULE_CALL_URL} target="_blank" rel="noopener noreferrer">
              Aplicar al Método Rebuild
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Resultados reales"
            title="Historias Reales"
            description="Evidencia cercana del proceso: seguimiento, ajustes, constancia y cambios sostenidos."
          />
          <div className="testimonials-marquee-viewport -mx-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:px-0">
            <div className="testimonials-marquee flex w-max gap-5">
              {[...featuredTestimonials, { type: 'more' }, ...featuredTestimonials, { type: 'more' }].map((item, index) =>
                item.type === 'more' ? (
                  <MoreTestimonialsCard
                    className="min-h-[620px] w-[82vw] max-w-[360px] shrink-0 snap-center sm:w-[330px] lg:w-[350px]"
                    key={`more-${index}`}
                    onClick={() => setAreTestimonialsOpen(true)}
                  />
                ) : (
                  <TestimonialCard
                    className="w-[82vw] max-w-[360px] shrink-0 snap-center sm:w-[330px] lg:w-[350px]"
                    testimonial={item}
                    priority={index < 3}
                    key={`${item.image}-${index}`}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-9 rounded-3xl border border-white/10 bg-navy/55 p-7 shadow-premium sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:p-14">
          <figure className="section-reveal overflow-hidden rounded-3xl border border-white/10 bg-ink shadow-premium" data-section-reveal>
            <AboutVideo />
          </figure>

          <div className="section-reveal flex flex-col justify-center" data-section-reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-accent">Sobre mí</p>
            <h2 className="text-3xl font-semibold leading-tight text-smoke sm:text-5xl">Sobre mí</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Soy Cristian Núñez. He acompañado más de 2.000 procesos de transformación y he sido 15 veces campeón en fisicoculturismo. Pero mi autoridad no viene solo de los logros: también viene de haber tenido que reconstruirme desde cero.
            </p>
            <button className="btn-primary mt-8 w-fit" type="button" onClick={() => setIsAboutOpen(true)}>
              Leer mi historia completa
            </button>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="section-reveal mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/[0.045] p-7 shadow-premium backdrop-blur sm:p-10 lg:p-12" data-section-reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-accent">Trayectoria</p>
          <h2 className="mb-7 text-3xl font-semibold leading-tight text-smoke sm:text-5xl">Experiencia que sostiene el método</h2>
          <div className="space-y-5 text-base leading-8 text-muted sm:text-lg">
            <p>
              Soy Cristian Núñez. He acompañado más de 2.000 procesos de transformación física y personal. También he
              construido experiencia como atleta, formador y mentor en espacios de educación profesional.
            </p>
            <p>
              He realizado conferencias en la Escuela Nacional del Deporte, capacitaciones para Nutramerican Pharma y
              formación para entrenadores personales en Bodytech.
            </p>
            <p>
              En 2024 tuve un accidente grave que me obligó a reconstruirme desde cero: cuerpo, autonomía, hábitos y
              criterio. Esa experiencia cambió mi forma de acompañar. Hoy no trabajo desde promesas rápidas. Trabajo
              desde estructura, seguimiento y reconstrucción real.
            </p>
            <p className="font-semibold text-smoke">
              La reconstrucción no es teoría para mí. Es experiencia vivida.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            label="Preguntas frecuentes"
            title="Lo que necesitas saber antes de aplicar."
          />
          <div className="grid gap-4">
            {faqItems.map((item) => (
              <details className="group rounded-2xl border border-white/10 bg-white/[0.055] p-5 shadow-premium backdrop-blur transition duration-300 open:border-accent/35 open:bg-white/[0.075]" key={item.question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-lg font-semibold text-smoke">
                  {item.question}
                  <span className="text-2xl font-light text-accent transition duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12" id="contacto">
        <div className="section-reveal mx-auto max-w-4xl rounded-3xl border border-accent/30 bg-[linear-gradient(135deg,rgba(13,47,80,0.9),rgba(25,38,50,0.92))] p-7 text-center shadow-premium sm:p-12" data-section-reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-accent">Aplicación</p>
          <h2 className="text-3xl font-semibold text-smoke sm:text-5xl">Empieza con una estructura que puedas sostener.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
            Agenda un diagnóstico privado para revisar tu punto de partida y ver si Método Rebuild encaja con lo que necesitas construir.
          </p>
          <a className="btn-rebuild mt-9" href={SCHEDULE_CALL_URL} target="_blank" rel="noopener noreferrer">
            Aplicar al Método Rebuild
          </a>
        </div>
      </section>

      <section className="px-5 pb-20 pt-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.16)] backdrop-blur sm:p-8">
          <div className="flex flex-col gap-6">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent">Otros recursos</p>
              <h2 className="text-xl font-semibold text-smoke">Otros recursos</h2>
              <p className="max-w-2xl text-sm leading-7 text-muted">
                E-books, guías y recursos prácticos para empezar con herramientas puntuales.
              </p>
            </div>
            <button
              className="group flex w-full items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.045] p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-accent/25 hover:bg-white/[0.065] sm:p-6"
              type="button"
              onClick={() => setIsEbooksOpen(true)}
              aria-label="Abrir e-books y recursos digitales"
            >
              <span>
                <span className="block text-lg font-semibold text-smoke">E-books y recursos digitales</span>
                <span className="mt-2 block max-w-2xl text-sm leading-7 text-muted">
                  Herramientas prácticas para alimentación, entrenamiento, hábitos y seguimiento.
                </span>
              </span>
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-3xl font-light leading-none text-accent/80 transition duration-300 group-hover:border-accent/35 group-hover:text-accent">
                +
              </span>
            </button>
          </div>
        </div>
      </section>

      <EbooksModal isOpen={isEbooksOpen} onClose={() => setIsEbooksOpen(false)} />
      <AboutStoryModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <TestimonialsModal isOpen={areTestimonialsOpen} onClose={() => setAreTestimonialsOpen(false)} />
    </main>
  );
}

export default App;
