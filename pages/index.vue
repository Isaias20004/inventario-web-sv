<template>
  <div style="background:#07090F; min-height:100vh; color:#F8FAFF">

    <AppNavbar @open-modal="modalOpen = true" />

    <main>
      <HeroSection @open-modal="modalOpen = true" />
      <StatsBar />
      <ProblemaSection />
      <FeaturesSection />
      <AudienceSection />
      <StackSection />
      <TeamSection />
      <CtaSection @open-modal="modalOpen = true" />
    </main>

    <AppFooter />

    <ContactModal :is-open="modalOpen" @close="modalOpen = false" />

  </div>
</template>

<script setup lang="ts">
const modalOpen = ref(false)

onMounted(() => {
  const reveals = document.querySelectorAll('.reveal')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  reveals.forEach((el) => observer.observe(el))
})
</script>
