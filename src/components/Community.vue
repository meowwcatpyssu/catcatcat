<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-vue-next";
</script>

<template>
  <section id="community" class="py-12">
    <hr />
    <div class="container py-20 sm:py-20">
      <div class="lg:w-[60%] mx-auto">
        <Card
          class="bg-background shadow-none text-center flex flex-col items-center justify-center border-0"
        >
          <CardHeader>
            <CardTitle class="text-4xl md:text-5xl font-bold">
              <Component
                class="w-20 h-20 m-auto mb-4 text-primary"
                :is="MessageCircle"
              />
              Присоединяйся к
              <span
                class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
              >
                Telegram-каналу
              </span>
            </CardTitle>
          </CardHeader>

          <CardContent class="lg:w-[80%] text-xl text-muted-foreground">
            Новости, советы, поддержка и закулисье Lunera Studio — всё в одном месте.
            Будь в курсе и чувствуй себя частью команды!
          </CardContent>

          <CardFooter>
            <Button as-child>
              <a
                href="https://t.me/lunerastudio"
                target="_blank"
              >
                Перейти в Telegram
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
    <hr />
  </section>
</template>
