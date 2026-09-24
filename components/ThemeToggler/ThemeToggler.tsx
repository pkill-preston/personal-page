"use client";

import {useTheme} from "next-themes";
import {useRef, useSyncExternalStore} from "react";
import { Toggle } from "@/components/ui/toggle";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";

type ViewTransition = {
	finished: Promise<void>;
};

function useMounted() {
	return useSyncExternalStore(
		() => () => {},
		() => true,
		() => false
	);
}

function prefersReducedMotion() {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ThemeToggler() {
	const {setTheme, resolvedTheme} = useTheme();
	const mounted = useMounted();
	const isTransitioning = useRef(false);

	if (!mounted) return null;

	const isDark = resolvedTheme === "dark";

	const handleToggle = () => {
		if (isTransitioning.current) return;
		const next = isDark ? "light" : "dark";

		const doc = document as Document & {
			startViewTransition?: (cb: () => void) => ViewTransition;
		};

		if (typeof doc.startViewTransition !== "function" || prefersReducedMotion()) {
			setTheme(next);
			return;
		}

		isTransitioning.current = true;
		const transition = doc.startViewTransition(() => setTheme(next));
		transition.finished.finally(() => {
			isTransitioning.current = false;
		});
	};

	return (
		<Toggle
			pressed={isDark}
			onPressedChange={handleToggle}
			aria-label='Toggle dark mode'
			variant={"outline"}
			className='rounded-full cursor-pointer p-2 btn-press'
		>
			<div
				className='transition-transform duration-300 ease-out'
				style={{transform: isDark ? "rotate(360deg) scale(1.1)" : "rotate(0deg) scale(1)"}}
			>
				{isDark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
			</div>
		</Toggle>
	);
}