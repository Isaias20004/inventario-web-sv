<template>
  <div class="border-y py-6 px-6" style="background:#0D1221; border-color: rgba(59,130,246,0.12)">
    <div class="max-w-5xl mx-auto flex flex-wrap justify-center gap-10">
      <div v-for="stat in stats" :key="stat.label" class="text-center">
        <div class="font-display font-extrabold text-3xl gradient-text">{{ stat.value }}</div>
        <div class="text-slate-400 text-xs mt-1">{{ stat.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const stats = [
  { value: '100%', label: 'Errores eliminados' },
  { value: 'Real time', label: 'Control de stock' },
  { value: '+4', label: 'Módulos integrados' },
  { value: 'Web', label: 'Acceso desde cualquier lugar' },
]
</script>
