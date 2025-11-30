"use client";

import type React from "react";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const HoverEffect = ({
	items,
	className,
}: {
	items: {
		id: number;
		title: string;
		subtitle?: string;
		description: string;
		fullDescription?: string;
		whatISolved?: string[];
		whatILearned?: string[];
		tech?: string[];
		image?: string;
		demoLink?: string;
		repoLink?: string;
		link?: string;
	}[];
	className?: string;
}) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const [selectedProject, setSelectedProject] = useState<
		(typeof items)[0] | null
	>(null);

	return (
		<>
			<div
				className={cn(
					"grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
					className
				)}
			>
				{items.map((item, idx) => (
					<div
						key={item?.id}
						className="relative group  block p-2 h-full w-full"
						onMouseEnter={() => setHoveredIndex(idx)}
						onMouseLeave={() => setHoveredIndex(null)}
					>
						<AnimatePresence>
							{hoveredIndex === idx && (
								<motion.span
									className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
									layoutId="hoverBackground"
									initial={{ opacity: 0 }}
									animate={{
										opacity: 1,
										transition: { duration: 0.15 },
									}}
									exit={{
										opacity: 0,
										transition: { duration: 0.15, delay: 0.2 },
									}}
								/>
							)}
						</AnimatePresence>
						<button
							onClick={() => setSelectedProject(item)}
							className="w-full h-full text-left"
						>
							<Card image={item.image}>
								<CardTitle>{item.title}</CardTitle>
								{item.subtitle && <CardSubtitle>{item.subtitle}</CardSubtitle>}
								<CardDescription>{item.description}</CardDescription>

								{item.tech && item.tech.length > 0 && (
									<div className="mt-6 flex flex-wrap gap-2">
										{item.tech.slice(0, 4).map((tech, idx) => (
											<span
												key={idx}
												className="px-2 py-1 text-xs rounded-full bg-neutral-400/10 dark:bg-neutral-500/20 text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-500/30"
											>
												{tech}
											</span>
										))}
										{item.tech.length > 4 && (
											<span className="px-2 py-1 text-xs rounded-full bg-neutral-400/10 dark:bg-neutral-500/20 text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-500/30">
												+{item.tech.length - 4} more
											</span>
										)}
									</div>
								)}

								<button
									onClick={(e) => {
										e.stopPropagation();
										setSelectedProject(item);
									}}
									className="mt-6 text-zinc-800 hover:text-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-400 flex items-center gap-2 text-sm font-medium cursor-pointer transition-smooth"
								>
									View Project <ExternalLink size={14} />
								</button>
							</Card>
						</button>
					</div>
				))}
			</div>

			<Dialog
				open={!!selectedProject}
				onOpenChange={() => setSelectedProject(null)}
			>
				<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
					{selectedProject && (
						<>
							<DialogHeader>
								<div className="space-y-2">
									<div className="text-zinc-600 dark:text-zinc-400 text-sm font-medium uppercase tracking-wide">
										{selectedProject.subtitle}
									</div>
									<DialogTitle className="text-2xl">
										{selectedProject.title}
									</DialogTitle>
								</div>
							</DialogHeader>

							{/* Project Image */}
							{selectedProject.image && (
								<div className="relative w-full h-64 rounded-lg overflow-hidden bg-slate-900">
									<img
										src={selectedProject.image || "/placeholder.svg"}
										alt={selectedProject.title}
										className="w-full h-full object-cover"
									/>
								</div>
							)}

							{/* Full Description */}
							<div className="space-y-2">
								<DialogDescription className="text-base text-zinc-700 dark:text-zinc-300">
									{selectedProject.fullDescription ||
										selectedProject.description}
								</DialogDescription>
							</div>

							{/* What I Solved & What I Learned */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{selectedProject.whatISolved &&
									selectedProject.whatISolved.length > 0 && (
										<div className="space-y-3">
											<h3 className="font-semibold text-black dark:text-white">
												What I Solved
											</h3>
											<ul className="space-y-2">
												{selectedProject.whatISolved.map((item, idx) => (
													<li
														key={idx}
														className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400"
													>
														<span className="text-zinc-900 dark:text-zinc-100 shrink-0">
															✓
														</span>
														<span>{item}</span>
													</li>
												))}
											</ul>
										</div>
									)}

								{selectedProject.whatILearned &&
									selectedProject.whatILearned.length > 0 && (
										<div className="space-y-3">
											<h3 className="font-semibold text-black dark:text-white">
												What I Learned
											</h3>
											<ul className="space-y-2">
												{selectedProject.whatILearned.map((item, idx) => (
													<li
														key={idx}
														className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400"
													>
														<span className="text-zinc-900 dark:text-zinc-100 shrink-0">
															✓
														</span>
														<span>{item}</span>
													</li>
												))}
											</ul>
										</div>
									)}
							</div>

							{/* Tech Stack */}
							{selectedProject.tech && selectedProject.tech.length > 0 && (
								<div className="space-y-3">
									<h3 className="font-semibold text-white">Tech Stack</h3>
									<div className="flex flex-wrap gap-2">
										{selectedProject.tech.map((tech, idx) => (
											<span
												key={idx}
												className="px-3 py-1.5 text-xs rounded-full bg-neutral-400/10 dark:bg-neutral-500/20 text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-500/30"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							)}

							{/* Action Buttons */}
							<div className="flex gap-3 pt-4">
								{selectedProject.demoLink && (
									<Button
										asChild
										className="bg-neutral-700 hover:bg-neutral-800 flex items-center gap-2 px-4 py-2.5 rounded-lg transition-smooth font-medium text-sm text-neutral-50 border border-neutral-400/30"
									>
										<a
											href={selectedProject.demoLink}
											target="_blank"
											rel="noopener noreferrer"
										>
											<ExternalLink className="w-4 h-4" />
											View Demo
										</a>
									</Button>
								)}
								{selectedProject.repoLink && (
									<Button
										variant="outline"
										className="flex items-center gap-2 px-4 py-2.5 rounded-lg transition-smooth font-medium text-sm"
										asChild
									>
										<a
											href={selectedProject.repoLink}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Github className="w-4 h-4" />
											Repository
										</a>
									</Button>
								)}
							</div>
						</>
					)}
				</DialogContent>
			</Dialog>
		</>
	);
};

export const Card = ({
	className,
	children,
	image,
}: {
	className?: string;
	children: React.ReactNode;
	image?: string;
}) => {
	return (
		<div
			className={cn(
				"rounded-2xl h-full w-full overflow-hidden bg-neutral-100 dark:bg-black border border-neutral-300 dark:border-white/20 dark:group-hover:border-slate-700 relative z-20 cursor-pointer",
				className
			)}
		>
			{/* Card Image */}
			{image && (
				<div className="w-full h-48 relative">
					<img
						src={image}
						alt="project preview"
						className="w-full h-full object-cover"
					/>
				</div>
			)}
			<div className="relative z-50">
				<div className="p-4">{children}</div>
			</div>
		</div>
	);
};

export const CardTitle = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<h4
			className={cn(
				"text-zinc-900 dark:text-zinc-100 font-bold tracking-wide mt-4",
				className
			)}
		>
			{children}
		</h4>
	);
};

export const CardSubtitle = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<p
			className={cn(
				"text-zinc-700 dark:text-zinc-300 text-sm tracking-wide mt-1",
				className
			)}
		>
			{children}
		</p>
	);
};

export const CardDescription = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<p
			className={cn(
				"mt-8 text-zinc-600 dark:text-zinc-400 tracking-wide leading-relaxed text-sm",
				className
			)}
		>
			{children}
		</p>
	);
};
