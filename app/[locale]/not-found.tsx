import Link from "next/link";
import {useTranslations} from "next-intl";

export default function NotFound() {
	const t = useTranslations("notFound");

	return (
		<div className='flex min-h-screen flex-col items-center justify-center gap-4 text-center'>
			<h1 className='text-4xl font-bold'>{t("title")}</h1>

			<p className='text-muted-foreground'>{t("description")}</p>

			<Link
				href='/'
				className='mt-4 rounded-xl bg-black px-4 py-2 text-white hover:opacity-80 transition'
			>
				{t("homeButton")}
			</Link>
		</div>
	);
}
