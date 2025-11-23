"use client";

import { motion } from "framer-motion";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<motion.footer
			className="border-t border-border bg-card/50 backdrop-blur-sm"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
				<div className="flex flex-col sm:flex-row justify-between items-center gap-6">
					<motion.div
						className="text-center sm:text-left"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.1 }}
					>
						<p className="text-muted-foreground">
							© {currentYear} Himanshu Suchak
						</p>
						<p className="text-xs text-muted-foreground mt-1">
							Built with calm craftsmanship.
						</p>
					</motion.div>

					<motion.div
						className="flex gap-6 text-sm text-muted-foreground"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
					>
						<a
							href="#"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-foreground transition-smooth"
						>
							GitHub
						</a>
						<>
							<span>•</span>
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-foreground transition-smooth"
							>
								LinkedIn
							</a>
						</>
					</motion.div>
				</div>
			</div>
		</motion.footer>
	);
}
