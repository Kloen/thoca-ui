<template>
  <h1 class="text-large underline">Hello World</h1>
  <dark-mode-toggle></dark-mode-toggle>
</template>

<script lang="ts">
import DarkModeToggle from "@/lib/components/DarkModeToggle.vue";
export default {
    name: 'Home',
    components: {DarkModeToggle}
}
</script>

