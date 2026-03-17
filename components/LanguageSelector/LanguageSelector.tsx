"use client"

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuLabel,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {GlobeIcon} from "@phosphor-icons/react";
import {useRouter} from "next/navigation";
import {useLocale, useTranslations} from "next-intl";

const languages = [
	{flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", code: "en", label: "English"},
	{flag: "🇧🇷", code: "pt", label: "Português"},
	{flag: "🇪🇸", code: "es", label: "Español"}
];

const LanguageSelector = () => {

	const t = useTranslations("languageSelector");

	const router = useRouter();
	const locale = useLocale();

	const handleChange = (newLocale: string) => {
		if (newLocale === locale) return;
		router.replace(`/${newLocale}`);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div className='relative group bg-card rounded-xl overflow-hidden'>
					<div className='p-2 relative border rounded-full cursor-pointer overflow-hidden'>
						<div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300'></div>
						<GlobeIcon size={18} />
					</div>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='flex w-40'>
				<DropdownMenuGroup className='flex w-40 p-2 flex-col'>
					<DropdownMenuLabel className='flex justify-center'>
						{t("selectLanguage")}
					</DropdownMenuLabel>
					<div className="flex flex-col gap-2">
						{languages.map((item, index) => {
							return (
								<div
									onClick={() => handleChange(item.code)}
									key={index}
									className='group relative w-full overflow-hidden cursor-pointer rounded-lg border p-2 transition-all bg-black/0 group-hover:bg-black/10 duration-300 hover:scale-[1.02] active:scale-[0.98]'
								>
									<div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300'></div>
									<p className='flex items-center gap-2'>
										{item.flag} {item.label}
									</p>
								</div>
							);
						})}
					</div>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default LanguageSelector