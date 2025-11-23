import type { Metadata } from "next";
import {
	Great_Vibes,
	Lato,
	Poppins,
	Roboto,
	JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";

const greatVibes = Great_Vibes({
	variable: "--font-great-vibes",
	subsets: ["latin"],
	weight: "400",
});

const lato = Lato({
	variable: "--font-lato",
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"],
	style: ["normal", "italic"],
});

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
});

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
	style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	style: ["normal", "italic"],
});

export const metadata: Metadata = {
	title: "Himanshu Portfolio",
	description: "Portfolio website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${greatVibes.variable} ${lato.variable} ${poppins.variable} ${roboto.variable} ${jetbrainsMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
