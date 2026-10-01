import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export const LANGUAGES = [
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "en", label: "EN", name: "English" },
  { code: "tr", label: "TR", name: "Türkçe" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "nl", label: "NL", name: "Nederlands" },
] as const;

export type Lang = (typeof LANGUAGES)[number]["code"];

const de = {
  nav: { home: "Start", services: "Leistungen", pricing: "Preise", about: "Über uns", contact: "Kontakt" },
  cta: { book: "Jetzt buchen", whatsapp: "WhatsApp", call: "Anrufen" },
  hero: {
    badge: "Lizenziert & versichert · 24/7 in Wien",
    title: "Ihr Taxi & Airport-Transfer in Wien",
    subtitle: "Pünktlich, komfortabel und zu fairen Festpreisen. Buchen Sie in unter einer Minute — Bestätigung per WhatsApp oder E-Mail.",
  },
  services: {
    title: "Unsere Leistungen",
    subtitle: "Vom schnellen Stadttransfer bis zur VIP-Fahrt — wir bringen Sie sicher ans Ziel.",
    airport: { title: "Flughafen-Transfer", desc: "Zuverlässiger Transfer zum und vom Flughafen Wien (VIE). Flugüberwachung, Meet & Greet in der Ankunftshalle und Festpreise ohne Überraschungen." },
    city: { title: "Stadt-Taxi", desc: "Schnell und sicher durch Wien — Tag und Nacht. Ob Termin, Dinner oder Heimfahrt: Wir sind rund um die Uhr für Sie da." },
    vip: { title: "Business & VIP", desc: "Diskrete Chauffeursdienste für Geschäftskunden und besondere Anlässe. Premium-Fahrzeuge, professionelle Fahrer, absolute Verlässlichkeit." },
  },
  why: {
    title: "Warum mit uns fahren?",
    items: [
      { title: "Festpreise", desc: "Der Preis steht vor der Fahrt fest — kein Taxameter-Stress." },
      { title: "24/7 erreichbar", desc: "Tag und Nacht, auch an Feiertagen." },
      { title: "Lizenziert & versichert", desc: "Offiziell konzessioniertes Wiener Unternehmen." },
      { title: "Mehrsprachig", desc: "Wir sprechen Deutsch, Englisch, Türkisch und mehr." },
    ],
  },
  pricing: {
    title: "Preise & beliebte Strecken",
    subtitle: "Faire Festpreise für die beliebtesten Fahrten. Alle Preise inkl. MwSt. — Beispielpreise, Endpreise auf Anfrage.",
    from: "ab",
    rows: [
      { route: "Flughafen Wien ↔ Innenstadt", price: "€ 39" },
      { route: "Flughafen Wien ↔ Hauptbahnhof", price: "€ 36" },
      { route: "Innenstadt ↔ Schönbrunn", price: "€ 19" },
      { route: "Wien ↔ Bratislava", price: "€ 79" },
      { route: "Stundensatz Business-Van", price: "€ 55" },
    ],
    note: "Individuelle Strecke? Schreiben Sie uns — wir machen Ihnen sofort ein Angebot.",
  },
  about: {
    title: "Über uns",
    text: "Wir sind ein junges, lizenziertes Taxi- und Transferunternehmen aus Wien. Unser Ziel: der verlässlichste Fahrservice der Stadt — mit gepflegten Fahrzeugen, freundlichen Fahrern und ehrlichen Preisen. Ob Tourist, Geschäftsreisender oder Wiener:in — bei uns sitzen Sie gut.",
    fleet: "Unsere Flotte",
    fleetText: "Moderne Limousinen, Business-Vans und geräumige Fahrzeuge für Gruppen — alle klimatisiert, gepflegt und voll versichert.",
  },
  contact: {
    title: "Kontakt",
    subtitle: "Rufen Sie uns an, schreiben Sie per WhatsApp oder nutzen Sie das Formular — wir antworten schnell.",
    phone: "Telefon",
    email: "E-Mail",
    hours: "Verfügbarkeit",
    hoursValue: "24 Stunden, 7 Tage die Woche",
  },
  form: {
    title: "Fahrt buchen",
    name: "Name",
    phone: "Telefon",
    email: "E-Mail",
    pickup: "Abholadresse",
    dropoff: "Zieladresse",
    date: "Datum",
    time: "Uhrzeit",
    passengers: "Personen",
    vehicle: "Fahrzeug",
    vehicleStandard: "Standard-Limousine",
    vehicleBusiness: "Business-Van",
    vehicleGroup: "Gruppenfahrzeug (bis 8)",
    notes: "Anmerkungen (optional)",
    submitWhatsapp: "Per WhatsApp anfragen",
    submitEmail: "Per E-Mail anfragen",
    success: "Ihre Anfrage wurde vorbereitet — sie öffnet sich jetzt in WhatsApp / Ihrem E-Mail-Programm.",
    required: "Bitte ausfüllen",
    invalidEmail: "Ungültige E-Mail",
    msgIntro: "Neue Buchungsanfrage",
  },
  footer: {
    rights: "Alle Rechte vorbehalten.",
    quick: "Schnellzugriff",
  },
};

