<script lang="ts">
import { defineComponent } from 'vue';
import IconDiscord from "@/lib-components/icons/IconDiscord.vue";
import IconGithub from "@/lib-components/icons/IconGithub.vue";
import IconPatreon from "@/lib-components/icons/IconPatreon.vue";
import IconPaypal from "@/lib-components/icons/IconPaypal.vue";
import IconTwitter from "@/lib-components/icons/IconTwitter.vue";
import DarkModeToggle from "@/lib-components/components/DarkModeToggle.vue";

export default defineComponent({
  name: 'ServeDev',
  components: {DarkModeToggle, IconTwitter, IconPaypal, IconPatreon, IconGithub, IconDiscord},
});
</script>

<template>
  <div id="app">
    <dark-mode-toggle />
    <icon-discord />
    <icon-github />
    <icon-patreon />
    <icon-paypal />
    <icon-twitter />
  </div>
</template>
