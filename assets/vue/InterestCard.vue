<template>
    <div class="bg-gray-700 bg-opacity-50 rounded-lg p-6 transition-all duration-300 hover:transform hover:scale-105 hover:bg-opacity-75">
      <component :is="icon" class="w-12 h-12 text-blue-400 mb-4" />
      <h4 class="text-xl font-semibold text-white mb-2">{{ title }}</h4>
      <p class="text-gray-300">{{ description }}</p>
    </div>
  </template>
  
  <script setup>
  import { BookOpenIcon, PenToolIcon, HeadphonesIcon, CodeIcon } from 'lucide-vue-next'
  
  const props = defineProps({
    icon: String,
    title: String,
    description: String
  })
  
  const icon = {
    BookOpen: BookOpenIcon,
    PenTool: PenToolIcon,
    Headphones: HeadphonesIcon,
    Code: CodeIcon
  }[props.icon]
  </script>