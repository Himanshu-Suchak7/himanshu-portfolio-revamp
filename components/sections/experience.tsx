import React from "react";
import { Timeline } from "../ui/timeline";

const Experience = () => {
	const data = [
		{
			title: "Aug 2025 - Present",
			content: (
				<div>
					<div className="mb-3 space-y-1">
						<h1 className="font-bold text-2xl text-neutral-700 dark:text-neutral-300">
							Dcycle Design Studio
						</h1>
						<p className="font-medium text-xl text-neutral-600 dark:text-neutral-400">
							Full Stack Developer
						</p>
						<p className="font-medium text-lg text-neutral-600 dark:text-neutral-500">
							Ahmedabad, India
						</p>
					</div>
					<div className="mb-3 space-y-1">
						<p className="text-lg text-neutral-600 dark:text-neutral-500">
							Trained in full-stack technologies and delivered dynamic, polished
							user interfaces across multiple platforms.
						</p>
					</div>
					<div>
						<ul className="list-disc list-inside space-y-2 text-neutral-500 dark:text-neutral-300 pl-5">
							<li>
								Improved API performance and engineered automation workflows
								across email, push notifications, and PWA features
							</li>
							<li>
								Shipped reliable backend + frontend features using Next.js,
								Django, DRF, Supabase, and Wagtail
							</li>
							<li>
								Built &quot;Project X&quot;, an automation pipeline using Python
								+ Selenium to capture and analyze leads
							</li>
							<li>
								Solved UI and backend defects with precision — boosting
								stability and user experience
							</li>
						</ul>
					</div>
				</div>
			),
		},
		{
			title: "Jan 2025 - Aug 2025",
			content: (
				<div>
					<div className="mb-3 space-y-1">
						<h1 className="font-bold text-2xl text-neutral-700 dark:text-neutral-300">
							Dcycle Design Studio
						</h1>
						<p className="font-medium text-xl text-neutral-600 dark:text-neutral-400">
							Frontend Developer Intern
						</p>
						<p className="font-medium text-lg text-neutral-600 dark:text-neutral-500">
							Ahmedabad, India
						</p>
					</div>
					<div className="mb-3 space-y-1">
						<p className="text-lg text-neutral-600 dark:text-neutral-500">
							Trained in full-stack technologies and delivered dynamic, polished
							user interfaces across multiple platforms.
						</p>
					</div>
					<div>
						<ul className="list-disc list-inside space-y-2 text-neutral-500 dark:text-neutral-300 pl-5">
							<li>Trained in React, Django, WordPress, and DRF</li>
							<li>
								Delivered dynamic WordPress templates and refined UI consistency
								across multiple client platforms
							</li>
							<li>Improved Shopify theme UI with detail-focused tweaks</li>
						</ul>
					</div>
				</div>
			),
		},
	];
	return (
		<section
			className="space-y-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-center px-4 py-16 md:py-32 w-full"
			id="experience"
		>
			<div className="space-y-2">
				<div className="section-title font-jetbrains-mono text-gray-600 dark:text-gray-400">
					/* Experience */
				</div>
				<h2 className="text-3xl sm:text-4xl font-bold text-foreground">
					Where I&apos;ve Worked
				</h2>
			</div>
			<Timeline data={data} />
		</section>
	);
};

export default Experience;
