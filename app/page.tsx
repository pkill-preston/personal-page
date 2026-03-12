import HomeSection from "@/components/Sections/HomeSection/page";
import AboutSection from "@/components/Sections/AboutSection/page";
import ProjectsSection from "@/components/Sections/ProjectsSection/page";
import LocomotiveWrapper from "@/components/LocomotiveWrapper/LocomotiveWrapper";

export default function Page() {
	return (
		<LocomotiveWrapper>
			<div className='flex justify-center items-center'>
				<div className='max-w-[72rem]' data-scroll-container>
					<section className='mb-16' id='home' data-scroll-section>
						<HomeSection />
					</section>

					<section id='about' data-scroll-section>
						<AboutSection />
					</section>
					<section id='projects' data-scroll-section>
						<ProjectsSection />
					</section>
				</div>
			</div>
		</LocomotiveWrapper>
	);
}
