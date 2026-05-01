<template>
  <div class="bg-navy min-h-screen text-slate-100">

    <AppNavbar />

    <main>
      <HeroSection />
      <StatsBar />
      <ProblemaSection />
      <FeaturesSection />
      <AudienceSection />
      <StackSection />
      <TeamSection />
      <CtaSection />
    </main>

    <AppFooter />

  </div>
</template>

<script setup lang="ts">
// Reveal on scroll animation
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
