<template>
  <section id="features" class="py-20 px-6 max-w-5xl mx-auto reveal">
    <div class="section-badge">Características</div>
    <h2 class="section-title">Todo lo que necesita<br><span class="gradient-text">tu negocio</span></h2>
    <p class="section-sub mb-12">Módulos diseñados para simplificar la gestión diaria de tu inventario.</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div
        v-for="(feature, i) in features"
        :key="feature.title"
        class="card-base group relative overflow-hidden hover:-translate-y-1"
        style="transition: all .3s"
        @mouseover="hovered = i" @mouseleave="hovered = null"
      >
        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
             style="background: linear-gradient(135deg, rgba(59,130,246,0.06), rgba(99,102,241,0.04))" />
        <div class="font-display font-extrabold text-3xl mb-2 gradient-text opacity-30">0{{ i + 1 }}</div>
        <div class="feat-icon">
          <component :is="feature.icon" class="w-6 h-6" style="color: #60A5FA" />
        </div>
        <h3 class="font-display font-bold text-base mb-2">{{ feature.title }}</h3>
        <p class="text-slate-400 text-sm leading-relaxed">{{ feature.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h, ref } from 'vue'

const hovered = ref(null)

const icon = (paths) => defineComponent({
  render: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2.2' },
    paths.map(p => h(p.tag, p.attrs))
  )
})

const features = [
  {
    title: 'Gestión de inventario en tiempo real',
    desc: 'Registra, actualiza y consulta productos de manera rápida y organizada. Siempre sabrás qué tienes en stock.',
    icon: icon([
      { tag: 'rect', attrs: { x: '2', y: '3', width: '20', height: '14', rx: '2' } },
      { tag: 'line', attrs: { x1: '8', y1: '21', x2: '16', y2: '21' } },
      { tag: 'line', attrs: { x1: '12', y1: '17', x2: '12', y2: '21' } },
    ]),
  },
  {
    title: 'Control de ventas automático',
    desc: 'Cada venta se registra automáticamente y actualiza el inventario. Sin doble trabajo, sin errores humanos.',
    icon: icon([
      { tag: 'circle', attrs: { cx: '9', cy: '21', r: '1' } },
      { tag: 'circle', attrs: { cx: '20', cy: '21', r: '1' } },
      { tag: 'path', attrs: { d: 'M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.98-1.61L23 6H6' } },
    ]),
  },
  {
    title: 'Alertas de productos agotados',
    desc: 'El sistema notifica cuando un producto está próximo a agotarse para que puedas reabastecerte a tiempo.',
    icon: icon([
      { tag: 'path', attrs: { d: 'M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9' } },
      { tag: 'path', attrs: { d: 'M13.73 21a2 2 0 01-3.46 0' } },
    ]),
  },
  {
    title: 'Reportes de ventas',
    desc: 'Visualiza ingresos diarios, semanales y mensuales para tomar mejores decisiones en tu negocio.',
    icon: icon([
      { tag: 'line', attrs: { x1: '18', y1: '20', x2: '18', y2: '10' } },
      { tag: 'line', attrs: { x1: '12', y1: '20', x2: '12', y2: '4' } },
      { tag: 'line', attrs: { x1: '6', y1: '20', x2: '6', y2: '14' } },
      { tag: 'line', attrs: { x1: '2', y1: '20', x2: '22', y2: '20' } },
    ]),
  },
]
</script>
