import { Button } from '@/components/ui/button';
import { LANGUAGES, useLanguage } from '@/lib/i18n';

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <div dir="ltr" className="flex shrink-0 items-center gap-0.5 rounded-full border border-border bg-card p-0.5">
      {LANGUAGES.map((l) => (
        <Button key={l.code} variant={lang === l.code ? 'default' : 'ghost'} size="sm" onClick={() => setLang(l.code)} title={l.name} aria-label={l.name} aria-pressed={lang === l.code} className="h-7 rounded-full px-2 text-[11px]">
          {l.label}
        </Button>
      ))}
    </div>
  );
}
