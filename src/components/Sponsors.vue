<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";

const platforms: string[] = [
  "CHERRY.TV",
  "CHATURBATE",
  "STRIPCHAT",
  "ONLYFANS",
  "BONGACAMS",
  "CAMSODA",
  "FANSLY",
];
</script>

<template>
  <section
    id="platforms"
    class="max-w-[90%] mx-auto pb-24 sm:pb-32"
  >
    <h2 class="text-lg md:text-xl text-center mb-6 text-muted-foreground">
      Мы работаем с лучшими платформами
    </h2>

    <Marquee
      class="gap-12"
      :pauseOnHover="true"
      :fade="true"
      innerClassName="gap-12"
    >
      <div
        v-for="platform in platforms"
        :key="platform"
        class="text-2xl md:text-3xl font-bold uppercase tracking-wide text-primary"
      >
        {{ platform }}
      </div>
    </Marquee>
  </section>
</template>
