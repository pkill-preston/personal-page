"use client";

import React from "react";
import {useTranslations} from "next-intl";

const Footer = () => {
	const t = useTranslations("footer");
	const year = new Date().getFullYear();

	return (
		<footer className='w-full bg-card border-t'>
			<div className='max-w-[72rem] mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center gap-4 md:justify-between anim-fade-in is-visible'>
				<p className='text-sm text-muted-foreground'>{t("copyright", {year})}</p>
				<div className='flex gap-4'>
					<a
						className='text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-y-[-1px]'
						href='https://github.com/pkill-preston'
						target='_blank'
						rel='noopener noreferrer'
					>
						Github
					</a>
					<a
						className='text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-y-[-1px]'
						href='https://www.linkedin.com/in/heron-lorena/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Linkedin
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
