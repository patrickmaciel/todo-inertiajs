// import './bootstrap';

// import Alpine from 'alpinejs';
// window.Alpine = Alpine;
// Alpine.start();


import { createApp, h } from "vue";
import { createInertiaApp, Link, Head } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import Layout from '@/Shared/Layout';

createInertiaApp({
    resolve: name => import(`./Pages/${name}`),
//   resolve: (name) => {
    // const page = require(`./Pages/${name}`).default;
    // page.layout = page.layout || Layout;
    // if (page.layout === undefined && !name.startsWith("Public/")) {
    //   page.layout = Layout;
    // }
    // return page;
//   },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component("Link", Link)
      .component("Head", Head)
      .component("BaseLayout", Layout)
      .mount(el);
  },
  title: (title) => `My App - ${title}`,
});

InertiaProgress.init();
