import {getRequestConfig} from "next-intl/server";

export const routing = {
	locales: ["en", "es", "pt"] as const,
	defaultLocale: "en"
} as const;

type Locale = (typeof routing.locales)[number];

const defaultLocale: Locale = routing.defaultLocale;

function isValidLocale(locale: string): locale is Locale {
	return routing.locales.includes(locale as Locale);
}

export default getRequestConfig(async ({locale}) => {
	let resolvedLocale: Locale;

	if (locale && isValidLocale(locale)) {
		resolvedLocale = locale;
	} else {
		resolvedLocale = defaultLocale;
	}

	return {
		locale: resolvedLocale,
		messages: (await import(`./messages/${resolvedLocale}.json`)).default
	};
});
