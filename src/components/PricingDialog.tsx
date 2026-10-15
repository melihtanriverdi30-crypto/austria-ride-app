import { createContext, useContext, useState, type ReactNode } from 'react';
import { Phone, Plane, Users, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { AIRPORT_FARES, ADDITIONAL_PERSON_FARE } from '@/lib/fares';
import { alpinaContent } from '@/lib/alpina-content';
import { COMPANY } from '@/lib/config';
import { useLanguage } from '@/lib/i18n';

const PricingContext = createContext<() => void>(() => {});
export function PriceButton({ className }: { className?: string }) {
  const open = useContext(PricingContext);
  const { t } = useLanguage();
  return <Button onClick={open} className={className}>{t.cta.book}</Button>;
}

export function PricingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { lang, t } = useLanguage();
  const { pricing: p } = alpinaContent[lang];
  return (
    <PricingContext.Provider value={() => setOpen(true)}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent dir={lang === 'ar' ? 'rtl' : 'ltr'} className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-2xl gap-0 overflow-y-auto rounded-lg p-0" showCloseButton={false}>
          <div className="border-b border-border px-5 pb-5 pt-5 sm:px-7">
            <div className="mb-5 flex items-center justify-between gap-2">
              <LanguageSwitcher />
              <DialogClose asChild><Button variant="ghost" size="icon" aria-label={p.close} title={p.close}><X /></Button></DialogClose>
            </div>
            <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary"><Plane className="size-4" />{COMPANY.name}</p>
            <DialogTitle className="font-heading text-2xl leading-snug">{p.title}</DialogTitle>
            <DialogDescription className="mt-2 flex items-center gap-2"><Users className="size-4 shrink-0" />{p.subtitle}</DialogDescription>
          </div>
          <div className="px-4 py-4 sm:px-7">
            <table className="w-full table-fixed text-start text-sm">
              <thead className="bg-muted text-muted-foreground"><tr><th className="w-[39%] px-3 py-3 text-start font-medium">{p.from}</th><th className="w-[36%] px-2 py-3 text-start font-medium">{p.to}</th><th className="w-[25%] px-2 py-3 text-end font-medium">{p.fare}</th></tr></thead>
              <tbody>{AIRPORT_FARES.map((fare, i) => (
                <tr key={`${fare.origin}-${fare.airport}`} className={i > 4 ? 'border-b border-border bg-primary/5' : 'border-b border-border'}>
                  <td className="break-words px-3 py-3.5 leading-relaxed">{fare.origin === 'region' ? p.region : fare.origin}</td>
                  <td className="break-words px-2 py-3.5 leading-relaxed">{p[fare.airport]}</td>
                  <td className="px-2 py-3.5 text-end font-heading text-lg font-bold text-primary"><bdi>{fare.price} €</bdi></td>
                </tr>
              ))}</tbody>
            </table>
            <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground" data-additional-fare={ADDITIONAL_PERSON_FARE}><Users className="mt-0.5 size-4 shrink-0" />{p.additional}</p>
          </div>
          <div className="border-t border-border bg-muted/40 px-5 py-5 sm:px-7">
            <Button asChild className="h-auto min-h-12 w-full flex-wrap gap-x-3 gap-y-1 whitespace-normal py-3 text-base"><a href={`tel:${COMPANY.phoneHref}`}><Phone className="size-4" />{t.cta.call}<bdi className="font-semibold">{COMPANY.phone}</bdi></a></Button>
          </div>
        </DialogContent>
      </Dialog>
    </PricingContext.Provider>
  );
}
