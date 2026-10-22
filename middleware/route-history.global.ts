export default defineNuxtRouteMiddleware((to, from) => {
  // Sahifalar o'rtasida navigatsiya qilinganda scroll holatini va tashrif tarixini boshqarish
  if (typeof window !== 'undefined') {
    // Scroll maydonini yuqoriga qaytarish
    const scrollContainer = document.getElementById('scrollContainer');
    if (scrollContainer && to.path !== from.path) {
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Foydalanuvchining oxirgi faol bo'limini saqlash
    try {
      localStorage.setItem('novamusic_last_route', to.path);
    } catch (e) {
      // ignore
    }
  }
});