export type Translations = typeof de;

const en: Translations = {
  nav: { home: "Home", services: "Services", pricing: "Prices", about: "About us", contact: "Contact" },
  cta: { book: "Book now", whatsapp: "WhatsApp", call: "Call us" },
  hero: {
    badge: "Licensed & insured · 24/7 in Vienna",
    title: "Your taxi & airport transfer in Vienna",
    subtitle: "Punctual, comfortable and at fair fixed prices. Book in under a minute — confirmation via WhatsApp or email.",
  },
  services: {
    title: "Our services",
    subtitle: "From quick city rides to VIP transfers — we get you there safely.",
    airport: { title: "Airport transfer", desc: "Reliable transfers to and from Vienna Airport (VIE). Flight tracking, meet & greet in arrivals, and fixed prices with no surprises." },
    city: { title: "City taxi", desc: "Fast and safe across Vienna — day and night. Appointment, dinner or ride home: we're here for you around the clock." },
    vip: { title: "Business & VIP", desc: "Discreet chauffeur services for business clients and special occasions. Premium vehicles, professional drivers, absolute reliability." },
  },
  why: {
    title: "Why ride with us?",
    items: [
      { title: "Fixed prices", desc: "The price is set before the ride — no meter stress." },
      { title: "Available 24/7", desc: "Day and night, including holidays." },
      { title: "Licensed & insured", desc: "Officially licensed Viennese company." },
      { title: "Multilingual", desc: "We speak German, English, Turkish and more." },
    ],
  },
  pricing: {
    title: "Prices & popular routes",
    subtitle: "Fair fixed prices for the most popular rides. All prices incl. VAT — sample prices, final quote on request.",
    from: "from",
    rows: [
      { route: "Vienna Airport ↔ City centre", price: "€ 39" },
      { route: "Vienna Airport ↔ Main station", price: "€ 36" },
      { route: "City centre ↔ Schönbrunn", price: "€ 19" },
      { route: "Vienna ↔ Bratislava", price: "€ 79" },
      { route: "Hourly rate business van", price: "€ 55" },
    ],
    note: "Custom route? Message us — we'll send you an offer right away.",
  },
  about: {
    title: "About us",
    text: "We are a young, licensed taxi and transfer company from Vienna. Our goal: the most reliable ride service in the city — with well-kept vehicles, friendly drivers and honest prices. Tourist, business traveller or local — you're in good hands with us.",
    fleet: "Our fleet",
    fleetText: "Modern sedans, business vans and spacious group vehicles — all air-conditioned, well maintained and fully insured.",
  },
  contact: {
    title: "Contact",
    subtitle: "Call us, write via WhatsApp or use the form — we reply quickly.",
    phone: "Phone",
    email: "Email",
    hours: "Availability",
    hoursValue: "24 hours, 7 days a week",
  },
  form: {
    title: "Book a ride",
    name: "Name",
    phone: "Phone",
    email: "Email",
    pickup: "Pickup address",
    dropoff: "Destination address",
    date: "Date",
    time: "Time",
    passengers: "Passengers",
    vehicle: "Vehicle",
    vehicleStandard: "Standard sedan",
    vehicleBusiness: "Business van",
    vehicleGroup: "Group vehicle (up to 8)",
    notes: "Notes (optional)",
    submitWhatsapp: "Request via WhatsApp",
    submitEmail: "Request via email",
    success: "Your request is ready — it now opens in WhatsApp / your email app.",
    required: "Required field",
    invalidEmail: "Invalid email",
    msgIntro: "New booking request",
  },
  footer: { rights: "All rights reserved.", quick: "Quick links" },
};

