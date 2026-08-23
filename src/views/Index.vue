<!-- src/views/Index.vue -->
<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import HeroSection from "@/components/HeroSection.vue";
import About from "@/components/About.vue";
import ServicesSection from "@/components/ServicesSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <main>
    <NavBar />
    <HeroSection />
    <About />
    <ServicesSection />
    <ContactSection />
    <Footer />
  </main>
</template>
