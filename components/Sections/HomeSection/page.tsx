"use client";

import {useTranslations} from "next-intl";
import {Button} from "@/components/ui/button";
import {
	ArrowDownIcon,
	EnvelopeSimpleIcon
} from "@phosphor-icons/react/dist/ssr";
import CodeEditor from "@/components/CodeEditor/CodeEditor";
import {scrollTo} from "@/lib/scroll";
import {useInView} from "@/lib/hooks/useInView";
import {cn} from "@/lib/utils";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import DotPattern from "@/components/DotPattern/DotPattern";

const HomeSection = () => {
	const t = useTranslations("hero");
	const {ref: sectionRef, isInView} = useInView(undefined, "hero");

	return (
		<div
			ref={sectionRef}
			className='relative flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-[calc(100vh-64px)] gap-8 pb-8'
		>
			<DotPattern />
			<div className='w-full flex flex-col justify-center items-center lg:w-[45%] gap-3 z-10'>
				<p
					className={cn(
						"text-center text-lg text-muted-foreground anim-fade-up",
						isInView && "is-visible"
					)}
					style={{"--delay": "0ms"} as React.CSSProperties}
				>
					{t("im")}
				</p>
				<SectionTitle
					className={cn(
						"text-5xl md:text-7xl anim-fade-up",
						isInView && "is-visible"
					)}
					style={{"--delay": "100ms"} as React.CSSProperties}
				>
					{t("name")}
				</SectionTitle>
				<p
					className={cn(
						"text-center text-2xl md:text-3xl text-muted-foreground anim-fade-up",
						isInView && "is-visible"
					)}
					style={{"--delay": "200ms"} as React.CSSProperties}
				>
					{t("role")}
				</p>
				<p
					className={cn(
						"text-center text-lg md:text-xl text-muted-foreground max-w-md anim-fade-up",
						isInView && "is-visible"
					)}
					style={{"--delay": "300ms"} as React.CSSProperties}
				>
					{t("description1")}
				</p>
				<p
					className={cn(
						"text-center text-lg md:text-xl font-serif italic text-primary max-w-md anim-fade-up",
						isInView && "is-visible"
					)}
					style={{"--delay": "400ms"} as React.CSSProperties}
				>
					{t("description2")}
				</p>
				<div
					className={cn(
						"mt-4 flex w-full justify-center gap-3 anim-fade-up",
						isInView && "is-visible"
					)}
					style={{"--delay": "500ms"} as React.CSSProperties}
				>
					<Button
						onClick={() =>
							scrollTo("#about", {
								offset: -90
							})
						}
						className='w-[45%] md:w-auto px-6 py-5 text-base btn-press'
						size='lg'
					>
						{t("aboutButton")}
						<ArrowDownIcon size={20} />
					</Button>
					<Button
						className='w-[45%] md:w-auto px-6 py-5 text-base btn-press'
						size='lg'
						variant={"outline"}
						onClick={() => scrollTo("#contact", {offset: -90})}
					>
						{t("contactButton")}
						<EnvelopeSimpleIcon size={20} />
					</Button>
				</div>
			</div>
			<div
				className={cn(
					"hidden lg:block lg:w-[55%] anim-scale-in z-10",
					isInView && "is-visible"
				)}
				style={{"--delay": "300ms"} as React.CSSProperties}
			>
				<CodeEditor />
			</div>
		</div>
	);
};

export default HomeSection;
