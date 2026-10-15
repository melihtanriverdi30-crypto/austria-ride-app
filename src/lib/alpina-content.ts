import type { Lang } from './i18n';

type Content = {
  welcome: { title: string; paragraphs: string[]; closing: string };
  pricing: { title: string; subtitle: string; from: string; to: string; fare: string; region: string; salzburg: string; innsbruck: string; vienna: string; additional: string; close: string };
  legal: { title: string; owner: string; address: string; vat: string };
};
export const alpinaContent: Record<Lang, Content> = {
  tr: {
    welcome: {
      title: 'Alpina Taxi – 7/24 Taksi, Havalimanı Transferi ve Özel Geziler',
      paragraphs: [
        'Zell am See ve Kaprun’da konforlu, güvenli ve zamanında ulaşım için doğru adrestesiniz! Alpina Taxi olarak şehir içi yolculuklardan havalimanı ve tren istasyonu transferlerine, bölge gezilerine kadar farklı ihtiyaçlarınıza yönelik ulaşım hizmetleri sunuyoruz.',
        'Bölgeyi yakından tanıyan deneyimli ekibimizle günün her saati yanınızdayız. İster günlük ulaşımınızı planlayın ister seyahatiniz için güvenilir bir transfer arayın; yolculuğunuzun her aşamasında rahatlığınızı ve memnuniyetinizi ön planda tutuyoruz.',
        'Salzburg bölgesinde güvenilir hizmet, esnek ulaşım çözümleri ve kişiye özel ilgi anlayışımızla sizi gideceğiniz yere konforla ulaştırıyoruz.',
      ],
      closing: 'Yolculuğunuz bizimle başlasın, içiniz rahat olsun!',
    },
    pricing: { title: 'Havalimanı transfer fiyatları', subtitle: '1–4 kişi için sabit fiyatlar', from: 'Kalkış', to: 'Havalimanı', fare: 'Sabit fiyat', region: 'Zell am See / Kaprun / Saalbach / Leogang / Maria Alm', salzburg: 'Salzburg Havalimanı', innsbruck: 'Innsbruck Havalimanı', vienna: 'Wien Havalimanı', additional: '4 kişiden itibaren her ilave kişi için sabit fiyata +15 €.', close: 'Kapat' },
    legal: { title: 'Firma bilgileri', owner: 'Firma sahibi', address: 'Adres', vat: 'Vergi numarası (UID)' },
  },
  de: {
    welcome: {
      title: 'Alpina Taxi – 24/7 Taxi, Flughafentransfers und private Ausflüge',
      paragraphs: [
        'Für komfortable, sichere und pünktliche Fahrten in Zell am See und Kaprun sind Sie bei uns richtig! Alpina Taxi bietet Ihnen passende Mobilität für lokale Fahrten, Flughafen- und Bahnhofstransfers sowie Ausflüge in die Region.',
        'Unser erfahrenes Team kennt die Region bestens und ist zu jeder Tageszeit für Sie da. Ob Sie Ihre täglichen Wege planen oder einen zuverlässigen Transfer für Ihre Reise suchen: Ihr Komfort und Ihre Zufriedenheit stehen auf jedem Abschnitt im Mittelpunkt.',
        'Mit zuverlässigem Service, flexiblen Mobilitätslösungen und persönlicher Betreuung bringen wir Sie in der Region Salzburg bequem an Ihr Ziel.',
      ], closing: 'Beginnen Sie Ihre Reise mit uns — entspannt und sorgenfrei!',
    },
    pricing: { title: 'Flughafentransfer · Festpreise', subtitle: 'Festpreise für 1–4 Personen', from: 'Abholort', to: 'Flughafen', fare: 'Festpreis', region: 'Zell am See / Kaprun / Saalbach / Leogang / Maria Alm', salzburg: 'Salzburg Flughafen', innsbruck: 'Innsbruck Flughafen', vienna: 'Wien Flughafen', additional: 'Ab 4 Personen: jede weitere Person +15 € zum Festpreis.', close: 'Schließen' },
    legal: { title: 'Impressum · Unternehmensangaben', owner: 'Inhaber', address: 'Anschrift', vat: 'UID-Nummer' },
  },
  en: {
    welcome: {
      title: 'Alpina Taxi – 24/7 taxis, airport transfers and private excursions',
      paragraphs: [
        'You are in the right place for comfortable, safe and punctual travel in Zell am See and Kaprun! Alpina Taxi offers transport to suit your needs, from local journeys to airport and train station transfers and excursions around the region.',
        'Our experienced team knows the region well and is here at any hour. Whether you are planning your everyday travel or looking for a reliable holiday transfer, your comfort and satisfaction come first at every stage of the journey.',
        'With reliable service, flexible transport options and personal attention, we take you comfortably to your destination throughout the Salzburg region.',
      ], closing: 'Let your journey begin with us, with peace of mind!',
    },
    pricing: { title: 'Airport transfer fares', subtitle: 'Fixed fares for 1–4 passengers', from: 'Pickup', to: 'Airport', fare: 'Fixed fare', region: 'Zell am See / Kaprun / Saalbach / Leogang / Maria Alm', salzburg: 'Salzburg Airport', innsbruck: 'Innsbruck Airport', vienna: 'Vienna Airport', additional: 'From 4 passengers: each additional person adds €15 to the fixed fare.', close: 'Close' },
    legal: { title: 'Company information', owner: 'Owner', address: 'Address', vat: 'VAT identification number' },
  },
  fr: {
    welcome: {
      title: 'Alpina Taxi – Taxis 24h/24, transferts aéroport et excursions privées',
      paragraphs: [
        'Pour des déplacements confortables, sûrs et ponctuels à Zell am See et Kaprun, vous êtes au bon endroit ! Alpina Taxi répond à vos besoins : trajets locaux, transferts aéroport et gare, et excursions dans la région.',
        'Notre équipe expérimentée connaît parfaitement la région et reste à votre service à toute heure. Pour vos déplacements quotidiens ou un transfert fiable pendant votre voyage, votre confort et votre satisfaction sont notre priorité à chaque étape.',
        'Dans la région de Salzbourg, nous vous conduisons confortablement à destination grâce à un service fiable, des solutions flexibles et une attention personnalisée.',
      ], closing: 'Commencez votre voyage avec nous, en toute sérénité !',
    },
    pricing: { title: 'Tarifs des transferts aéroport', subtitle: 'Prix fixes pour 1 à 4 passagers', from: 'Départ', to: 'Aéroport', fare: 'Prix fixe', region: 'Zell am See / Kaprun / Saalbach / Leogang / Maria Alm', salzburg: 'Aéroport de Salzbourg', innsbruck: 'Aéroport d’Innsbruck', vienna: 'Aéroport de Vienne', additional: 'À partir de 4 passagers : +15 € par personne supplémentaire au prix fixe.', close: 'Fermer' },
    legal: { title: 'Informations sur l’entreprise', owner: 'Propriétaire', address: 'Adresse', vat: 'Numéro de TVA' },
  },
  nl: {
    welcome: {
      title: 'Alpina Taxi – 24/7 taxi, luchthaventransfers en privé-uitstapjes',
      paragraphs: [
        'Voor comfortabel, veilig en stipt vervoer in Zell am See en Kaprun bent u bij ons aan het juiste adres! Alpina Taxi biedt vervoer voor uw verschillende behoeften: lokale ritten, luchthaven- en stationstransfers en uitstapjes in de regio.',
        'Ons ervaren team kent de regio goed en staat op elk moment voor u klaar. Of u uw dagelijkse vervoer plant of een betrouwbare transfer voor uw reis zoekt, uw comfort en tevredenheid staan bij iedere stap voorop.',
        'Met betrouwbare service, flexibele vervoersoplossingen en persoonlijke aandacht brengen wij u comfortabel naar uw bestemming in de regio Salzburg.',
      ], closing: 'Begin uw reis met ons, met een gerust hart!',
    },
    pricing: { title: 'Tarieven luchthaventransfers', subtitle: 'Vaste prijzen voor 1–4 passagiers', from: 'Vertrek', to: 'Luchthaven', fare: 'Vaste prijs', region: 'Zell am See / Kaprun / Saalbach / Leogang / Maria Alm', salzburg: 'Luchthaven Salzburg', innsbruck: 'Luchthaven Innsbruck', vienna: 'Luchthaven Wenen', additional: 'Vanaf 4 passagiers: +€15 per extra persoon bovenop de vaste prijs.', close: 'Sluiten' },
    legal: { title: 'Bedrijfsgegevens', owner: 'Eigenaar', address: 'Adres', vat: 'Btw-identificatienummer' },
  },
  ar: {
    welcome: {
      title: 'ألبينا تاكسي – تاكسي على مدار الساعة وتنقلات المطار وجولات خاصة',
      paragraphs: [
        'أنتم في المكان الصحيح لتنقل مريح وآمن وفي الوقت المحدد في زيل أم سي وكابرون! تقدم ألبينا تاكسي خدمات نقل تلبي احتياجاتكم، من الرحلات المحلية إلى التنقل إلى المطارات ومحطات القطار والجولات في المنطقة.',
        'فريقنا ذو الخبرة يعرف المنطقة جيدًا ويخدمكم في كل ساعة من اليوم. سواء كنتم تخططون لتنقلاتكم اليومية أو تبحثون عن نقل موثوق لرحلتكم، نضع راحتكم ورضاكم في مقدمة أولوياتنا في كل مرحلة.',
        'في منطقة سالزبورغ، نوصلكم إلى وجهتكم براحة من خلال خدمة موثوقة وحلول نقل مرنة وعناية شخصية.',
      ], closing: 'ابدأوا رحلتكم معنا، واطمئنوا!',
    },
    pricing: { title: 'أسعار النقل إلى المطارات', subtitle: 'أسعار ثابتة من راكب واحد إلى 4 ركاب', from: 'مكان الانطلاق', to: 'المطار', fare: 'السعر الثابت', region: 'زيل أم سي / كابرون / سالباخ / ليوغانغ / ماريا ألم', salzburg: 'مطار سالزبورغ', innsbruck: 'مطار إنسبروك', vienna: 'مطار فيينا', additional: 'ابتداءً من 4 ركاب: تضاف 15 يورو إلى السعر الثابت لكل راكب إضافي.', close: 'إغلاق' },
    legal: { title: 'معلومات الشركة', owner: 'المالك', address: 'العنوان', vat: 'رقم ضريبة القيمة المضافة' },
  },
};
