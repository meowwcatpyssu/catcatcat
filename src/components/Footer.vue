<script setup lang="ts">
import Separator from "./ui/separator/Separator.vue";
</script>

<template>
  <footer
    id="footer"
    class="container py-24 pb-16 sm:py-32 sm:pb-24"
  >
    <div class="p-10 bg-muted/50 dark:bg-card border rounded-2xl">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-left md:text-left">
        <!-- Колонка 1: Название -->
        <div class="flex items-center font-bold text-2xl">
          Lunera Studio
        </div>

        <!-- Колонка 2: Контакты -->
        <div>
          <h3 class="font-bold mb-4">Контакты</h3>
          <ul class="space-y-2 opacity-60 hover:opacity-100 transition-opacity">
            <li>
              <a href="mailto:lunera.studio@gmail.com">lunera.studio@gmail.com</a>
            </li>
            <li>
              <a href="https://t.me/lunera_admin" target="_blank">Связаться: @lunera_admin</a>
            </li>
          </ul>
        </div>

        <!-- Колонка 3: Telegram-канал -->
        <div>
          <h3 class="font-bold mb-4">Telegram</h3>
          <ul class="space-y-2 opacity-60 hover:opacity-100 transition-opacity">
            <li>
              <a href="https://t.me/lunerastudio" target="_blank">Telegram-канал: @lunerastudio</a>
            </li>
          </ul>
        </div>

        <!-- Колонка 4: Можно добавить что-то ещё или убрать -->
        <div>
          <h3 class="font-bold mb-4">Прочее</h3>
          <ul class="space-y-2 opacity-60 hover:opacity-100 transition-opacity">
            <li>—</li>
          </ul>
        </div>
      </div>

      <Separator class="my-6" />

      <section class="text-sm text-muted-foreground text-center">
        &copy; 2025 Lunera Studio. Все права защищены.
      </section>
    </div>
  </footer>
</template>
