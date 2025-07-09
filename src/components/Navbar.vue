<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
const mode = useColorMode();
mode.value = "dark";

import ToggleTheme from "./ToggleTheme.vue";
</script>

<template>
  <header
    class="w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky z-40 rounded-2xl flex justify-between items-center p-4 bg-card shadow-md"
    :class="{
      'shadow-light': mode === 'light',
      'shadow-dark': mode === 'dark',
    }"
  >
    <h1 class="text-xl font-bold select-none">Lunera Studio</h1>
    <ToggleTheme />
  </header>
</template>

<style scoped>
.shadow-light {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.085);
}

.shadow-dark {
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.141);
}
</style>
