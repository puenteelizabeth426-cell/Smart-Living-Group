import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "Smartlivingroup@gmail.com";
// Uses Resend's shared onboarding sender until a verified domain is added.
const FROM_EMAIL = "Smart Living Group <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 500 }
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const phone = String(payload.phone ?? "").trim();
  const service = String(payload.service ?? "").trim();
  const message = String(payload.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email and project details." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New consultation request — ${name}${service ? ` (${service})` : ""}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;color:#12110f;line-height:1.6">
          <h2 style="margin:0 0 16px">New Consultation Request</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone) || "—"}</p>
          <p><strong>Service:</strong> ${escapeHtml(service) || "—"}</p>
          <p><strong>Details:</strong></p>
          <p style="white-space:pre-wrap;padding:12px 16px;background:#f2eee5;border-radius:12px">${escapeHtml(
            message
          )}</p>
        </div>
      `,
    });

    if (error) {
      console.log("[v0] Resend error:", error);
      return NextResponse.json(
        { error: "Unable to send your request right now." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.log("[v0] Contact route error:", err);
    return NextResponse.json(
      { error: "Unexpected error. Please try again." },
      { status: 500 }
    );
  }
}
