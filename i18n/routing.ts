import type {LocalePrefix} from "next-intl/routing";

export const routing = {
	locales: ["en", "es", "pt"] as const,
	defaultLocale: "en",
	localeDetection: true,
	localePrefix: "always" satisfies LocalePrefix
} as const;
