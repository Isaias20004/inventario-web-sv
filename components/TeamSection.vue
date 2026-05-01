<template>
  <section id="equipo" class="py-20 px-6 max-w-5xl mx-auto reveal">

    <div class="section-badge">Equipo</div>
    <h2 class="section-title">
      Quiénes somos<br>
      <span class="gradient-text">detrás del proyecto</span>
    </h2>
    <p class="section-sub mb-12">
      Estudiantes de Ingeniería de Software comprometidos con soluciones reales para negocios reales.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div
        v-for="member in team"
        :key="member.name"
        class="card-base text-center group hover:-translate-y-1 hover:border-emerald-sv/20"
      >
        <div
          class="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-display font-extrabold text-lg text-navy-DEFAULT"
          :style="{ background: `linear-gradient(135deg, ${member.color[0]}, ${member.color[1]})` }"
        >
          {{ member.initials }}
        </div>
        <h4 class="font-display font-bold text-sm mb-0.5">{{ member.name }}</h4>
        <span class="text-emerald-sv text-xs font-medium">{{ member.role }}</span>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
const team = [
  {
    initials: 'IS',
    name: 'Isaias Simancas Diaz',
    role: 'Desarrollador Backend',
    color: ['#00D68F', '#00B87A'],
  },
  {
    initials: 'BS',
    name: 'Breiner Soler Torres',
    role: 'Desarrollador Frontend',
    color: ['#3B82F6', '#60A5FA'],
  },
  {
    initials: 'DR',
    name: 'Dairon Rueda',
    role: 'Analista de Requisitos',
    color: ['#8B5CF6', '#A78BFA'],
  },
]
</script>
