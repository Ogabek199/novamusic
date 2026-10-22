export default defineNuxtRouteMiddleware((to, from) => {
  // Named middleware: Foydalanuvchi akkaunti yoki shaxsiy pleylistlar uchun himoya
  // Kelajakda foydalanuvchi tizimga kirmagan bo'lsa, yo'naltirish imkoniyati
  const isAuthenticated = true; // Hozircha PWA ommaviy ochiq

  if (!isAuthenticated && to.path.startsWith('/profile')) {
    return navigateTo('/');
  }
});
