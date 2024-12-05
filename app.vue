<template>
  <div class="min-h-screen bg-gray-900 text-white overflow-hidden">
    <!-- Navigation -->
    <nav class="navbar fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
    <div class="container mx-auto px-6 py-3 flex items-center justify-between">
      <!-- Logo -->
      <div class="text-xl font-bold text-white">My Personal Portfolio</div>

      <!-- Hamburger Icon for Small Screens -->
      <button
        @click="toggleMenu"
        class="lg:hidden focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <!-- Full Menu for Large Screens -->
      <div class="hidden lg:flex space-x-6">
        <a
          v-for="item in navItems"
          :key="item"
          :href="`#${item.toLowerCase()}`"
          @click.prevent="scrollToSection(item.toLowerCase())"
          class="nav-item text-white hover:text-yellow-400 transition-colors duration-300"
        >
          {{ item }}
        </a>
      </div>

      <!-- Dropdown Menu for Small Screens -->
      <div
        v-if="isMenuOpen"
        class="lg:hidden absolute top-16 left-0 right-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-lg rounded-lg p-4 flex flex-col space-y-4"
      >
        <a
          v-for="item in navItems"
          :key="item"
          :href="`#${item.toLowerCase()}`"
          @click.prevent="scrollToSection(item.toLowerCase())"
          class="nav-item text-white hover:text-yellow-400 transition-colors duration-300"
        >
          {{ item }}
        </a>
      </div>
    </div>
  </nav>

<!--Hero Section-->
<section id="home" class="relative h-screen flex items-center justify-center overflow-hidden text-white dynamic-bg">
  <!-- Dynamic background -->
  <div class="absolute inset-0 overflow-hidden parallax-bg">
    <div v-for="i in 100" :key="i" class="star"></div>
  </div>

  <!-- Main content -->
  <div class="text-center z-10 max-w-4xl px-4">
    <h1 class="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
      <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Cyrel John Rollo
      </span>
    </h1>
    <p class="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">
      <span id="dynamic-title" class="inline-block">
        {{ dynamicTitle }}
      </span>
      <span class="inline-block w-1 h-8 bg-blue-500 animate-blink ml-1"></span>
    </p>

    <a
      href="#about"
      @click.prevent="scrollToSection('about')"
      class="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold rounded-full bg-blue-500 text-white transition-all duration-300 ease-out hover:bg-blue-600 animate-fade-in-up animation-delay-600"
    >
      <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-600 group-hover:translate-x-0 ease">
        <RocketIcon class="w-6 h-6" />
      </span>
      <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Explore Cyrel's Universe!</span>
      <span class="relative invisible">Explore Cyrel's Universe!</span>
    </a>
  </div>

  <!-- Floating elements -->
  <div class="absolute bottom-10 left-10 animate-float">
    <RocketIcon class="w-12 h-12 text-purple-400 opacity-50" />
  </div>
  <div class="absolute top-1/4 right-1/4 animate-pulse">
    <EclipseIcon class="w-12 h-12 text-purple-400 opacity-50" />
  </div>
  <div class="absolute bottom-1/4 left-1/4 animate-spin-slow">
    <AtomIcon class="w-10 h-10 text-green-400 opacity-50" />
  </div>