const tr: Translations = {
  nav: { home: "Ana sayfa", services: "Hizmetler", pricing: "Fiyatlar", about: "Hakkımızda", contact: "İletişim" },
  cta: { book: "Hemen rezervasyon", whatsapp: "WhatsApp", call: "Ara" },
  hero: {
    badge: "Lisanslı ve sigortalı · Viyana'da 7/24",
    title: "Viyana'da taksi ve havaalanı transferiniz",
    subtitle: "Dakik, konforlu ve uygun sabit fiyatlarla. Bir dakikadan kısa sürede rezervasyon yapın — onay WhatsApp veya e-posta ile.",
  },
  services: {
    title: "Hizmetlerimiz",
    subtitle: "Hızlı şehir içi yolculuklardan VIP transfere — sizi güvenle ulaştırıyoruz.",
    airport: { title: "Havaalanı transferi", desc: "Viyana Havalimanı'na (VIE) güvenilir gidiş-dönüş transfer. Uçuş takibi, çıkış salonunda karşılama ve sürprizsiz sabit fiyatlar." },
    city: { title: "Şehir içi taksi", desc: "Viyana'da gece gündüz hızlı ve güvenli ulaşım. Randevu, akşam yemeği veya eve dönüş — her zaman yanınızdayız." },
    vip: { title: "Kurumsal & VIP", desc: "İş dünyası ve özel günler için şoförlü premium araç hizmeti. Profesyonel sürücüler, tam güvenilirlik." },
  },
  why: {
    title: "Neden biz?",
    items: [
      { title: "Sabit fiyat", desc: "Fiyat yolculuktan önce belli — taksimetre stresi yok." },
      { title: "7/24 ulaşılabilir", desc: "Gece gündüz, resmi tatillerde dahil." },
      { title: "Lisanslı ve sigortalı", desc: "Resmi lisanslı Viyana şirketi." },
      { title: "Çok dilli", desc: "Almanca, İngilizce, Türkçe ve daha fazlası." },
    ],
  },
  pricing: {
    title: "Fiyatlar ve popüler güzergahlar",
    subtitle: "En popüler yolculuklar için adil sabit fiyatlar. KDV dahil — örnek fiyatlardır, kesin fiyat talep üzerine.",
    from: "başlayan",
    rows: [
      { route: "Viyana Havalimanı ↔ Şehir merkezi", price: "€ 39" },
      { route: "Viyana Havalimanı ↔ Ana tren garı", price: "€ 36" },
      { route: "Şehir merkezi ↔ Schönbrunn", price: "€ 19" },
      { route: "Viyana ↔ Bratislava", price: "€ 79" },
      { route: "Business van saatlik ücret", price: "€ 55" },
    ],
    note: "Farklı bir güzergah mı? Bize yazın — hemen teklif gönderelim.",
  },
  about: {
    title: "Hakkımızda",
    text: "Viyana'dan genç, lisanslı bir taksi ve transfer şirketiyiz. Hedefimiz: bakımlı araçlar, güler yüzlü sürücüler ve dürüst fiyatlarla şehrin en güvenilir ulaşım hizmeti olmak. Turist, iş insanı veya Viyanalı — bizimle güvendesiniz.",
    fleet: "Filomuz",
    fleetText: "Modern sedanlar, business vanlar ve gruplar için geniş araçlar — hepsi klimalı, bakımlı ve tam sigortalı.",
  },
  contact: {
    title: "İletişim",
    subtitle: "Bizi arayın, WhatsApp'tan yazın veya formu kullanın — hızlı dönüş yapıyoruz.",
    phone: "Telefon",
    email: "E-posta",
    hours: "Çalışma saatleri",
    hoursValue: "Haftanın 7 günü, 24 saat",
  },
  form: {
    title: "Rezervasyon",
    name: "Ad Soyad",
    phone: "Telefon",
    email: "E-posta",
    pickup: "Alınış adresi",
    dropoff: "Bırakılış adresi",
    date: "Tarih",
    time: "Saat",
    passengers: "Yolcu sayısı",
    vehicle: "Araç",
    vehicleStandard: "Standart sedan",
    vehicleBusiness: "Business van",
    vehicleGroup: "Grup aracı (8 kişiye kadar)",
    notes: "Notlar (isteğe bağlı)",
    submitWhatsapp: "WhatsApp ile gönder",
    submitEmail: "E-posta ile gönder",
    success: "Talebiniz hazır — şimdi WhatsApp / e-posta uygulamanızda açılıyor.",
    required: "Zorunlu alan",
    invalidEmail: "Geçersiz e-posta",
    msgIntro: "Yeni rezervasyon talebi",
  },
  footer: { rights: "Tüm hakları saklıdır.", quick: "Hızlı erişim" },
};

