<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Check } from "lucide-vue-next";

enum Stage {
  START = 0,
  GROWTH = 1,
  LEADER = 2,
}

interface PathProps {
  title: string;
  stage: Stage;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const paths: PathProps[] = [
  {
    title: "Первый шаг",
    stage: Stage.START,
    description: "Твоя первая трансляция, первые подписчики и уверенность в себе.",
    buttonText: "Начать с нами",
    benefitList: [
      "Обучение с нуля",
      "Наставник на связи 24/7",
      "Полная анонимность",
      "Съёмка портфолио",
      "Поддержка на каждом этапе",
    ],
  },
  {
    title: "Развитие",
    stage: Stage.GROWTH,
    description: "Ты уже знаешь платформу. Время масштабироваться и зарабатывать больше.",
    buttonText: "Прокачать карьеру",
    benefitList: [
      "Создание личного бренда",
      "Работа с фан-сервисами",
      "Рост процента выплат",
      "Продвижение аккаунтов",
      "Регулярные бонусы и SPA",
    ],
  },
  {
    title: "Топ модель",
    stage: Stage.LEADER,
    description: "Ты уверена, стабильна и вдохновляешь других. Мы вместе создаём результат.",
    buttonText: "Стать лидером",
    benefitList: [
      "Наставничество другим моделям",
      "Повышенные бонусы",
      "Управленческая должность",
      "Премиальные фотосессии",
      "Путешествия и ретриты",
    ],
  },
];
</script>

<template>
  <section class="container py-24 sm:py-32">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Твои возможности
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Путь развития в Lunera Studio
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
      У нас нет «тарифов». Есть только твой рост. С каждой ступенью — больше уверенности, больше дохода и поддержки.
    </h3>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
      <Card
        v-for="{
          title,
          stage,
          description,
          buttonText,
          benefitList,
        } in paths"
        :key="title"
        :class="{
          'drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.05]':
            stage === Stage.GROWTH,
        }"
      >
        <CardHeader>
          <CardTitle class="pb-2">{{ title }}</CardTitle>
          <CardDescription class="pb-4">{{ description }}</CardDescription>
        </CardHeader>

        <CardContent class="flex">
          <div class="space-y-4">
            <span
              v-for="benefit in benefitList"
              :key="benefit"
              class="flex items-start"
            >
              <Check class="text-primary mr-2 mt-1" />
              <span>{{ benefit }}</span>
            </span>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            variant="default"
            class="w-full"
            @click="() => window.open('https://t.me/lunera_admin', '_blank')"
          >
            {{ buttonText }}
          </Button>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
