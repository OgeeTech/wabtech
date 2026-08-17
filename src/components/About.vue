<script setup lang="ts">
import { Layers, Activity, Users2, Fingerprint } from "lucide-vue-next";

// Simplified state: removed the background box colors.
// Now just defining a subtle tint for the icon itself on hover.
const strengths = [
  {
    title: "Innovation at the Core",
    description:
      "We don't just follow trends; we leverage the latest technologies to future-proof your digital assets.",
    icon: Layers,
    iconHover: "group-hover:text-amber-500",
  },
  {
    title: "Agile & Fast Delivery",
    description:
      "Our streamlined workflows mean we ship high-quality products faster, without compromising on performance.",
    icon: Activity,
    iconHover: "group-hover:text-cyan-500",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Your vision is our priority. We collaborate closely with you at every step of the development cycle.",
    icon: Users2,
    iconHover: "group-hover:text-emerald-500",
  },
  {
    title: "Uncompromising Security",
    description:
      "From code architecture to UI/UX, we adhere to strict standards to ensure robust, secure, and scalable solutions.",
    icon: Fingerprint,
    iconHover: "group-hover:text-violet-500",
  },
];
</script>

<template>
  <section id="about" class="py-24 bg-white text-slate-900">
    <div class="container mx-auto px-6">
      <div class="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-20">
        <!-- Left Side: Image -->
        <div class="w-full lg:w-1/2 relative flex items-center">
          <!-- Subtle offset background block -->
          <div
            class="absolute -inset-4 bg-slate-50 rounded-3xl transform -rotate-3 -z-10 transition-transform duration-500 hover:rotate-0"
          ></div>

          <div
            class="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-50"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Wabtech team collaborating"
              class="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        <!-- Right Side: Text & Expandable Icon Bullets -->
        <div class="w-full lg:w-1/2 flex flex-col justify-center">
          <div
            class="inline-flex items-center gap-2 px-3 py-1 text-sm font-bold text-[#00007f] mb-4 self-start tracking-wide uppercase"
          >
            Who We Are
          </div>

          <h2
            class="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.15]"
          >
            Driving digital transformation from concept to code.
          </h2>

          <p class="text-base text-slate-500 mb-10 leading-relaxed font-medium">
            At Wabtech, we don't just write code—we solve complex problems. We
            are a team of dedicated engineers, designers, and educators
            committed to delivering excellence.
          </p>

          <!-- The Hover-Expand Bullet Points (Borderless & Clean) -->
          <div class="space-y-6 w-full">
            <div
              v-for="(strength, index) in strengths"
              :key="index"
              class="flex items-start gap-6 group cursor-pointer"
            >
              <!-- Naked Icon (No background box, slightly larger, thinner stroke) -->
              <div
                :class="[
                  'flex-shrink-0 pt-0.5 text-slate-300 transition-colors duration-300',
                  strength.iconHover,
                ]"
              >
                <!-- stroke-width="1.5" makes it look more elegant and modern -->
                <component
                  :is="strength.icon"
                  class="w-8 h-8"
                  stroke-width="1.5"
                />
              </div>

              <!-- Text Content with CSS Grid slide-in -->
              <div class="flex-1 border-b border-slate-100 pb-4">
                <h3
                  class="text-lg font-bold text-slate-800 group-hover:text-slate-900 transition-colors"
                >
                  {{ strength.title }}
                </h3>

                <!-- The Magic Sliding Container -->
                <div
                  class="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out"
                >
                  <div class="overflow-hidden">
                    <p class="text-slate-500 leading-relaxed mt-2 text-sm pr-4">
                      {{ strength.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
