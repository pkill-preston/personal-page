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

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<div className='fixed top-0 left-1/2 -translate-x-1/2 max-w-[70rem] w-full z-50 px-4 pt-4 xl:px-0'>
				<div
					className={`
            transition-all duration-300 ease-in-out
            ${
							scrolled
								? "backdrop-blur-xl bg-card/60 shadow-lg border rounded-2xl"
								: "bg-transparent"
						}
          `}
				>
					<div className='flex items-center justify-between p-4'>
						<div>
							<p
								onClick={() => scrollTo(0)}
								className='text-lg cursor-pointer hover:text-[#7FBBFF]'
							>
								Heron
							</p>
						</div>

						<div className='flex items-center gap-4'>
							{isMobile ? (
								<>
									<LanguageSelector />
									<ThemeToggler />

									<Button
										variant='outline'
										size='icon'
										onClick={() => setIsOpen(!isOpen)}
										className='rounded-full transition-all duration-300 relative bg-card overflow-hidden'
									>
										{isOpen ? <XIcon /> : <ListIcon />}
									</Button>
								</>
							) : (
								<>
									<div className='flex gap-6 items-center'>
										<p
											onClick={() => scrollTo("#home")}
											className='text-lg hover:text-[#7FBBFF] cursor-pointer'
										>
											{t("home")}
										</p>

										<p
											onClick={() => scrollTo("#about", {offset: -90})}
											className='text-lg hover:text-[#7FBBFF] cursor-pointer'
										>
											{t("about")}
										</p>

										<p
											onClick={() => scrollTo("#projects", {offset: -90})}
											className='text-lg hover:text-[#7FBBFF] cursor-pointer'
										>
											{t("projects")}
										</p>

										<p
											onClick={() => scrollTo("#contact")}
											className='text-lg hover:text-[#7FBBFF] cursor-pointer'
										>
											{t("contact")}
										</p>
									</div>

									<LanguageSelector />
									<ThemeToggler />
								</>
							)}
						</div>
					</div>
				</div>
			</div>

			<div className='h-17' />

			{isMobile && (
				<div
					className={`
            fixed top-[96px] left-4 right-4 z-40
            bg-card
            rounded-2xl
            shadow-lg
            border
            transition-all duration-500 ease-in-out
            ${
							isOpen
								? "opacity-100 translate-y-0"
								: "opacity-0 -translate-y-2 pointer-events-none"
						}
          `}
				>
					<div className='flex gap-6 justify-between flex-wrap p-4'>
						<div
							onClick={() => {
								setIsOpen(false);
								scrollTo(0);
							}}
							className='w-[calc(48%-8px)] h-24 border rounded-lg flex flex-col justify-center items-center cursor-pointer transition-all duration-300'
						>
							<HouseIcon size={32} />
							<p>{t("home")}</p>
						</div>

						<div
							onClick={() => {
								setIsOpen(false);
								scrollTo("#about", {offset: -90});
							}}
							className='w-[calc(48%-8px)] h-24 border rounded-lg flex flex-col justify-center items-center cursor-pointer transition-all duration-300'
						>
							<IdentificationCardIcon size={32} />
							<p>{t("about")}</p>
						</div>

						<div
							onClick={() => {
								setIsOpen(false);
								scrollTo("#projects", {offset: -90});
							}}
							className='w-[calc(48%-8px)] h-24 border rounded-lg flex flex-col justify-center items-center cursor-pointer transition-all duration-300'
						>
							<CodeIcon size={32} />
							<p>{t("projects")}</p>
						</div>

						<div
							onClick={() => {
								setIsOpen(false);
								scrollTo("#contact");
							}}
							className='w-[calc(48%-8px)] h-24 border rounded-lg flex flex-col justify-center items-center cursor-pointer transition-all duration-300'
						>
							<EnvelopeIcon size={32} />
							<p>{t("contact")}</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default NavBar;
