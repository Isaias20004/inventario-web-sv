<template>
  <div class="bg-card-DEFAULT border-y border-white/7 py-6 px-6">
    <div class="max-w-5xl mx-auto flex flex-wrap justify-center gap-10">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="text-center"
      >
        <div class="text-emerald-sv font-display font-extrabold text-3xl">{{ stat.value }}</div>
        <div class="text-slate-400 text-xs mt-1">{{ stat.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { value: '100%', label: 'Errores eliminados' },
  { value: 'Tiempo real', label: 'Control de stock' },
  { value: '+4', label: 'Módulos integrados' },
  { value: 'Web', label: 'Acceso desde cualquier lugar' },
]
</script>
