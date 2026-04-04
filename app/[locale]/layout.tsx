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

	verification: {
		google: "OxCo5e8EgvyBPImm3lF2gA6Y_7S5PjgldnRBzqyzz1g"
	},

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

	openGraph: {
		title: "Heron Lorena",
		description:
			"Web developer portfolio focused on modern web applications and clean UI.",
		url: "https://heron-lorena.vercel.app/",
		siteName: "Heron Lorena - Web Developer",
		images: [
			{
				url: "https://heron-lorena.vercel.app/og.png",
				width: 1200,
				height: 630,
				alt: "Heron Lorena Portfolio"
			}
		],
		locale: "en_US",
		type: "website"
	},
	alternates: {
		canonical: "https://heron-lorena.vercel.app/",
		languages: {
			en: "https://heron-lorena.vercel.app/en",
			pt: "https://heron-lorena.vercel.app/pt",
			es: "https://heron-lorena.vercel.app/es"
		}
	},

	robots: {
		index: true,
		follow: true
	},

	metadataBase: new URL("https://heron-lorena.vercel.app/")
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