</section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-900 relative overflow-hidden">
    <!-- Space background with stars and planets -->
    <div class="absolute inset-0 overflow-hidden">
      <div v-for="i in 100" :key="i" class="star"></div>
      <div class="planet planet-1"></div>
      <div class="planet planet-2"></div>
      <div class="planet planet-3"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <h2 class="text-5xl font-bold mb-16 text-center">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
          About The Explorer
        </span>
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Profile Section -->
        <div class="space-y-8 animate-fade-in-up">
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-300"></div>
            <img 
              src="./assets/matching icons (1).jpg" 
              alt="Cyrel John Rollo" 
              class="rounded-full w-64 h-64 object-cover mx-auto relative z-10 group-hover:scale-105 transition-transform duration-300" 
            />
          </div>
          <div class="text-center">
            <h3 class="text-3xl font-semibold text-white mb-2">Cyrel John Rollo</h3>
            <p class="text-xl text-blue-400 font-light">Cosmic Code Voyager</p>
          </div>
          <div class="flex justify-center space-x-4">
            <a href="https://github.com/Kazehayaaaa" class="text-gray-400 hover:text-white transition-colors duration-300">
              <GithubIcon class="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/cyrel-john-rollo-075610333/" class="text-gray-400 hover:text-white transition-colors duration-300">
              <LinkedinIcon class="w-6 h-6" />
            </a>
            <a href="https://x.com/CyreljohnR26932" class="text-gray-400 hover:text-white transition-colors duration-300">
              <TwitterIcon class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Bio Section -->
        <div class="space-y-8 animate-fade-in-up animation-delay-300">
          <p class="text-lg text-gray-300 leading-relaxed">
            Greetings, fellow space enthusiasts and code explorers! I'm Cyrel, a web developer with an insatiable curiosity for the digital universe. Just as astronomers chart the cosmos, I navigate the vast expanse of web technologies, always seeking new frontiers to explore.
          </p>
          <p class="text-lg text-gray-300 leading-relaxed">
            My mission? To craft digital experiences that are as awe-inspiring as a supernova and as seamless as the orbit of a well-tuned satellite. With each project, I aim to push the boundaries of what's possible, much like how space missions continually expand our understanding of the universe.
          </p>
          <div class="bg-gray-800 bg-opacity-50 rounded-lg p-6 backdrop-filter backdrop-blur-sm">
            <h4 class="text-2xl font-semibold text-white mb-4">Cosmic Skills</h4>
            <div class="flex flex-wrap gap-3">
              <TechBadge v-for="tech in technologies" :key="tech" :name="tech" />
            </div>
          </div>
        </div>
      </div>

      <!-- Journey Timeline -->
      <div class="mt-20 relative">
        <h3 class="text-3xl font-semibold text-white text-center mb-12">My Interstellar Journey</h3>
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500 opacity-20"></div>
        <div class="space-y-12">
          <TimelineItem year="2018" event="Launched into the coding universe with HTML & CSS" />
          <TimelineItem year="2019" event="First contact: Built my inaugural personal portfolio" side="right" />
          <TimelineItem year="2020" event="Explored the JavaScript nebula and discovered Vue.js" />
          <TimelineItem year="2021" event="Mission accomplished: Launched first freelance project" side="right" />
        </div>
      </div>

      <!-- Other Interests -->
      <div class="mt-20 bg-gray-800 bg-opacity-50 rounded-lg p-8 backdrop-filter backdrop-blur-sm">
        <h3 class="text-3xl font-semibold text-white text-center mb-8">Other Cosmic Pursuits</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InterestCard icon="BookOpen" title="Sci-Fi Exploration" description="Discovering new worlds through books and movies" />
          <InterestCard icon="PenTool" title="Cosmic Sketching" description="Visualizing ideas for future projects" />
          <InterestCard icon="Headphones" title="Space Soundscapes" description="Immersing in space-themed music and podcasts" />
          <InterestCard icon="Code" title="Coding Challenges" description="Pushing the boundaries of creative coding" />
        </div>
      </div>

      <!-- Testimonial -->
      <div class="mt-20 text-center">
        <div class="relative">
          <QuoteIcon class="absolute top-0 left-0 text-blue-500 opacity-25 w-16 h-16 -translate-x-1/2 -translate-y-1/2" />
          <blockquote class="text-2xl italic text-gray-300 mb-6 relative z-10">
            "Cyrel is an exceptional developer whose passion for the craft is unmatched. He brings creativity and technical expertise to every project."
          </blockquote>
        </div>
        <p class="text-xl text-blue-400 font-light">- Satisfied Client, Tech Innovators Inc.</p>
      </div>
    </div>
  </section>


    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-gray-900 relative overflow-hidden">
    <!-- Space background -->
    <div class="absolute inset-0">
      <div class="stars"></div>
      <div class="twinkling"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <h2 class="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Cosmic Creations
        </span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="project.title" 
          class="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl group"
          :class="{ 'animate-fade-in-up': true }"
          :style="{ animationDelay: `${index * 200}ms` }"
        >
          <div class="relative overflow-hidden">
            <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 class="text-xl font-bold mb-2 text-white">{{ project.title }}</h3>
              <p class="text-gray-300 mb-4">{{ project.description }}</p>
              <div class="flex space-x-4">
                <a 
                  :href="project.link" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1"
                >
                  <span>Live Demo</span>
                  <ExternalLinkIcon class="w-4 h-4" />
                </a>
                <a 
                  :href="project.github" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1"
                >
                  <GithubIcon class="w-4 h-4" />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
          <div class="p-6">
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in project.technologies" 
                :key="tech" 
                class="px-2 py-1 bg-blue-900 text-blue-200 text-xs rounded-full"
              >
                {{ tech }}
              </span>
            </div>
          </div>
          <div class="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-lg transition-colors duration-300"></div>
        </div>
      </div>
    </div>

    <!-- Floating astronaut -->
    <div class="hidden lg:block absolute bottom-10 right-10 w-32 h-32 animate-float">
      <img src="./assets/rb_12571.png" alt="Floating Astronaut" class="w-full h-full" />
    </div>

    <!-- Planets -->
    <div class="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-purple-500 opacity-25 animate-pulse"></div>
    <div class="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-blue-500 opacity-25 animate-pulse"></div>
  </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-900 relative overflow-hidden">
    <!-- Space background -->
    <div class="absolute inset-0">
      <div class="stars"></div>
      <div class="twinkling"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <h2 class="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Contact Mission Control
        </span>
      </h2>

      <div class="max-w-4xl mx-auto bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-2xl">
        <div class="md:flex">
          <!-- Contact Form -->
          <div class="md:w-1/2 p-8">
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required 
                  class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required 
                  class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  required 
                  rows="4" 
                  class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition-all duration-300"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <span class="flex items-center justify-center">
                  <RocketIcon class="w-5 h-5 mr-2" />
                  Launch Message
                </span>
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="md:w-1/2 bg-gradient-to-br from-blue-900 to-purple-900 p-8 flex flex-col justify-between">
            <div>
              <h3 class="text-2xl font-bold text-white mb-6">Cosmic Coordinates</h3>
              <ul class="space-y-4">
                <li class="flex items-center text-gray-300">
                  <MapPinIcon class="w-5 h-5 mr-3 text-blue-400" />
                  <span>Agusan del Norte, Butuan City, Baan Riverside</span>
                </li>
                <li class="flex items-center text-gray-300">
                  <MailIcon class="w-5 h-5 mr-3 text-blue-400" />
                  <a href="mailto:contact@example.com" class="hover:text-blue-400 transition-colors">cyreljohndrollo@gmail.com</a>
                </li>
                <li class="flex items-center text-gray-300">
                  <PhoneIcon class="w-5 h-5 mr-3 text-blue-400" />
                  <span>(+63) 915 345 4871</span>
                </li>
              </ul>
            </div>
            <div class="mt-8">
              <h4 class="text-xl font-semibold text-white mb-4">Connect on the Intergalactic Web</h4>
              <div class="flex space-x-4">
                <a href="https://github.com/Kazehayaaaa" class="text-gray-300 hover:text-blue-400 transition-colors">
                  <GithubIcon class="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/cyrel-john-rollo-075610333/" class="text-gray-300 hover:text-blue-400 transition-colors">
                  <LinkedinIcon class="w-6 h-6" />
                </a>
                <a href="https://x.com/CyreljohnR26932" class="text-gray-300 hover:text-blue-400 transition-colors">
                  <TwitterIcon class="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative elements -->
    <div class="hidden md:block absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div class="hidden md:block absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div class="hidden md:block absolute bottom-1/2 right-1/4 w-56 h-56 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

    <!-- Floating astronaut -->
    <div class="hidden lg:block absolute top-1/4 left-10 w-24 h-24 animate-float">
      <img src="./assets/rb_12571.png" alt="Floating Astronaut" class="w-full h-full" />
    </div>
  </section>

    <!-- Footer -->
    <footer class="bg-gray-900 py-6">
      <div class="container mx-auto px-6 text-center">
        <p>&copy; {{ new Date().getFullYear() }} Cyrel John Rollo. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RocketIcon, MapPinIcon, MailIcon, PhoneIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-vue-next';
