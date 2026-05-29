import { useEffect, useState } from 'react';

const WHATSAPP_NUMBER = '573206561668';
const SCHEDULE_CALL_URL = 'https://calendly.com/coachingcristian/diagnostico';
const WHATSAPP_MESSAGE = 'Hola Cristian, quiero informacion sobre tus programas de coaching.';
const PROFILE_IMAGE = '/cristian-nunez-banner.png';
const HERO_BANNER_IMAGE = '/cristian-nunez-hero-banner.png';
const DIGITAL_RESOURCES_URL = '#servicios';

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const focusLevels = [
  {
    title: 'Cuerpo',
    description: 'Entrenamiento, nutricion, descanso y energia para construir una base fisica sostenible.',
  },
  {
    title: 'Habitos',
    description: 'Organizacion, seguimiento, adherencia y ejecucion diaria sin depender de motivacion pasajera.',
  },
  {
    title: 'Identidad',
    description: 'Dialogo interno, responsabilidad, coherencia y direccion para sostener lo que construyes.',
  },
];

const services = [
  {
    title: 'Metodo Rebuild',
    modalTitle: 'Método Rebuild',
    eyebrow: 'Transformacion fisica y personal',
    subtitle: 'Reconstrucción física, hábitos sostenibles e identidad personal.',
    description:
      'Un programa para recuperar estructura, ordenar habitos y reconstruirse desde adentro con un proceso claro.',
    longDescription:
      'Método Rebuild es el programa principal de transformación física y personal. Está diseñado para mujeres profesionales, emprendedoras o personas con alta exigencia personal que quieren bajar grasa, mejorar su composición corporal, recuperar energía y dejar de vivir en modo automático.',
    secondaryDescription:
      'No es solo una dieta ni una rutina. Es un proceso estructurado para recuperar control, orden y coherencia.',
    solves: [
      'Desorden con la alimentación.',
      'Falta de constancia.',
      'Cansancio físico y mental.',
      'Autosabotaje.',
      'Todo o nada.',
      'Falta de estructura diaria.',
      'Pérdida de confianza por intentos fallidos.',
    ],
    frameworkTitle: 'Método 3R',
    framework: [
      {
        title: 'Regular la Biología',
        text: 'Entrenamiento, alimentación, descanso, recuperación y energía.',
      },
      {
        title: 'Reordenar los hábitos',
        text: 'Rutina real, seguimiento, organización mínima y no negociables sostenibles.',
      },
      {
        title: 'Reconstruirse desde adentro',
        text: 'Diálogo interno, responsabilidad, coherencia, identidad y orgullo personal basado en evidencia.',
      },
    ],
    audience:
      'Para personas que no solo quieren verse mejor, sino volver a sentirse fuertes, ordenadas y dueñas de sí mismas.',
    cta: 'Quiero información sobre Rebuild',
    ctaUrl: SCHEDULE_CALL_URL,
    details: ['Regular la Biologia', 'Reordenar los habitos', 'Reconstruirse desde adentro'],
    footer: 'Etapa 1 - Reconstruccion / Etapa 2 - Direccion',
  },
  {
    title: 'Asesorias Fitness Online',
    modalTitle: 'Asesorías Fitness Online',
    eyebrow: 'Entrenamiento, nutricion y seguimiento',
    subtitle: 'Entrenamiento, nutrición y seguimiento para mejorar tu composición corporal.',
    description:
      'Planes personalizados para personas que necesitan una estrategia concreta, medible y adaptada a su vida real.',
    longDescription:
      'Las Asesorías Fitness Online están diseñadas para personas que quieren perder grasa, ganar masa muscular, mejorar su físico o entrenar con una estrategia clara, sin improvisar.',
    secondaryDescription:
      'Aquí el foco principal es el resultado físico: entrenar mejor, comer con más criterio y tener seguimiento para ajustar el proceso según la respuesta real del cuerpo.',
    solves: [
      'Rutinas genéricas que no progresan.',
      'Dietas difíciles de sostener.',
      'Falta de claridad con cantidades, comidas y entrenamiento.',
      'Estancamiento físico.',
      'Entrenar sin saber si se está haciendo bien.',
      'Falta de seguimiento y ajustes.',
    ],
    frameworkTitle: 'Planes',
    framework: [
      {
        title: 'Gold',
        text: 'Acompañamiento básico y efectivo.',
      },
      {
        title: 'Platinum',
        text: 'Seguimiento más completo durante 12 semanas.',
      },
      {
        title: 'Platinum Plus',
        text: 'Acompañamiento intensivo con más herramientas y análisis.',
      },
      {
        title: 'Platinum Pro',
        text: 'Servicio premium con mayor personalización, videollamadas y soporte prioritario.',
      },
    ],
    audience:
      'Para personas que quieren una mejora física seria, con entrenamiento, nutrición y acompañamiento adaptado a su vida real.',
    cta: 'Quiero mi asesoría fitness',
    ctaUrl: SCHEDULE_CALL_URL,
    details: ['Gold', 'Platinum', 'Platinum Plus', 'Platinum Pro'],
    footer: 'Acompanamiento progresivo segun nivel de soporte.',
  },
  {
    title: 'Protocolo Rebirth',
    modalTitle: 'Protocolo Rebirth',
    eyebrow: 'Programa premium de 90 dias',
    subtitle: 'Intervención premium de 90 días para rendimiento humano, control e identidad.',
    description:
      'Proceso para lideres, ejecutivos y emprendedores que necesitan optimizar energia, control e impacto.',
    longDescription:
      'Protocolo Rebirth es un proceso premium de 90 días para líderes, ejecutivos, emprendedores y personas de alta exigencia que necesitan optimizar su biología, recuperar control sobre su agenda y proyectar una identidad más sólida.',
    secondaryDescription:
      'No está diseñado para quien solo quiere una rutina. Está diseñado para quien entiende que su cuerpo, energía, hábitos, decisiones y presencia afectan su rendimiento personal y profesional.',
    solves: [
      'Falta de energía sostenida.',
      'Desorden en sueño, alimentación y entrenamiento.',
      'Agenda reactiva.',
      'Drenadores de energía.',
      'Falta de presencia ejecutiva.',
      'Pérdida de dirección.',
      'Desconexión entre físico, mente y objetivos.',
    ],
    frameworkTitle: 'Fases',
    framework: [
      {
        title: 'Bio-Optimización',
        text: 'Nutrición, sueño, entrenamiento, recuperación y resistencia mental.',
      },
      {
        title: 'Arquitectura de Control',
        text: 'Gestión del tiempo, agenda blindada y eliminación de drenadores.',
      },
      {
        title: 'Identidad e Impacto',
        text: 'Presencia, narrativa de autoridad, marca personal y proyección estratégica.',
      },
    ],
    audience:
      'Para personas que tienen responsabilidades reales y necesitan funcionar mejor, decidir mejor y sostener una imagen coherente con lo que quieren construir.',
    cta: 'Quiero aplicar a Rebirth',
    ctaUrl: SCHEDULE_CALL_URL,
    details: ['Bio-Optimizacion', 'Arquitectura de Control', 'Identidad e Impacto'],
    footer: 'Disenado para alta exigencia personal y profesional.',
  },
  {
    title: 'E-books y recursos digitales',
    modalTitle: 'E-books y recursos digitales',
    eyebrow: 'Herramientas practicas',
    subtitle: 'Herramientas prácticas para empezar a comer mejor, moverte más y ordenar tus hábitos.',
    description:
      'Materiales claros para simplificar decisiones de alimentacion, entrenamiento y construccion de habitos.',
    longDescription:
      'Los e-books y recursos digitales son una puerta de entrada para quienes quieren empezar con más claridad antes de entrar a un acompañamiento personalizado.',
    secondaryDescription:
      'No son documentos decorativos. Son herramientas simples, aplicables y diseñadas para ayudarte a tomar mejores decisiones con alimentación, movimiento, hábitos y pérdida de grasa.',
    solves: [
      'No saber por dónde empezar.',
      'Complicarse demasiado con la nutrición.',
      'Falta de ideas para comer mejor.',
      'Falta de estructura básica.',
      'Dependencia de motivación.',
      'Confusión por exceso de información.',
    ],
    frameworkTitle: 'Recursos',
    framework: [
      {
        title: 'Come. Muévete. Y Ya.',
        text: 'Guía práctica para simplificar alimentación y movimiento.',
      },
      {
        title: 'Recetarios para pérdida de grasa',
        text: 'Ideas aplicables para comer mejor sin complicarte.',
      },
      {
        title: 'Guías de hábitos, nutrición y entrenamiento',
        text: 'Herramientas para ordenar decisiones diarias y seguimiento.',
      },
    ],
    audience:
      'Para personas que quieren empezar de forma simple, realista y sin entrar todavía a un proceso personalizado.',
    cta: 'Ver recursos digitales',
    ctaUrl: DIGITAL_RESOURCES_URL,
    details: ['Come. Muevete. Y Ya.', 'Recetarios para perdida de grasa', 'Guias de habitos, nutricion y entrenamiento'],
    footer: 'Recursos editables y escalables para avanzar con criterio.',
  },
];

