import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({
  duration: 2,
  easing: (t) => t,
});

export const scrollToSection = (selector: string) => {
  const target = document.querySelector(selector);
  if (target) {
    lenis.scrollTo(target as HTMLElement); 
  }
};
