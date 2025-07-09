<script setup lang="ts">
import { Card, CardHeader } from "@/components/ui/card";

// Список фото — позже заменишь своими изображениями
const studioImages: string[] = [
  "https://i.pravatar.cc/250?img=58",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80",
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80",
  "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80",
  "https://images.unsplash.com/photo-1616805765352-beedbad46b2a?q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80",
];
</script>

<template>
  <section
    id="studio"
    class="container lg:w-[75%] py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        Наша студия
      </h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Галерея пространства
      </h2>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <Card
        v-for="image in studioImages"
        :key="image"
        class="bg-muted/60 dark:bg-card overflow-hidden group"
      >
        <CardHeader class="p-0">
          <img
            :src="image"
            alt="Studio photo"
            class="w-full aspect-square object-cover saturate-0 transition-all duration-300 ease-in-out group-hover:saturate-100 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </CardHeader>
      </Card>
    </div>
  </section>
</template>
