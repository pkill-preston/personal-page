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
	description: "Developer portfolio"
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