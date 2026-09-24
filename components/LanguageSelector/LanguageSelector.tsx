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
	{flag: "🇬🇧", code: "en", label: "English"},
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
				<div className='p-2 rounded-full border hover:bg-muted hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer'>
					<GlobeIcon size={16} />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-40'>
				<DropdownMenuGroup className='flex flex-col gap-1 p-2'>
					<DropdownMenuLabel className='text-center text-xs'>
						{t("selectLanguage")}
					</DropdownMenuLabel>
					{languages.map((item, index) => (
						<button
							onClick={() => handleChange(item.code)}
							key={index}
							className={`w-full flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-all duration-200 cursor-pointer ${
								locale === item.code
									? "bg-primary/10 text-primary font-medium"
									: "hover:bg-muted text-foreground hover:translate-x-0.5"
							}`}
						>
							<span>{item.flag}</span>
							<span>{item.label}</span>
						</button>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default LanguageSelector
