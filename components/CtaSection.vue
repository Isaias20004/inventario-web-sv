<template>
  <section id="cta" class="text-center py-32 px-6 relative overflow-hidden reveal">
    <div class="absolute inset-0 pointer-events-none"
         style="background: radial-gradient(ellipse 60% 70% at 50% 50%, rgba(59,130,246,0.08), transparent 70%)" />

    <div class="relative z-10 max-w-xl mx-auto">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold font-display mb-6"
           style="background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.3); color: #93C5FD">
        🚀 ¡Digitaliza tu negocio hoy!
      </div>

      <h2 class="section-title" style="font-size:clamp(2rem,4vw,3rem)">
        Deja atrás los cuadernos,<br>
        <span class="gradient-text">empieza hoy.</span>
      </h2>

      <p class="text-slate-400 text-lg mb-10">
        Contáctanos para probar el sistema o solicita acceso al prototipo. Es gratis y sin compromiso.
      </p>

      <div class="flex flex-wrap gap-4 justify-center">
        <button class="btn-primary" @click="$emit('open-modal')">Contáctanos para probar →</button>
        <button class="btn-secondary" @click="$emit('open-modal')">Solicitar acceso al prototipo</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits(['open-modal'])
</script>
