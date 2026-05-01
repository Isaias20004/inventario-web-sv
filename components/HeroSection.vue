<template>
  <section class="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-20 overflow-hidden text-center">

    <!-- Background Effects -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0" style="background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,214,143,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(59,130,246,0.10) 0%, transparent 60%)" />
      <div class="absolute inset-0 grid-bg" />
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-3xl mx-auto">

      <!-- Badge -->
      <div class="inline-flex items-center gap-2 bg-emerald-sv/10 border border-emerald-sv/25 text-emerald-sv px-4 py-1.5 rounded-full text-xs font-bold font-display mb-6 animate-fade-up">
        <span class="w-2 h-2 rounded-full bg-emerald-sv animate-pulse" />
        Proyecto Académico · Ingeniería de Software
      </div>

      <!-- Heading -->
      <h1 class="text-5xl md:text-7xl font-extrabold font-display tracking-tight leading-tight mb-5 animate-fade-up">
        Inventario Web<br>
        <span class="gradient-text">San Vicente</span>
      </h1>

      <!-- Tagline -->
      <p class="text-slate-400 text-lg md:text-xl max-w-lg mx-auto mb-10 animate-fade-up-delay">
        Controla tu inventario de forma fácil, rápida y sin errores.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-wrap gap-4 justify-center animate-fade-up-delay2">
        <button class="btn-primary" @click="scrollTo('#cta')">
          Solicitar Demo →
        </button>
        <button class="btn-secondary" @click="scrollTo('#features')">
          Ver cómo funciona
        </button>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
const scrollTo = (selector: string) => {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}
</script>
