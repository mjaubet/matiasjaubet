const fs = require('fs');
const path = require('path');

// Leer .env.local
const envPath = path.join(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const lines = envContent.split('\n');

console.log('\n=== ANÁLISIS DETALLADO DE SMTP_PASS ===\n');

lines.forEach((line, index) => {
    if (line.includes('SMTP_PASS')) {
        console.log(`Línea ${index + 1}:`, line);
        
        const [key, value] = line.split('=');
        const password = value || '';
        
        console.log('\nAnálisis de la contraseña:');
        console.log('Longitud:', password.length, 'caracteres');
        console.log('Valor:', password);
        console.log('\nCódigos de caracteres:');
        
        for (let i = 0; i < password.length; i++) {
            const char = password[i];
            const code = password.charCodeAt(i);
            console.log(`  [${i}] '${char}' -> código: ${code} ${code === 32 ? '⚠️ ESPACIO' : ''} ${code === 10 || code === 13 ? '⚠️ SALTO DE LÍNEA' : ''}`);
        }
        
        // Verificar espacios
        if (password.includes(' ')) {
            console.log('\n❌ PROBLEMA: La contraseña contiene ESPACIOS');
        }
        
        // Verificar saltos de línea
        if (password.includes('\n') || password.includes('\r')) {
            console.log('\n❌ PROBLEMA: La contraseña contiene SALTOS DE LÍNEA');
        }
        
        // Mostrar versión limpia
        const cleaned = password.trim();
        console.log('\nContraseña limpia (sin espacios al inicio/final):');
        console.log('Longitud:', cleaned.length);
        console.log('Valor:', cleaned);
    }
});
