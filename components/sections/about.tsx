"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function About() {
	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	return (
		<motion.section
			id="about"
			className="space-y-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-center px-4 py-16 md:py-32 w-full"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
		>
			<motion.div className="space-y-2" variants={itemVariants}>
				<div className="section-title font-jetbrains-mono text-gray-600 dark:text-gray-400">
					/* About Me */
				</div>
				<h2 className="text-3xl sm:text-4xl font-bold text-foreground">
					Who I Am
				</h2>
			</motion.div>

			<motion.div
				className="grid md:grid-cols-2 gap-12 items-center"
				variants={itemVariants}
			>
				<div className="space-y-6">
					<div className="space-y-4 text-muted-foreground leading-relaxed">
						<p>
							I&apos;m a developer who believes in simple, reliable,
							well-crafted solutions. I enjoy turning ideas into fast, polished
							applications — with just the right amount of animation to make the
							experience feel alive, not distracting.
						</p>
						<p>
							I&apos;m not a big fan of showing off. But I am a big fan of
							building things people actually enjoy using.
						</p>
						<p>
							When I&apos;m not coding, I&apos;m usually experimenting with
							tools, optimizing workflows, or refining UI/UX details that most
							people never notice — but always feel.
						</p>
					</div>

					<div className="space-y-3 pt-4">
						<div className="flex items-center gap-3">
							<span className="text-foreground text-lg mt-1">→</span>
							<p className="text-foreground">
								Performance-oriented and detail-focused
							</p>
						</div>
						<div className="flex items-center gap-3">
							<span className="text-foreground text-lg mt-1">→</span>
							<p className="text-foreground">
								Full-stack capabilities with modern tech
							</p>
						</div>
						<div className="flex items-center gap-3">
							<span className="text-foreground text-lg mt-1">→</span>
							<p className="text-foreground">
								Calm, reliable, and thoughtful engineering
							</p>
						</div>
					</div>
				</div>

				<motion.div
					className="flex justify-center"
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.3 }}
				>
					<div className="w-80 h-80 rounded-2xl border border-border flex items-center justify-center relative overflow-hidden">
						<Image
							src="/himanshu-portrait.jpeg"
							alt="Himanshu Portrait"
							fill
							className="object-cover"
						/>
					</div>
				</motion.div>
			</motion.div>
		</motion.section>
	);
}
