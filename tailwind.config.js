/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{vue,js,ts}', // Include Vue and other files for Nuxt pages
    './components/**/*.{vue,js,ts}', // Include Vue and other files for components
    './layouts/**/*.{vue,js,ts}', // Include Vue and other files for layouts
    './plugins/**/*.{js,ts}', // Include plugins
    './nuxt.config.{js,ts}', // Include Nuxt config
    './app.vue', // Include the main app file
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-in-out', // Define fade-in-up animation
        blink: 'blink 1s step-end infinite', // Define blink animation
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' }, // Start faded out and translated down
          '100%': { opacity: 1, transform: 'translateY(0)' }, // End fully visible and in place
        },
        blink: {
          '0%, 100%': { opacity: 1 }, // Fully visible at start and end
          '50%': { opacity: 0 }, // Hidden in the middle of the animation
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Tailwind CSS plugin for form styling
    require('@tailwindcss/typography'), // Plugin for typography utilities
    require('@tailwindcss/aspect-ratio'), // Plugin for aspect ratio utilities
  ],
};
