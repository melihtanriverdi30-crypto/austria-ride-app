# Viyana Taksi & Transfer Şirketi — Web Sitesi Planı

## Hedef
Viyana'da yeni kurulacak bir taksi/transfer şirketi için modern, güven veren, çok dilli bir tanıtım ve rezervasyon sitesi. Rakiplerden sıyrılan, mobil öncelikli (müşteriler çoğunlukla telefondan gelecek) bir tasarım.

## Kapsam (bu aşamada)

### 1. Sayfalar
- **Ana sayfa (`/`)**: Güçlü giriş bölümü (Viyana görselli), hızlı rezervasyon butonu, hizmet özeti, neden biz, iletişim çağrısı
- **Hizmetler (`/services`)**: Havaalanı transferi, şehir içi taksi, kurumsal/VIP transfer — her biri detaylı anlatım
- **Fiyatlar (`/pricing`)**: Örnek güzergah fiyatları (Viyana havaalanı ↔ şehir merkezi vb.) — gerçek fiyatları müşteriden alacağız
- **Hakkımızda (`/about`)**: Şirket hikayesi, filo, güven unsurları (lisans, sigorta)
- **İletişim (`/contact`)**: Telefon, WhatsApp butonu, e-posta, iletişim formu

### 2. Çok dil desteği
- Üst menüde dil seçici (bayrak/kod düğmeleri): **Almanca (varsayılan), İngilizce, Türkçe, Fransızca, Felemenkçe**
- Tüm metinler bir çeviri dosyasından yönetilecek; dil seçimi tarayıcıda hatırlanacak

### 3. Rezervasyon formu
- Alanlar: ad, telefon, e-posta, alış/bırakış adresi, tarih-saat, yolcu sayısı, araç tipi, not
- Gönderim: talep **e-posta** ve **WhatsApp mesajı** olarak şirkete iletilecek (form doğrulama ile)
- WhatsApp: tek tıkla önceden doldurulmuş mesaj açılır; e-posta: sunucu üzerinden gönderim

### 4. Tasarım
- Premium, koyu tonlu "VIP transfer" hissi veya açık/temiz modern taksi hissi — başlamadan önce 3 tasarım yönü gösterip birlikte seçeceğiz
- Mobil öncelikli, hızlı yüklenen, büyük "Hemen Rezervasyon" ve "WhatsApp" butonları

## Teknik notlar
- TanStack Start + Tailwind; her sayfa kendi rotası ve SEO başlığı/açıklaması ile
- Form girdileri istemci ve sunucu tarafında doğrulanacak (zod)
- E-posta gönderimi için Lovable Cloud gerekebilir — onayınızla etkinleştirilecek
- Şirket adı, telefon, WhatsApp numarası, e-posta adresi ve gerçek fiyatlar **müşteriden alınacak**; o zamana kadar örnek bilgiler kullanılacak

## Sıradaki adımlar (sonraki parçalar)
- Google Haritalar entegrasyonu ve mesafe bazlı fiyat hesaplama
- Online ödeme, sürücü paneli, yorumlar bölümü vb.

## Sizden gerekenler
1. Şirket adı ve logo (varsa)
2. Telefon / WhatsApp numarası / e-posta
3. Örnek fiyat listesi
