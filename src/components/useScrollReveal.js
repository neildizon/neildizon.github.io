import { useEffect } from 'react';

export default function useScrollReveal(main, pathname) {
  useEffect(() => {
    if (!main.current || !('IntersectionObserver' in window)) return;
    const sections = [...main.current.querySelectorAll('section')];
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    // An explicit local preview lets us review motion without changing OS settings.
    const preview = ['127.0.0.1', 'localhost'].includes(window.location.hostname)
      && new URLSearchParams(window.location.search).get('motion') === 'preview';
    let observer;
    const reveal = section => {
      section.classList.add('is-revealed');
      observer?.unobserve(section);
    };
    const configure = () => {
      main.current.dataset.motion = preview ? 'preview' : preference.matches ? 'reduced' : 'full';
      observer?.disconnect();
      sections.forEach(section => section.classList.remove('scroll-reveal', 'is-revealed'));
      if (preference.matches && !preview) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => { if (entry.isIntersecting) reveal(entry.target); });
      }, { threshold: 0, rootMargin: '0px 0px -60px 0px' });
      sections.forEach(section => {
        // Keep content already on screen steady; animate only later sections.
        if (section.getBoundingClientRect().top < window.innerHeight - 60) return;
        section.classList.add('scroll-reveal');
        observer.observe(section);
      });
    };
    const handleFocus = event => {
      const section = event.target.closest('section.scroll-reveal');
      if (section) reveal(section);
    };
    configure();
    const content = main.current;
    content.addEventListener('focusin', handleFocus);
    preference.addEventListener('change', configure);
    return () => {
      observer?.disconnect();
      content.removeEventListener('focusin', handleFocus);
      preference.removeEventListener('change', configure);
      sections.forEach(section => section.classList.remove('scroll-reveal', 'is-revealed'));
    };
  }, [main, pathname]);
}
