import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, whatsapp, country, need } = body;

        // Validar variables de entorno
        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.error("Missing SMTP environment variables");
            return NextResponse.json({
                error: "Server configuration error: Missing SMTP credentials"
            }, { status: 500 });
        }

        console.log("SMTP Config:", {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            user: process.env.SMTP_USER,
            secure: process.env.SMTP_SECURE
        });

        // Send Email directly (reCAPTCHA removed temporarily)
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

    } catch (error: any) {
        console.error("Error submitting form:", error);

        // Retornar detalles específicos del error
        const errorMessage = error?.message || "Unknown error";
        const errorCode = error?.code || "UNKNOWN";

        return NextResponse.json({
            error: "Failed to send email",
            details: errorMessage,
            code: errorCode
        }, { status: 500 });
    }
}
