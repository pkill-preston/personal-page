import {useEffect, useRef, useState} from "react";
import {registerInViewKey, setInViewKey} from "./useInViewStore";

let counter = 0;

export function useInView(options?: IntersectionObserverInit, key?: string) {
	const ref = useRef<HTMLDivElement>(null);
	const [isInView, setIsInView] = useState(false);
	const stableKey = useRef<string | null>(null);

	if (stableKey.current === null) {
		stableKey.current = key ?? `auto-${counter++}`;
	}

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const unregister = registerInViewKey(stableKey.current!);

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true);
					setInViewKey(stableKey.current!, true);
					observer.unobserve(el);
				}
			},
			{threshold: 0.15, ...options}
		);

		observer.observe(el);
		return () => {
			observer.disconnect();
			unregister();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {ref, isInView};
}