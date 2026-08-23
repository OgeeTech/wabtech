<script setup lang="ts">
import {
  Code2,
  Terminal,
  Layers,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Video,
} from "lucide-vue-next";
import NavBar from "@/components/NavBar.vue";
import FooterSection from "@/components/Footer.vue";

const courses = [
  {
    title: "Web Dev Fundamentals",
    description:
      "Master the building blocks of the web. Perfect for beginners starting their journey.",
    icon: Code2,
    price: "₦100,000",
    duration: "8 Weeks",
    level: "Beginner",
    topics: [
      "Semantic HTML5 & CSS Grid",
      "JavaScript Fundamentals",
      "Responsive UI Design",
    ],
  },
  {
    title: "Software Engineering",
    description:
      "Learn how to architect systems, manage versions, and think like a senior engineer.",
    icon: Layers,
    price: "₦150,000",
    duration: "10 Weeks",
    level: "Intermediate",
    topics: [
      "System Architecture",
      "Git & Version Control",
      "RESTful API Design",
    ],
  },
  {
    title: "Full-Stack Mastery",
    description:
      "Build end-to-end applications using the modern JavaScript ecosystem.",
    icon: Terminal,
    price: "₦250,000",
    duration: "12 Weeks",
    level: "Advanced",
    topics: [
      "React & Vue 3 Frontend",
      "Node.js & Express Servers",
      "MongoDB & PostgreSQL",
    ],
  },
  {
    title: "AI & Modern Tools",
    description:
      "Future-proof your career by building AI-powered applications and extensions.",
    icon: Cpu,
    price: "₦200,000",
    duration: "8 Weeks",
    level: "Advanced",
    topics: [
      "OpenAI & Gemini APIs",
      "Chrome Extension Auth",
      "Prompt Engineering",
    ],
  },
  {
    title: "AI Video Tutorials",
    description:
      "Master cutting-edge AI tools to generate, edit, and scale professional video content.",
    icon: Video,
    price: "₦120,000",
    duration: "4 Weeks",
    level: "All Levels",
    topics: [
      "Text-to-Video Generation",
      "AI Voiceovers & Audio",
      "Automated Storyboarding",
    ],
  },
];
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-50">
    <NavBar />

    <main class="flex-grow pt-32 pb-24">
      <div class="container mx-auto px-6">
        <!-- Academy Hero Section -->
        <div class="max-w-2xl mx-auto text-center mb-16">
          <div class="flex items-center justify-center gap-3 mb-4">
            <span class="w-8 h-[2px] bg-[#00007f]/50"></span>
            <span
              class="text-xs font-bold text-[#00007f] tracking-wider uppercase"
            >
              Wabtech Academy
            </span>
            <span class="w-8 h-[2px] bg-[#00007f]/50"></span>
          </div>

          <h1
            class="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight"
          >
            Master the skills of tomorrow.
          </h1>

          <p class="text-base text-slate-500 leading-relaxed font-medium">
            Join our expert-led programs to learn modern software engineering
            and AI generation. Get hands-on experience and launch your tech
            career.
          </p>
        </div>

        <!-- Compact Course Grid -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          <div
            v-for="(course, index) in courses"
            :key="index"
            class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:border-[#00007f]/30 transition-all duration-300 flex flex-col group"
          >
            <!-- Compact Header: Icon & Level Badge -->
            <div class="flex justify-between items-start mb-5">
              <div
                class="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#00007f] group-hover:bg-[#00007f] group-hover:text-white transition-colors duration-300"
              >
                <component
                  :is="course.icon"
                  class="w-6 h-6"
                  stroke-width="1.5"
                />
              </div>
              <div
                class="px-2.5 py-1 bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded-full"
              >
                {{ course.level }}
              </div>
            </div>

            <!-- Title & Compact Description -->
            <h3
              class="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#00007f] transition-colors line-clamp-1"
            >
              {{ course.title }}
            </h3>
            <p
              class="text-sm text-slate-500 leading-relaxed mb-5 line-clamp-2 min-h-[2.5rem]"
            >
              {{ course.description }}
            </p>

            <!-- Price & Duration Divider -->
            <div
              class="flex justify-between items-end pb-4 mb-4 border-b border-slate-100"
            >
              <p class="text-xl font-extrabold text-slate-900">
                {{ course.price }}
              </p>
              <p
                class="text-xs font-bold text-slate-400 uppercase tracking-wide"
              >
                {{ course.duration }}
              </p>
            </div>

            <!-- Minimalist Topics List -->
            <div class="flex-grow mb-6">
              <ul class="space-y-2.5">
                <li
                  v-for="(topic, i) in course.topics"
                  :key="i"
                  class="flex items-start gap-2.5"
                >
                  <CheckCircle2
                    class="w-4 h-4 text-[#00007f]/60 shrink-0 mt-0.5"
                    stroke-width="2.5"
                  />
                  <span
                    class="text-sm text-slate-600 font-medium leading-snug"
                    >{{ topic }}</span
                  >
                </li>
              </ul>
            </div>

            <!-- Sleek, Compact Button -->
            <button
              class="w-full h-12 inline-flex items-center justify-center gap-2 text-sm font-bold rounded-xl text-white bg-[#00007f] hover:bg-[#000066] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md mt-auto"
            >
              Enroll Now
              <ArrowRight
                class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                stroke-width="2"
              />
            </button>
          </div>
        </div>
      </div>
    </main>

    <FooterSection />
  </div>
</template>
