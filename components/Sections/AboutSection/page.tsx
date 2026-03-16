import BadgesCard from "@/components/BadgesCard/BadgesCard";
import BusinessCard from "@/components/BusinessCard/BusinessCard";

const AboutSection = () => {
	const frontEnd = ["UI Libraries", "SSR", "Tailwind", "Design System"];
	const tools = ["Linux", "Scrum", "Git", "Agile"];

	return (
		<div className=' gap-6 px-4 flex flex-col'>
			<div className='flex flex-col md:flex-row gap-4 md:justify-center mb-1 items-center w-full'>
				<BusinessCard />
			</div>
			<div>
				<p className='text-center text-lg font-serif italic'>
					Web developer building scalable, performance-focused applications,
					expanding from frontend into full web systems.
				</p>
			</div>
			<div className='flex justify-between'>
				<div className='relative flex flex-col gap-4 w-[calc(50%-8px)] items-center p-8 overflow-hidden bg-card border-1 rounded-lg card-new transition-all duration-300'>
					<p className='text-lg font-bold'>Languages</p>
					<div className='flex w-full items-center flex-col '>
						<div className='flex gap-2'>
							<p>🇧🇷</p>
							<p className='hidden'>Portuguese</p>
							<p>-</p>
							<p className='font-bold'>Native</p>
						</div>
						<div className='flex gap-2'>
							<p>🏴󠁧󠁢󠁥󠁮󠁧󠁿</p>
							<p className='hidden'>English</p>
							<p>-</p>
							<p className='font-bold'>B2</p>
						</div>
						<div className='flex gap-2'>
							<p>🇵🇷</p>
							<p className='hidden'>Spanish</p>
							<p>-</p>
							<p className='font-bold'>A2</p>
						</div>
					</div>
				</div>
				<div className='relative flex flex-col gap-1 justify-center w-[calc(50%-8px)] items-center p-8 bg-card border-1 rounded-lg card-new transition-all duration-300'>
					<p className='text-3xl font-bold text-center'>Open to work</p>
				</div>
			</div>
			<div className='w-full flex sm:justify-start flex-wrap gap-4 justify-around'>
				<BadgesCard title='Frontend' icon='frontEnd' items={frontEnd} />
				<BadgesCard title='Tools' icon='tools' items={tools} />
			</div>
		</div>
	);
};

export default AboutSection;
