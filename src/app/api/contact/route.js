import nodemailer from "nodemailer";

// ── Helpers ──────────────────────────────────────────────────────────────────

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function buildHtmlEmail({ name, email, phone, subject, message }) {
  name = escapeHtml(name);
  email = escapeHtml(email);
  phone = escapeHtml(phone);
  subject = escapeHtml(subject);
  message = escapeHtml(message);
  const now = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Inquiry — Venner Infotech</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;">

          <!-- Header / Brand Bar -->
          <tr>
            <td style="background:linear-gradient(135deg,#f97316 0%,#ea580c 100%);border-radius:16px 16px 0 0;padding:36px 40px;text-align:center;">
              <div style="font-size:32px;font-weight:900;color:#ffffff;letter-spacing:-1px;margin-bottom:4px;">
                VENNER <span style="color:rgba(255,255,255,0.7);font-weight:400;">Infotech</span>
              </div>
              <div style="font-size:13px;color:rgba(255,255,255,0.85);letter-spacing:3px;text-transform:uppercase;margin-top:4px;">
                Infotech &amp; Marketing Solution
              </div>
            </td>
          </tr>

          <!-- Alert Badge -->
          <tr>
            <td style="background:#ffffff;padding:28px 40px 0 40px;">
              <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 20px;display:flex;align-items:center;gap:10px;">
                <span style="font-size:20px;">📬</span>
                <div>
                  <div style="font-size:14px;font-weight:700;color:#9a3412;">New Contact Inquiry Received</div>
                  <div style="font-size:12px;color:#c2410c;margin-top:2px;">${now} IST</div>
                </div>
              </div>
            </td>
          </tr>

          <!-- Body Card -->
          <tr>
            <td style="background:#ffffff;padding:28px 40px 32px 40px;">
              <h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 24px 0;padding-bottom:16px;border-bottom:1px solid #e2e8f0;">
                Contact Details
              </h2>

              <!-- Name -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td style="width:130px;vertical-align:top;padding-top:2px;">
                    <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#94a3b8;">Full Name</span>
                  </td>
                  <td style="font-size:15px;font-weight:600;color:#0f172a;">${name}</td>
                </tr>
              </table>

              <!-- Email -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td style="width:130px;vertical-align:top;padding-top:2px;">
                    <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#94a3b8;">Email</span>
                  </td>
                  <td>
                    <a href="mailto:${email}" style="font-size:15px;font-weight:600;color:#f97316;text-decoration:none;">${email}</a>
                  </td>
                </tr>
              </table>

              <!-- Phone (conditional) -->
              ${phone ? `
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td style="width:130px;vertical-align:top;padding-top:2px;">
                    <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#94a3b8;">Phone</span>
                  </td>
                  <td>
                    <a href="tel:${phone}" style="font-size:15px;font-weight:600;color:#0f172a;text-decoration:none;">${phone}</a>
                  </td>
                </tr>
              </table>
              ` : ""}

              <!-- Subject -->
              ${subject ? `
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="width:130px;vertical-align:top;padding-top:2px;">
                    <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#94a3b8;">Subject</span>
                  </td>
                  <td style="font-size:15px;font-weight:600;color:#0f172a;">${subject}</td>
                </tr>
              </table>
              ` : ""}

              <!-- Message -->
              <div style="margin-top:24px;">
                <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#94a3b8;margin-bottom:10px;">Message</div>
                <div style="background:#f8fafc;border-left:4px solid #f97316;border-radius:0 10px 10px 0;padding:18px 20px;font-size:15px;color:#334155;line-height:1.7;white-space:pre-wrap;">${message}</div>
              </div>

              <!-- Reply CTA -->
              <div style="text-align:center;margin-top:32px;">
                <a href="mailto:${email}?subject=Re: ${subject || "Your Inquiry"}&body=Hi ${name},%0A%0AThank you for reaching out to Venner Infotech.%0A%0A"
                   style="display:inline-block;background:linear-gradient(135deg,#f97316,#ea580c);color:#ffffff;font-size:15px;font-weight:700;padding:14px 36px;border-radius:100px;text-decoration:none;letter-spacing:0.3px;box-shadow:0 4px 14px rgba(249,115,22,0.4);">
                  ✉ Reply to ${name}
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;border-top:1px solid #e2e8f0;border-radius:0 0 16px 16px;padding:22px 40px;text-align:center;">
              <div style="font-size:12px;color:#94a3b8;line-height:1.6;">
                This email was automatically generated from the contact form at
                <a href="https://vennerinfotech.com" style="color:#f97316;text-decoration:none;font-weight:600;">vennerinfotech.com</a>
                <br/>
                Venner Infotech | Surat, Gujarat, India — 395004
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `;
}

// ── Route Handler ─────────────────────────────────────────────────────────────

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone = "", subject = "", message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Venner Infotech Website" <${process.env.MAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `📬 New Inquiry: ${subject || "Contact Form Submission"} — from ${name}`,
      html: buildHtmlEmail({ name, email, phone, subject, message }),
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[Contact API Error]", error);
    return Response.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
