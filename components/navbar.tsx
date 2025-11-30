"use client";

import {
	Navbar as ResizableNavbar,
	NavBody,
	NavItems,
	MobileNav,
	MobileNavHeader,
	MobileNavMenu,
	MobileNavToggle,
	NavbarLogo,
	NavbarButton,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { ThemeToggle } from "./ui/theme-toggle";
import { Linkedin } from "lucide-react";

const navItems = [
	{ name: "About", link: "#about" },
	{ name: "Experience", link: "#experience" },
	{ name: "Skills", link: "#skills" },
	{ name: "Projects", link: "#projects" },
	{ name: "Contact", link: "#contact" },
];

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	// Get responsive scroll offset based on viewport width
	const getScrollOffset = () => {
		if (typeof window === 'undefined') return 20;
		const width = window.innerWidth;
		if (width < 1024) return 30; // Mobile/Tablet: 30px offset
		return 20; // Desktop: 20px offset
	};

	return (
		<ResizableNavbar>
			<NavBody>
				<NavbarLogo />
				<NavItems
					items={navItems}
					onItemClick={() => setMobileMenuOpen(false)}
				/>
				<div className="ml-auto flex items-center gap-2 relative z-50">
					<ThemeToggle />
					<NavbarButton
						href={process.env.NEXT_PUBLIC_LINKEDIN_LINK}
						className="flex items-center justify-center gap-2"
					>
						<Linkedin className="w-4 h-4" />
						LinkedIn
					</NavbarButton>
				</div>
			</NavBody>

			<MobileNav>
				<MobileNavHeader>
					<NavbarLogo />
					<MobileNavToggle
						isOpen={mobileMenuOpen}
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					/>
				</MobileNavHeader>
				<MobileNavMenu
					isOpen={mobileMenuOpen}
					onClose={() => setMobileMenuOpen(false)}
				>
					{navItems.map((item, idx) => (
						<a
							key={`mobile-link-${idx}`}
							href={item.link}
							onClick={(e) => {
								e.preventDefault();
								const targetId = item.link.substring(1);
								const element = document.getElementById(targetId);
								if (element) {
									const offset = getScrollOffset(); // Responsive scroll margin offset
									const elementPosition = element.getBoundingClientRect().top;
									const offsetPosition =
										elementPosition + window.pageYOffset - offset;
									window.scrollTo({
										top: offsetPosition,
										behavior: "smooth",
									});
								}
								setMobileMenuOpen(false);
							}}
							className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
						>
							{item.name}
						</a>
					))}
					<ThemeToggle />
					<NavbarButton
						href={process.env.NEXT_PUBLIC_LINKEDIN_LINK}
						className="mt-4 flex items-center justify-center gap-2"
					>
						<Linkedin className="w-4 h-4" />
						LinkedIn
					</NavbarButton>
				</MobileNavMenu>
			</MobileNav>
		</ResizableNavbar>
	);
}
