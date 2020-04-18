import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Angel Bejarano | Software Development',
      metaTags: [
        {
          name: 'description',
          content: 'Consultoria em tecnologia, desenvolvimento de aplicativos móveis e páginas da web. Tudo o que você precisa para dar vida à sua ideia de negócio',
        },
        {
          property: 'og:description',
          content: 'Consultoria em tecnologia, desenvolvimento de aplicativos móveis e páginas da web. Tudo o que você precisa para dar vida à sua ideia de negócio',
        },
      ],
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});


router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) { document.title = nearestWithTitle.meta.title; }

  // Remove any stale meta tags from the document using the key attribute we set below.
  // tslint:disable-next-line:max-line-length
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map( (el: any) => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) { return next(); }

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map( (tagDef: any) => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach( (key: any) => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
    // Add the meta tags to the document head.
    .forEach( (tag: any) => document.head.appendChild(tag));

  next();
});
export default router;
