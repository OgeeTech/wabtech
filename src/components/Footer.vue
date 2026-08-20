<!-- src/components/FooterSection.vue -->
<script setup lang="ts">
import { Github, Twitter, Linkedin, Mail, MapPin } from "lucide-vue-next";

const currentYear = new Date().getFullYear();

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Wabtech Academy", href: "#academy" },
  { name: "Contact", href: "#contact" },
];

const servicesLinks = [
  { name: "Software Engineering", href: "#services" },
  { name: "Mobile App Development", href: "#services" },
  { name: "AI Video Production", href: "#services" },
  { name: "Tech Mentorship", href: "#academy" },
];

const scrollToSection = (id: string) => {
  document
    .getElementById(id.replace("#", ""))
    ?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <footer class="bg-[#00007f] text-white pt-20 pb-10">
    <div class="container mx-auto px-6">
      <!-- Top Grid Section -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16"
      >
        <!-- Brand Column -->
        <div class="flex flex-col items-start pr-4">
          <a
            href="#home"
            @click.prevent="scrollToSection('#home')"
            class="flex items-center gap-2 group mb-6"
          >
            <span class="text-2xl font-extrabold tracking-tight text-white"
              >Wabtech</span
            >
          </a>
          <p class="text-white/70 leading-relaxed text-sm mb-8">
            Driving digital transformation from concept to code. We engineer
            high-performance software and shape the next generation of tech
            talent.
          </p>

          <!-- Social Icons -->
          <div class="flex items-center gap-4">
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/90 hover:bg-white hover:text-[#00007f] transition-colors duration-300"
            >
              <Twitter class="w-4 h-4" />
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/90 hover:bg-white hover:text-[#00007f] transition-colors duration-300"
            >
              <Github class="w-4 h-4" />
            </a>
            <a
              href="#"
              class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/90 hover:bg-white hover:text-[#00007f] transition-colors duration-300"
            >
              <Linkedin class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Quick Links Column -->
        <div>
          <h4 class="text-lg font-bold mb-6 tracking-wide">Quick Links</h4>
          <ul class="space-y-4">
            <li v-for="link in quickLinks" :key="link.name">
              <a
                :href="link.href"
                @click.prevent="scrollToSection(link.href)"
                class="text-white/70 hover:text-white text-sm font-medium transition-colors duration-300 flex items-center gap-2"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-white/30"></span>
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Services Column -->
        <div>
          <h4 class="text-lg font-bold mb-6 tracking-wide">Our Services</h4>
          <ul class="space-y-4">
            <li v-for="link in servicesLinks" :key="link.name">
              <a
                :href="link.href"
                @click.prevent="scrollToSection(link.href)"
                class="text-white/70 hover:text-white text-sm font-medium transition-colors duration-300 flex items-center gap-2"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-white/30"></span>
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Column -->
        <div>
          <h4 class="text-lg font-bold mb-6 tracking-wide">Contact Info</h4>
          <ul class="space-y-6">
            <li class="flex items-start gap-4">
              <MapPin class="w-5 h-5 text-white/50 shrink-0 mt-0.5" />
              <span class="text-white/70 text-sm leading-relaxed">
                Abuja, Nigeria
              </span>
            </li>
            <li class="flex items-start gap-4">
              <Mail class="w-5 h-5 text-white/50 shrink-0 mt-0.5" />
              <a
                href="mailto:wgift41@gmail.com"
                class="text-white/70 hover:text-white text-sm transition-colors"
              >
                wabtechacademy@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
      >
        <p class="text-white/50 text-sm">
          &copy; {{ currentYear }} Wabtech. All rights reserved.
        </p>
        <div class="flex items-center gap-6">
          <a
            href="#"
            class="text-white/50 hover:text-white text-sm transition-colors"
            >Privacy Policy</a
          >
          <a
            href="#"
            class="text-white/50 hover:text-white text-sm transition-colors"
            >Terms of Service</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>
