<template>
  <nav
    class="fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-all duration-300"
    :class="scrolled ? 'backdrop-blur-xl border-b shadow-xl' : 'bg-transparent'"
    style="border-color: rgba(59,130,246,0.12)"
    :style="scrolled ? 'background: rgba(7,9,15,0.92)' : ''"
  >
    <div class="font-display font-extrabold text-lg tracking-tight gradient-text">
      ◈ Inventario Web SV
    </div>

    <ul class="hidden md:flex items-center gap-8 list-none">
      <li v-for="link in navLinks" :key="link.href">
        <a :href="link.href" class="text-slate-400 text-sm transition-colors duration-200" style="text-decoration:none"
           @mouseover="$event.target.style.color='#60A5FA'"
           @mouseleave="$event.target.style.color='#94A3B8'">
          {{ link.label }}
        </a>
      </li>
    </ul>

    <button class="btn-primary text-sm py-2 px-5" @click="$emit('open-modal')">
      Solicitar Demo
    </button>
  </nav>
</template>

<script setup lang="ts">
defineEmits(['open-modal'])
const scrolled = ref(false)
const navLinks = [
  { href: '#problema', label: 'El Problema' },
  { href: '#features', label: 'Características' },
  { href: '#stack', label: 'Stack' },
  { href: '#equipo', label: 'Equipo' },
]
onMounted(() => {
  window.addEventListener('scroll', () => { scrolled.value = window.scrollY > 20 })
})
</script>
