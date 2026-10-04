"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight, BrainCircuit, Building2, Check, ChevronDown, GraduationCap,
  HeartPulse, Languages, Mail, Menu, Mic2, Network, Phone, Quote,
  ShieldCheck, Sparkles, Stethoscope, Users, X, Zap,
} from "lucide-react";

type Lang = "tr" | "en";
type Copy = {
  nav: { solutions: string; briolight: string; products: string; services: string; about: string; contact: string };
  cta: string; heroEyebrow: string; heroTitleA: string; heroTitleB: string; heroLead: string;
  heroPrimary: string; heroSecondary: string; partner: string; heroStats: [string, string][];
  bridgeTitle: string; bridgeText: string; pillarsTitle: string; pillarsLead: string;
  pillars: { title: string; text: string }[]; brioEyebrow: string; brioTitle: string; brioLead: string;
  productFloor: string; productFloorText: string; productSandbox: string; productSandboxText: string;
  productPanel: string; productPanelText: string; explore: string; ecosystemTitle: string; ecosystemLead: string;
  ecosystemItems: string[]; platformTitle: string; platformLead: string; platformCards: { k: string; t: string; d: string }[];
  legacyEyebrow: string; legacyTitle: string; legacyLead: string; digitalLectern: string; digitalLecternText: string;
  audioLectern: string; audioLecternText: string; viewSpecs: string; digitalSpecs: string[]; audioSpecs: string[];
  servicesTitle: string; servicesLead: string; services: { title: string; text: string }[];
  processTitle: string; process: { n: string; t: string; d: string }[]; proofTitle: string; proofLead: string;
  contactEyebrow: string; contactTitle: string; contactLead: string; contactButton: string; footer: string;
};

