<template>
  <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-900 text-blue-300 hover:bg-blue-800 transition-colors duration-300">
    {{ name }}
  </span>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>