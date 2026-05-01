<template>
  <section id="problema" class="py-24 px-6 max-w-5xl mx-auto reveal">

    <div class="section-badge">El Problema</div>
    <h2 class="section-title">
      ¿Por qué necesitas<br>
      <span class="gradient-text">digitalizar tu inventario?</span>
    </h2>
    <p class="section-sub mb-4">
      Actualmente, la cacharrería San Vicente lleva el control de su inventario de manera manual en cuadernos,
      lo que genera pérdida de información, errores en precios y cantidades, y dificultad para saber qué productos están disponibles.
    </p>
    <p class="text-slate-400 text-base mb-12">
      Además, esta situación provoca <span class="text-red-400 font-semibold">pérdida de ventas</span> y desorganización en el negocio, afectando la toma de decisiones.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div
        v-for="item in problems"
        :key="item.title"
        class="card-base flex items-start gap-4 group hover:-translate-y-1 hover:border-red-500/30"
      >
        <div class="w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
          <component :is="item.icon" class="w-5 h-5 text-red-400" />
        </div>
        <div>
          <h4 class="font-display font-bold text-sm mb-1">{{ item.title }}</h4>
          <p class="text-slate-400 text-sm leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'

const IconWarning = defineComponent({
  render: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5' }, [
    h('path', { d: 'M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z' }),
    h('line', { x1: '12', y1: '9', x2: '12', y2: '13' }),
    h('line', { x1: '12', y1: '17', x2: '12.01', y2: '17' }),
  ])
})

const IconClock = defineComponent({
  render: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5' }, [
    h('circle', { cx: '12', cy: '12', r: '10' }),
    h('polyline', { points: '12 6 12 12 16 14' }),
  ])
})

const IconDoc = defineComponent({
  render: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5' }, [
    h('path', { d: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z' }),
    h('polyline', { points: '14 2 14 8 20 8' }),
    h('line', { x1: '9', y1: '13', x2: '15', y2: '13' }),
  ])
})

const IconTrend = defineComponent({
  render: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5' }, [
    h('polyline', { points: '23 6 13.5 15.5 8.5 10.5 1 18' }),
    h('polyline', { points: '17 6 23 6 23 12' }),
  ])
})

const problems = [
  {
    title: 'Pérdida de información',
    desc: 'Los registros en cuadernos se pierden o deterioran, causando inconsistencias en el inventario.',
    icon: IconWarning,
  },
  {
    title: 'Errores en precios y cantidades',
    desc: 'La escritura manual genera equivocaciones que afectan directamente las ventas del negocio.',
    icon: IconDoc,
  },
  {
    title: 'Stock desconocido',
    desc: 'Es difícil saber qué productos están disponibles sin revisar páginas enteras de anotaciones.',
    icon: IconClock,
  },
  {
    title: 'Pérdida de ventas',
    desc: 'La desorganización lleva a vender productos agotados o no ofrecer lo que sí hay en existencia.',
    icon: IconTrend,
  },
]
</script>
