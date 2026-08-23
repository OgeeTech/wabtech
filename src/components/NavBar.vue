<!-- src/components/NavBar.vue -->
<script setup lang="ts">
import { ref } from "vue";
import { Menu, X } from "lucide-vue-next";
import { useRouter, useRoute } from "vue-router";

const isMobileMenuOpen = ref(false);
const router = useRouter();
const route = useRoute();

// Updated links to include the absolute path "/" for home page sections
const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Academy", href: "/academy" },
];

const handleNavigation = (href: string) => {
  isMobileMenuOpen.value = false;

  // 1. If it's a standard page route (like /academy), just push there
  if (!href.includes("#")) {
    router.push(href);
    return;
  }

  // 2. If it's a hash link, extract the ID
  const targetId = href.split("#")[1];

  if (route.path === "/") {
    // We are already on the Home page, just smooth scroll
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  } else {
    // We are on a different page (like Academy), so route to Home and append the hash
    router.push({ path: "/", hash: `#${targetId}` });
  }
};
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300"
  >
    <div class="container mx-auto px-6 h-20 flex items-center justify-between">
      <!-- Brand Logo -->
      <a
        href="/#home"
        @click.prevent="handleNavigation('/#home')"
        class="flex items-center gap-2 group"
      >
        <span class="text-xl font-extrabold text-slate-900 tracking-tight"
          >Wabtech</span
        >
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          @click.prevent="handleNavigation(link.href)"
          class="text-sm font-semibold text-slate-600 hover:text-[#00007f] transition-colors"
        >
          {{ link.name }}
        </a>
      </nav>

      <!-- Desktop Contact Button -->
      <div class="hidden md:flex items-center">
        <button
          type="button"
          @click="handleNavigation('/#contact')"
          class="h-10 px-6 text-sm font-semibold rounded-lg text-white bg-[#00007f] hover:bg-[#000066] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
        >
          Contact Us
        </button>
      </div>

      <!-- Mobile Menu Toggle Button -->
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden p-2 text-slate-600 hover:text-[#00007f] transition-colors focus:outline-none"
      >
        <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Navigation Dropdown -->
    <Transition name="slide-down">
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-white border-b border-slate-100 shadow-lg absolute top-20 left-0 w-full"
      >
        <nav class="flex flex-col px-6 py-4 space-y-4">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            @click.prevent="handleNavigation(link.href)"
            class="text-base font-semibold text-slate-600 hover:text-[#00007f] transition-colors block py-2 border-b border-slate-50 last:border-0"
          >
            {{ link.name }}
          </a>
          <button
            type="button"
            @click="handleNavigation('/#contact')"
            class="w-full mt-4 h-12 text-base font-semibold rounded-xl text-white bg-[#00007f] hover:bg-[#000066] transition-colors"
          >
            Contact Us
          </button>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease-out;
  transform-origin: top;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: scaleY(0.95) translateY(-10px);
}
</style>
