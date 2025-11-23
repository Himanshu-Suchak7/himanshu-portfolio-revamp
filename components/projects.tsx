"use client";

import { useState } from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const Projects = () => {
	const projects = [
		{
			id: 1,
			title: "Vehiql",
			subtitle: "AI-powered Car Discovery",
			description:
				"A clean, fast, AI-driven car marketplace built with Next.js, shadcn, Supabase, and Gemini.",
			fullDescription:
				"Vehiql is an innovative AI-powered car discovery platform. Users upload a single photo, and AI handles the rest — from identifying the vehicle to pre-filling details for admins. I focused on the UX flow, performance, and seamless AI integration.",
			whatISolved: [
				"Engineered smooth AI integration for vehicle identification and data pre-filling",
				"Optimized performance for image processing and API calls",
				"Designed intuitive UX flow that reduces user friction",
			],
			whatILearned: [
				"Advanced image processing with AI models",
				"Real-time data synchronization with Supabase",
				"Performance optimization strategies",
			],
			tech: ["Next.js", "shadcn/ui", "Supabase", "Gemini API", "TypeScript"],
			image: "/ai-car-discovery-app.jpg",
			demoLink: "#",
			repoLink: "#",
		},
		{
			id: 2,
			title: "IamBlogger",
			subtitle: "Minimal Blogging Platform",
			description:
				"A smooth, Firebase-powered blog with CRUD, comments, likes, and file downloads.",
			fullDescription:
				"IamBlogger is a minimalist blogging platform designed for simplicity and ease. Built with React + Bootstrap and powered by Firebase, it features real-time database syncing, user comments, likes, and file downloads.",
			whatISolved: [
				"Built real-time CRUD operations with Firestore",
				"Implemented smooth comment and like interactions",
				"Designed for ease of use with minimal friction",
			],
			whatILearned: [
				"Firebase Firestore best practices",
				"Real-time data synchronization patterns",
				"UI design for content creators",
			],
			tech: ["React", "Bootstrap", "Firebase", "Firestore", "JavaScript"],
			image: "/blogging-platform-ui.jpg",
			demoLink: "#",
			repoLink: "#",
		},
	];
	return (
		<section
			className="space-y-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-center px-4 py-16 md:py-32"
			id="projects"
		>
			<div className="space-y-2">
				<div className="section-title font-jetbrains-mono text-gray-400">
					/* Projects */
				</div>
				<h2 className="text-3xl sm:text-4xl font-bold text-foreground">
					Featured Work
				</h2>
			</div>
			<div>
				<HoverEffect items={projects} />
			</div>
		</section>
	);
};

export default Projects;
