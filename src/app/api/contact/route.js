import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Nuevo mensaje de contacto: ${subject}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Asunto: ${subject}
        Mensaje: ${message}
      `,
      html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: 'Email enviado con éxito' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error al enviar el email:', error);
    return new Response(
      JSON.stringify({ message: 'Error al enviar el email' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
