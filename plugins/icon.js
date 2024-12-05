import { RocketIcon, EclipseIcon, AtomIcon} from 'lucide-vue-next';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('RocketIcon', RocketIcon);
  nuxtApp.vueApp.component('EclipseIcon', EclipseIcon);
  nuxtApp.vueApp.component('AtomIcon', AtomIcon);
});
