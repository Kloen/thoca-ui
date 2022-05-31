<script lang="ts">
import { defineComponent } from 'vue';
import IconDiscord from "@/lib-components/icons/IconDiscord.vue";
import IconGithub from "@/lib-components/icons/IconGithub.vue";
import IconPatreon from "@/lib-components/icons/IconPatreon.vue";
import IconPaypal from "@/lib-components/icons/IconPaypal.vue";
import IconTwitter from "@/lib-components/icons/IconTwitter.vue";

export default defineComponent({
  name: 'ServeDev',
  components: {IconTwitter, IconPaypal, IconPatreon, IconGithub, IconDiscord},
});
</script>

<template>
  <div id="app">
    <icon-discord />
    <icon-github />
    <icon-patreon />
    <icon-paypal />
    <icon-twitter />
  </div>
</template>