const copy: Record<Lang, Copy> = {
  tr: {
    nav: { solutions: "Çözümler", briolight: "Briolight", products: "Elektronik Kürsü", services: "Hizmetler", about: "Yaklaşım", contact: "İletişim" },
    cta: "Proje görüşmesi",
    heroEyebrow: "Eğitim teknolojileri · RehaTech · Entegrasyon",
    heroTitleA: "İnsan odaklı mekânları",
    heroTitleB: "teknolojiyle dönüştürüyoruz.",
    heroLead: "AKER; eğitim, kapsayıcı öğrenme ve dijital rehabilitasyon için donanım, yazılım, kurulum ve proje danışmanlığını tek mimaride bir araya getirir.",
    heroPrimary: "Briolight çözümlerini keşfet", heroSecondary: "AKER ürünlerini incele",
    partner: "Briolight® Türkiye Yetkili Çözüm Ortağı",
    heroStats: [["10", "Briolight cihaz ekosistemi"], ["200+", "Dijital egzersiz / yöntem"], ["600+", "Briolight saha projesi"]],
    bridgeTitle: "Tek cihaz değil, çalışan bir sistem.",
    bridgeText: "İhtiyaç analizi, doğru teknoloji konfigürasyonu, kurulum, eğitim, yazılım ve yaşam döngüsü desteği; AKER'in proje yaklaşımının tek bir zinciridir.",
    pillarsTitle: "Teknolojiyi mekâna değil, ihtiyaca göre tasarlıyoruz.",
    pillarsLead: "Okuldan rehabilitasyon merkezine, konferans salonundan yaşlı bakım merkezine kadar her proje; kullanıcı, iş akışı ve ölçülebilir çıktı üzerinden kurgulanır.",
    pillars: [
      { title: "Kapsayıcı Eğitim", text: "Özel eğitim, okul ve destek merkezleri için etkileşimli öğrenme alanları." },
      { title: "Dijital Rehabilitasyon", text: "Fiziksel ve bilişsel egzersizleri oyunlaştıran, veri üreten çoklu cihaz senaryoları." },
      { title: "Akıllı Sunum Sistemleri", text: "Dijital ve ses sistemli kürsülerle sınıf, salon ve konferans altyapıları." },
      { title: "Uçtan Uca Entegrasyon", text: "Keşif, proje, tedarik, kurulum, eğitim, bakım ve özelleştirme." },
    ],
    brioEyebrow: "BRIOLIGHT DIGITAL REHABILITATION",
    brioTitle: "Rehabilitasyon ve kapsayıcı eğitimi etkileşimli bir deneyime dönüştürün.",
    brioLead: "Briolight platformu; interaktif zemin, kum havuzu, panel ve tamamlayıcı cihazları ortak yazılım, egzersiz kütüphanesi ve çoklu cihaz senaryolarıyla birleştirir.",
    productFloor: "Interactive Floor", productFloorText: "Hareket duyarlı büyük zemin projeksiyonu; dikkat, hafıza, koordinasyon ve hedefli hareket çalışmalarını oyunlaştırır.",
    productSandbox: "Interactive Sandbox", productSandboxText: "Gerçek kum, derinlik algılama ve projeksiyonu bir araya getirerek duyusal, bilişsel ve koordinasyon odaklı çalışmalar sunar.",
    productPanel: "Interactive Panel", productPanelText: "Mobil kullanım için dokunmatik ekran üzerinde bilişsel süreçler ve hareket koordinasyonuna yönelik Briolight egzersizleri.",
    explore: "Çözüm detayları",
    ecosystemTitle: "10 cihaz, tek platform, çoklu terapi senaryoları.",
    ecosystemLead: "Briolight'ın ortak kullanıcı arayüzü ve senaryo yaklaşımı, farklı cihazların aynı seans içinde birlikte çalışmasına imkân verir.",
    ecosystemItems: ["Interactive Floor", "Interactive Sandbox", "Interactive Panel", "Interactive Wall", "Gross Motor Controller", "Fine Motor Controller", "Logopedic Mirror", "Interactive Metronome", "Interactive Gyroscopes", "Self-Control Training Module"],
    platformTitle: "Platform, kurumunuzla birlikte ölçeklenir.",
    platformLead: "Briolight'ın 4.0'dan 5.0'a uzanan yaklaşımı; içerik güncelleme, veri toplama, web ve mobil entegrasyon, çok dilli yapı ve AI/ML özelliklerine doğru gelişir.",
    platformCards: [
      { k: "4.0", t: "Inclusive", d: "Çocuklar için kapsayıcı eğitim, 200 ön yüklü egzersiz ve 4 bağımsız cihaz." },
      { k: "4.5", t: "Rehabilitation", d: "Çocuk ve yetişkin rehabilitasyonu, 10 cihaza kadar kombinasyon, içerik güncelleme ve araştırma verisi." },
      { k: "5.0", t: "Network-centric", d: "Web ve mobil entegrasyonu, bulut mimarisi, çok dilli kullanım, AI/ML ve uzaktan terapi yaklaşımı." },
    ],
    legacyEyebrow: "AKER CORE PRODUCTS", legacyTitle: "AKER'in sahada kullanılan sunum ve ses çözümleri.",
    legacyLead: "Mevcut AKER ürün ailesini yeni dijital rehabilitasyon portföyüyle aynı kurumsal çatı altında sürdürüyoruz.",
    digitalLectern: "ITC Dijital Kürsü · TV-27JTP",
    digitalLecternText: "27\" dokunmatik ekran, Intel i5 dahili bilgisayar, elektrikli yükseklik ayarı, kablosuz mikrofonlar ve EasyTalk sunum araçlarıyla hepsi bir arada akıllı kürsü.",
    audioLectern: "Ses Sistemli Elektronik Kürsü · T-6236BCHE",
    audioLecternText: "100 W RMS dahili ses sistemi, gooseneck ve telsiz mikrofon seçenekleri, Bluetooth / USB / SD ve harici hoparlör çıkışıyla eğitim ve konferans kullanımı.",
    viewSpecs: "Teknik özellikleri göster",
    digitalSpecs: ["27\" IPS · 1920×1080 · 10 nokta dokunmatik", "Intel i5-12450H · 8 GB RAM · 256 GB SSD", "EasyTalk · anotasyon · beyaz tahta · ekran kaydı", "2× kablosuz el mikrofonu + 55 cm gooseneck", "Elektrikli 970–1170 mm yükseklik ayarı", "HDMI IN/OUT · USB 3.0 · RJ45 · XLR OUT"],
    audioSpecs: ["100 W RMS dahili amplifikasyon", "3–5 dahili hoparlör · 60 Hz–18 kHz", "Gooseneck kondansatör + telsiz mikrofon", "AUX / RCA · USB / SD · Bluetooth · MP3", "Harici hoparlör ve kayıt çıkışı", "MDF gövde + metal ön panel"],
    servicesTitle: "Satıştan önce başlayan, kurulumdan sonra devam eden hizmet.",
    servicesLead: "AKER, ürünü tek başına teslim etmek yerine kurumun kullanım senaryosuna göre projelendirir ve devreye alır.",
    services: [
      { title: "Proje Danışmanlığı", text: "Mekân, kullanıcı, iş akışı ve bütçeye göre ihtiyaç analizi ve konfigürasyon." },
      { title: "Satış & Tedarik", text: "Briolight çözümleri ile AKER dijital ve ses sistemli kürsü ürünlerinin tedariği." },
      { title: "Kurulum & Entegrasyon", text: "Mevcut ses, ekran, projeksiyon ve BT altyapısına uyumlu devreye alma." },
      { title: "Eğitim & Destek", text: "Kullanıcı oryantasyonu, teknik destek, bakım, onarım ve proje bazlı özelleştirme." },
    ],
    processTitle: "Bir fikirden çalışan sisteme.",
    process: [
      { n: "01", t: "Keşif", d: "Kurum, kullanıcı grubu ve mekân gereksinimlerini çıkarırız." },
      { n: "02", t: "Tasarım", d: "Donanım + yazılım + içerik + altyapı mimarisini oluştururuz." },
      { n: "03", t: "Pilot", d: "Uygun senaryoda demo/pilot ile kullanım akışını doğrularız." },
      { n: "04", t: "Kurulum", d: "Teslim, entegrasyon, devreye alma ve kullanıcı eğitimini tamamlarız." },
      { n: "05", t: "Yaşam Döngüsü", d: "Bakım, destek, içerik ve ölçeklendirme ihtiyaçlarını yönetiriz." },
    ],
    proofTitle: "Gerçek mekânlarda, gerçek kullanıcılarla.",
    proofLead: "Briolight çözümleri hastane, rehabilitasyon merkezi, okul, anaokulu ve kapsayıcı eğitim ortamlarında kullanılmak üzere tasarlanmıştır.",
    contactEyebrow: "PROJE GÖRÜŞMESİ",
    contactTitle: "Bir oda, bir merkez veya ülke çapında bir program — doğru mimariyle başlayalım.",
    contactLead: "Bize kurumunuzu, hedef kullanıcı grubunu ve mekânınızı anlatın. AKER ekibi uygun teknoloji konfigürasyonunu ve uygulama yaklaşımını birlikte şekillendirsin.",
    contactButton: "Görüşme talep et", footer: "AKER Proje ve Danışmanlık · Ankara",
  },
  en: {
    nav: { solutions: "Solutions", briolight: "Briolight", products: "AKER Products", services: "Services", about: "Approach", contact: "Contact" },
    cta: "Discuss a project", heroEyebrow: "Education technology · RehaTech · Integration",
    heroTitleA: "We transform human-centred spaces", heroTitleB: "through technology.",
    heroLead: "AKER brings hardware, software, implementation and project consulting together for education, inclusive learning and digital rehabilitation.",
    heroPrimary: "Explore Briolight", heroSecondary: "View AKER products",
    partner: "Briolight® Authorized Solution Partner in Türkiye",
    heroStats: [["10", "Briolight device ecosystem"], ["200+", "Digital exercises / methods"], ["600+", "Briolight field projects"]],
    bridgeTitle: "Not a device. An operating system for the space.",
    bridgeText: "Needs analysis, configuration, implementation, training, software and lifecycle support are designed as one connected delivery chain.",
    pillarsTitle: "Technology designed around the need — not around the device.",
    pillarsLead: "From schools and rehabilitation centres to conference halls and elderly care, every project is structured around users, workflow and measurable outcomes.",
    pillars: [
      { title: "Inclusive Education", text: "Interactive learning environments for special education, schools and support centres." },
      { title: "Digital Rehabilitation", text: "Multi-device scenarios that gamify physical and cognitive exercises and generate usable data." },
      { title: "Smart Presentation Systems", text: "Digital and amplified lecterns for classrooms, halls and conference environments." },
      { title: "End-to-End Integration", text: "Discovery, design, procurement, installation, training, maintenance and customization." },
    ],
    brioEyebrow: "BRIOLIGHT DIGITAL REHABILITATION",
    brioTitle: "Turn rehabilitation and inclusive education into an interactive experience.",
    brioLead: "The Briolight platform combines interactive floor, sandbox, panel and complementary devices with a shared software layer, exercise library and multi-device scenarios.",
    productFloor: "Interactive Floor", productFloorText: "A movement-sensitive large floor projection that gamifies attention, memory, coordination and targeted movement activities.",
    productSandbox: "Interactive Sandbox", productSandboxText: "Combines real sand, depth sensing and projection for sensory, cognitive and coordination-focused activities.",
    productPanel: "Interactive Panel", productPanelText: "Mobile touch-screen access to Briolight exercises focused on cognitive processes and movement coordination.",
    explore: "Explore solution", ecosystemTitle: "10 devices. One platform. Multi-device therapy scenarios.",
    ecosystemLead: "Briolight's common interface and scenario model lets multiple devices operate together in the same session.",
    ecosystemItems: ["Interactive Floor", "Interactive Sandbox", "Interactive Panel", "Interactive Wall", "Gross Motor Controller", "Fine Motor Controller", "Logopedic Mirror", "Interactive Metronome", "Interactive Gyroscopes", "Self-Control Training Module"],
    platformTitle: "A platform that scales with the institution.",
    platformLead: "Briolight's evolution from 4.0 to 5.0 adds content updates, data collection, web/mobile integration, multilingual deployment and AI/ML capabilities.",
    platformCards: [
      { k: "4.0", t: "Inclusive", d: "Inclusive education for children, 200 pre-installed exercises and four standalone devices." },
      { k: "4.5", t: "Rehabilitation", d: "Child and adult rehabilitation, up to 10 devices, updateable content and research data collection." },
      { k: "5.0", t: "Network-centric", d: "Web/mobile integration, cloud architecture, multilingual deployment, AI/ML and remote therapy." },
    ],
    legacyEyebrow: "AKER CORE PRODUCTS", legacyTitle: "Presentation and audio systems already in AKER's field portfolio.",
    legacyLead: "The established AKER lectern family continues alongside the new digital rehabilitation portfolio under one professional solutions brand.",
    digitalLectern: "ITC Digital Lectern · TV-27JTP",
    digitalLecternText: "All-in-one smart lectern with 27\" touch display, Intel i5 embedded PC, electric height adjustment, wireless microphones and EasyTalk presentation tools.",
    audioLectern: "Amplified Electronic Lectern · T-6236BCHE",
    audioLecternText: "100 W RMS built-in sound, gooseneck and wireless microphone options, Bluetooth / USB / SD and external loudspeaker output for education and conference use.",
    viewSpecs: "Show specifications",
    digitalSpecs: ["27\" IPS · 1920×1080 · 10-point touch", "Intel i5-12450H · 8 GB RAM · 256 GB SSD", "EasyTalk · annotation · whiteboard · screen recording", "2× wireless handheld + 55 cm gooseneck microphone", "Electric 970–1170 mm height adjustment", "HDMI IN/OUT · USB 3.0 · RJ45 · XLR OUT"],
    audioSpecs: ["100 W RMS built-in amplification", "3–5 internal speakers · 60 Hz–18 kHz", "Gooseneck condenser + wireless microphone", "AUX / RCA · USB / SD · Bluetooth · MP3", "External loudspeaker and recording output", "MDF body + metal front panel"],
    servicesTitle: "Service that starts before the sale and continues after installation.",
    servicesLead: "AKER designs and commissions solutions around the institution's use case instead of simply delivering equipment.",
    services: [
      { title: "Project Consulting", text: "Needs analysis and configuration based on space, users, workflow and budget." },
      { title: "Sales & Procurement", text: "Briolight solutions plus AKER digital and amplified lectern systems." },
      { title: "Installation & Integration", text: "Commissioning compatible with existing audio, display, projection and IT infrastructure." },
      { title: "Training & Support", text: "User onboarding, technical support, maintenance, repair and project-based customization." },
    ],
    processTitle: "From an idea to an operating system.",
    process: [
      { n: "01", t: "Discover", d: "We map the institution, user groups and spatial requirements." },
      { n: "02", t: "Design", d: "We define hardware, software, content and infrastructure architecture." },
      { n: "03", t: "Pilot", d: "Where appropriate, we validate the workflow through demo or pilot deployment." },
      { n: "04", t: "Implement", d: "We complete delivery, integration, commissioning and user training." },
      { n: "05", t: "Lifecycle", d: "We manage maintenance, support, content and scaling requirements." },
    ],
    proofTitle: "In real spaces, with real users.",
    proofLead: "Briolight solutions are designed for hospitals, rehabilitation centres, schools, kindergartens and inclusive education settings.",
    contactEyebrow: "PROJECT DISCUSSION",
    contactTitle: "One room, one centre or a nationwide program — start with the right architecture.",
    contactLead: "Tell us about your institution, target user group and space. AKER will help shape the right technology configuration and implementation approach.",
    contactButton: "Request a meeting", footer: "AKER Project & Consulting · Ankara",
  },
};