import TechBadge from './assets/vue/Techbadge.vue';
import TimelineItem from './assets/vue/TimelineItem.vue';
import InterestCard from './assets/vue/InterestCard.vue';

// Navigation Data
const isMenuOpen = ref(false);
const navItems = ['Home', 'About', 'Projects', 'Contact'];

// Technologies
const technologies = ref([
  'Vue.js', 'React', 'Node.js', 'Tailwind CSS', 'GraphQL', 'TypeScript', 'Docker', 'AWS',
]);

// Projects Data
const projects = ref([
  {
    title: 'Nebula To-do-List',
    description: 'An interactive star map for amateur astronomers',
    image: '/assets/Screenshot 2024-12-04 142601.png',
    link: 'https://example.com/nebula-navigator',
    github: 'https://github.com/yourusername/nebula-navigator',
    technologies: ['Vue.js', 'Three.js', 'NASA API'],
  },
  {
    title: 'Cosmic Code Portfolio',
    description: 'A sleek, space-themed code editor for web developers',
    image: '/assets/cosmic-code-editor.jpg',
    link: 'https://example.com/cosmic-code-editor',
    github: 'https://github.com/yourusername/cosmic-code-editor',
    technologies: ['Vue.js', 'Monaco Editor', 'Electron'],
  },
  {
    title: 'Martian Weather App',
    description: 'Real-time weather updates from the red planet',
    image: '/assets/martian-weather.jpg',
    link: 'https://example.com/martian-weather',
    github: 'https://github.com/yourusername/martian-weather',
    technologies: ['Vue.js', 'Tailwind CSS', 'NASA API'],
  },
]);

