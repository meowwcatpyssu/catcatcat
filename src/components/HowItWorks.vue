<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HowItWorksProps {
  badgeTitle: string;
  title: string;
  description: string;
}

const HowItWorksList: HowItWorksProps[] = [
  {
    badgeTitle: "Шаг 1",
    title: "Свяжись с нами",
    description:
      "Напиши в Telegram или на почту. Мы ответим в течение дня и расскажем всё подробно.",
  },
  {
    badgeTitle: "Шаг 2",
    title: "Онлайн-собеседование",
    description:
      "Краткий созвон в Telegram или Zoom. Мы расскажем о студии, условиях и ответим на все вопросы.",
  },
  {
    badgeTitle: "Шаг 3",
    title: "Переезд в студию",
    description:
      "Мы поможем с билетами, встретим, предоставим жильё и подготовим к старту.",
  },
  {
    badgeTitle: "Шаг 4",
    title: "Твоя первая смена",
    description:
      "Обучение, техническая поддержка, настройка профилей — ты не останешься одна ни на минуту.",
  },
];
</script>

<template>
  <section
    id="features"
    class="container py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary mb-2 tracking-wider">Как всё устроено</h2>
      <h2 class="text-3xl md:text-4xl font-bold">Твой путь к работе в Lunera Studio</h2>
    </div>

    <div class="lg:w-[80%] mx-auto relative space-y-8">
      <div
        v-for="({ badgeTitle, title, description }, index) in HowItWorksList"
        :key="title"
        :class="[
          'flex items-center mb-8',
          { 'flex-row-reverse': index % 2 !== 0 },
        ]"
      >
        <Card class="h-full bg-transparent border-0 shadow-none max-w-xl w-[70%]">
          <CardHeader>
            <div class="pb-4">
              <Badge>{{ badgeTitle }}</Badge>
            </div>
            <CardTitle>{{ title }}</CardTitle>
          </CardHeader>
          <CardContent class="text-muted-foreground">{{ description }}</CardContent>
        </Card>

        <!-- Пустой блок вместо картинки, чтобы сохранить пространство -->
        <div class="w-[300px]"></div>
      </div>
    </div>
  </section>
</template>
