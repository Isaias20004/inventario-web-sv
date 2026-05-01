<template>
  <nav
    class="fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between"
    :class="[scrolled ? 'bg-navy-DEFAULT/90 backdrop-blur-xl border-b border-white/7 shadow-lg' : 'bg-transparent']"
  >
    <!-- Logo -->
    <div class="gradient-text font-display font-extrabold text-lg tracking-tight">
      ⬡ Inventario Web SV
    </div>

    <!-- Desktop Nav Links -->
    <ul class="hidden md:flex items-center gap-8 list-none">
      <li v-for="link in navLinks" :key="link.href">
        <a
          :href="link.href"
          class="text-slate-400 text-sm hover:text-emerald-sv transition-colors duration-200"
        >
          {{ link.label }}
        </a>
      </li>
    </ul>

    <!-- CTA Button -->
    <button
      class="btn-primary text-sm py-2 px-5"
      @click="scrollTo('#cta')"
    >
      Solicitar Demo
    </button>
  </nav>
</template>

<script setup lang="ts">
const scrolled = ref(false)

const navLinks = [
  { href: '#problema', label: 'El Problema' },
  { href: '#features', label: 'Características' },
  { href: '#stack', label: 'Stack' },
  { href: '#equipo', label: 'Equipo' },
]

const scrollTo = (selector: string) => {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
  })
})
</script>
