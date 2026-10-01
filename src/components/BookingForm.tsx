import { useState } from "react";
import { z } from "zod";
import { COMPANY } from "@/lib/config";
import { useLanguage } from "@/lib/i18n";

type FormState = {
  name: string;
  phone: string;
  email: string;
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  passengers: string;
  vehicle: string;
  notes: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  email: "",
  pickup: "",
  dropoff: "",
  date: "",
  time: "",
  passengers: "1",
  vehicle: "standard",
  notes: "",
};

export function BookingForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const schema = z.object({
    name: z.string().trim().min(1, t.form.required).max(100),
    phone: z.string().trim().min(5, t.form.required).max(30),
    email: z.string().trim().email(t.form.invalidEmail).max(255),
    pickup: z.string().trim().min(1, t.form.required).max(200),
    dropoff: z.string().trim().min(1, t.form.required).max(200),
    date: z.string().trim().min(1, t.form.required),
    time: z.string().trim().min(1, t.form.required),
    passengers: z.string(),
    vehicle: z.string(),
    notes: z.string().trim().max(1000),
  });

  const vehicleLabel =
    form.vehicle === "business"
      ? t.form.vehicleBusiness
      : form.vehicle === "group"
        ? t.form.vehicleGroup
        : t.form.vehicleStandard;

  const buildMessage = () =>
    [
      `🚖 ${t.form.msgIntro} — ${COMPANY.name}`,
      ``,
      `${t.form.name}: ${form.name}`,
      `${t.form.phone}: ${form.phone}`,
      `${t.form.email}: ${form.email}`,
      `${t.form.pickup}: ${form.pickup}`,
      `${t.form.dropoff}: ${form.dropoff}`,
      `${t.form.date}: ${form.date} ${form.time}`,
      `${t.form.passengers}: ${form.passengers}`,
      `${t.form.vehicle}: ${vehicleLabel}`,
      form.notes ? `${t.form.notes}: ${form.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

  const validate = () => {
    const result = schema.safeParse(form);
    if (result.success) {
      setErrors({});
      return true;
    }
    const fieldErrors: Partial<Record<keyof FormState, string>> = {};
    for (const issue of result.error.issues) {
      const key = issue.path[0] as keyof FormState;
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    setErrors(fieldErrors);
    return false;
  };

  const submitWhatsapp = () => {
    if (!validate()) return;
    const url = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const submitEmail = () => {
    if (!validate()) return;
    const subject = encodeURIComponent(`${t.form.msgIntro} — ${form.name}`);
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const inputCls = (key: keyof FormState) =>
    `w-full rounded-lg border bg-card px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${
      errors[key] ? "border-destructive" : "border-input"
    }`;

  const err = (key: keyof FormState) =>
    errors[key] ? <p className="mt-1 text-xs text-destructive">{errors[key]}</p> : null;

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-lg shadow-primary/5">
      <h3 className="font-heading text-xl font-bold">{t.form.title}</h3>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-muted-foreground">{t.form.name} *</label>
          <input className={inputCls("name")} value={form.name} onChange={set("name")} maxLength={100} />
          {err("name")}
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-muted-foreground">{t.form.phone} *</label>
          <input className={inputCls("phone")} type="tel" value={form.phone} onChange={set("phone")} maxLength={30} />
          {err("phone")}
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-xs font-medium text-muted-foreground">{t.form.email} *</label>
          <input className={inputCls("email")} type="email" value={form.email} onChange={set("email")} maxLength={255} />
          {err("email")}
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-muted-foreground">{t.form.pickup} *</label>
          <input className={inputCls("pickup")} value={form.pickup} onChange={set("pickup")} maxLength={200} />
          {err("pickup")}
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-muted-foreground">{t.form.dropoff} *</label>
          <input className={inputCls("dropoff")} value={form.dropoff} onChange={set("dropoff")} maxLength={200} />
          {err("dropoff")}
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-muted-foreground">{t.form.date} *</label>
          <input className={inputCls("date")} type="date" value={form.date} onChange={set("date")} />
          {err("date")}
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-muted-foreground">{t.form.time} *</label>
          <input className={inputCls("time")} type="time" value={form.time} onChange={set("time")} />
          {err("time")}
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-muted-foreground">{t.form.passengers}</label>
          <select className={inputCls("passengers")} value={form.passengers} onChange={set("passengers")}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-muted-foreground">{t.form.vehicle}</label>
          <select className={inputCls("vehicle")} value={form.vehicle} onChange={set("vehicle")}>
            <option value="standard">{t.form.vehicleStandard}</option>
            <option value="business">{t.form.vehicleBusiness}</option>
            <option value="group">{t.form.vehicleGroup}</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-xs font-medium text-muted-foreground">{t.form.notes}</label>
          <textarea className={inputCls("notes")} rows={3} value={form.notes} onChange={set("notes")} maxLength={1000} />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={submitWhatsapp}
          className="flex-1 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          {t.form.submitWhatsapp}
        </button>
        <button
          onClick={submitEmail}
          className="flex-1 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {t.form.submitEmail}
        </button>
      </div>

      {sent && <p className="mt-3 text-sm font-medium text-primary">{t.form.success}</p>}
    </div>
  );
}
