<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Sparkle,
  Tag,
  Paintbrush,
  Blocks,
  LineChart,
  Wallet,
} from "lucide-vue-next";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "blocks",
    title: "Гибкий процент",
    description: "Ты сможешь повысить свой процент с 50% уже с первых смен.",
  },
  {
    icon: "lineChart",
    title: "Выбор смены",
    description: "Гибкое расписание: смены начинаются от 6 часов днем и ночью.",
  },
  {
    icon: "wallet",
    title: "Комфортные условия",
    description: "Профессиональное оборудование и уютные, просторные стримерские комнаты.",
  },
  {
    icon: "sparkle",
    title: "Поддержка 24/7",
    description: "Техническая и психологическая помощь в любое время, когда тебе это нужно.",
  },
  {
    icon: "tag",
    title: "Забота о здоровье",
    description: "Визиты к дерматологу, косметологу и регулярные спа-процедуры каждые 3 месяца.",
  },
  {
    icon: "paintbrush",
    title: "Обучение и развитие",
    description: "Обучение от основ до мастерства, мастер-классы и консультации с экспертами.",
  },
  {
    icon: "sparkle",
    title: "Индивидуальный подход",
    description: "Работаем по твоим целям и амбициям, строим долгосрочное сотрудничество.",
  },
  {
    icon: "wallet",
    title: "Конфиденциальность и безопасность",
    description: "Полная защита данных и удаление информации из поисковых систем.",
  },
  {
    icon: "lineChart",
    title: "Ведение соцсетей",
    description: "Мы полностью ведём твои соцсети (OnlyFans, Fansly, Instagram и др.) под твоим контролем.",
  },
  {
    icon: "blocks",
    title: "Языковые курсы",
    description: "Курсы английского языка для уверенного общения и карьерного роста.",
  },
];
  
const iconMap: Record<
  string,
  | typeof Sparkle
  | typeof Tag
  | typeof Paintbrush
  | typeof Blocks
  | typeof LineChart
  | typeof Wallet
> = {
  sparkle: Sparkle,
  tag: Tag,
  paintbrush: Paintbrush,
  blocks: Blocks,
  lineChart: LineChart,
  wallet: Wallet,
};
</script>

<template>
  <section
    id="benefits"
    class="container py-24 sm:py-32"
  >
    <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
      <div>
        <h2 class="text-lg text-primary mb-2 tracking-wider">Условия</h2>

        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Всё для твоего комфорта и развития
        </h2>
        <p class="text-xl text-muted-foreground mb-8">
          Lunera Studio создаёт условия, в которых ты можешь работать, развиваться и чувствовать себя уверенно каждый день.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-4 w-full">
        <Card
          v-for="({ icon, title, description }, index) in benefitList"
          :key="title"
          class="bg-muted/50 dark:bg-card hover:bg-background dark:hover:bg-background transition-all delay-75 group/number"
        >
          <CardHeader>
            <div class="flex justify-between">
              <component
                class="size-8 mb-6 text-primary"
                :is="iconMap[icon]"
              />

              <span
                class="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30"
              >
                0{{ index + 1 }}
              </span>
            </div>

            <CardTitle>{{ title }}</CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