const fr: Translations = {
  nav: { home: "Accueil", services: "Services", pricing: "Tarifs", about: "À propos", contact: "Contact" },
  cta: { book: "Réserver", whatsapp: "WhatsApp", call: "Appeler" },
  hero: {
    badge: "Licencié & assuré · 24/7 à Vienne",
    title: "Votre taxi & transfert aéroport à Vienne",
    subtitle: "Ponctuel, confortable et à prix fixes équitables. Réservez en moins d'une minute — confirmation par WhatsApp ou e-mail.",
  },
  services: {
    title: "Nos services",
    subtitle: "Du trajet rapide en ville au transfert VIP — nous vous conduisons en toute sécurité.",
    airport: { title: "Transfert aéroport", desc: "Transferts fiables vers et depuis l'aéroport de Vienne (VIE). Suivi de vol, accueil aux arrivées et prix fixes sans surprises." },
    city: { title: "Taxi en ville", desc: "Rapide et sûr dans toute Vienne — jour et nuit. Rendez-vous, dîner ou retour à la maison : nous sommes là 24h/24." },
    vip: { title: "Affaires & VIP", desc: "Services de chauffeur discrets pour clients d'affaires et occasions spéciales. Véhicules premium, chauffeurs professionnels." },
  },
  why: {
    title: "Pourquoi nous ?",
    items: [
      { title: "Prix fixes", desc: "Le prix est fixé avant la course — pas de stress de compteur." },
      { title: "Disponible 24/7", desc: "Jour et nuit, jours fériés compris." },
      { title: "Licencié & assuré", desc: "Entreprise viennoise officiellement licenciée." },
      { title: "Multilingue", desc: "Nous parlons allemand, anglais, turc et plus." },
    ],
  },
  pricing: {
    title: "Tarifs & trajets populaires",
    subtitle: "Prix fixes équitables pour les trajets les plus demandés. TVA incluse — prix indicatifs, devis sur demande.",
    from: "dès",
    rows: [
      { route: "Aéroport de Vienne ↔ Centre-ville", price: "€ 39" },
      { route: "Aéroport de Vienne ↔ Gare centrale", price: "€ 36" },
      { route: "Centre-ville ↔ Schönbrunn", price: "€ 19" },
      { route: "Vienne ↔ Bratislava", price: "€ 79" },
      { route: "Tarif horaire van business", price: "€ 55" },
    ],
    note: "Un trajet sur mesure ? Écrivez-nous — nous vous envoyons une offre immédiatement.",
  },
  about: {
    title: "À propos",
    text: "Nous sommes une jeune entreprise de taxi et de transfert licenciée à Vienne. Notre objectif : le service le plus fiable de la ville — véhicules soignés, chauffeurs aimables et prix honnêtes. Touriste, voyageur d'affaires ou Viennois — vous êtes entre bonnes mains.",
    fleet: "Notre flotte",
    fleetText: "Berlines modernes, vans business et véhicules spacieux pour groupes — tous climatisés, entretenus et entièrement assurés.",
  },
  contact: {
    title: "Contact",
    subtitle: "Appelez-nous, écrivez sur WhatsApp ou utilisez le formulaire — nous répondons vite.",
    phone: "Téléphone",
    email: "E-mail",
    hours: "Disponibilité",
    hoursValue: "24 heures sur 24, 7 jours sur 7",
  },
  form: {
    title: "Réserver une course",
    name: "Nom",
    phone: "Téléphone",
    email: "E-mail",
    pickup: "Adresse de départ",
    dropoff: "Adresse de destination",
    date: "Date",
    time: "Heure",
    passengers: "Passagers",
    vehicle: "Véhicule",
    vehicleStandard: "Berline standard",
    vehicleBusiness: "Van business",
    vehicleGroup: "Véhicule de groupe (jusqu'à 8)",
    notes: "Remarques (optionnel)",
    submitWhatsapp: "Demander via WhatsApp",
    submitEmail: "Demander par e-mail",
    success: "Votre demande est prête — elle s'ouvre maintenant dans WhatsApp / votre messagerie.",
    required: "Champ requis",
    invalidEmail: "E-mail invalide",
    msgIntro: "Nouvelle demande de réservation",
  },
  footer: { rights: "Tous droits réservés.", quick: "Accès rapide" },
};

