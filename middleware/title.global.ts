export default defineNuxtRouteMiddleware((to) => {
  const titles: Record<string, string> = {
    '/': 'NovaMusic - Musiqa va Trendlar',
    '/search': 'NovaMusic - Qidiruv',
    '/history': 'NovaMusic - Eshitilganlar Tarixi',
    '/settings': 'NovaMusic - Sozlamalar va Parametrlar'
  };

  const pageTitle = titles[to.path] || 'NovaMusic - Apple Music PWA';

  useHead({
    title: pageTitle
  });
});
