<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface QuoteProps {
  author: string;
  source: string;
  quote: string;
}

const classicQuotes: QuoteProps[] = [
  {
    author: "Марсель Пруст",
    source: "В поисках утраченного времени",
    quote:
      "Истинное путешествие открытий не в том, чтобы искать новые земли, а в том, чтобы смотреть на мир новыми глазами.",
  },
  {
    author: "Вирджиния Вулф",
    source: "Собственная комната",
    quote:
      "Женщине нужно немного денег и собственная комната, если она собирается писать прозу.",
  },
  {
    author: "Шарлотта Бронте",
    source: "Джейн Эйр",
    quote:
      "Я не птица и никакая сеть не удержит меня: я — свободное человеческое существо с независимой волей.",
  },
  {
    author: "Оскар Уайльд",
    source: "Портрет Дориана Грея",
    quote:
      "Тайна жизни — в поиске красоты. Не стыдись желать того, что делает тебя живой.",
  },
  {
    author: "Гюстав Флобер",
    source: "Мадам Бовари",
    quote:
      "Она жаждала любви как цветок света. Душа её алкала волнений, восторгов, страстей.",
  },
  {
    author: "Лев Толстой",
    source: "Анна Каренина",
    quote:
      "Любовь — это жизнь. Всё, что я понимаю, я понимаю только потому, что люблю.",
  },
];
</script>

<template>
  <section
    id="classic-quotes"
    class="container py-24 sm:py-32"
  >
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary tracking-wider mb-2">Мотивация и вдохновение</h2>
      <h2 class="text-3xl md:text-4xl font-bold">
        Голоса классики о свободе, женственности и поиске себя
      </h2>
    </div>

    <Carousel
      :opts="{ align: 'start' }"
      class="w-[90%] lg:max-w-screen-xl mx-auto"
    >
      <CarouselContent>
        <CarouselItem
          v-for="quote in classicQuotes"
          :key="quote.quote"
          class="md:basis-1/2 lg:basis-1/3"
        >
          <Card class="bg-muted/50 dark:bg-card h-full">
            <CardContent class="py-6 px-6 italic text-lg">
              “{{ quote.quote }}”
            </CardContent>

            <CardHeader>
              <CardTitle class="text-base">{{ quote.author }}</CardTitle>
              <CardDescription>из книги «{{ quote.source }}»</CardDescription>
            </CardHeader>
          </Card>
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>
</template>
