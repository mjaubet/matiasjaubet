# SEO por Página y Banderas en Selector de Idiomas

## ✅ Cambios Implementados

### 1. **SEO Específico por Página**

Ahora cada página tiene su propia metadata completa con Open Graph y Twitter Cards:

#### **Home** (`/[locale]/layout.tsx`)
- ✅ URL específica: `https://matiasjaubet.com/es` o `/en`
- ✅ Open Graph con URL correcta
- ✅ Twitter Cards
- ✅ Canonical URLs

#### **Servicios** (`/[locale]/servicios/page.tsx`)
- ✅ URL específica: `https://matiasjaubet.com/es/servicios` o `/en/servicios`
- ✅ Open Graph completo
- ✅ Twitter Cards
- ✅ Canonical URLs con alternativas de idioma
- ✅ Metadata específica de la página

#### **Proceso** (`/[locale]/proceso/page.tsx`)
- ✅ URL específica: `https://matiasjaubet.com/es/proceso` o `/en/proceso`
- ✅ Open Graph completo
- ✅ Twitter Cards
- ✅ Canonical URLs con alternativas de idioma
- ✅ Metadata específica de la página

#### **FAQ** (`/[locale]/preguntas-frecuentes/page.tsx`)
- ✅ URL específica: `https://matiasjaubet.com/es/preguntas-frecuentes` o `/en/preguntas-frecuentes`
- ✅ Open Graph completo
- ✅ Twitter Cards
- ✅ Canonical URLs con alternativas de idioma
- ✅ Metadata específica de la página

---

### 2. **Banderas en Selector de Idiomas**

Se agregaron banderas junto a los códigos de idioma:

- 🇪🇸 **ES** - Bandera de España
- 🇬🇧 **EN** - Bandera de Reino Unido

**Archivo modificado**: `/components/language-switcher.tsx`

**Comportamiento**:
- Si estás en español (ES), muestra: 🇬🇧 EN (para cambiar a inglés)
- Si estás en inglés (EN), muestra: 🇪🇸 ES (para cambiar a español)

---

## 📊 Metadata por Página

### **Ejemplo: Página de Servicios**

Cuando compartes `http://localhost:3000/es/servicios` en redes sociales:

```html
<meta property="og:url" content="https://matiasjaubet.com/es/servicios" />
<meta property="og:title" content="Servicios | Matías Web & IA" />
<meta property="og:description" content="Desarrollo web profesional, chatbots inteligentes..." />
<meta property="og:image" content="https://matiasjaubet.com/opengraph-image.png" />
<link rel="canonical" href="/es/servicios" />
<link rel="alternate" hreflang="es" href="/es/servicios" />
<link rel="alternate" hreflang="en" href="/en/servicios" />
```

### **Ejemplo: Página de Proceso**

Cuando compartes `http://localhost:3000/en/proceso` en redes sociales:

```html
<meta property="og:url" content="https://matiasjaubet.com/en/proceso" />
<meta property="og:title" content="Work Process | Matías Web & AI" />
<meta property="og:description" content="Discover how we work: diagnosis, proposal..." />
<meta property="og:image" content="https://matiasjaubet.com/opengraph-image.png" />
<link rel="canonical" href="/en/proceso" />
<link rel="alternate" hreflang="es" href="/es/proceso" />
<link rel="alternate" hreflang="en" href="/en/proceso" />
```

---

## 🧪 Cómo Probar

### **1. Verificar Metadata en el Navegador**

```bash
# Abre el sitio en desarrollo
http://localhost:3000/es/servicios
```

- Inspecciona el código fuente (Cmd+Option+U)
- Busca las meta tags de Open Graph
- Verifica que `og:url` apunte a la página correcta

### **2. Probar Open Graph en Redes Sociales**

Usa estas herramientas para ver cómo se verá cada página:

- **Facebook**: https://developers.facebook.com/tools/debug/
- **Twitter**: https://cards-dev.twitter.com/validator
- **LinkedIn**: https://www.linkedin.com/post-inspector/

**URLs para probar**:
- `https://matiasjaubet.com/es` (Home)
- `https://matiasjaubet.com/es/servicios` (Servicios)
- `https://matiasjaubet.com/es/proceso` (Proceso)
- `https://matiasjaubet.com/es/preguntas-frecuentes` (FAQ)

### **3. Verificar Banderas en Selector de Idiomas**

1. Abre el sitio: http://localhost:3000
2. Mira el navbar
3. Deberías ver: 🇬🇧 EN (si estás en español)
4. Haz clic para cambiar
5. Ahora deberías ver: 🇪🇸 ES (si estás en inglés)

---

## 📝 Sobre las Imágenes de Open Graph y Favicon

### **Favicon**

El favicon (`/public/favicon.png`) ya está creado y funcionando. No necesitas subirlo a Netlify porque:

- ✅ Está en la carpeta `/public`
- ✅ Next.js lo sirve automáticamente
- ✅ Cuando hagas deploy a Netlify, se subirá junto con todo el proyecto

### **Imagen de Open Graph**

La imagen de Open Graph (`/public/opengraph-image.png`) también está lista:

- ✅ Dimensiones: 1200x630px (estándar de redes sociales)
- ✅ Está en la carpeta `/public`
- ✅ Se subirá automáticamente con el deploy

**No necesitas hacer nada manualmente**. Cuando hagas `git push` y Netlify haga el deploy, todos los archivos de `/public` se subirán automáticamente.

---

## 🚀 Próximos Pasos

### **Antes del Deploy a Producción**

1. **Verifica la variable de entorno**:
   ```env
   NEXT_PUBLIC_SITE_URL=https://matiasjaubet.com
   ```
   - En desarrollo usa: `http://localhost:3000`
   - En producción (Netlify) configura: `https://tudominio.com`

2. **Configura la variable en Netlify**:
   - Ve a: Site settings → Environment variables
   - Agrega: `NEXT_PUBLIC_SITE_URL` = `https://tudominio.com`

3. **Haz el deploy**:
   ```bash
   git add .
   git commit -m "SEO por página y banderas en selector de idiomas"
   git push
   ```

4. **Prueba las URLs en producción**:
   - Usa las herramientas de Facebook/Twitter/LinkedIn
   - Verifica que las imágenes se carguen correctamente
   - Confirma que cada página tenga su metadata específica

---

## ✨ Beneficios de Estos Cambios

### **SEO por Página**
- ✅ Cada página tiene su propia identidad en redes sociales
- ✅ Mejor indexación en buscadores
- ✅ Canonical URLs evitan contenido duplicado
- ✅ Alternate languages ayudan a Google a entender las versiones de idiomas

### **Banderas en Selector de Idiomas**
- ✅ Mejor UX (más visual e intuitivo)
- ✅ Usuarios identifican rápidamente el idioma
- ✅ Diseño más profesional y moderno

---

## 📁 Archivos Modificados

```
✅ /app/[locale]/layout.tsx
✅ /app/[locale]/servicios/page.tsx
✅ /app/[locale]/proceso/page.tsx
✅ /app/[locale]/preguntas-frecuentes/page.tsx
✅ /components/language-switcher.tsx
```

---

**Fecha de Implementación**: Diciembre 2025  
**Desarrollado por**: Antigravity AI Assistant  
**Para**: Matías Jaubet Web & IA
