import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export const setScrollInstance = (instance: Lenis) => {
	lenisInstance = instance;
};

export interface ScrollToOptions {
	offset?: number;
	lerp?: number;
	duration?: number;
	immediate?: boolean;
	lock?: boolean;
	force?: boolean;
	easing?: (t: number) => number;
	onComplete?: () => void;
}

export const scrollTo = (
  target: number | string | HTMLElement,
  options?: ScrollToOptions
) => {
  if (!lenisInstance) return;

  lenisInstance.scrollTo(target, options);
};
