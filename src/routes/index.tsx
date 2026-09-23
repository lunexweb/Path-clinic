import { createFileRoute } from "@tanstack/react-router";
import {
  Bandage,
  BriefcaseMedical,
  Droplet,
  Footprints,
  HeartHandshake,
  HousePlus,
  Phone,
  Mail,
  MapPin,
  Globe,
  Facebook,
  CheckCircle2,
  ShieldCheck,
  FlaskConical,
  HeartPulse,
  Menu,
  X,
  Clock3,
  Navigation,
} from "lucide-react";
import { useState } from "react";

import logoMark from "@/assets/path-clinic-mark.png";
import nurseImg from "@/assets/path-clinic-nurse.png";
import clinicWoundCareImg from "@/assets/clinic-wound-care.jpeg";
import hospitalCareImg from "@/assets/hospital-care.jpeg";
import clinicDressingImg from "@/assets/clinic-dressing.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Path-Clinic | Wound Care Clinic & Home Services in Limpopo" },
      {
        name: "description",
        content:
          "Path-Clinic — your everyday medical center. Expert wound assessment, advanced dressings, diabetic ulcer care and home services across Thohoyandou, Makhado, Polokwane, Tzaneen and Mokopane. Call 064 519 1213.",
      },
      { property: "og:title", content: "Path-Clinic | Your Everyday Medical Center" },
      {
        property: "og:description",
        content:
          "Expert wound care you can trust. Professional care, faster healing, better quality of life — in clinic or in the comfort of your home.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const PHONE_1 = "064 519 1213";
const PHONE_2 = "081 713 7491";

const services = [
  {
    icon: Bandage,
    title: "Wound Assessment",
    text: "Thorough evaluation of every wound to build a personalised treatment plan.",
  },
  {
    icon: BriefcaseMedical,
    title: "Advanced Wound Dressings",
    text: "Modern dressing technology that protects the wound and speeds up healing.",
  },
  {
    icon: Droplet,
    title: "Diabetic Ulcer Care",
    text: "Specialised care for diabetic foot ulcers to prevent complications.",
  },
  {
    icon: Footprints,
    title: "Venous & Arterial Ulcer Management",
    text: "Targeted management of circulation-related leg ulcers.",
  },
  {
    icon: HeartHandshake,
    title: "Post-Operative & Chronic Wound Care",
    text: "Compassionate follow-up care after surgery and for long-term wounds.",
  },
];

const areas = ["Thohoyandou", "Makhado", "Polokwane", "Tzaneen", "Mokopane"];

const clinicPhotos = [
  {
    src: clinicWoundCareImg,
    alt: "Path-Clinic practitioner providing professional wound care",
    className: "sm:col-span-2 lg:col-span-1",
  },
  {
    src: hospitalCareImg,
    alt: "Path-Clinic practitioner caring for a patient in hospital",
    className: "",
  },
  {
    src: clinicDressingImg,
    alt: "Path-Clinic practitioner applying a leg wound dressing",
    className: "",
  },
];

const openingHours = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#home-care", label: "Home Services" },
    { href: "#clinic", label: "Our Clinic" },
    { href: "#areas", label: "Areas" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logoMark} alt="Path-Clinic logo" className="h-10 w-10 rounded-lg" />
          <span className="font-display text-lg font-bold tracking-tight text-navy">
            PATH-CLINIC
            <span className="block text-[10px] font-semibold tracking-[0.18em] text-primary uppercase">
              Your Everyday Medical Center
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE_1.replaceAll(" ", "")}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-md transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" /> {PHONE_1}
          </a>
        </nav>
        <button
          className="rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE_1.replaceAll(" ", "")}`}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> {PHONE_1}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function ClinicGallery() {
  return (
    <section id="clinic" className="bg-mint py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Care in action</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Professional care, centred on you
          </h2>
          <p className="mt-4 text-muted-foreground">
            Skilled, compassionate wound care in our clinic, at home and by the bedside.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clinicPhotos.map((photo) => (
            <figure key={photo.src} className={`overflow-hidden rounded-2xl bg-card shadow-md ${photo.className}`}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="aspect-[4/5] h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisitUs() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Visit Path-Clinic</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Find us in Makhado
          </h2>
          <div className="mt-7 flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </span>
            <div>
              <p className="font-display text-lg font-bold text-navy">Clinic address</p>
              <address className="mt-1 max-w-sm text-sm leading-relaxed text-muted-foreground not-italic">
                36 Rissik Street, Makhado, Limpopo, 0920, South Africa
              </address>
              <a
                href="https://www.google.com/maps/search/?api=1&query=36+Rissik+Street+Makhado+Limpopo+0920+South+Africa"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
              >
                <Navigation className="h-4 w-4" /> Get directions
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Clock3 className="h-6 w-6 text-primary" />
            </span>
            <div>
              <p className="font-display text-lg font-bold text-navy">Opening hours</p>
              <p className="text-sm text-muted-foreground">Open every day</p>
            </div>
          </div>
          <dl className="mt-6 divide-y divide-border">
            {openingHours.map((day) => (
              <div key={day} className="flex items-center justify-between gap-4 py-2.5 text-sm">
                <dt className="font-semibold text-foreground">{day}</dt>
                <dd className="font-bold text-primary">09:00 – 18:00</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-grid-bg overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-14 pb-16 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-8 lg:pt-20 lg:pb-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-secondary px-3.5 py-1.5 text-xs font-bold tracking-wide text-secondary-foreground uppercase">
            <HeartPulse className="h-3.5 w-3.5 text-primary" />
            Wound Care Clinic — Limpopo
          </span>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Expert wound care
            <span className="block text-primary">you can trust.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Personalised treatment plans to promote healing, prevent complications and improve
            well-being — at our clinic or in the comfort of your home.
          </p>
          <ul className="mt-6 space-y-2.5">
            {["Professional care.", "Faster healing.", "Better quality of life."].map((t) => (
              <li key={t} className="flex items-center gap-2.5 text-sm font-semibold text-foreground sm:text-base">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" /> {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${PHONE_1.replaceAll(" ", "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:scale-[1.03]"
            >
              <Phone className="h-4 w-4" /> Call {PHONE_1}
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold text-foreground transition-colors hover:bg-accent"
            >
              Explore our services
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold tracking-wide text-muted-foreground uppercase">
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" /> Safe & gentle care</span>
            <span className="flex items-center gap-1.5"><FlaskConical className="h-4 w-4 text-primary" /> Evidence-based treatment</span>
            <span className="flex items-center gap-1.5"><HeartHandshake className="h-4 w-4 text-primary" /> Compassionate service</span>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border shadow-2xl">
            <img
              src={nurseImg}
              alt="Path-Clinic nurse treating a patient's wound"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-xl sm:-left-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <HousePlus className="h-5 w-5 text-primary" />
            </span>
            <div>
              <p className="text-sm font-bold text-navy">Home services on request</p>
              <p className="text-xs text-muted-foreground">Quality care in the comfort of your home</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-mint py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Our services</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Every wound is unique. Every patient matters.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From first assessment to complete healing, we walk the journey with you.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                <s.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </article>
          ))}
          <article className="flex flex-col justify-center rounded-2xl bg-navy p-6 shadow-lg">
            <h3 className="font-display text-xl font-bold text-navy-foreground">
              Your healing is our mission
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-foreground/75">
              Not sure which service you need? Call us and we'll guide you.
            </p>
            <a
              href={`tel:${PHONE_2.replaceAll(" ", "")}`}
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-leaf px-5 py-2.5 text-sm font-bold text-leaf-foreground transition-transform hover:scale-[1.03]"
            >
              <Phone className="h-4 w-4" /> {PHONE_2}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

function HomeCare() {
  return (
    <section id="home-care" className="py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-3xl bg-secondary p-8">
            <img src={logoMark} alt="Path-Clinic crossed bandages and heart logo" className="w-full rounded-2xl" />
          </div>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Home services on request</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Quality care in the comfort of your home
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Can't come to us? We come to you. Our home-visit service brings professional wound care,
            dressings and follow-ups to your doorstep — ideal for elderly patients, post-operative
            recovery and anyone with limited mobility.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Same professional standard as in-clinic visits",
              "Flexible scheduling arranged on request",
              "Serving towns across Limpopo",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm font-semibold text-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {t}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:scale-[1.03]"
          >
            Request a home visit
          </a>
        </div>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section id="areas" className="bg-navy py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="text-xs font-bold tracking-[0.2em] text-leaf uppercase">Where we serve</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-foreground sm:text-4xl">
          Covering Limpopo, on request
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-navy-foreground/70">
          We cover these areas on request — and beyond. Reach out to confirm availability in your town.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {areas.map((a) => (
            <span
              key={a}
              className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/20 bg-navy-foreground/5 px-5 py-2.5 text-sm font-bold text-navy-foreground"
            >
              <MapPin className="h-4 w-4 text-leaf" /> {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-xl sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Contact us</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">
                Let us help you heal.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Call, email or message us on Facebook — we'll arrange your appointment or home visit.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:${PHONE_1.replaceAll(" ", "")}`}
                className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-primary/40 hover:bg-accent"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </span>
                <span>
                  <span className="block text-xs font-bold tracking-wide text-muted-foreground uppercase">Phone</span>
                  <span className="block text-sm font-bold text-foreground">{PHONE_1}</span>
                  <span className="block text-sm font-bold text-foreground">{PHONE_2}</span>
                </span>
              </a>
              <a
                href="mailto:Pathclinic24@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-primary/40 hover:bg-accent"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold tracking-wide text-muted-foreground uppercase">Email</span>
                  <span className="block text-sm font-bold break-all text-foreground">Pathclinic24@gmail.com</span>
                  <span className="block text-sm font-bold break-all text-foreground">Path-clinic@yahoo.co.za</span>
                </span>
              </a>
              <a
                href="https://www.path-clinic.co.za"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-primary/40 hover:bg-accent"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-5 w-5 text-primary" />
                </span>
                <span>
                  <span className="block text-xs font-bold tracking-wide text-muted-foreground uppercase">Website</span>
                  <span className="block text-sm font-bold text-foreground">www.path-clinic.co.za</span>
                </span>
              </a>
              <a
                href="https://www.facebook.com/search/top?q=Path-Clinic%20Wound%20Care"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-primary/40 hover:bg-accent"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Facebook className="h-5 w-5 text-primary" />
                </span>
                <span>
                  <span className="block text-xs font-bold tracking-wide text-muted-foreground uppercase">Facebook</span>
                  <span className="block text-sm font-bold text-foreground">Path-Clinic Wound Care</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-mint py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6">
        <img src={logoMark} alt="Path-Clinic logo" className="h-12 w-12 rounded-xl" />
        <p className="font-display text-sm font-bold text-navy">PATH-CLINIC — Your Everyday Medical Center</p>
        <p className="text-xs text-muted-foreground">
          Quality care. Every day. · {PHONE_1} / {PHONE_2} · Pathclinic24@gmail.com
        </p>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/27645191213"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Path-Clinic on WhatsApp"
      className="group fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-transform hover:scale-110 sm:right-6 sm:bottom-6"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-20" />
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-white" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <HomeCare />
        <ClinicGallery />
        <VisitUs />
        <Areas />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
