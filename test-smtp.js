// Script de prueba para verificar credenciales SMTP
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

// Leer .env.local manualmente
const envPath = path.join(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const envLines = envContent.split('\n');

envLines.forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...valueParts] = trimmed.split('=');
        const value = valueParts.join('=');
        if (key && value) {
            process.env[key.trim()] = value.trim();
        }
    }
});

console.log('\n=== VERIFICACIÓN DE CREDENCIALES SMTP ===\n');

// Mostrar configuración (sin mostrar la contraseña completa)
console.log('Configuración cargada:');
console.log('SMTP_HOST:', process.env.SMTP_HOST);
console.log('SMTP_PORT:', process.env.SMTP_PORT);
console.log('SMTP_USER:', process.env.SMTP_USER);
console.log('SMTP_PASS:', process.env.SMTP_PASS ? `${process.env.SMTP_PASS.substring(0, 4)}****` : 'NO DEFINIDO');
console.log('SMTP_SECURE:', process.env.SMTP_SECURE);
console.log('\nLongitud de la contraseña:', process.env.SMTP_PASS?.length, 'caracteres');

// Verificar si hay espacios en la contraseña
if (process.env.SMTP_PASS?.includes(' ')) {
    console.log('⚠️  ADVERTENCIA: La contraseña contiene ESPACIOS. Esto causará errores.');
}

console.log('\n=== INTENTANDO CONECTAR A GMAIL ===\n');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    debug: true, // Activar modo debug
});

// Verificar la conexión
transporter.verify(function (error, success) {
    if (error) {
        console.log('\n❌ ERROR DE CONEXIÓN:');
        console.log('Código:', error.code);
        console.log('Mensaje:', error.message);
        console.log('\nPosibles soluciones:');
        console.log('1. Verifica que la contraseña de aplicación sea correcta (16 caracteres sin espacios)');
        console.log('2. Genera una NUEVA contraseña de aplicación en: https://myaccount.google.com/apppasswords');
        console.log('3. Verifica que la verificación en 2 pasos esté activada en tu cuenta de Google');
    } else {
        console.log('\n✅ CONEXIÓN EXITOSA!');
        console.log('El servidor SMTP está listo para enviar correos.');
    }
    process.exit();
});
