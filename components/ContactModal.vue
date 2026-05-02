<template>
  <!-- Overlay -->
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[200] flex items-center justify-center px-4"
      style="background: rgba(0,0,0,0.75); backdrop-filter: blur(8px)"
      @click.self="close"
    >
      <!-- Modal -->
      <div
        class="w-full max-w-md rounded-2xl p-8 relative"
        style="background: #0D1221; border: 1px solid rgba(59,130,246,0.25)"
      >
        <!-- Close -->
        <button
          class="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
          @click="close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <!-- Header -->
        <div class="mb-6">
          <div class="section-badge mb-3">Solicitar Demo</div>
          <h3 class="font-display font-extrabold text-xl text-white mb-1">¡Hablemos! 👋</h3>
          <p class="text-slate-400 text-sm">Completa el formulario y te contactamos a la brevedad.</p>
        </div>

        <!-- Success -->
        <div v-if="submitted" class="text-center py-8">
          <div class="text-5xl mb-4">✅</div>
          <h4 class="font-display font-bold text-lg text-white mb-2">¡Mensaje enviado!</h4>
          <p class="text-slate-400 text-sm">Nos pondremos en contacto contigo pronto.</p>
          <button class="btn-primary mt-6 text-sm py-2 px-6" @click="close">Cerrar</button>
        </div>

        <!-- Form -->
        <form v-else @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="text-xs font-semibold text-slate-400 block mb-1.5">Nombre completo</label>
            <input
              v-model="form.name"
              type="text"
              required
              placeholder="Tu nombre"
              class="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-500 outline-none transition-all"
              style="background:#111827; border: 1px solid rgba(59,130,246,0.2)"
              @focus="$event.target.style.borderColor='rgba(99,102,241,0.6)'"
              @blur="$event.target.style.borderColor='rgba(59,130,246,0.2)'"
            />
          </div>

          <div>
            <label class="text-xs font-semibold text-slate-400 block mb-1.5">Correo electrónico</label>
            <input
              v-model="form.email"
              type="email"
              required
              placeholder="tucorreo@gmail.com"
              class="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-500 outline-none transition-all"
              style="background:#111827; border: 1px solid rgba(59,130,246,0.2)"
              @focus="$event.target.style.borderColor='rgba(99,102,241,0.6)'"
              @blur="$event.target.style.borderColor='rgba(59,130,246,0.2)'"
            />
          </div>

          <div>
            <label class="text-xs font-semibold text-slate-400 block mb-1.5">Nombre del negocio</label>
            <input
              v-model="form.business"
              type="text"
              placeholder="Nombre de tu negocio (opcional)"
              class="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-500 outline-none transition-all"
              style="background:#111827; border: 1px solid rgba(59,130,246,0.2)"
              @focus="$event.target.style.borderColor='rgba(99,102,241,0.6)'"
              @blur="$event.target.style.borderColor='rgba(59,130,246,0.2)'"
            />
          </div>

          <div>
            <label class="text-xs font-semibold text-slate-400 block mb-1.5">Mensaje</label>
            <textarea
              v-model="form.message"
              required
              rows="3"
              placeholder="Cuéntanos sobre tu negocio..."
              class="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-500 outline-none transition-all resize-none"
              style="background:#111827; border: 1px solid rgba(59,130,246,0.2)"
              @focus="$event.target.style.borderColor='rgba(99,102,241,0.6)'"
              @blur="$event.target.style.borderColor='rgba(59,130,246,0.2)'"
            />
          </div>

          <button
            type="submit"
            class="btn-primary w-full text-sm py-3"
            :disabled="loading"
          >
            {{ loading ? 'Enviando...' : 'Enviar solicitud →' }}
          </button>

          <p v-if="error" class="text-red-400 text-xs text-center">{{ error }}</p>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['close'])

const submitted = ref(false)
const loading = ref(false)
const error = ref('')

const form = reactive({
  name: '',
  email: '',
  business: '',
  message: '',
})

const close = () => {
  emit('close')
  setTimeout(() => {
    submitted.value = false
    error.value = ''
    Object.assign(form, { name: '', email: '', business: '', message: '' })
  }, 300)
}

const handleSubmit = async () => {
  loading.value = true
  error.value = ''
  try {
    const res = await fetch('https://formspree.io/f/xrbqokpw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        nombre: form.name,
        email: form.email,
        negocio: form.business,
        mensaje: form.message,
      }),
    })
    if (res.ok) {
      submitted.value = true
    } else {
      error.value = 'Hubo un error. Intenta de nuevo.'
    }
  } catch {
    error.value = 'Sin conexión. Intenta de nuevo.'
  } finally {
    loading.value = false
  }
}
</script>