const nl: Translations = {
  nav: { home: "Home", services: "Diensten", pricing: "Prijzen", about: "Over ons", contact: "Contact" },
  cta: { book: "Nu boeken", whatsapp: "WhatsApp", call: "Bellen" },
  hero: {
    badge: "Gelicentieerd & verzekerd · 24/7 in Wenen",
    title: "Uw taxi & luchthaventransfer in Wenen",
    subtitle: "Stipt, comfortabel en tegen eerlijke vaste prijzen. Boek binnen een minuut — bevestiging via WhatsApp of e-mail.",
  },
  services: {
    title: "Onze diensten",
    subtitle: "Van snelle stadsritten tot VIP-transfers — wij brengen u veilig op bestemming.",
    airport: { title: "Luchthaventransfer", desc: "Betrouwbare transfers van en naar luchthaven Wenen (VIE). Vluchttracking, meet & greet bij aankomst en vaste prijzen zonder verrassingen." },
    city: { title: "Stadstaxi", desc: "Snel en veilig door Wenen — dag en nacht. Afspraak, diner of rit naar huis: wij zijn er 24/7 voor u." },
    vip: { title: "Zakelijk & VIP", desc: "Discrete chauffeursdiensten voor zakelijke klanten en speciale gelegenheden. Premium voertuigen, professionele chauffeurs." },
  },
  why: {
    title: "Waarom met ons rijden?",
    items: [
      { title: "Vaste prijzen", desc: "De prijs staat vooraf vast — geen meterstress." },
      { title: "24/7 bereikbaar", desc: "Dag en nacht, ook op feestdagen." },
      { title: "Gelicentieerd & verzekerd", desc: "Officieel erkend Weens bedrijf." },
      { title: "Meertalig", desc: "Wij spreken Duits, Engels, Turks en meer." },
    ],
  },
  pricing: {
    title: "Prijzen & populaire ritten",
    subtitle: "Eerlijke vaste prijzen voor de populairste ritten. Alle prijzen incl. btw — indicatieve prijzen, definitieve offerte op aanvraag.",
    from: "vanaf",
    rows: [
      { route: "Luchthaven Wenen ↔ Centrum", price: "€ 39" },
      { route: "Luchthaven Wenen ↔ Hauptbahnhof", price: "€ 36" },
      { route: "Centrum ↔ Schönbrunn", price: "€ 19" },
      { route: "Wenen ↔ Bratislava", price: "€ 79" },
      { route: "Uurtarief business van", price: "€ 55" },
    ],
    note: "Een andere route? Stuur ons een bericht — wij sturen direct een aanbod.",
  },
  about: {
    title: "Over ons",
    text: "Wij zijn een jong, gelicentieerd taxi- en transferbedrijf uit Wenen. Ons doel: de betrouwbaarste ritservice van de stad — met verzorgde voertuigen, vriendelijke chauffeurs en eerlijke prijzen. Toerist, zakenreiziger of Weener — bij ons zit u goed.",
    fleet: "Ons wagenpark",
    fleetText: "Moderne sedans, business vans en ruime groepsvoertuigen — allemaal geairconditioneerd, goed onderhouden en volledig verzekerd.",
  },
  contact: {
    title: "Contact",
    subtitle: "Bel ons, schrijf via WhatsApp of gebruik het formulier — wij reageren snel.",
    phone: "Telefoon",
    email: "E-mail",
    hours: "Beschikbaarheid",
    hoursValue: "24 uur per dag, 7 dagen per week",
  },
  form: {
    title: "Rit boeken",
    name: "Naam",
    phone: "Telefoon",
    email: "E-mail",
    pickup: "Ophaaladres",
    dropoff: "Bestemmingsadres",
    date: "Datum",
    time: "Tijd",
    passengers: "Passagiers",
    vehicle: "Voertuig",
    vehicleStandard: "Standaard sedan",
    vehicleBusiness: "Business van",
    vehicleGroup: "Groepsvoertuig (tot 8)",
    notes: "Opmerkingen (optioneel)",
    submitWhatsapp: "Aanvragen via WhatsApp",
    submitEmail: "Aanvragen per e-mail",
    success: "Uw aanvraag is klaar — deze opent nu in WhatsApp / uw e-mailprogramma.",
    required: "Verplicht veld",
    invalidEmail: "Ongeldig e-mailadres",
    msgIntro: "Nieuwe boekingsaanvraag",
  },
  footer: { rights: "Alle rechten voorbehouden.", quick: "Snelle links" },
};

// de/en share footer with default; ensure they exist
de.footer = { rights: "Alle Rechte vorbehalten.", quick: "Schnellzugriff" };
en.footer = { rights: "All rights reserved.", quick: "Quick links" };

const translations: Record<Lang, Translations> = { de, en, tr, fr, nl };

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Translations }>({
  lang: "de",
  setLang: () => {},
  t: de,
});

const STORAGE_KEY = "vt-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && translations[saved]) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LangContext);
}