// Typing Effect Variables and Logic
const titles = ref(['Full-Stack Developer', 'UI/UX Enthusiast', 'Tech Explorer']);
const dynamicTitle = ref('');
const currentTitleIndex = ref(0);
let charIndex = 0;
let typingTimeout;

const startTypingEffect = () => {
  const typeNextChar = () => {
    if (charIndex < titles.value[currentTitleIndex.value].length) {
      dynamicTitle.value += titles.value[currentTitleIndex.value][charIndex];
      charIndex++;
      typingTimeout = setTimeout(typeNextChar, 100);
    } else {
      typingTimeout = setTimeout(() => {
        dynamicTitle.value = '';
        currentTitleIndex.value = (currentTitleIndex.value + 1) % titles.value.length;
        charIndex = 0;
        typeNextChar();
      }, 2000);
    }
  };
  typeNextChar();
};

// Contact Form Variables and Handler
const form = ref({
  name: '',
  email: '',
  message: '',
});

const submitForm = () => {
  console.log('Form submitted:', form.value);
  form.value = { name: '', email: '', message: '' }; // Reset form
};

// Smooth Scroll Function
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    isMenuOpen.value = false; // Close menu after selecting an item
  }
};

// Intersection Observer for Scroll Animations
const setupScrollAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });
};

// Scroll Handling
const isScrolled = ref(false); // Tracks if the user has scrolled
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50; // Change color when scrolled more than 50px
};

