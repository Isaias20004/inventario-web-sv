# Inventario Web San Vicente 🏪

Landing page profesional para el sistema de gestión de inventarios **Inventario Web San Vicente**.

**Stack**: Nuxt 3 + Tailwind CSS + Vercel

---

## 🚀 Cómo ejecutarlo localmente

### Requisitos
- Node.js 18 o superior
- npm o pnpm

### Pasos

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar servidor de desarrollo
npm run dev
```

Abre tu navegador en `http://localhost:3000`

---

## 🏗️ Build de producción

```bash
npm run generate
```

Genera la carpeta `.output/public/` con el sitio estático listo.

---

## ▲ Deploy en Vercel — Paso a Paso

### Opción 1: Desde GitHub (recomendado)

1. Sube el proyecto a un repositorio en GitHub
2. Ve a [vercel.com](https://vercel.com) e inicia sesión
3. Haz clic en **"Add New Project"**
4. Selecciona tu repositorio de GitHub
5. Vercel detectará automáticamente que es Nuxt.js
6. Deja los valores por defecto y haz clic en **"Deploy"**
7. ¡Listo! Vercel te dará una URL pública en segundos

### Opción 2: Con Vercel CLI

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Dentro de la carpeta del proyecto:
vercel

# Para producción:
vercel --prod
```

---

## 📁 Estructura del proyecto

```
inventario-web-sv/
├── components/
│   ├── AppNavbar.vue       # Barra de navegación fija
│   ├── HeroSection.vue     # Sección principal con CTA
│   ├── StatsBar.vue        # Barra de estadísticas
│   ├── ProblemaSection.vue # Problema que resuelve
│   ├── FeaturesSection.vue # Características principales
│   ├── AudienceSection.vue # Público objetivo
│   ├── StackSection.vue    # Stack tecnológico
│   ├── TeamSection.vue     # Equipo de trabajo
│   ├── CtaSection.vue      # Llamada a la acción final
│   └── AppFooter.vue       # Pie de página
├── pages/
│   └── index.vue           # Página principal
├── assets/css/
│   └── main.css            # Estilos globales + Tailwind
├── nuxt.config.ts          # Configuración de Nuxt
├── tailwind.config.js      # Configuración de Tailwind
├── vercel.json             # Configuración de deploy
└── package.json
```

---

## ✏️ Personalización

- **Equipo**: Edita `components/TeamSection.vue` y reemplaza los placeholders con los nombres reales
- **Colores**: Los tokens están en `assets/css/main.css` y `tailwind.config.js`
- **Contenido**: Cada sección es un componente independiente, fácil de modificar

---

*Proyecto académico — Ingeniería de Software — Aguachica, Colombia*
