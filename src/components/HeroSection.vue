<!-- src/components/HeroSection.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { GraduationCap, Code2, ArrowRight } from "lucide-vue-next";
import { Vue3Lottie } from "vue3-lottie";
import heroAnimate from "@/animation/Desarrollo-web.json";

const dynamicTexts = [
  "Software Solutions",
  "AI Video Content",
  "Mobile Apps",
  "Tech Careers",
];

const currentIndex = ref(0);
let intervalId: ReturnType<typeof setInterval>;

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % dynamicTexts.length;
  }, 3000); // Changes every 3 seconds
});

onUnmounted(() => {
  clearInterval(intervalId);
});

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <section
    id="home"
    class="min-h-screen flex items-center justify-center relative overflow-hidden bg-white text-slate-900 selection:bg-[#00007f] selection:text-white"
  >
    <div
      class="container mx-auto px-6 pt-24 text-center relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12"
    >
      <!-- Text Content -->
      <div class="max-w-2xl text-left flex flex-col items-start w-full">
        <!-- Startup Pill Badge -->
        <div
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-sm font-medium text-slate-600 mb-6 shadow-sm animate-fade-in"
        >
          <span
            class="flex h-2 w-2 rounded-full bg-[#00007f] animate-pulse"
          ></span>
          Welcome to Wabtech
        </div>

        <!-- SCALED DOWN HEADING: Now text-3xl md:text-4xl -->
        <h1
          class="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 animate-slide-up text-slate-900 leading-tight"
        >
          We Build Superior
          <!-- The auto-changing text wrapper with mode="out-in" to prevent overlap -->
          <div class="block text-[#00007f] h-[1.2em] mt-2">
            <Transition name="slide-up" mode="out-in">
              <span :key="currentIndex" class="inline-block">
                {{ dynamicTexts[currentIndex] }}
              </span>
            </Transition>
          </div>
        </h1>

        <!-- SCALED DOWN PARAGRAPH: Now text-base -->
        <p
          class="text-base text-slate-600 mb-10 mt-4 max-w-lg leading-relaxed animate-fade-in"
          style="animation-delay: 0.3s"
        >
          Your digital powerhouse. From engineering high-performance software
          and mobile applications, to crafting AI-driven videos. Looking to
          learn? Join <strong>Wabtech Academy</strong> to master the skills of
          tomorrow.
        </p>

        <!-- Buttons -->
        <div
          class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-scale-in"
          style="animation-delay: 0.6s"
        >
          <!-- Primary Solid Blue Button -->
          <button
            type="button"
            @click="scrollToSection('services')"
            class="group inline-flex items-center justify-center gap-2 h-12 px-6 text-base font-semibold rounded-xl text-white bg-[#00007f] hover:bg-[#000066] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <Code2 class="w-5 h-5" />
            Our Services
            <ArrowRight
              class="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
            />
          </button>

          <!-- Academy Outline Button -->
          <button
            type="button"
            @click="scrollToSection('academy')"
            class="inline-flex items-center justify-center gap-2 h-12 px-6 text-base font-semibold rounded-xl border-2 border-[#00007f] text-[#00007f] hover:bg-[#00007f] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <GraduationCap class="w-5 h-5" />
            Wabtech Academy
          </button>
        </div>
      </div>

      <!-- Hero Animation -->
      <div
        class="hidden lg:block w-full lg:w-1/2 relative animate-fade-in"
        style="animation-delay: 0.4s"
      >
        <Vue3Lottie
          :animation-data="heroAnimate"
          :loop="true"
          :autoplay="true"
          class="w-full h-auto mx-auto relative z-10"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Snappier, cleaner transition */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-out;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(15px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>
