<script setup lang="ts">
import {
  AppWindow,
  Smartphone,
  Sparkles,
  GraduationCap,
} from "lucide-vue-next";

const services = [
  {
    title: "Software Engineering",
    description:
      "Architecting scalable, multi-tenant web applications and SaaS platforms using modern tech stacks.",
    icon: AppWindow,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    link: "#contact",
  },
  {
    title: "Mobile App Development",
    description:
      "Delivering high-performance native and cross-platform mobile experiences for seamless user engagement.",
    icon: Smartphone,
    image: "/mobile.jpeg",
    link: "#contact",
  },
  {
    title: "AI Video Production",
    description:
      "Harnessing the power of artificial intelligence to generate compelling, dynamic video content at scale.",
    icon: Sparkles,
    image: "/AI-video.jpeg",
    link: "#contact",
  },
  {
    title: "Wabtech Academy",
    description:
      "Empowering the next generation of engineers through expert mentorship and core development training.",
    icon: GraduationCap,
    image: "/academy.jpeg",
    link: "#academy",
  },
];
</script>

<template>
  <section id="services" class="py-20 lg:py-24 bg-slate-50/50 text-slate-900">
    <div class="container mx-auto px-6">
      <!-- Section Header (Centered like the reference design) -->
      <div class="max-w-2xl mx-auto text-center mb-16">
        <h2
          class="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight"
        >
          Our Services
        </h2>
        <p class="text-base text-slate-500 font-medium px-4">
          From deploying robust full-stack systems to shaping future tech
          talent, our expertise spans the entire digital ecosystem.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center pb-8"
        >
          <div class="w-full h-48 relative rounded-t-2xl overflow-hidden">
            <img
              :src="service.image"
              :alt="service.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />

            <div
              class="absolute inset-0 bg-[#00007f]/10 group-hover:bg-transparent transition-colors duration-500"
            ></div>
          </div>

          <!-- Overlapping Circular Icon Badge -->
          <div
            class="w-16 h-16 bg-white rounded-full border-4 border-white shadow-md flex items-center justify-center text-[#00007f] -mt-8 relative z-10 group-hover:bg-[#00007f] group-hover:text-white transition-colors duration-300"
          >
            <component :is="service.icon" class="w-7 h-7" stroke-width="1.5" />
          </div>

          <!-- Text Content -->
          <div class="px-6 pt-5 text-center flex-1 flex flex-col w-full">
            <h3
              class="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#00007f] transition-colors"
            >
              {{ service.title }}
            </h3>
            <p class="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
              {{ service.description }}
            </p>

            <!-- Call to Action Link -->
            <a
              :href="service.link"
              class="text-sm font-bold text-[#00007f] hover:text-[#000066] mt-auto inline-flex items-center justify-center gap-1"
            >
              View Service
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
