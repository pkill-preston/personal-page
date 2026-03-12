"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {Toggle} from "@/components/ui/toggle";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";

export function ThemeToggler() {
	const {theme, setTheme} = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const isDark = theme === "dark";

	return (
		<Toggle
			pressed={isDark}
			onPressedChange={() => setTheme(isDark ? "light" : "dark")}
			aria-label='Toggle dark mode'
			variant={"outline"}
			className='relative bg-card overflow-hidden data-[state=on]:bg-muted rounded-full cursor-pointer'
		>
			{isDark ? <SunIcon size={18} /> : <MoonIcon size={18} />}
		</Toggle>
	);
}
