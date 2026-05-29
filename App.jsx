const WHATSAPP_NUMBER = '573206561668';
const SCHEDULE_CALL_URL = 'https://calendly.com/coachingcristian/diagnostico';
const WHATSAPP_MESSAGE = 'Hola Cristian, quiero informacion sobre tus programas de coaching.';
const PROFILE_IMAGE = '/cristian-nunez-banner.png';

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
    eyebrow: 'Transformacion fisica y personal',
    description:
      'Un programa para recuperar estructura, ordenar habitos y reconstruirse desde adentro con un proceso claro.',
    details: ['Regular la Biologia', 'Reordenar los habitos', 'Reconstruirse desde adentro'],
    footer: 'Etapa 1 - Reconstruccion / Etapa 2 - Direccion',
  },
  {
    title: 'Asesorias Fitness Online',
    eyebrow: 'Entrenamiento, nutricion y seguimiento',
    description:
      'Planes personalizados para personas que necesitan una estrategia concreta, medible y adaptada a su vida real.',
    details: ['Gold', 'Platinum', 'Platinum Plus', 'Platinum Pro'],
    footer: 'Acompanamiento progresivo segun nivel de soporte.',
  },
  {
    title: 'Protocolo Rebirth',
    eyebrow: 'Programa premium de 90 dias',
    description:
      'Proceso para lideres, ejecutivos y emprendedores que necesitan optimizar energia, control e impacto.',
    details: ['Bio-Optimizacion', 'Arquitectura de Control', 'Identidad e Impacto'],
    footer: 'Disenado para alta exigencia personal y profesional.',
  },
  {
    title: 'E-books y recursos digitales',
    eyebrow: 'Herramientas practicas',
    description:
      'Materiales claros para simplificar decisiones de alimentacion, entrenamiento y construccion de habitos.',
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

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-smoke">
      <section className="relative isolate min-h-screen px-5 py-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(112,150,195,0.22),transparent_28rem),linear-gradient(135deg,#0b0f14_0%,#192632_48%,#0d2f50_100%)]" />
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

        <div className="mx-auto grid max-w-7xl items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.12fr_0.88fr] lg:py-32">
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

          <aside className="rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-premium backdrop-blur sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-accent">Base del trabajo</p>
            <div className="mt-8 space-y-6">
              {['Estructura medible', 'Seguimiento real', 'Confrontacion honesta'].map((item, index) => (
                <div className="flex gap-5 border-b border-white/10 pb-6 last:border-b-0 last:pb-0" key={item}>
                  <span className="text-sm font-semibold text-accent">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-semibold text-smoke">{item}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      Decisiones claras para avanzar sin improvisar cada semana.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
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
              <article className="card group" key={service.title}>
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
              </article>
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
              Instagram @cristian_nunezzz
            </a>
            <a className="btn-secondary" href="mailto:coachingcristian@gmail.com">
              coachingcristian@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
