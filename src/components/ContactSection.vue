<!-- src/components/ContactSection.vue -->
<script setup lang="ts">
import { ref } from "vue";
import { MapPin, Mail, Phone } from "lucide-vue-next";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const isSubmitting = ref(false);

const handleSubmit = () => {
  isSubmitting.value = true;

  setTimeout(() => {
    console.log("Form submitted:", form.value);
    alert("Thanks for reaching out! We will get back to you soon.");
    form.value = { name: "", email: "", message: "" };
    isSubmitting.value = false;
  }, 1000);
};
</script>

<template>
  <section id="contact" class="py-12 bg-slate-50 text-slate-900 relative">
    <div class="container mx-auto px-6">
      <!-- Main Wrapper for the overlapping cards -->
      <div
        class="max-w-5xl mx-auto relative flex flex-col lg:flex-row items-center lg:items-stretch"
      >
        <!-- Left Side: Floating Blue Info Card -->
        <div
          class="w-full lg:w-[35%] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 z-10 bg-[#00007f] text-white shadow-2xl p-10 lg:p-12 mb-8 lg:mb-0"
        >
          <h3 class="text-2xl font-bold mb-10 tracking-wide">Contact Us</h3>

          <div class="space-y-8">
            <!-- Location -->
            <div class="flex items-start gap-5">
              <MapPin
                class="w-6 h-6 text-white/80 shrink-0 mt-0.5"
                stroke-width="1.5"
              />
              <p class="text-base text-white/90 leading-relaxed">
                Abuja, Nigeria
              </p>
            </div>

            <!-- Email -->
            <div class="flex items-start gap-5">
              <Mail
                class="w-6 h-6 text-white/80 shrink-0 mt-0.5"
                stroke-width="1.5"
              />
              <a
                href="mailto:wgift41@gmail.com"
                class="text-base text-white/90 hover:text-white transition-colors"
              >
                wabtechacdemy@gmail.com
              </a>
            </div>

            <!-- Phone -->
            <div class="flex items-start gap-5">
              <Phone
                class="w-6 h-6 text-white/80 shrink-0 mt-0.5"
                stroke-width="1.5"
              />
              <p class="text-base text-white/90">+234 (0) 123 456 7890</p>
            </div>
          </div>
        </div>

        <div
          class="w-full lg:w-[75%] ml-auto bg-white shadow-xl p-10 lg:py-16 lg:pr-16 lg:pl-48 relative z-0"
        >
          <h2 class="text-3xl font-extrabold text-slate-900 mb-2">
            Get in Touch
          </h2>
          <p class="text-sm text-slate-400 mb-10 font-medium">
            Feel free to drop us a line below!
          </p>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                placeholder="Your Name"
                class="w-full bg-slate-50 text-slate-900 placeholder:text-slate-300 rounded-xl px-6 py-4 border-none focus:ring-2 focus:ring-[#00007f]/20 focus:outline-none transition-all"
              />
            </div>

            <!-- Email Input -->
            <div>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                placeholder="Your Email"
                class="w-full bg-slate-50 text-slate-900 placeholder:text-slate-300 rounded-xl px-6 py-4 border-none focus:ring-2 focus:ring-[#00007f]/20 focus:outline-none transition-all"
              />
            </div>

            <div>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                placeholder="Typing your message here....."
                class="w-full bg-slate-50 text-slate-900 placeholder:text-slate-300 rounded-xl px-6 py-4 border-none focus:ring-2 focus:ring-[#00007f]/20 focus:outline-none transition-all resize-none"
              ></textarea>
            </div>

            <div class="pt-2">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="inline-flex items-center justify-center px-12 py-4 text-sm font-bold uppercase tracking-wider rounded-full text-white bg-[#00007f] hover:bg-[#000066] transition-all duration-300 hover:shadow-lg disabled:opacity-70"
              >
                <span v-if="!isSubmitting">Send</span>
                <span v-else>Sending...</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
