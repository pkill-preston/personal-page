import {use} from "react";

import HomeSection from "@/components/Sections/HomeSection/page";
import AboutSection from "@/components/Sections/AboutSection/page";
import ProjectsSection from "@/components/Sections/ProjectsSection/page";
import LocomotiveWrapper from "@/components/LocomotiveWrapper/LocomotiveWrapper";
import ContactSection from "@/components/Sections/ContactSection/page";

import {setRequestLocale} from "next-intl/server";


export default function Page({params} : {params: Promise<{locale: string}>}) {
	const { locale } = use(params);

	setRequestLocale(locale);

	return (
		<LocomotiveWrapper>
			<div className='flex justify-center'>
				<div className='max-w-[72rem] w-full px-4 md:px-6' data-scroll-container>
					<section id='home' data-scroll-section>
						<HomeSection />
					</section>
					<section id='about' className='py-16' data-scroll-section>
						<AboutSection />
					</section>
					<section id='projects' className='py-16' data-scroll-section>
						<ProjectsSection />
					</section>
					<section id='contact' className='py-16' data-scroll-section>
						<ContactSection locale={locale}/>
					</section>
				</div>
			</div>
		</LocomotiveWrapper>
	);
}
