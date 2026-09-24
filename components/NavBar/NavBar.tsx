"use client";

import {useEffect, useState} from "react";
import {Button} from "../ui/button";
import {
	CodeIcon,
	EnvelopeIcon,
	HouseIcon,
	IdentificationCardIcon,
	ListIcon,
	XIcon
} from "@phosphor-icons/react";
import {ThemeToggler} from "../ThemeToggler/ThemeToggler";
import {scrollTo} from "@/lib/scroll";
import { useTranslations } from "next-intl";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { cn } from "@/lib/utils";

export function useIsMobile() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const check = () => setIsMobile(window.innerWidth < 768);
		check();
		window.addEventListener("resize", check);
		return () => window.removeEventListener("resize", check);
	}, []);

	return isMobile;
}

const NavBar = () => {
	const t = useTranslations("nav");
	const isMobile = useIsMobile();

	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const sections = ["home", "about", "projects", "contact"];
		const observers: IntersectionObserver[] = [];

		sections.forEach((id) => {
			const el = document.getElementById(id);
			if (!el) return;

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						setActiveSection(id);
					}
				},
				{rootMargin: "-20% 0px -60% 0px"}
			);

			observer.observe(el);
			observers.push(observer);
		});

		return () => observers.forEach((o) => o.disconnect());
	}, []);

	const navLinks = [
		{id: "home", label: t("home"), offset: undefined},
		{id: "about", label: t("about"), offset: -90},
		{id: "projects", label: t("projects"), offset: -90},
		{id: "contact", label: t("contact"), offset: undefined},
	];

	return (
		<>
			<div className='fixed top-0 left-1/2 -translate-x-1/2 max-w-[72rem] w-full z-50 px-4 pt-3 md:px-6 md:pt-4'>
				<div
					className={cn(
						"transition-all duration-500 ease-out rounded-2xl",
						scrolled
							? "backdrop-blur-xl bg-card/60 shadow-lg border"
							: "bg-transparent border-transparent"
					)}
				>
					<div className='flex items-center justify-between px-4 py-3'>
						<p
							onClick={() => scrollTo(0)}
							className='text-lg font-medium cursor-pointer hover:text-primary transition-colors duration-200'
						>
							Heron
						</p>

						<div className='flex items-center gap-3'>
							{isMobile ? (
								<>
									<LanguageSelector />
									<ThemeToggler />

									<Button
										variant='outline'
										size='icon'
										onClick={() => setIsOpen(!isOpen)}
										className='rounded-full transition-all duration-300 relative bg-card overflow-hidden btn-press'
									>
										<div className='transition-transform duration-300 ease-out'
											style={{transform: isOpen ? "rotate(90deg)" : "rotate(0deg)"}}
										>
											{isOpen ? <XIcon size={18} /> : <ListIcon size={18} />}
										</div>
									</Button>
								</>
							) : (
								<>
									<div className='flex gap-1 items-center'>
										{navLinks.map((link) => (
											<p
												key={link.id}
												onClick={() =>
													scrollTo(`#${link.id}`, {
														offset: link.offset,
													})
												}
												className={cn(
													"text-sm px-3 py-1.5 rounded-lg cursor-pointer transition-all duration-200",
													activeSection === link.id
														? "text-primary font-medium bg-primary/10"
														: "text-muted-foreground hover:text-foreground hover:bg-muted/50"
												)}
											>
												{link.label}
											</p>
										))}
									</div>

									<div className='flex items-center gap-2 ml-2'>
										<LanguageSelector />
										<ThemeToggler />
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>

			<div className='h-16' />

			{isMobile && (
				<div
					className={cn(
						"fixed top-[68px] left-4 right-4 z-40",
						"bg-card rounded-2xl shadow-lg border",
						"transition-all duration-300 ease-out",
						isOpen
							? "opacity-100 translate-y-0 scale-100"
							: "opacity-0 -translate-y-3 scale-95 pointer-events-none"
					)}
				>
					<div className='grid grid-cols-2 gap-3 p-4'>
						{navLinks.map((link, index) => {
							const icons = {
								home: HouseIcon,
								about: IdentificationCardIcon,
								projects: CodeIcon,
								contact: EnvelopeIcon,
							};
							const Icon = icons[link.id as keyof typeof icons];

							return (
								<div
									key={link.id}
									onClick={() => {
										setIsOpen(false);
										scrollTo(`#${link.id}`, {
											offset: link.offset,
										});
									}}
									className={cn(
										"h-20 border rounded-xl flex flex-col justify-center items-center cursor-pointer transition-all duration-200 gap-1 btn-press",
										activeSection === link.id
											? "border-primary bg-primary/10 text-primary"
											: "hover:bg-muted/50"
									)}
									style={{
										transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
									}}
								>
									<Icon size={24} />
									<p className='text-sm'>{link.label}</p>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default NavBar;
