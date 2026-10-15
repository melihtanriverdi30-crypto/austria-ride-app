import { COMPANY } from "@/lib/config";
import { useLanguage } from "@/lib/i18n";
import { IconChat } from "./icons";

export function WhatsAppFloat() {
  const { t } = useLanguage();
  const url = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(t.float.message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg shadow-whatsapp/40 transition-transform hover:scale-110"
    >
      <IconChat />
    </a>
  );
}