const testimonials = [
  {
    name: 'Nombre del cliente',
    result: 'Resultado alcanzado',
    quote: 'Frase testimonial editable sobre el proceso, el acompanamiento y el cambio logrado.',
    photo: '',
  },
  {
    name: 'Nombre del cliente',
    result: 'Resultado alcanzado',
    quote: 'Frase testimonial editable sobre la claridad, la estructura y el seguimiento recibido.',
    photo: '',
  },
  {
    name: 'Nombre del cliente',
    result: 'Resultado alcanzado',
    quote: 'Frase testimonial editable sobre como el programa encajo con una vida ocupada.',
    photo: '',
  },
];

function SectionHeader({ label, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-accent">{label}</p>
      <h2 className="text-3xl font-semibold leading-tight text-smoke sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}

function ServiceModal({ service, onClose }) {
  useEffect(() => {
    if (!service) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const isExternalCta = service.ctaUrl.startsWith('http');

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/80 px-4 py-4 backdrop-blur-md sm:items-center sm:px-6"
      onClick={onClose}
      role="presentation"
    >
      <article
        className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-accent/30 bg-[linear-gradient(145deg,rgba(25,38,50,0.98),rgba(11,15,20,0.98))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.5)] sm:p-8 lg:p-10"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">{service.eyebrow}</p>
            <h3 id="service-modal-title" className="text-3xl font-semibold leading-tight text-smoke sm:text-5xl">
              {service.modalTitle}
            </h3>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-accent">{service.subtitle}</p>
          </div>
          <button
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.045] text-2xl leading-none text-smoke transition duration-300 hover:border-accent/60 hover:bg-accent/15"
            type="button"
            onClick={onClose}
            aria-label="Cerrar descripción del servicio"
          >
            ×
          </button>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5 text-base leading-8 text-muted">
            <p>{service.longDescription}</p>
            <p>{service.secondaryDescription}</p>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-smoke">Para quién es</h4>
              <p className="mt-3 leading-7 text-muted">{service.audience}</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-smoke">Qué resuelve</h4>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
                {service.solves.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-accent/20 bg-deep/35 p-5">
              <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-smoke">{service.frameworkTitle}</h4>
              <div className="mt-4 space-y-4">
                {service.framework.map((item, index) => (
                  <div className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0" key={item.title}>
                    <p className="text-sm font-semibold text-smoke">
                      {index + 1}. {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">Haz clic para avanzar con este servicio.</p>
          <a className="btn-primary" href={service.ctaUrl} target={isExternalCta ? '_blank' : undefined} rel={isExternalCta ? 'noreferrer' : undefined}>
            {service.cta}
          </a>
        </div>
      </article>
    </div>
  );
}

function App() {
  const [selectedService, setSelectedService] = useState(null);

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

        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 border-b border-white/10 pb-5">
          <a href="#" className="group flex min-w-0 items-center gap-3">
            <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-accent/35 bg-white/5 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
              <img
                className="h-full w-full object-cover object-[50%_18%] transition duration-500 group-hover:scale-105"
                src={PROFILE_IMAGE}
                alt="Cristian Núñez"
              />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold uppercase tracking-[0.22em] text-smoke sm:text-base">
                Cristian Núñez
              </span>
              <span className="mt-1 hidden text-xs font-medium uppercase tracking-[0.18em] text-accent sm:block">
                Rendimiento humano
              </span>
            </span>
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
            rel="noreferrer"
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
              Transforma tu cuerpo, ordena tus habitos y construye una identidad que sostenga tus resultados.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              Soy Cristian Núñez, mentor en rendimiento humano y transformacion de identidad. Ayudo a personas
              ocupadas a mejorar su fisico, recuperar energia y construir estructura real sin depender de motivacion
              pasajera.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a className="btn-primary" href={SCHEDULE_CALL_URL} target="_blank" rel="noreferrer">
                Agendar diagnóstico privado
              </a>
              <a className="btn-secondary" href="#servicios">
                Ver servicios
              </a>
            </div>
          </div>
          <div className="hidden min-h-[460px] lg:block" aria-hidden="true" />
        </div>
      </section>

      <section className="border-y border-accent/30 bg-[linear-gradient(90deg,#192632_0%,#0d2f50_52%,#192632_100%)] px-5 py-5 shadow-[0_20px_70px_rgba(13,47,80,0.28)] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-smoke sm:text-base">
            AGENDA ABIERTA — Diagnóstico privado con Cristian Núñez
          </p>
          <a
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-accent/60 bg-accent/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-smoke transition hover:bg-accent hover:text-ink"
            href={SCHEDULE_CALL_URL}
            target="_blank"
            rel="noreferrer"
          >
            Reservar
          </a>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-2xl font-medium leading-relaxed text-smoke sm:text-4xl">
            No necesitas otra dieta descargada de internet. No necesitas otra rutina generica. Necesitas estructura,
            seguimiento y una estrategia que encaje con tu vida real.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12" id="enfoque">
        <div className="mx-auto max-w-7xl">
          <SectionHeader label="Mi enfoque" title="Tres niveles para construir resultados que no dependan del impulso." />
          <div className="grid gap-5 md:grid-cols-3">
            {focusLevels.map((level) => (
              <article className="card" key={level.title}>
                <h3 className="text-2xl font-semibold text-smoke">{level.title}</h3>
                <p className="mt-5 leading-7 text-muted">{level.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12" id="servicios">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Servicios"
            title="Programas y recursos para distintos momentos del proceso."
            description="Cada linea de trabajo tiene una estructura distinta, pero comparte el mismo principio: claridad, seguimiento y ejecucion."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {services.map((service) => (
              <button
                className="card group cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink"
                key={service.title}
                type="button"
                onClick={() => setSelectedService(service)}
                aria-label={`Ver más sobre ${service.modalTitle}`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{service.eyebrow}</p>
                <h3 className="mt-4 text-3xl font-semibold text-smoke">{service.title}</h3>
                <p className="mt-5 leading-7 text-muted">{service.description}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {service.details.map((detail) => (
                    <li className="rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-smoke" key={detail}>
                      {detail}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 border-t border-white/10 pt-5 text-sm text-muted">{service.footer}</p>
                <span className="mt-6 inline-flex text-sm font-semibold text-accent transition duration-300 group-hover:translate-x-1">
                  Ver descripción ampliada
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-white/10 bg-navy/55 p-7 sm:p-10 lg:grid-cols-[0.82fr_1.18fr] lg:p-14">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-accent">Sobre mi</p>
            <h2 className="text-3xl font-semibold text-smoke sm:text-5xl">Experiencia, estructura y criterio.</h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-muted sm:text-lg">
            <p>
              Soy Cristian Núñez, mentor en rendimiento humano y transformacion de identidad. He acompanado mas de
              2.000 procesos de transformacion fisica y personal.
            </p>
            <p>
              Tambien he sido atleta de fisicoculturismo, 15 veces campeon en categorias como Fitness Model, Classic
              Bodybuilding y Men's Physique, con experiencia en escenarios nacionales e internacionales.
            </p>
            <p>
              Mi trabajo no se basa en prometer cambios rapidos. Se basa en estructura, habitos, seguimiento y
              confrontar con honestidad lo que esta impidiendo que una persona avance.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeader label="Testimonios" title="Historias editables para mostrar evidencia del proceso." />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article className="card" key={testimonial.name + testimonial.result}>
                <div className="mb-6 h-16 w-16 rounded-full border border-white/10 bg-deep/80">
                  {testimonial.photo ? <img className="h-full w-full rounded-full object-cover" src={testimonial.photo} alt={testimonial.name} /> : null}
                </div>
                <h3 className="text-xl font-semibold text-smoke">{testimonial.name}</h3>
                <p className="mt-1 text-sm font-semibold text-accent">{testimonial.result}</p>
                <p className="mt-5 leading-7 text-muted">"{testimonial.quote}"</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12" id="contacto">
        <div className="mx-auto max-w-4xl rounded-3xl border border-accent/30 bg-[linear-gradient(135deg,rgba(13,47,80,0.9),rgba(25,38,50,0.92))] p-7 text-center shadow-premium sm:p-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-accent">Contacto</p>
          <h2 className="text-3xl font-semibold text-smoke sm:text-5xl">Hablemos de la estructura que necesitas ahora.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
            Puedes agendar una llamada, escribirme por WhatsApp o contactarme por Instagram y correo.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a className="btn-primary" href={SCHEDULE_CALL_URL} target="_blank" rel="noreferrer">
              Agendar llamada
            </a>
            <a className="btn-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Escribirme por WhatsApp
            </a>
            <a className="btn-secondary" href="https://www.instagram.com/cristian_nunezzz/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="btn-secondary" href="mailto:coachingcristian@gmail.com">
              coachingcristian@gmail.com
            </a>
          </div>
        </div>
      </section>

      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </main>
  );
}

export default App;
