import { Router } from 'vue-router';

export function createPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    next();
  });
}