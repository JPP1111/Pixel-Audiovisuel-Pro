"use client";

import { useState, type ReactNode } from "react";

interface QuoteRequestButtonProps {
  productRef?: string;
  title?: string;
  className?: string;
  children: ReactNode;
}

type Status = "idle" | "sending" | "success" | "error";

export default function QuoteRequestButton({
  productRef,
  title = "Demander un devis",
  className,
  children,
}: QuoteRequestButtonProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(
    productRef ? `Je souhaite recevoir un devis pour le vidéoprojecteur Panasonic ${productRef}.` : ""
  );
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, productRef }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setStatus("idle");
          setOpen(true);
        }}
        className={className}
      >
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md bg-[#030d38] border border-[#1a2a8c] rounded-lg p-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <h3
                className="text-lg font-semibold text-white"
                style={{ fontFamily: "var(--font-sora, system-ui)" }}
              >
                {title}
              </h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-[#9A9078] hover:text-white transition-colors"
                aria-label="Fermer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {productRef && (
              <p className="text-xs text-[#9A9078] mb-4">
                Pour le vidéoprojecteur <span className="text-white font-semibold">{productRef}</span>
              </p>
            )}

            {status === "success" ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-[#5FE0A0]/10 border border-[#5FE0A0]/30 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#5FE0A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-1">Demande envoyée</p>
                <p className="text-sm text-[#9A9078]">
                  Nous revenons vers vous rapidement à l&apos;adresse indiquée.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold tracking-[0.1em] uppercase text-[#9A9078] mb-1.5">
                    Nom
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#020b3c] border border-[#1a2a8c] rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-[#1E7BFF] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-[0.1em] uppercase text-[#9A9078] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#020b3c] border border-[#1a2a8c] rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-[#1E7BFF] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-[0.1em] uppercase text-[#9A9078] mb-1.5">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#020b3c] border border-[#1a2a8c] rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-[#1E7BFF] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-[0.1em] uppercase text-[#9A9078] mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#020b3c] border border-[#1a2a8c] rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-[#1E7BFF] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#1E7BFF] hover:bg-[#1565d8] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-full text-sm transition-colors"
                >
                  {status === "sending" ? "Envoi en cours…" : "Envoyer la demande"}
                </button>

                {status === "error" && (
                  <p className="text-xs text-center leading-relaxed" style={{ color: "#f28b82" }}>
                    L&apos;envoi a échoué. Réessayez, ou contactez-nous directement au{" "}
                    <a href="tel:+33478431616" className="underline">04 78 43 16 16</a> ou à{" "}
                    <a href="mailto:contact@pixelaudiovisuelpro.fr" className="underline">
                      contact@pixelaudiovisuelpro.fr
                    </a>
                    .
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