// Menu Toggle Handler
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Lifecycle Hooks
onMounted(() => {
  startTypingEffect();
  setupScrollAnimations();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  clearTimeout(typingTimeout); // Clean up timeout when component is destroyed
});
</script>


<style scoped lang="scss">
@use 'sass:math';

/* ----------------------------- General Styling ----------------------------- */
.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  animation: twinkle 5s infinite;
  box-shadow: 0 0 5px white;
}

.star:nth-child(odd) {
  background: #4299e1; /* blue-500 */
}

.star:nth-child(even) {
  background: #9f7aea; /* purple-500 */
}

/* Dynamic star properties */
@for $i from 1 through 100 {
  .star:nth-child(#{$i}) {
    $size: math.random(3) + 1; // Random size from 1px to 3px
    width: #{$size}px;
    height: #{$size}px;
    left: math.random(100) * 1vw; // Random position
    top: math.random(100) * 1vh;  // Random position
    animation-delay: math.random(5000) * 1ms; // Random animation delay
  }
}

/* ----------------------------- Background Effects ----------------------------- */
.dynamic-bg {
  background: linear-gradient(90deg, #0f2027, #203a43, #2c5364);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

.stars, .twinkling {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.stars {
  background: #000 url('/assets/stars.png') repeat top center;
  z-index: 0;
}

.twinkling {
  background: transparent url('/assets/twinkling.png') repeat top center;
  z-index: 1;
  animation: move-twink-back 200s linear infinite;
}

/* ------------------------------ Animations ------------------------------ */
@keyframes twinkle {
  0%, 100% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes parallax {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-50px);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

/* ---------------------------- Animation Classes ---------------------------- */
.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
  opacity: 0;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animate-blink {
  animation: blink 0.7s infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin 20s linear infinite;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradientShift 5s ease infinite;
}

.animate-blob {
  animation: blob 7s infinite;
}

/* ---------------------------- Planet Styling ---------------------------- */
.planet {
  position: absolute;
  border-radius: 50%;
  opacity: 0.2;
}

.planet-1 {
  width: 100px;
  height: 100px;
  background: radial-gradient(circle at 30% 30%, #4299e1, #1a202c);
  top: 10%;
  left: 5%;
  animation: orbit 30s linear infinite;
}

.planet-2 {
  width: 60px;
  height: 60px;
  background: radial-gradient(circle at 30% 30%, #ed64a6, #1a202c);
  bottom: 15%;
  right: 10%;
  animation: orbit 20s linear infinite reverse;
}

.planet-3 {
  width: 40px;
  height: 40px;
  background: radial-gradient(circle at 30% 30%, #48bb78, #1a202c);
  top: 50%;
  right: 20%;
  animation: orbit 25s linear infinite;
}

@keyframes orbit {
  from {
    transform: rotate(0deg) translateX(50px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(50px) rotate(-360deg);
  }
}

/* ---------------------------- Text & Navbar ---------------------------- */
h1 {
  font-size: clamp(2rem, 5vw, 5rem);
}

.bg-blue-600 {
  background-color: #2563eb; /* Tailwind blue-600 */
}

.text-white {
  color: #ffffff;
}

.text-gray-300 {
  color: #d1d5db; /* Tailwind gray-300 */
}

.navbar {
  background: linear-gradient(90deg, #ff7f50, #1e90ff, #32cd32, #ff1493);
  background-size: 400% 400%;
  animation: runningColors 6s linear infinite;
  color: white;
}

.nav-item {
  transition: color 0.3s ease;
}

.nav-item:hover {
  color: #ffd700; /* Change text color on hover */
}

.transition-colors {
  transition: color 0.3s ease, background-color 0.3s ease;
}

/* ------------------------------ Dropdown Styling ------------------------------ */
.lg-hidden {
  display: none;
}

@media (max-width: 1024px) {
  /* For small devices (mobile/tablets) */
  .lg-hidden {
    display: block;
  }
  .nav-item {
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
  }
}

@keyframes runningColors {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>


