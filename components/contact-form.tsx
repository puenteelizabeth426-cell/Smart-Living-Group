"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const services = [
  "Outdoor Audio",
  "Landscape Lighting",
  "Outdoor TVs",
  "Motorized Shades",
  "Full Outdoor System",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Unable to send. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-3xl border border-line bg-card p-8 backdrop-blur-md">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-soft text-ink">
          <CheckCircle2 size={24} />
        </span>
        <h3 className="font-serif text-3xl">Thank you.</h3>
        <p className="leading-relaxed text-muted">
          Your request has reached Smart Living Group. We&apos;ll be in touch
          shortly to schedule your consultation.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm uppercase tracking-[0.12em] text-gold-soft underline-offset-4 hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-2xl border border-line bg-white/[0.04] px-4 py-3.5 text-foreground placeholder:text-muted/70 outline-none transition-colors focus:border-gold/60 focus:bg-white/[0.06]";
  const labelClass =
    "mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-line bg-card p-6 backdrop-blur-md sm:p-8"
    >
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="(817) 000-0000"
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>
            Service of interest
          </label>
          <select id="service" name="service" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service} value={service} className="text-ink">
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Project details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Tell us about your outdoor space and what you have in mind."
            className={`${fieldClass} resize-y`}
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-red-300" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-gold-soft to-gold px-6 py-4 font-bold tracking-wide text-ink transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={18} className="animate-spin" /> Sending…
            </>
          ) : (
            <>
              Request Consultation <ArrowRight size={18} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
