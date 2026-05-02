<template>
  <section class="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-20 overflow-hidden text-center">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0" style="background: radial-gradient(ellipse 70% 55% at 50% -10%, rgba(99,102,241,0.18) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 15% 60%, rgba(59,130,246,0.10) 0%, transparent 60%), radial-gradient(ellipse 40% 35% at 85% 70%, rgba(139,92,246,0.10) 0%, transparent 60%)" />
      <div class="absolute inset-0 grid-bg" />
    </div>

    <div class="relative z-10 max-w-3xl mx-auto">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold font-display mb-6 animate-fade-up"
           style="background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.3); color: #93C5FD">
        <span class="w-2 h-2 rounded-full animate-pulse" style="background:#60A5FA" />
        Proyecto Académico · Ingeniería de Software
      </div>

      <h1 class="text-5xl md:text-7xl font-extrabold font-display tracking-tight leading-tight mb-5 animate-fade-up" style="color:#F8FAFF">
        Inventario Web<br>
        <span class="gradient-text">San Vicente</span>
      </h1>

      <p class="text-slate-400 text-lg md:text-xl max-w-lg mx-auto mb-10 animate-fade-up-delay">
        Controla tu inventario de forma fácil, rápida y sin errores.
      </p>

      <div class="flex flex-wrap gap-4 justify-center animate-fade-up-delay2">
        <button class="btn-primary" @click="$emit('open-modal')">Solicitar Demo →</button>
        <button class="btn-secondary" @click="scrollTo('#features')">Ver cómo funciona</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits(['open-modal'])
const scrollTo = (selector: string) => {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}
</script>
