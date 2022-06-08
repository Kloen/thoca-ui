<template>
  <nav class="border-zinc-200 px-2 sm:px-4 py-2.5 sticky top-0 z-50 bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
    <div class="flex items-center mx-auto">
      <dark-mode-toggle />
    </div>
  </nav>
  <div class="p-4">
    <ul class="flex gap-2">
      <li class="text-zinc-500 dark:text-zinc-400">
        <icon-twitter class="w-8 h-8"></icon-twitter>
      </li>
      <li class="text-zinc-500 dark:text-zinc-400">
        <icon-paypal class="w-8 h-8"></icon-paypal>
      </li>
      <li class="text-zinc-500 dark:text-zinc-400">
        <icon-patreon class="w-8 h-8"></icon-patreon>
      </li>
      <li class="text-zinc-500 dark:text-zinc-400">
        <icon-github class="w-8 h-8"></icon-github>
      </li>
      <li class="text-zinc-500 dark:text-zinc-400">
        <icon-discord class="ww-8 h-8"></icon-discord>
      </li>
    </ul>
  </div>
  <div class="p-4">
    <form-input id="subject" type="text" label="Subject" placeholder="Reason of contact..."></form-input>
    <form-text-area id="subject" type="text" label="Subject" placeholder="Reason of contact..."></form-text-area>
  </div>
</template>

<script lang="ts">
import DarkModeToggle from "@/lib/components/DarkModeToggle.vue";
import IconTwitter from "@/lib/icons/IconTwitter.vue";
import IconPaypal from "@/lib/icons/IconPaypal.vue";
import IconPatreon from "@/lib/icons/IconPatreon.vue";
import IconGithub from "@/lib/icons/IconGithub.vue";
import IconDiscord from "@/lib/icons/IconDiscord.vue";
import FormInput from "@/lib/forms/FormInput.vue";
import FormTextArea from "@/lib/forms/FormTextArea.vue";
export default {
    name: 'Home',
    components: {FormTextArea, FormInput, IconDiscord, IconGithub, IconPatreon, IconPaypal, IconTwitter, DarkModeToggle}
}
</script>

