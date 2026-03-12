"use client";

import {useEffect} from "react";
import Lenis from "lenis";
import {setScrollInstance} from "@/lib/scroll";

export default function LocomotiveWrapper({
	children
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			smoothWheel: true
		});

		setScrollInstance(lenis);

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
}
