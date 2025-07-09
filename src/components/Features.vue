<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Paintbrush,
  MessageCircle,
  TabletSmartphone,
  BadgeCheck,
  Goal,
  PictureInPicture,
  MousePointerClick,
  Newspaper,
} from "lucide-vue-next";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "paintbrush",
    title: "Ты — бренд, не просто модель",
    description:
      "Мы помогаем тебе выстроить личный стиль и голос, чтобы ты запоминалась, выделялась и управляла своей аудиторией как профессионал.",
  },
  {
    icon: "goal",
    title: "Развитие вне камеры",
    description:
      "Спа, психология, английский, финансовая грамотность — мы растим не только аккаунты, но и личности.",
  },
  {
    icon: "mousePointerClick",
    title: "Ты управляешь процессом",
    description:
      "Никакого микроменеджмента. Ты выбираешь темп, стиль и подход. А мы просто помогаем тебе быть эффективной.",
  },
  {
    icon: "badgeCheck",
    title: "Меньше конкуренции — больше фокуса",
    description:
      "Мы не набираем моделей массово. Качественная поддержка возможна только в небольших, сильных командах.",
  },
  {
    icon: "tabletSmartphone",
    title: "Контент без давления",
    description:
      "Никаких «делай вот это, иначе не заработаешь». Только то, что комфортно тебе. Наши модели не перегорают.",
  },
  {
    icon: "messageCircle",
    title: "Мы не просто говорим, мы слушаем",
    description:
      "Ты всегда можешь высказаться — и тебя услышат. Мы строим диалог, а не диктуем сверху.",
  },
];

const iconMap: Record<
  string,
  | typeof TabletSmartphone
  | typeof BadgeCheck
  | typeof Goal
  | typeof PictureInPicture
  | typeof Paintbrush
  | typeof MousePointerClick
  | typeof MessageCircle
  | typeof Newspaper
> = {
  tabletSmartphone: TabletSmartphone,
  badgeCheck: BadgeCheck,
  goal: Goal,
  pictureInPicture: PictureInPicture,
  paintbrush: Paintbrush,
  mousePointerClick: MousePointerClick,
  messageCircle: MessageCircle,
  newspaper: Newspaper,
};
</script>

<template>
  <section id="features" class="container py-24 sm:py-32">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Почему мы — это другое
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Осознанный подход к вебкаму
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Lunera Studio — это не про поток. Это про ценность, развитие и уважение.
      Мы работаем с тобой, а не над тобой.
    </h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="{ icon, title, description } in featureList"
        :key="title"
      >
        <Card class="h-full bg-background border-0 shadow-none">
          <CardHeader class="flex justify-center items-center">
            <div
              class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4"
            >
              <component
                :is="iconMap[icon]"
                class="size-6 text-primary"
              />
            </div>
            <CardTitle class="text-center">{{ title }}</CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground text-center">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
