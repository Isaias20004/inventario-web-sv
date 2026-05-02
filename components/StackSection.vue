<template>
  <section id="stack" class="py-24 px-6 max-w-5xl mx-auto reveal">
    <div class="section-badge">Tecnología</div>
    <h2 class="section-title">Stack<br><span class="gradient-text">Tecnológico</span></h2>
    <p class="section-sub mb-12">Tecnologías utilizadas para construir y desplegar esta landing page.</p>

    <div class="flex flex-wrap gap-3">
      <div
        v-for="tech in stack"
        :key="tech.name"
        class="flex items-center gap-3 border rounded-xl px-5 py-4 transition-all duration-300 cursor-default hover:-translate-y-0.5"
        style="background:#0D1221; border-color: rgba(59,130,246,0.12)"
        @mouseover="$event.currentTarget.style.borderColor='rgba(59,130,246,0.4)'"
        @mouseleave="$event.currentTarget.style.borderColor='rgba(59,130,246,0.12)'"
      >
        <div class="w-2.5 h-2.5 rounded-full flex-shrink-0" :style="{ background: tech.color }" />
        <div>
          <div class="font-display font-bold text-sm">{{ tech.name }}</div>
          <div class="text-slate-400 text-xs mt-0.5">{{ tech.role }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stack = [
  { name: 'Nuxt.js', role: 'Framework frontend · Vue 3', color: '#00DC82' },
  { name: 'Tailwind CSS', role: 'Estilos · Diseño responsivo', color: '#38BDF8' },
  { name: 'Vue 3', role: 'Framework reactivo de componentes', color: '#42B883' },
  { name: 'Node.js', role: 'Entorno de ejecución · npm', color: '#8CC84B' },
  { name: 'Git & GitHub', role: 'Control de versiones', color: '#F05033' },
  { name: 'Vercel', role: 'Deploy · Hosting en la nube', color: '#FFFFFF' },
]
</script>
