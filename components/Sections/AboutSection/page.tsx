"use client";

import {useTranslations} from "next-intl";
import BadgesCard from "@/components/BadgesCard/BadgesCard";
import BusinessCard from "@/components/BusinessCard/BusinessCard";

const AboutSection = () => {
	const t = useTranslations("about");
	const tLanguages = useTranslations("about.languages");

	const frontendItems = t.raw("frontend.items") as string[];
	const toolsItems = t.raw("tools.items") as string[];

	return (
		<div className='gap-6 px-4 flex flex-col'>
			<div className='flex flex-col md:flex-row gap-4 md:justify-center mb-1 items-center w-full'>
				<BusinessCard />
			</div>

			<div>
				<p className='text-center text-lg font-serif italic'>
					{t("description")}
				</p>
			</div>

			<div className='flex justify-between'>
				<div className='relative flex flex-col gap-4 w-[calc(50%-8px)] items-center p-8 overflow-hidden bg-card border-1 rounded-lg card-new transition-all duration-300'>
					<p className='text-lg font-bold'>{tLanguages("title")}</p>
					<div className='flex w-full items-center flex-col'>
						<div className='flex gap-2'>
							<p>🇧🇷</p>
							<p className='hidden'>{tLanguages("portuguese")}</p>
							<p>-</p>
							<p className='font-bold'>{tLanguages("portugueseLevel")}</p>
						</div>
						<div className='flex gap-2'>
							<p>🏴󠁧󠁢󠁥󠁮󠁧󠁿</p>
							<p className='hidden'>{tLanguages("english")}</p>
							<p>-</p>
							<p className='font-bold'>{tLanguages("englishLevel")}</p>
						</div>
						<div className='flex gap-2'>
							<p>🇵🇷</p>{" "}
							{/* Note: Flag is Puerto Rico; for Spain use 🇪🇸 if preferred */}
							<p className='hidden'>{tLanguages("spanish")}</p>
							<p>-</p>
							<p className='font-bold'>{tLanguages("spanishLevel")}</p>
						</div>
					</div>
				</div>

				<div className='relative flex flex-col gap-1 justify-center w-[calc(50%-8px)] items-center p-8 bg-card border-1 rounded-lg card-new transition-all duration-300'>
					<p className='text-3xl font-bold text-center'>{t("openToWork")}</p>
				</div>
			</div>

			<div className='w-full flex sm:justify-start flex-wrap gap-4 justify-around'>
				<BadgesCard
					title={t("frontend.title")}
					icon='frontEnd'
					items={frontendItems}
				/>
				<BadgesCard title={t("tools.title")} icon='tools' items={toolsItems} />
			</div>
		</div>
	);
};

export default AboutSection;
