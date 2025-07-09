<script setup lang="ts">
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BonusItem {
  title: string;
  description: string;
  highlight?: boolean;
}

const bonuses: BonusItem[] = [
  {
    title: "Еженедельные бонусы",
    description:
      "Дополнительное вознаграждение за высокую активность и результативность.",
  },
  {
    title: "Игрушки Lovense",
    description:
      "Абсолютно бесплатно предоставляем игрушки от Lovense нашим моделям.",
    highlight: true,
  },
  {
    title: "Подарки в праздничные дни",
    description:
      "Радуем наших моделей сюрпризами и подарками в праздники — ты особенная!",
  },
  {
    title: "Сертификаты в SPA",
    description:
      "Дарим сертификаты на посещение лучших SPA, чтобы восстановить силы и отдохнуть.",
  },
  {
    title: "Медицинский пакет",
    description:
      "Компенсация за консультации с врачами, психологом и фитнес-тренером.",
  },
  {
    title: "Карьерный рост",
    description:
      "Возможность стать куратором, наставником или менеджером студии.",
  },
  {
    title: "Профессиональная съёмка",
    description:
      "Бесплатные фотосессии с фотографами для портфолио и соцсетей.",
  },
  {
    title: "Наборы для стиля и образа",
    description:
      "Персонализированные комплекты одежды и аксессуаров для твоих эфиров.",
  },
];
</script>

<template>
  <section
    id="bonuses"
    class="container py-24 sm:py-32"
  >
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      БОНУСЫ
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Привилегии для наших моделей
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-12">
      Мы заботимся не только о доходе, но и о твоём комфорте, развитии и удовольствии от работы.
    </h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-[90%] mx-auto">
      <Card
        v-for="{ title, description, highlight } in bonuses"
        :key="title"
        class="relative bg-muted/50 dark:bg-card"
      >
        <CardHeader>
          <CardTitle>{{ title }}</CardTitle>
          <CardDescription>{{ description }}</CardDescription>
        </CardHeader>

        <Badge
          v-if="highlight"
          variant="secondary"
          class="absolute -top-2 -right-3"
        >
          ТОП
        </Badge>
      </Card>
    </div>
  </section>
</template>
