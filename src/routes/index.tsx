import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Bandage, CalendarClock, Check, Clock3, Droplets, HeartPulse, Home, Mail, MapPin, Menu, Phone, ShieldCheck, Stethoscope, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import logo from "@/assets/path-clinic-logo.png";
import heroImage from "@/assets/path-clinic-hero.jpg";
import homeCareImage from "@/assets/path-clinic-home-care.jpg";
import woundCareImage from "@/assets/path-clinic-wound-care.png";
import immunizationImage from "@/assets/path-clinic-immunization.jpg";
import consultationImage from "@/assets/path-clinic-consultation.jpg";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Path-Clinic | Expert Wound Care Across Limpopo" },
    { name: "description", content: "Personalised wound assessment, advanced dressings, diabetic ulcer care and home visits across Limpopo. Open daily, 07:00–17:00." },
    { property: "og:title", content: "Path-Clinic | Expert Wound Care Across Limpopo" },
    { property: "og:description", content: "Compassionate, evidence-based wound care at our clinic or in your home." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const marqueeItems = ["Wound assessment", "Advanced dressings", "Diabetic ulcer care", "Post-operative care", "Home visits", "Immunization", "Laboratory services", "IV therapy", "Chronic illness care"];

  const services = [
    { icon: Stethoscope, title: "Wound assessment", text: "A thorough evaluation and a clear, personalised care plan." },
    { icon: Bandage, title: "Advanced dressings", text: "Modern dressing techniques selected for your wound and healing stage." },
    { icon: Droplets, title: "Diabetic ulcer care", text: "Specialised support focused on protection, monitoring and healing." },
    { icon: HeartPulse, title: "Venous & arterial ulcers", text: "Evidence-based care for complex lower-limb wounds." },
    { icon: ShieldCheck, title: "Post-operative care", text: "Gentle monitoring and dressing support after surgery." },
    { icon: Home, title: "Home wound care", text: "Quality nursing care delivered in the comfort of your home." },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <header className={`fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl transition-shadow duration-300 ${scrolled ? "shadow-lg shadow-brand-deep/10" : ""}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" aria-label="Path-Clinic home"><img src={logo} alt="Path-Clinic" className="h-14 w-auto" /></a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-foreground lg:flex">
            <a href="#services" className="transition-colors hover:text-primary">Services</a>
            <a href="#home-care" className="transition-colors hover:text-primary">Home care</a>
            <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
            <Button asChild variant="hero"><a href="tel:+27645191213"><Phone />Call us</a></Button>
          </nav>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="grid gap-1 border-t border-border bg-background p-5 text-base font-semibold lg:hidden">
          <a href="#services" className="p-3" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#home-care" className="p-3" onClick={() => setMenuOpen(false)}>Home care</a>
          <a href="#contact" className="p-3" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>}
      </header>

      <section id="top" className="relative min-h-[92vh] pt-20">
        <img src={heroImage} alt="Path-Clinic nurse providing professional wound care" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover object-[62%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/90 to-brand-deep/15" />
        <div className="relative mx-auto flex min-h-[calc(92vh-5rem)] max-w-7xl items-center px-5 py-16 lg:px-8">
          <div className="max-w-2xl text-primary-foreground">
            <div className="rise-in mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-sm font-semibold backdrop-blur" style={{ animationDelay: "60ms" }}><span className="h-2 w-2 rounded-full bg-brand-lime" />Open every day · 07:00–17:00</div>
            <h1 className="rise-in text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl" style={{ animationDelay: "160ms" }}>Expert wound care.<br/><span className="text-brand-lime">Personal to you.</span></h1>
            <p className="rise-in mt-6 max-w-xl text-lg leading-8 text-primary-foreground/85" style={{ animationDelay: "280ms" }}>Professional, compassionate wound management that supports faster healing and a better quality of life—at our clinic or in your home.</p>
            <div className="rise-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "400ms" }}>
              <Button asChild variant="hero" size="xl"><a href="tel:+27645191213"><Phone />Call 064 519 1213</a></Button>
              <Button asChild size="xl" className="border border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground shadow-none backdrop-blur hover:bg-primary-foreground/20"><a href="#services">Our services <ArrowRight /></a></Button>
            </div>
            <div className="rise-in mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-primary-foreground/85" style={{ animationDelay: "520ms" }}>
              <span className="flex items-center gap-2"><Check className="text-brand-lime" />Safe & gentle care</span>
              <span className="flex items-center gap-2"><Check className="text-brand-lime" />Evidence-based treatment</span>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-border bg-surface py-4" aria-hidden="true">
        <div className="marquee-track flex w-max items-center text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-8 whitespace-nowrap">
              <span>{item}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-brand-lime" />
            </span>
          ))}
        </div>
      </div>

      <section id="services" className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div><p className="text-sm font-bold uppercase text-primary">How we can help</p><h2 className="mt-3 text-4xl font-bold leading-tight text-brand-deep sm:text-5xl">Complete care for every stage of healing.</h2></div>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground lg:justify-self-end">Every wound is unique. Our treatment plans are designed around your condition, comfort and recovery goals.</p>
          </div>
          <div className="mt-14 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({icon: Icon,title,text}) => <article key={title} className="group border-b border-r border-border bg-surface p-8 transition-colors hover:bg-brand-soft/60 sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary"><Icon /></div>
              <h3 className="mt-7 text-xl font-bold text-brand-deep">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section id="home-care" className="bg-brand-deep py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded-lg"><img src={homeCareImage} alt="Path-Clinic nurse arriving for a home care visit" loading="lazy" width={1200} height={912} className="aspect-[4/3] h-full w-full object-cover" /></div>
          <div className="lg:pl-10"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground"><Home /></div><p className="mt-8 text-sm font-bold uppercase text-brand-lime">Home services on request</p><h2 className="mt-3 text-4xl font-bold sm:text-5xl">Quality care, in the comfort of your home.</h2><p className="mt-6 text-lg leading-8 text-primary-foreground/75">We bring professional wound assessment, dressings and ongoing support to patients across Limpopo.</p><div className="mt-8 flex items-start gap-3 border-l-2 border-primary pl-5"><MapPin className="mt-1 shrink-0 text-brand-lime"/><p className="font-semibold leading-7">Thohoyandou · Makhado · Polokwane<br/>Tzaneen · Mokopane</p></div><Button asChild variant="hero" size="xl" className="mt-9"><a href="https://wa.me/27645191213?text=Hello%20Path-Clinic%2C%20I%20would%20like%20to%20request%20a%20home%20visit." target="_blank" rel="noreferrer">Request a home visit <ArrowRight /></a></Button></div>
        </div>
      </section>

      <section id="gallery" className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl"><p className="text-sm font-bold uppercase text-primary">Inside Path-Clinic</p><h2 className="mt-3 text-4xl font-bold leading-tight text-brand-deep sm:text-5xl">Care you can see and feel.</h2></div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <figure className="group overflow-hidden rounded-lg"><img src={woundCareImage} alt="Path-Clinic nurse providing professional wound care in the clinic" loading="lazy" className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><figcaption className="mt-3 text-sm font-semibold text-muted-foreground">Professional wound care</figcaption></figure>
            <figure className="group overflow-hidden rounded-lg"><img src={immunizationImage} alt="Path-Clinic nurse giving an immunization to a patient" loading="lazy" width={1200} height={912} className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><figcaption className="mt-3 text-sm font-semibold text-muted-foreground">Immunization services</figcaption></figure>
            <figure className="group overflow-hidden rounded-lg"><img src={consultationImage} alt="Path-Clinic nurse consulting with a patient" loading="lazy" width={1200} height={912} className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><figcaption className="mt-3 text-sm font-semibold text-muted-foreground">Everyday consultations</figcaption></figure>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-surface py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div><p className="text-sm font-bold uppercase text-primary">Contact us</p><h2 className="mt-3 text-4xl font-bold text-brand-deep sm:text-5xl">Let us help you heal.</h2><p className="mt-5 max-w-md text-lg leading-8 text-muted-foreground">Speak to our team about clinic care or arrange a visit at home.</p></div>
            <div className="grid gap-px overflow-hidden rounded-lg bg-border sm:grid-cols-2">
              <a href="tel:+27645191213" className="group bg-background p-7 transition-colors hover:bg-brand-soft"><Phone className="text-primary"/><span className="mt-5 block text-sm text-muted-foreground">Primary number</span><strong className="mt-1 block text-xl text-brand-deep">064 519 1213</strong></a>
              <a href="tel:+27817137491" className="group bg-background p-7 transition-colors hover:bg-brand-soft"><Phone className="text-primary"/><span className="mt-5 block text-sm text-muted-foreground">Alternative number</span><strong className="mt-1 block text-xl text-brand-deep">081 713 7491</strong></a>
              <div className="bg-background p-7"><Clock3 className="text-primary"/><span className="mt-5 block text-sm text-muted-foreground">Operating hours</span><strong className="mt-1 block text-xl text-brand-deep">07:00–17:00</strong><span className="mt-1 block text-sm text-muted-foreground">Sunday to Sunday</span></div>
              <a href="https://www.google.com/maps/search/?api=1&query=36+Rissik+Street,+Makhado,+Limpopo,+0920,+South+Africa" target="_blank" rel="noreferrer" className="group bg-background p-7 transition-colors hover:bg-brand-soft"><MapPin className="text-primary"/><span className="mt-5 block text-sm text-muted-foreground">Visit us</span><strong className="mt-1 block text-xl text-brand-deep">36 Rissik Street</strong><span className="mt-1 block text-sm text-muted-foreground">Makhado, Limpopo, 0920</span></a>
              <div className="bg-background p-7"><Mail className="text-primary"/><span className="mt-5 block text-sm text-muted-foreground">Email us</span><a href="mailto:path-clinic@yahoo.co.za" className="mt-1 block font-bold text-brand-deep hover:text-primary">path-clinic@yahoo.co.za</a><a href="mailto:pathclinic24@gmail.com" className="mt-1 block font-bold text-brand-deep hover:text-primary">pathclinic24@gmail.com</a></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 sm:flex-row lg:px-8"><img src={logo} alt="Path-Clinic" className="h-12 w-auto"/><p className="text-sm text-muted-foreground">Your everyday medical center · Quality care, every day.</p></div></footer>

      <a href="https://wa.me/27645191213?text=Hello%20Path-Clinic%2C%20I%20would%20like%20to%20enquire%20about%20wound%20care." target="_blank" rel="noreferrer" aria-label="Chat with Path-Clinic on WhatsApp" className="whatsapp-float fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-background sm:bottom-7 sm:right-7">
        <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8 fill-current"><path d="M16.04 3A12.8 12.8 0 0 0 5.02 22.3L3.1 29l6.87-1.8A12.83 12.83 0 1 0 16.04 3Zm0 23.45a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.08 1.07 1.09-3.98-.25-.41a10.62 10.62 0 1 1 9.03 5.03Zm5.82-7.94c-.32-.16-1.89-.93-2.18-1.04-.29-.1-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-1.88-.94-3.12-1.68-4.36-3.82-.33-.57.33-.53.94-1.76.11-.21.05-.4-.03-.56-.08-.16-.71-1.7-.97-2.33-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.15-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z"/></svg>
      </a>
    </main>
  );
}
