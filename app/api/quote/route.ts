import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = "contact@pixelaudiovisuelpro.fr";

export async function POST(request: Request) {
  const { name, email, phone, message, productRef } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json({ error: "Service d'envoi non configuré." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const subject = productRef ? `Demande de devis — ${productRef}` : "Demande de devis";
  const text = [
    `Nom : ${name}`,
    `Email : ${email}`,
    phone ? `Téléphone : ${phone}` : null,
    "",
    message,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  const { error } = await resend.emails.send({
    from: "Pixel Audiovisuel Pro <contact@pixelaudiovisuelpro.fr>",
    to: CONTACT_EMAIL,
    replyTo: email,
    subject,
    text,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Échec de l'envoi." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
