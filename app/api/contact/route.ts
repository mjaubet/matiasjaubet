import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, whatsapp, country, need, token } = body;

        // 1. Verify reCAPTCHA
        const recaptchaApiKey = process.env.RECAPTCHA_API_KEY;
        const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
        const projectID = "norse-habitat-470912-u1"; // From user instructions

        if (!recaptchaApiKey || recaptchaApiKey.startsWith("PLACEHOLDER")) {
            console.error("Recaptcha API Key is missing or invalid");
            return NextResponse.json({ error: "Server configuration error (API Key)" }, { status: 500 });
        }

        const verifyUrl = `https://recaptchaenterprise.googleapis.com/v1/projects/${projectID}/assessments?key=${recaptchaApiKey}`;

        const verifyResponse = await fetch(verifyUrl, {
            method: 'POST',
            body: JSON.stringify({
                event: {
                    token: token,
                    expectedAction: 'contact_submit',
                    siteKey: siteKey,
                }
            })
        });

        const verifyData = await verifyResponse.json();

        if (!verifyData.tokenProperties?.valid) {
            console.error("Recaptcha token invalid:", verifyData);
            return NextResponse.json({ error: "Invalid Recaptcha" }, { status: 400 });
        }

        // Optional: Check score
        // if (verifyData.riskAnalysis.score < 0.5) { ... }


        // 2. Send Email
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"Web Matías Jaubet" <${process.env.SMTP_USER}>`,
            to: "matias@jaubet.com",
            replyTo: email,
            subject: `Nuevo contacto web de: ${name}`,
            html: `
                <h2>Nuevo Mensaje de Contacto</h2>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>WhatsApp/Móvil:</strong> ${whatsapp}</p>
                <p><strong>País:</strong> ${country}</p>
                <p><strong>Necesidad:</strong></p>
                <p>${need}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error("Error submitting form:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
