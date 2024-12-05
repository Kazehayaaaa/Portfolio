<template>
    <div class="flex items-center" :class="side === 'right' ? 'flex-row-reverse' : ''">
      <div class="w-5/12">
        <div :class="[
          'p-4 rounded-lg shadow-lg transition-all duration-300 hover:transform hover:scale-105',
          side === 'right' ? 'bg-purple-900 bg-opacity-50 ml-8' : 'bg-blue-900 bg-opacity-50 mr-8'
        ]">
          <h4 class="text-xl font-semibold text-white mb-2">{{ year }}</h4>
          <p class="text-gray-300">{{ event }}</p>
        </div>
      </div>
      <div class="w-2/12 flex justify-center">
        <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
      </div>
      <div class="w-5/12"></div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    year: String,
    event: String,
    side: {
      type: String,
      default: 'left'
    }
  })
  </script>