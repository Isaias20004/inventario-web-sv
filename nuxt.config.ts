// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Inventario Web San Vicente',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Controla tu inventario de forma fácil, rápida y sin errores. Aplicación web para gestión de inventarios en pequeños negocios.'
        },
        { property: 'og:title', content: 'Inventario Web San Vicente' },
        { property: 'og:description', content: 'Gestión de inventarios moderna para pequeños negocios en Colombia.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500&display=swap'
        }
      ]
    }
  }
})
