<template>
  <div class="mb-6">
    <label v-bind:for=id class="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-400">{{ label }}</label>
    <textarea v-bind:id=id
              rows="4"
              class="block p-2.5 w-full text-sm text-zinc-900 bg-zinc-50 rounded-lg border border-zinc-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              v-bind:placeholder=placeholder
              v-bind:required="required"
              v-bind:value=value
              @input='updateValue'></textarea>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "FormTextArea",
  props: {
    id: String,
    label: String,
    placeholder: String,
    required: Boolean,
    value: String
  },
  methods: {
    updateValue: function (e: Event) {
      const target = (<HTMLInputElement>e.target)
      this.$emit('updateValue', target.value);
    }
  }
})
</script>

<style scoped>

</style>