import Link from "next/link";
import {useTranslations} from "next-intl";

export default function NotFound() {
	const t = useTranslations("notFound");

	return (
		<div className='flex min-h-screen flex-col items-center justify-center gap-4 text-center px-4'>
			<h1 className='text-6xl font-bold tracking-tight anim-scale-in is-visible'>{t("title")}</h1>
			<p className='text-muted-foreground anim-fade-up is-visible'
				style={{"--delay": "150ms"} as React.CSSProperties}
			>
				{t("description")}
			</p>
			<Link
				href='/'
				className='mt-4 rounded-lg bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:bg-primary/90 transition-all duration-200 btn-press anim-fade-up is-visible'
				style={{"--delay": "300ms"} as React.CSSProperties}
			>
				{t("homeButton")}
			</Link>
		</div>
	);
}
