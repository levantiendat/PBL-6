import { createRouter, createWebHistory } from 'vue-router';
import SignInView from './components/views/SignInView.vue';
import SignUpView from './components/views/SignUpView.vue';

const routes = [
  {
    path: '/login',
    name: 'Login to Account',
    component: SignInView,
  },
  {
    path: '/sign-up',
    name: 'Create a new account',
    component: SignUpView,
  },
  // Đường dẫn mặc định nếu không có URL cụ thể
  {
    path: '/',
    redirect: '/login',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
