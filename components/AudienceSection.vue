<template>
  <section id="publico" class="border-y py-24 px-6 reveal"
           style="background: linear-gradient(180deg,#07090F 0%,#101525 50%,#07090F 100%); border-color: rgba(59,130,246,0.12)">
    <div class="max-w-5xl mx-auto">
      <div class="section-badge">Público Objetivo</div>
      <h2 class="section-title">¿A quién va<br><span class="gradient-text">dirigido?</span></h2>
      <p class="section-sub mb-12">Este sistema está dirigido a pequeños negocios que quieren dejar atrás el control manual.</p>

      <div class="flex flex-wrap gap-4">
        <div
          v-for="aud in audience"
          :key="aud.label"
          class="flex-1 min-w-[150px] border rounded-2xl p-6 text-center transition-all duration-300 cursor-default hover:-translate-y-1"
          style="background:#0D1221; border-color: rgba(59,130,246,0.12)"
          @mouseover="$event.currentTarget.style.borderColor='rgba(99,102,241,0.4)'"
          @mouseleave="$event.currentTarget.style.borderColor='rgba(59,130,246,0.12)'"
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
  { emoji: '🔧', label: 'Cacharrerías', desc: 'Como San Vicente en Aguachica' },
  { emoji: '📎', label: 'Papelerías', desc: 'Control de artículos escolares' },
  { emoji: '🏪', label: 'Tiendas locales', desc: 'Pequeños comercios' },
  { emoji: '👤', label: 'Propietarios', desc: 'Con inventarios manuales' },
  { emoji: '💼', label: 'Comerciantes', desc: 'Que buscan optimizar' },
]
</script>
