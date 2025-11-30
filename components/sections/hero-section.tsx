"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { motion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { Cover } from "../ui/cover";
import { LayoutTextFlip } from "../ui/layout-text-flip";

export default function HeroSection() {
	return (
		<BackgroundBeamsWithCollision className="min-h-[100dvh] flex items-center">
			<div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-10 sm:pt-20 sm:pb-16 text-center">
				{/* Heading */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="mb-3 sm:mb-4"
				>
					<h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-black dark:text-white leading-tight">
						Hello there, I&apos;m <Cover>Himanshu</Cover>
					</h1>
				</motion.div>

				{/* Subheading + description */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mb-6"
				>
					<h2 className="font-poppins text-2xl md:text-4xl lg:text-5xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
						<div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
							<span className="text-xl sm:text-2xl">I am a</span>

							{/* The pill with rotating titles */}
							<LayoutTextFlip
								words={[
									"Full Stack Developer",
									"Backend Developer",
									"Frontend Developer",
									"Automation Engineer",
								]}
								duration={3000}
							/>
						</div>
					</h2>

					<p className="font-lato text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mt-4">
						I am a developer who loves building websites that look clean, feel
						smooth, and actually solve real problems. I care about details,
						performance, and creating interfaces that feel effortless.
					</p>
					<p className="font-lato text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mt-4 font-medium">
						No clutter. Just thoughtful engineering.
					</p>
				</motion.div>

				{/* CTAs */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto"
				>
					<a
						href="#contact"
						className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base font-poppins font-medium text-white bg-black dark:bg-white dark:text-black rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
					>
						<span className="relative z-10 flex items-center gap-2">
							Get in Touch
							<ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
						</span>
						<span className="absolute inset-0 bg-linear-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
					</a>

					<a
						href={process.env.NEXT_PUBLIC_RESUME_LINK}
						target="_blank"
						rel="noopener noreferrer"
						className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base font-poppins font-medium text-black dark:text-white border-2 border-black dark:border-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
					>
						<span className="relative z-10 flex items-center gap-2">
							<Download className="w-4 h-4" />
							Download CV
						</span>
					</a>
				</motion.div>

				{/* Scroll hint – hide on very small screens */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="mt-6 sm:mt-8 animate-bounce hidden xs:block"
				>
					<ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-400 dark:text-neutral-600" />
				</motion.div>
			</div>
		</BackgroundBeamsWithCollision>
	);
}
