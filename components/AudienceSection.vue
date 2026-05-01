<template>
  <section id="publico" class="bg-card-2 border-y border-white/7 py-24 px-6 reveal">
    <div class="max-w-5xl mx-auto">

      <div class="section-badge">Público Objetivo</div>
      <h2 class="section-title">
        ¿A quién va<br>
        <span class="gradient-text">dirigido?</span>
      </h2>
      <p class="section-sub mb-12">
        Este sistema está pensado para quienes aún manejan su inventario a mano y quieren dar el salto digital.
      </p>

      <div class="flex flex-wrap gap-4">
        <div
          v-for="aud in audience"
          :key="aud.label"
          class="flex-1 min-w-[160px] bg-white/[0.03] border border-white/7 rounded-2xl p-6 text-center transition-all duration-300 cursor-default hover:border-emerald-sv/30 hover:bg-emerald-sv/5 hover:-translate-y-1"
        >
          <div class="text-4xl mb-3">{{ aud.emoji }}</div>
          <h4 class="font-display font-bold text-sm mb-1">{{ aud.label }}</h4>
          <p class="text-slate-400 text-xs">{{ aud.desc }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const audience = [
  { emoji: '🔧', label: 'Cacharrerías', desc: 'Como San Vicente en Aguachica, Colombia' },
  { emoji: '📎', label: 'Papelerías', desc: 'Gestión de artículos y útiles escolares' },
  { emoji: '🏪', label: 'Tiendas locales', desc: 'Pequeños comercios en crecimiento' },
  { emoji: '👤', label: 'Propietarios', desc: 'Que manejan inventarios manuales' },
  { emoji: '💼', label: 'Comerciantes', desc: 'Que buscan optimizar su negocio' },
]
</script>