const AKER_LOGO = "https://66de3f05f5.clvaw-cdnwnd.com/7d19a943f6a396684761cb78ddcc114b/200000021-45fdf45fe1/AKER%20PROJE%20%281%29.jpeg?ph=66de3f05f5";
const LECTERN_DIGITAL = "https://66de3f05f5.clvaw-cdnwnd.com/7d19a943f6a396684761cb78ddcc114b/200000039-eff89eff8a/DSC09422.jpeg?ph=66de3f05f5";
const LECTERN_AUDIO = "https://66de3f05f5.clvaw-cdnwnd.com/7d19a943f6a396684761cb78ddcc114b/200000137-2e5072e509/WhatsApp%20Image%202025-12-11%20at%2018.30.282.jpeg?ph=66de3f05f5";
const AUDITORIUM = "https://66de3f05f5.clvaw-cdnwnd.com/7d19a943f6a396684761cb78ddcc114b/200000031-9ebd69ebd8/Web%20Ana%20sayfa.jpeg?ph=66de3f05f5";
const icons = [GraduationCap, HeartPulse, Mic2, Network];

function ImageFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <div className={`image-frame ${className}`}><img src={src} alt={alt} loading="lazy" /></div>;
}

export default function AkerSite() {
  const [lang, setLang] = useState<Lang>("tr");
  const [menu, setMenu] = useState(false);
  const [openSpecs, setOpenSpecs] = useState<"digital" | "audio" | null>(null);
  const t = useMemo(() => copy[lang], [lang]);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="AKER Proje">
          <span className="brand-mark"><img src={AKER_LOGO} alt="AKER Proje logo" /></span>
          <span className="brand-copy"><strong>AKER</strong><small>PROJE & DANIŞMANLIK</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary">
          <a href="#solutions">{t.nav.solutions}</a><a href="#briolight">{t.nav.briolight}</a><a href="#aker-products">{t.nav.products}</a><a href="#services">{t.nav.services}</a><a href="#process">{t.nav.about}</a>
        </nav>
        <div className="header-actions">
          <button className="lang-switch" onClick={() => setLang(lang === "tr" ? "en" : "tr")} aria-label="Change language"><Languages size={15} /> {lang === "tr" ? "EN" : "TR"}</button>
          <a className="header-cta" href="#contact">{t.cta}<ArrowRight size={15} /></a>
          <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? <X /> : <Menu />}</button>
        </div>
        {menu && <div className="mobile-nav">
          <a href="#solutions" onClick={() => setMenu(false)}>{t.nav.solutions}</a><a href="#briolight" onClick={() => setMenu(false)}>{t.nav.briolight}</a><a href="#aker-products" onClick={() => setMenu(false)}>{t.nav.products}</a><a href="#services" onClick={() => setMenu(false)}>{t.nav.services}</a><a href="#process" onClick={() => setMenu(false)}>{t.nav.about}</a><a href="#contact" onClick={() => setMenu(false)}>{t.nav.contact}</a>
        </div>}
      </header>

      <section className="hero" id="top">
        <div className="hero-media"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-room-PJ6qun35RUObnaUxtbLdjuqiLj6w1E.webp" alt="Briolight multi-device interactive rehabilitation room" /></div><div className="hero-overlay"/><div className="hero-grid-overlay"/>
        <div className="hero-content container">
          <div className="hero-copy"><div className="eyebrow light"><Sparkles size={15}/>{t.heroEyebrow}</div><h1>{t.heroTitleA}<span>{t.heroTitleB}</span></h1><p>{t.heroLead}</p><div className="hero-buttons"><a href="#briolight" className="button button-primary">{t.heroPrimary}<ArrowRight size={17}/></a><a href="#aker-products" className="button button-ghost">{t.heroSecondary}</a></div></div>
          <div className="hero-card"><div className="partner-lockup"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/briolight-logo-h7A7wFSAdVbuy8oCGeCLgrZfwErLiN.png" alt="Briolight"/><span>{t.partner}</span></div><div className="hero-stats">{t.heroStats.map(([num,label])=><div key={label}><strong>{num}</strong><span>{label}</span></div>)}</div><div className="hero-card-note"><ShieldCheck size={17}/><span>{lang === "tr" ? "Kurumsal proje, kurulum ve yaşam döngüsü desteği" : "Enterprise project, implementation and lifecycle support"}</span></div></div>
        </div><a href="#solutions" className="scroll-cue" aria-label="Scroll"><ChevronDown/></a>
      </section>

      <section className="bridge-band"><div className="container bridge-inner"><div><span className="micro-label">AKER / SYSTEMS THINKING</span><h2>{t.bridgeTitle}</h2></div><p>{t.bridgeText}</p></div></section>

      <section className="section container" id="solutions">
        <div className="section-head wide"><div><span className="micro-label">01 / SOLUTIONS</span><h2>{t.pillarsTitle}</h2></div><p>{t.pillarsLead}</p></div>
        <div className="pillar-grid">{t.pillars.map((p,i)=>{const Icon=icons[i];return <a className="pillar-card" key={p.title} href={['#briolight','#ecosystem','#services','#contact'][i] ?? '#contact'} aria-label={`${p.title} bölümüne git`}><div className="icon-box"><Icon/></div><span className="card-index">0{i+1}</span><h3>{p.title}</h3><p>{p.text}</p><ArrowRight className="card-arrow"/></a>})}</div>
      </section>

      <section className="briolight-section" id="briolight"><div className="container">
        <div className="section-head briolight-head"><div><span className="eyebrow cyan">{t.brioEyebrow}</span><h2>{t.brioTitle}</h2></div><p>{t.brioLead}</p></div>
        <div className="product-showcase">
          <article className="product-feature floor"><ImageFrame src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/interactive-floor-9xDEXLU5IVm1HINrwxUMGLFxvEw182.webp" alt="Briolight Interactive Floor"/><div className="product-copy"><span>01</span><h3>{t.productFloor}</h3><p>{t.productFloorText}</p><a href="#contact">{t.explore}<ArrowRight size={16}/></a></div></article>
          <article className="product-feature sandbox"><ImageFrame src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/interactive-sandbox-2rbjG5VCm70zeLPBKpiSg5FSa1Upxa.webp" alt="Briolight Interactive Sandbox"/><div className="product-copy"><span>02</span><h3>{t.productSandbox}</h3><p>{t.productSandboxText}</p><a href="#contact">{t.explore}<ArrowRight size={16}/></a></div></article>
          <article className="product-feature panel"><ImageFrame src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inclusive-panel-UmgOOyHw8r7GI1HGTNV8Vn9DaRB69V.webp" alt="Briolight Interactive Panel"/><div className="product-copy"><span>03</span><h3>{t.productPanel}</h3><p>{t.productPanelText}</p><a href="#contact">{t.explore}<ArrowRight size={16}/></a></div></article>
        </div>
      </div></section>

      <section className="ecosystem-section" id="ecosystem"><div className="container ecosystem-grid"><div className="ecosystem-visual"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QTKyNdg26NznFyg5tVZMyZO8PtuiIh.png" alt="Briolight ecosystem interactive therapy room"/><div className="floating-badge"><Zap size={18}/><strong>10</strong><span>{lang === "tr" ? "entegre cihaz" : "integrated devices"}</span></div></div><div className="ecosystem-copy"><span className="micro-label">BRIOLIGHT ECOSYSTEM</span><h2>{t.ecosystemTitle}</h2><p>{t.ecosystemLead}</p><div className="ecosystem-video"><iframe src={`https://www.youtube.com/embed/${lang === "tr" ? "526r8AyMzL4" : "0ew1dLGXD5Y"}`} title="Briolight Türkçe tanıtım videosu" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div><div className="ecosystem-list">{t.ecosystemItems.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,"0")}</span>{item}</div>)}</div></div></div></section>

      <section className="platform-section"><div className="container"><div className="platform-title"><span className="micro-label">PLATFORM EVOLUTION</span><h2>{t.platformTitle}</h2><p>{t.platformLead}</p></div><div className="platform-grid">{t.platformCards.map((c,i)=><article key={c.k} className="platform-card"><div className="version">{c.k}</div><div className="platform-line"/><h3>{c.t}</h3><p>{c.d}</p>{i===2&&<div className="ai-chip"><BrainCircuit size={16}/>AI / ML</div>}</article>)}</div><div className="platform-collage"><ImageFrame src="/assets/briolight/software-table.webp" alt="Briolight software interface"/><ImageFrame src="/assets/briolight/body-tracking.webp" alt="Briolight body tracking"/><ImageFrame src="/assets/briolight/rehab-floor.webp" alt="Briolight rehabilitation floor"/></div></div></section>

      <section className="legacy-section" id="aker-products"><div className="container"><div className="section-head wide legacy-head"><div><span className="eyebrow gold">{t.legacyEyebrow}</span><h2>{t.legacyTitle}</h2></div><p>{t.legacyLead}</p></div><div className="legacy-products">
        <article className="legacy-product dark-product"><div className="legacy-image"><img src={LECTERN_DIGITAL} alt="AKER TV-27JTP digital lectern"/></div><div className="legacy-copy"><span className="product-kicker">AKER / DIGITAL LECTERN</span><h3>{t.digitalLectern}</h3><p>{t.digitalLecternText}</p><button onClick={()=>setOpenSpecs(openSpecs==="digital"?null:"digital")} className="spec-button">{t.viewSpecs}<ChevronDown size={16}/></button>{openSpecs==="digital"&&<ul className="spec-list">{t.digitalSpecs.map(s=><li key={s}><Check size={15}/>{s}</li>)}</ul>}</div></article>
        <article className="legacy-product light-product"><div className="legacy-image"><img src={LECTERN_AUDIO} alt="AKER T-6236BCHE amplified lectern"/></div><div className="legacy-copy"><span className="product-kicker">AKER / AMPLIFIED LECTERN</span><h3>{t.audioLectern}</h3><p>{t.audioLecternText}</p><button onClick={()=>setOpenSpecs(openSpecs==="audio"?null:"audio")} className="spec-button">{t.viewSpecs}<ChevronDown size={16}/></button>{openSpecs==="audio"&&<ul className="spec-list">{t.audioSpecs.map(s=><li key={s}><Check size={15}/>{s}</li>)}</ul>}</div></article>
      </div></div></section>

      <section className="services-section" id="services"><div className="container"><div className="services-intro"><span className="micro-label">02 / SERVICES</span><h2>{t.servicesTitle}</h2><p>{t.servicesLead}</p></div><div className="services-grid">{t.services.map((s,i)=><article key={s.title}><span>{String(i+1).padStart(2,"0")}</span><h3>{s.title}</h3><p>{s.text}</p></article>)}</div></div></section>

      <section className="process-section" id="process"><div className="container process-grid"><div className="process-sticky"><span className="micro-label">03 / DELIVERY MODEL</span><h2>{t.processTitle}</h2><img src={AUDITORIUM} alt="AKER conference and auditorium project"/></div><div className="process-list">{t.process.map(p=><article key={p.n}><span>{p.n}</span><div><h3>{p.t}</h3><p>{p.d}</p></div></article>)}</div></div></section>

      <section className="proof-section"><div className="container proof-grid"><div className="proof-copy"><Quote size={30}/><h2>{t.proofTitle}</h2><p>{t.proofLead}</p><div className="proof-tags"><span><Building2/>Hospital</span><span><Stethoscope/>Rehab</span><span><GraduationCap/>School</span><span><Users/>Inclusive</span></div></div><div className="proof-collage"><ImageFrame src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/clinical-room-UU0u6Q4Df7q9TU6TzAUIYoogcGIan3.webp" alt="Briolight clinical room"/><ImageFrame src="/assets/briolight/research-floor.webp" alt="Briolight group floor session"/><ImageFrame src="/assets/briolight/sand-therapy.webp" alt="Briolight interactive sandbox therapy"/></div></div></section>

      <section className="contact-section" id="contact"><div className="contact-background"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/water-floor-AxxCXmsKdt63ya2ofOXipdKNi3nUlN.webp" alt="Interactive floor experience"/></div><div className="contact-overlay"/><div className="container contact-content"><span className="eyebrow light">{t.contactEyebrow}</span><h2>{t.contactTitle}</h2><p>{t.contactLead}</p><div className="contact-actions"><a className="button button-primary" href="mailto:akerprojeegitim@gmail.com">{t.contactButton}<Mail size={17}/></a><a className="contact-phone" href="tel:+903122352739"><Phone size={17}/>0312 235 27 39</a></div><div className="contact-meta"><span><strong>AKER PROJE ve DANIŞMANLIK</strong><br/>Fidanlık Mah. Sağlık 1 Sk. Güzelsu İşhanı No:59/34<br/>Çankaya / Ankara</span><span>akerprojeegitim@gmail.com</span></div></div></section>

      <footer><div className="container footer-inner"><div className="footer-brand"><img src={AKER_LOGO} alt="AKER"/><span>{t.footer}</span></div><div className="footer-partner"><span>{t.partner}</span><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/briolight-logo-h7A7wFSAdVbuy8oCGeCLgrZfwErLiN.png" alt="Briolight"/></div></div></footer>
    </main>
  );
}
