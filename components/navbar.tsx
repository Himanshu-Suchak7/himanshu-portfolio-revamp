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

const navItems = [
	{ name: "About", link: "#about" },
	{ name: "Experience", link: "#experience" },
	{ name: "Skills", link: "#skills" },
	{ name: "Projects", link: "#projects" },
	{ name: "Contact", link: "#contact" },
];

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<ResizableNavbar>
			<NavBody>
				<NavbarLogo />
				<NavItems
					items={navItems}
					onItemClick={() => setMobileMenuOpen(false)}
				/>
				<div className="ml-auto flex items-center gap-2">
					<NavbarButton href="#contact">Download CV</NavbarButton>
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
									const offset = 1; // Adjust this value based on your navbar height
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
					<NavbarButton href="#contact" className="mt-4">
						Download CV
					</NavbarButton>
				</MobileNavMenu>
			</MobileNav>
		</ResizableNavbar>
	);
}
