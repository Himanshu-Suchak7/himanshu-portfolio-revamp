"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { motion } from "motion/react";
import { ArrowDown, Download, Layout } from "lucide-react";
import { Cover } from "./ui/cover";
import { LayoutTextFlip } from "./ui/layout-text-flip";

export default function HeroSection() {
	return (
		<BackgroundBeamsWithCollision className="min-h-screen">
			<div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="mb-6"
				>
					<h1 className="text-4xl md:text-5xl lg:text-7xl text-black dark:text-white mb-4">
						Hello there, I&apos;m <Cover>Himanshu</Cover>
					</h1>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mb-6"
				>
					<h2 className="font-poppins text-2xl md:text-4xl lg:text-5xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
						<LayoutTextFlip
							text="I am a "
							words={["Full Stack Developer", "Automation Engineer"]}
							duration={3000}
						/>
					</h2>
					<p className="font-lato text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mt-10">
						I am a developer who loves building websites that look clean, feel
						smooth, and actually solve real problems. I care about details,
						performance, and creating interfaces that feel effortless.
					</p>
					<p className="font-lato text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mt-4 font-medium">
						No clutter. Just thoughtful engineering.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="flex flex-col sm:flex-row gap-4 mt-8"
				>
					<a
						href="#contact"
						className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-poppins font-medium text-white bg-black dark:bg-white dark:text-black rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
					>
						<span className="relative z-10 flex items-center gap-2">
							Get in Touch
							<ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
						</span>
						<span className="absolute inset-0 bg-linear-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
					</a>

					<a
						href="#contact"
						className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-poppins font-medium text-black dark:text-white border-2 border-black dark:border-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
					>
						<span className="relative z-10 flex items-center gap-2">
							<Download className="w-4 h-4" />
							Download CV
						</span>
					</a>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="mt-16 animate-bounce"
				>
					<ArrowDown className="w-6 h-6 text-neutral-400 dark:text-neutral-600" />
				</motion.div>
			</div>
		</BackgroundBeamsWithCollision>
	);
}
