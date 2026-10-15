import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export const LANGUAGES = [
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "en", label: "EN", name: "English" },
  { code: "tr", label: "TR", name: "Türkçe" },
  { code: "fr", label: "FR", name: "Français" },
  { code: "nl", label: "NL", name: "Nederlands" },
  { code: "ar", label: "AR", name: "العربية" },
] as const;

export type Lang = (typeof LANGUAGES)[number]["code"];

const de = {
  nav: { home: "Start", services: "Leistungen", fleet: "Flotte", about: "Über uns", contact: "Kontakt" },
  cta: {
  "book": "Preise ansehen & anrufen",
  "whatsapp": "WhatsApp",
  "call": "Jetzt anrufen"
},
  hero: {
  "badge": "24/7 · Zell am See & Kaprun",
  "title": "Alpina Taxi — Zell am See & Kaprun",
  "subtitle": "Komfortable Transfers zu den Flughäfen Salzburg, Innsbruck und Wien. Auch für lokale Taxifahrten, Bahnhofstransfers und private Ausflüge sind wir rund um die Uhr für Sie da."
},
  services: {
  "title": "Unsere Leistungen",
  "subtitle": "In Zell am See, Kaprun und der Region Salzburg — unterwegs ganz nach Ihren Wünschen.",
  "airport": {
    "title": "Flughafen- & Bahnhofstransfer",
    "desc": "Zuverlässige Fahrten zu den Flughäfen Salzburg, Innsbruck und Wien sowie zu Bahnhöfen. Komfortable Transfers für einen entspannten Start und eine angenehme Rückkehr."
  },
  "city": {
    "title": "Taxi in Zell am See & Kaprun",
    "desc": "Ob Termin, Restaurantbesuch oder Heimfahrt: Wir bringen Sie in Zell am See, Kaprun und Umgebung sicher ans Ziel — 24 Stunden am Tag."
  },
  "vip": {
    "title": "Private Ausflüge & Business",
    "desc": "Entdecken Sie die Region mit individuell geplanten Fahrten. Auch für Geschäftsreisen und besondere Anlässe bieten wir flexible, persönliche Transfers."
  }
},
  why: {
    title: "Warum mit uns fahren?",
    items: [
      { title: "Festpreise", desc: "Der Preis steht vor der Fahrt fest — kein Taxameter-Stress." },
      { title: "24/7 erreichbar", desc: "Tag und Nacht, auch an Feiertagen." },
      {"title": "Regional erfahren", "desc": "Ein erfahrenes Team, das Zell am See, Kaprun und die Region kennt."},
      {"title": "Mehrsprachig", "desc": "Deutsch, Englisch, Türkisch, Französisch, Niederländisch und Arabisch."},
    ],
  },
  fleet: {
    title: "Unsere Flotte",
    subtitle: "Moderne, klimatisierte und voll versicherte Fahrzeuge für jeden Anlass — von der Einzelfahrt bis zur Gruppe.",
    seats: "Personen",
    vehicles: [
      { name: "Standard-Limousine", capacity: "Bis zu 4 Personen", desc: "Komfortable Limousine für Stadt- und Flughafenfahrten. Klimaanlage, WLAN und viel Kofferraum." },
      { name: "Business-Van", capacity: "Bis zu 6 Personen", desc: "Premium-Van für Geschäftsreisende und kleine Gruppen. Ledersitze, diskreter Chauffeur, erstklassiger Komfort." },
      { name: "Gruppenfahrzeug", capacity: "Bis zu 8 Personen", desc: "Geräumiger Minibus für Familien, Gruppen und viel Gepäck — ideal für Ausflüge und Flughafentransfers." },
    ],
    note: "Kindersitze und besondere Wünsche? Schreiben Sie uns einfach per WhatsApp — wir richten alles für Sie.",
  },
  float: { message: "Hallo! Ich interessiere mich für eine Fahrt." },
  about: {
  "title": "Über Alpina Taxi",
  "text": "Alpina Taxi ist Ihr Fahrservice in Zell am See und Kaprun. Unser erfahrenes Team kennt die Region und ist rund um die Uhr für Sie da — vom lokalen Taxi über Flughafen- und Bahnhofstransfers bis zu privaten Ausflügen. Komfort, Sicherheit und Ihre Zufriedenheit begleiten jede Fahrt.",
  "fleet": "Unsere Flotte",
  "fleetText": "Komfortable Fahrzeuge für lokale Fahrten, Flughafentransfers und private Ausflüge — für Einzelreisende, Familien und Gruppen."
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
  nav: { home: "Home", services: "Services", fleet: "Fleet", about: "About us", contact: "Contact" },
  cta: {
  "book": "View prices & call",
  "whatsapp": "WhatsApp",
  "call": "Call now"
},
  hero: {
  "badge": "24/7 · Zell am See & Kaprun",
  "title": "Alpina Taxi — Zell am See & Kaprun",
  "subtitle": "Comfortable transfers to Salzburg, Innsbruck and Vienna airports. We are also here around the clock for local taxi rides, train station transfers and private excursions."
},
  services: {
  "title": "Our services",
  "subtitle": "Travel your way in Zell am See, Kaprun and the Salzburg region.",
  "airport": {
    "title": "Airport & train station transfers",
    "desc": "Reliable rides to Salzburg, Innsbruck and Vienna airports and to train stations. Comfortable transfers for a relaxed departure and a pleasant return."
  },
  "city": {
    "title": "Zell am See & Kaprun taxi",
    "desc": "Appointments, dining or a ride home: travel safely in Zell am See, Kaprun and the surrounding area, 24 hours a day."
  },
  "vip": {
    "title": "Private excursions & business",
    "desc": "Explore the region with personalised trips. Flexible, attentive transfers for business travel and special occasions, too."
  }
},
  why: {
    title: "Why ride with us?",
    items: [
      { title: "Fixed prices", desc: "The price is set before the ride — no meter stress." },
      { title: "Available 24/7", desc: "Day and night, including holidays." },
      {"title": "Local experience", "desc": "An experienced team that knows Zell am See, Kaprun and the region."},
      {"title": "Multilingual", "desc": "German, English, Turkish, French, Dutch and Arabic."},
    ],
  },
  fleet: {
    title: "Our fleet",
    subtitle: "Modern, air-conditioned and fully insured vehicles for every occasion — from solo rides to groups.",
    seats: "passengers",
    vehicles: [
      { name: "Standard sedan", capacity: "Up to 4 passengers", desc: "Comfortable sedan for city and airport rides. Air conditioning, Wi-Fi and plenty of luggage space." },
      { name: "Business van", capacity: "Up to 6 passengers", desc: "Premium van for business travellers and small groups. Leather seats, discreet chauffeur, first-class comfort." },
      { name: "Group vehicle", capacity: "Up to 8 passengers", desc: "Spacious minibus for families, groups and lots of luggage — ideal for trips and airport transfers." },
    ],
    note: "Child seats or special requests? Just message us on WhatsApp — we'll arrange everything for you.",
  },
  float: { message: "Hello! I'm interested in a ride." },
  about: {
  "title": "About Alpina Taxi",
  "text": "Alpina Taxi is your ride service in Zell am See and Kaprun. Our experienced team knows the region and is available around the clock — for local taxis, airport and train station transfers, and private excursions. Comfort, safety and your satisfaction are at the heart of every journey.",
  "fleet": "Our fleet",
  "fleetText": "Comfortable vehicles for local rides, airport transfers and private excursions — for solo travellers, families and groups."
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
  nav: { home: "Ana sayfa", services: "Hizmetler", fleet: "Filomuz", about: "Hakkımızda", contact: "İletişim" },
  cta: {
  "book": "Fiyatı gör ve ara",
  "whatsapp": "WhatsApp",
  "call": "Hemen ara"
},
  hero: {
  "badge": "7/24 · Zell am See & Kaprun",
  "title": "Alpina Taxi — Zell am See & Kaprun",
  "subtitle": "Salzburg, Innsbruck ve Wien havalimanlarına konforlu ve güvenilir transfer. Şehir içi taksi, tren istasyonu transferi ve özel geziler için de 7/24 yanınızdayız."
},
  services: {
  "title": "Hizmetlerimiz",
  "subtitle": "Zell am See, Kaprun ve Salzburg bölgesinde ihtiyaçlarınıza uygun ulaşım.",
  "airport": {
    "title": "Havalimanı & tren istasyonu transferi",
    "desc": "Salzburg, Innsbruck ve Wien havalimanlarına, ayrıca tren istasyonlarına güvenilir ulaşım. Seyahatinize rahat başlayın, dönüş yolculuğunuzu konforla tamamlayın."
  },
  "city": {
    "title": "Zell am See & Kaprun taksi",
    "desc": "Randevunuz, akşam yemeğiniz veya eve dönüşünüz için Zell am See, Kaprun ve çevresinde güvenli ulaşım — günün her saati yanınızdayız."
  },
  "vip": {
    "title": "Özel geziler & kurumsal ulaşım",
    "desc": "Bölgeyi kişiye özel planlanan gezilerle keşfedin. İş seyahatleri ve özel günler için de esnek, özenli transfer hizmetleri sunuyoruz."
  }
},
  why: {
    title: "Neden biz?",
    items: [
      { title: "Sabit fiyat", desc: "Fiyat yolculuktan önce belli — taksimetre stresi yok." },
      { title: "7/24 ulaşılabilir", desc: "Gece gündüz, resmi tatillerde dahil." },
      {"title": "Bölgesel deneyim", "desc": "Zell am See, Kaprun ve çevresini yakından tanıyan deneyimli ekip."},
      {"title": "Çok dilli", "desc": "Almanca, İngilizce, Türkçe, Fransızca, Hollandaca ve Arapça."},
    ],
  },
  fleet: {
    title: "Filomuz",
    subtitle: "Her ihtiyaca uygun modern, klimalı ve tam sigortalı araçlar — tek kişiden gruplara kadar.",
    seats: "yolcu",
    vehicles: [
      { name: "Standart sedan", capacity: "4 yolcuya kadar", desc: "Şehir içi ve havaalanı yolculukları için konforlu sedan. Klima, Wi-Fi ve geniş bagaj alanı." },
      { name: "Business van", capacity: "6 yolcuya kadar", desc: "İş seyahatleri ve küçük gruplar için premium van. Deri koltuklar, profesyonel şoför, birinci sınıf konfor." },
      { name: "Grup aracı", capacity: "8 yolcuya kadar", desc: "Aileler, gruplar ve bol bagaj için geniş minibüs — geziler ve havaalanı transferleri için ideal." },
    ],
    note: "Çocuk koltuğu veya özel istekleriniz mi var? WhatsApp'tan yazın — her şeyi sizin için ayarlayalım.",
  },
  float: { message: "Merhaba! Bir yolculuk hakkında bilgi almak istiyorum." },
  about: {
  "title": "Alpina Taxi hakkında",
  "text": "Alpina Taxi, Zell am See ve Kaprun’da ulaşım için yanınızda. Bölgeyi yakından tanıyan deneyimli ekibimizle şehir içi taksi, havalimanı ve tren istasyonu transferleri, özel geziler için 7/24 hizmet sunuyoruz. Her yolculukta konforunuzu, güvenliğinizi ve memnuniyetinizi ön planda tutuyoruz.",
  "fleet": "Filomuz",
  "fleetText": "Şehir içi yolculuklar, havalimanı transferleri ve özel geziler için konforlu araçlar — bireysel yolcular, aileler ve gruplar için."
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
  nav: { home: "Accueil", services: "Services", fleet: "Flotte", about: "À propos", contact: "Contact" },
  cta: {
  "book": "Voir les tarifs et appeler",
  "whatsapp": "WhatsApp",
  "call": "Appeler maintenant"
},
  hero: {
  "badge": "24h/24 · Zell am See & Kaprun",
  "title": "Alpina Taxi — Zell am See & Kaprun",
  "subtitle": "Des transferts confortables vers les aéroports de Salzbourg, Innsbruck et Vienne. Également à votre service 24h/24 pour vos trajets locaux, transferts en gare et excursions privées."
},
  services: {
  "title": "Nos services",
  "subtitle": "Des déplacements à votre mesure à Zell am See, Kaprun et dans la région de Salzbourg.",
  "airport": {
    "title": "Transferts aéroport & gare",
    "desc": "Trajets fiables vers les aéroports de Salzbourg, Innsbruck et Vienne, ainsi que les gares. Voyagez confortablement, au départ comme au retour."
  },
  "city": {
    "title": "Taxi à Zell am See & Kaprun",
    "desc": "Rendez-vous, restaurant ou retour à la maison : des trajets sûrs à Zell am See, Kaprun et dans les environs, 24h/24."
  },
  "vip": {
    "title": "Excursions privées & affaires",
    "desc": "Découvrez la région avec des trajets sur mesure. Des transferts flexibles et attentionnés également pour vos voyages professionnels et occasions spéciales."
  }
},
  why: {
    title: "Pourquoi nous ?",
    items: [
      { title: "Prix fixes", desc: "Le prix est fixé avant la course — pas de stress de compteur." },
      { title: "Disponible 24/7", desc: "Jour et nuit, jours fériés compris." },
      {"title": "Expérience locale", "desc": "Une équipe expérimentée qui connaît Zell am See, Kaprun et la région."},
      {"title": "Multilingue", "desc": "Allemand, anglais, turc, français, néerlandais et arabe."},
    ],
  },
  fleet: {
    title: "Notre flotte",
    subtitle: "Des véhicules modernes, climatisés et entièrement assurés pour chaque occasion — du trajet solo au groupe.",
    seats: "passagers",
    vehicles: [
      { name: "Berline standard", capacity: "Jusqu'à 4 passagers", desc: "Berline confortable pour les trajets en ville et vers l'aéroport. Climatisation, Wi-Fi et grand coffre." },
      { name: "Van business", capacity: "Jusqu'à 6 passagers", desc: "Van premium pour voyageurs d'affaires et petits groupes. Sièges en cuir, chauffeur discret, confort haut de gamme." },
      { name: "Véhicule de groupe", capacity: "Jusqu'à 8 passagers", desc: "Minibus spacieux pour familles, groupes et bagages nombreux — idéal pour les excursions et transferts aéroport." },
    ],
    note: "Sièges enfant ou demandes spéciales ? Écrivez-nous sur WhatsApp — nous organisons tout pour vous.",
  },
  float: { message: "Bonjour ! Je suis intéressé(e) par une course." },
  about: {
  "title": "À propos d’Alpina Taxi",
  "text": "Alpina Taxi vous accompagne à Zell am See et Kaprun. Notre équipe expérimentée connaît la région et vous accueille 24h/24 pour les trajets locaux, les transferts aéroport et gare et les excursions privées. Votre confort, votre sécurité et votre satisfaction sont au cœur de chaque voyage.",
  "fleet": "Notre flotte",
  "fleetText": "Des véhicules confortables pour les trajets locaux, transferts aéroport et excursions privées — en solo, en famille ou en groupe."
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
  nav: { home: "Home", services: "Diensten", fleet: "Wagenpark", about: "Over ons", contact: "Contact" },
  cta: {
  "book": "Bekijk prijzen en bel",
  "whatsapp": "WhatsApp",
  "call": "Bel nu"
},
  hero: {
  "badge": "24/7 · Zell am See & Kaprun",
  "title": "Alpina Taxi — Zell am See & Kaprun",
  "subtitle": "Comfortabele transfers naar de luchthavens van Salzburg, Innsbruck en Wenen. Ook voor lokale taxiritten, stationstransfers en privé-uitstapjes staan wij dag en nacht klaar."
},
  services: {
  "title": "Onze diensten",
  "subtitle": "Vervoer op maat in Zell am See, Kaprun en de regio Salzburg.",
  "airport": {
    "title": "Luchthaven- & stationstransfers",
    "desc": "Betrouwbare ritten naar de luchthavens van Salzburg, Innsbruck en Wenen en naar treinstations. Comfortabel reizen voor een ontspannen vertrek en terugkeer."
  },
  "city": {
    "title": "Taxi in Zell am See & Kaprun",
    "desc": "Een afspraak, diner of rit naar huis: veilig vervoer in Zell am See, Kaprun en omgeving, 24 uur per dag."
  },
  "vip": {
    "title": "Privé-uitstapjes & zakelijk",
    "desc": "Ontdek de regio met ritten op maat. Ook voor zakenreizen en bijzondere gelegenheden bieden wij flexibel en persoonlijk vervoer."
  }
},
  why: {
    title: "Waarom met ons rijden?",
    items: [
      { title: "Vaste prijzen", desc: "De prijs staat vooraf vast — geen meterstress." },
      { title: "24/7 bereikbaar", desc: "Dag en nacht, ook op feestdagen." },
      {"title": "Lokale ervaring", "desc": "Een ervaren team dat Zell am See, Kaprun en de regio goed kent."},
      {"title": "Meertalig", "desc": "Duits, Engels, Turks, Frans, Nederlands en Arabisch."},
    ],
  },
  fleet: {
    title: "Ons wagenpark",
    subtitle: "Moderne, geairconditioneerde en volledig verzekerde voertuigen voor elke gelegenheid — van soloritten tot groepen.",
    seats: "passagiers",
    vehicles: [
      { name: "Standaard sedan", capacity: "Tot 4 passagiers", desc: "Comfortabele sedan voor ritten in de stad en naar de luchthaven. Airco, wifi en veel bagageruimte." },
      { name: "Business van", capacity: "Tot 6 passagiers", desc: "Premium van voor zakenreizigers en kleine groepen. Leren stoelen, discrete chauffeur, eersteklas comfort." },
      { name: "Groepsvoertuig", capacity: "Tot 8 passagiers", desc: "Ruime minibus voor gezinnen, groepen en veel bagage — ideaal voor uitjes en luchthaventransfers." },
    ],
    note: "Kinderzitjes of speciale wensen? Stuur ons een bericht via WhatsApp — wij regelen alles voor u.",
  },
  float: { message: "Hallo! Ik ben geïnteresseerd in een rit." },
  about: {
  "title": "Over Alpina Taxi",
  "text": "Alpina Taxi is uw vervoersdienst in Zell am See en Kaprun. Ons ervaren team kent de regio en staat dag en nacht klaar voor lokale ritten, luchthaven- en stationstransfers en privé-uitstapjes. Uw comfort, veiligheid en tevredenheid staan bij iedere reis centraal.",
  "fleet": "Ons wagenpark",
  "fleetText": "Comfortabele voertuigen voor lokale ritten, luchthaventransfers en privé-uitstapjes — voor individuele reizigers, gezinnen en groepen."
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

const ar: Translations = {
  "nav": {
    "home": "الرئيسية",
    "services": "خدماتنا",
    "fleet": "أسطولنا",
    "about": "من نحن",
    "contact": "اتصل بنا"
  },
  "cta": {
    "book": "عرض الأسعار والاتصال",
    "whatsapp": "واتساب",
    "call": "اتصل الآن"
  },
  "hero": {
    "badge": "على مدار الساعة · زيل أم سي وكابرون",
    "title": "ألبينا تاكسي — زيل أم سي وكابرون",
    "subtitle": "تنقلات مريحة وموثوقة إلى مطارات سالزبورغ وإنسبروك وفيينا. نحن أيضًا في خدمتكم على مدار الساعة للرحلات المحلية والتنقل إلى محطات القطار والجولات الخاصة."
  },
  "services": {
    "title": "خدماتنا",
    "subtitle": "خدمات نقل تناسب احتياجاتكم في زيل أم سي وكابرون ومنطقة سالزبورغ.",
    "airport": {
      "title": "النقل إلى المطارات ومحطات القطار",
      "desc": "رحلات موثوقة إلى مطارات سالزبورغ وإنسبروك وفيينا ومحطات القطار. ابدأوا رحلتكم براحة واستمتعوا بعودة مريحة."
    },
    "city": {
      "title": "تاكسي في زيل أم سي وكابرون",
      "desc": "للمواعيد أو المطاعم أو العودة إلى المنزل: تنقل آمن في زيل أم سي وكابرون والمناطق المحيطة على مدار الساعة."
    },
    "vip": {
      "title": "جولات خاصة ورحلات أعمال",
      "desc": "اكتشفوا المنطقة برحلات مصممة خصيصًا لكم، مع خدمات نقل مرنة وعناية شخصية لرحلات الأعمال والمناسبات الخاصة."
    }
  },
  "why": {
    "title": "لماذا تختاروننا؟",
    "items": [
      {
        "title": "أسعار ثابتة",
        "desc": "السعر معروف قبل الرحلة دون مفاجآت."
      },
      {
        "title": "متاحون على مدار الساعة",
        "desc": "ليلًا ونهارًا، بما في ذلك أيام العطل."
      },
      {
        "title": "خبرة محلية",
        "desc": "فريق ذو خبرة يعرف زيل أم سي وكابرون والمنطقة جيدًا."
      },
      {
        "title": "متعدد اللغات",
        "desc": "الألمانية والإنجليزية والتركية والفرنسية والهولندية والعربية."
      }
    ]
  },
  "fleet": {
    "title": "أسطولنا",
    "subtitle": "مركبات حديثة ومكيفة للرحلات الفردية والعائلية والجماعية.",
    "seats": "ركاب",
    "vehicles": [
      {
        "name": "سيارة سيدان",
        "capacity": "حتى 4 ركاب",
        "desc": "سيارة مريحة للرحلات المحلية والتنقل إلى المطارات، مع تكييف ومساحة للأمتعة."
      },
      {
        "name": "فان للأعمال",
        "capacity": "حتى 6 ركاب",
        "desc": "فان مريح لرحلات الأعمال والمجموعات الصغيرة مع سائق محترف."
      },
      {
        "name": "مركبة للمجموعات",
        "capacity": "حتى 8 ركاب",
        "desc": "مركبة واسعة للعائلات والمجموعات والأمتعة، مناسبة للرحلات ونقل المطار."
      }
    ],
    "note": "هل تحتاجون إلى مقاعد للأطفال أو لديكم طلبات خاصة؟ راسلونا عبر واتساب."
  },
  "float": {
    "message": "مرحبًا! أود الاستفسار عن رحلة مع ألبينا تاكسي."
  },
  "about": {
    "title": "عن ألبينا تاكسي",
    "text": "ألبينا تاكسي هي خدمة النقل الخاصة بكم في زيل أم سي وكابرون. فريقنا ذو الخبرة يعرف المنطقة ويخدمكم على مدار الساعة للرحلات المحلية والتنقل إلى المطارات ومحطات القطار والجولات الخاصة. راحتكم وسلامتكم ورضاكم هي أولويتنا في كل رحلة.",
    "fleet": "أسطولنا",
    "fleetText": "مركبات مريحة للرحلات المحلية والتنقل إلى المطارات والجولات الخاصة، للأفراد والعائلات والمجموعات."
  },
  "contact": {
    "title": "اتصل بنا",
    "subtitle": "اتصلوا بنا أو راسلونا عبر واتساب أو النموذج، وسنرد عليكم في أقرب وقت.",
    "phone": "الهاتف",
    "email": "البريد الإلكتروني",
    "hours": "أوقات الخدمة",
    "hoursValue": "24 ساعة يوميًا، 7 أيام في الأسبوع"
  },
  "form": {
    "title": "طلب رحلة",
    "name": "الاسم",
    "phone": "الهاتف",
    "email": "البريد الإلكتروني",
    "pickup": "عنوان الانطلاق",
    "dropoff": "عنوان الوجهة",
    "date": "التاريخ",
    "time": "الوقت",
    "passengers": "عدد الركاب",
    "vehicle": "المركبة",
    "vehicleStandard": "سيارة سيدان",
    "vehicleBusiness": "فان للأعمال",
    "vehicleGroup": "مركبة للمجموعات (حتى 8)",
    "notes": "ملاحظات (اختياري)",
    "submitWhatsapp": "طلب عبر واتساب",
    "submitEmail": "طلب عبر البريد الإلكتروني",
    "success": "طلبكم جاهز، ويتم فتحه في واتساب أو تطبيق البريد الإلكتروني.",
    "required": "حقل مطلوب",
    "invalidEmail": "بريد إلكتروني غير صالح",
    "msgIntro": "طلب حجز جديد"
  },
  "footer": {
    "rights": "جميع الحقوق محفوظة.",
    "quick": "روابط سريعة"
  }
};

const translations: Record<Lang, Translations> = { de, en, tr, fr, nl, ar };

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

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

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
