import type {Metadata} from "next";
import "../globals.css";
import NavBar from "@/components/NavBar/NavBar";
import {ThemeProvider} from "@/components/ThemeProvider";
import {NextIntlClientProvider} from "next-intl";
import {getMessages, setRequestLocale} from "next-intl/server";

import {Gabarito, JetBrains_Mono, Libre_Caslon_Text} from "next/font/google";
import FooterComponent from "@/components/FooterComponent/FooterComponent";

const gabarito = Gabarito({
	variable: "--font-sans"
});

const jetbrains = JetBrains_Mono({
	variable: "--font-mono"
});

const libreCaslon = Libre_Caslon_Text({
	variable: "--font-serif",
	weight: "400",
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "Heron Lorena",
	description:
		"Web developer portfolio focused on modern web applications, performance and user experience.",

	// SEO basics
	keywords: [
		"Frontend Developer",
		"Next.js",
		"React",
		"Tailwind CSS",
		"Web Development",
		"Portfolio"
	],
	authors: [{name: "Heron Lorena"}],
	creator: "Heron Lorena",

	// Open Graph (for Discord, WhatsApp, Facebook, etc.)
	openGraph: {
		title: "Heron Lorena",
		description:
			"Web developer portfolio focused on modern web applications and clean UI.",
		url: "https://heron-lorena.vercel.app/",
		siteName: "Heron Lorena - Web Developer",
		images: [
			{
				url: "https://media.discordapp.net/attachments/962733860980949054/1483374214533742662/8OIVV4AAAAGSURBVAMAx9Qqy7Sl9y0AAAAASUVORK5CYII.png?ex=69ba5b64&is=69b909e4&hm=e5a89c305a7cb9048e86507ce8f2451cdde6849b1232cdafda490b3399e2d428&=&format=webp&quality=lossless&width=1199&height=748", // 1200x630 recommended
				width: 1200,
				height: 630,
				alt: "Heron Lorena Portfolio"
			}
		],
		locale: "en_US",
		type: "website"
	},
	// Canonical & i18n
	alternates: {
		canonical: "https://heron-lorena.vercel.app/pt",
		languages: {
			en: "https://heron-lorena.vercel.app/en",
			pt: "https://heron-lorena.vercel.app/pt",
			es: "https://heron-lorena.vercel.app/es"
		}
	},

	// Crawlers
	robots: {
		index: true,
		follow: true
	},

	// Optional but nice
	metadataBase: new URL("https://yourdomain.com")
};

export default async function RootLayout({
	children,
	params
}: {
	children: React.ReactNode;
	params: Promise<{locale: string}>;
}) {
	const {locale} = await params;

	setRequestLocale(await locale);

	const messages = await getMessages({locale});

	return (
		<html
			lang={locale}
			suppressHydrationWarning
			className={`${gabarito.variable} ${libreCaslon.variable} ${jetbrains.variable} antialiased`}
		>
			<body suppressHydrationWarning>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<NextIntlClientProvider locale={locale} messages={messages}>
						<NavBar />
						{children}
						<FooterComponent />
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}