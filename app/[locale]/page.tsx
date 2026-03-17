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
			<div className='flex justify-center items-center'>
				<div className='max-w-[72rem] w-full' data-scroll-container>
					<section className='mb-16' id='home' data-scroll-section>
						<HomeSection />
					</section>
					<section id='about' data-scroll-section>
						<AboutSection />
					</section>
					<section id='projects' data-scroll-section>
						<ProjectsSection />
					</section>
					<section id='contact' data-scroll-section>
						<ContactSection locale={locale}/>
					</section>
				</div>
			</div>
		</LocomotiveWrapper>
	);
}
