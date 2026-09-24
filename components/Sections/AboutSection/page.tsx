"use client";

import {useTranslations} from "next-intl";
import BadgesCard from "@/components/BadgesCard/BadgesCard";
import BusinessCard from "@/components/BusinessCard/BusinessCard";
import {useInView} from "@/lib/hooks/useInView";
import {cn} from "@/lib/utils";

function LanguageRow({
	flag,
	name,
	level,
	bars,
}: {
	flag: string;
	name: string;
	level: string;
	bars: number;
}) {
	return (
		<div className='flex items-center gap-3'>
			<span className='text-xl shrink-0'>{flag}</span>
			<div className='flex flex-col gap-1 flex-1 min-w-0'>
				<div className='flex items-center justify-between'>
					<p className='text-sm font-medium truncate'>{name}</p>
					<p className='text-xs text-muted-foreground shrink-0'>{level}</p>
				</div>
				<div className='flex gap-1'>
					{Array.from({length: 5}).map((_, i) => (
						<div
							key={i}
							className={cn(
								"h-1.5 flex-1 rounded-full transition-all duration-500",
								i < bars ? "bg-primary" : "bg-muted"
							)}
							style={{transitionDelay: `${i * 60}ms`}}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

const AboutSection = () => {
	const t = useTranslations("about");
	const tLanguages = useTranslations("about.languages");

	const frontendItems = t.raw("frontend.items") as string[];
	const toolsItems = t.raw("tools.items") as string[];

	const {ref: sectionRef, isInView} = useInView(undefined, "about");
	const {ref: cardsRef, isInView: cardsVisible} = useInView(undefined, "about-cards");
	const {ref: badgesRef, isInView: badgesVisible} = useInView(undefined, "about-badges");

	return (
		<div ref={sectionRef} className='flex flex-col gap-8'>
			<div
				className={cn(
					"flex justify-center anim-scale-in",
					isInView && "is-visible"
				)}
			>
				<BusinessCard />
			</div>

			<p
				className={cn(
					"text-center text-lg font-serif italic text-muted-foreground max-w-xl mx-auto anim-fade-up",
					isInView && "is-visible"
				)}
				style={{"--delay": "150ms"} as React.CSSProperties}
			>
				{t("description")}
			</p>

			<div
				ref={cardsRef}
				className={cn(
					"grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-grid",
					cardsVisible && "is-visible"
				)}
			>
				<div className='card flex flex-col gap-5 p-6'>
					<p className='text-lg font-semibold text-center'>{tLanguages("title")}</p>
					<div className='flex flex-col gap-4 w-full'>
						<LanguageRow
							flag='🇧🇷'
							name={tLanguages("portuguese")}
							level={tLanguages("portugueseLevel")}
							bars={5}
						/>
						<LanguageRow
							flag='🏴󠁧󠁢󠁥󠁮󠁧󠁿'
							name={tLanguages("english")}
							level={tLanguages("englishLevel")}
							bars={3}
						/>
						<LanguageRow
							flag='🇪🇸'
							name={tLanguages("spanish")}
							level={tLanguages("spanishLevel")}
							bars={2}
						/>
					</div>
				</div>

			<div className='card flex flex-col justify-center items-center gap-3 p-6 rainbow-border'>
				<div className='flex items-center gap-2'>
					<span className='relative flex h-3 w-3'>
						<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75' />
						<span className='relative inline-flex rounded-full h-3 w-3 bg-green-500' />
					</span>
					<p className='text-xs font-semibold uppercase tracking-widest text-green-600 dark:text-green-400'>
						{t("available")}
					</p>
				</div>
				<p className='text-2xl font-bold text-center'>{t("openToWork")}</p>
				<p className='text-sm text-muted-foreground text-center max-w-[200px]'>
					{t("openToWorkDescription")}
				</p>
			</div>
			</div>

			<div
				ref={badgesRef}
				className={cn(
					"grid grid-cols-1 md:grid-cols-2 gap-4 stagger-grid",
					badgesVisible && "is-visible"
				)}
			>
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
