"use client";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, Variants } from "motion/react";
import { GlowingEffect } from "../ui/glowing-effect";
import { useTheme } from "next-themes";

const Skills = () => {
	type SkillsData = {
		languages: Skill[];
		frontend: Skill[];
		backend: Skill[];
		databases: Skill[];
		additional: Skill[];
	};
	const skillsData: SkillsData = {
		languages: [
			{ name: "Python", logo: "/logos/python.svg", level: "proficient" },
			{ name: "JavaScript", logo: "/logos/javascript.svg", level: "familiar" },
			{ name: "TypeScript", logo: "/logos/typescript.svg", level: "learning" },
		],
		frontend: [
			{ name: "HTML", logo: "/logos/html.svg", level: "proficient" },
			{ name: "CSS", logo: "/logos/css.svg", level: "proficient" },
			{ name: "React", logo: "/logos/react.svg", level: "familiar" },
			{
				name: "Next.js",
				logo: "/logos/next-js.svg",
				darkLogo: "/logos/next-js-dark.svg",
				level: "familiar",
			},
			{ name: "Vue.js", logo: "/logos/vue-js.svg", level: "learning" },
			{
				name: "Tailwind CSS",
				logo: "/logos/tailwind-css.svg",
				level: "proficient",
			},
			{ name: "Bootstrap", logo: "/logos/bootstrap.svg", level: "proficient" },
			{ name: "SASS", logo: "/logos/sass.svg", level: "familiar" },
			{
				name: "shadcn/ui",
				logo: "/logos/shadcn-ui.svg",
				darkLogo: "/logos/shadcn-ui-dark.svg",
				level: "proficient",
			},
			{
				name: "Material UI",
				logo: "/logos/material-ui.svg",
				level: "familiar",
			},
		],
		backend: [
			{ name: "Django", logo: "/logos/django.svg", level: "familiar" },
			{
				name: "Flask",
				logo: "/logos/flask.svg",
				darkLogo: "/logos/flask-dark.svg",
				level: "learning",
			},
			{ name: "FastAPI", logo: "/logos/FastAPI.svg", level: "learning" },
			{
				name: "Wagtail CMS",
				logo: "/logos/wagtail.svg",
				darkLogo: "/logos/wagtail-dark.svg",
				level: "familiar",
			},
			{
				name: "Django Rest Framework",
				logo: "/logos/Django REST.svg",
				darkLogo: "/logos/Django REST Dark.svg",
				level: "familiar",
			},
			{
				name: "Swagger / OpenAPI",
				logo: "/logos/Swagger.svg",
				level: "proficient",
			},
			{
				name: "Selenium (Backend/Browser Automation)",
				logo: "/logos/Selenium.svg",
				level: "proficient",
			},
		],
		databases: [
			{ name: "MySQL", logo: "/logos/mysql.svg", level: "familiar" },
			{ name: "PostgreSQL", logo: "/logos/PostgresSQL.svg", level: "familiar" },
			{ name: "SQLite", logo: "/logos/SQLite.svg", level: "familiar" },
			{ name: "MongoDB", logo: "/logos/MongoDB.svg", level: "learning" },
			{ name: "Prisma", logo: "/logos/prisma-orm.svg", level: "familiar" },
		],
		additional: [
			{ name: "Wordpress", logo: "/logos/wordpress.svg", level: "proficient" },
			{ name: "Shpoify", logo: "/logos/shopify.svg", level: "proficient" },
			{ name: "Firebase", logo: "/logos/Firebase.svg", level: "familiar" },
			{ name: "Supabase", logo: "/logos/supabase.svg", level: "familiar" },
		],
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.4, ease: "easeOut" },
		},
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.05,
			},
		},
	};

	type SkillLevel = "learning" | "familiar" | "proficient";
	interface Skill {
		name: string;
		logo: string;
		darkLogo?: string;
		level: SkillLevel;
	}

	const SkillBadge = ({ skill }: { skill: Skill }) => {
		const { theme, systemTheme } = useTheme();
		const currentTheme = theme === "system" ? systemTheme : theme;
		const logoSrc =
			currentTheme === "dark" && skill.darkLogo ? skill.darkLogo : skill.logo;
		const levelColors: Record<SkillLevel, string> = {
			learning: "bg-amber-500/20 text-amber-700 dark:text-amber-300",
			familiar: "bg-blue-500/20 text-blue-700 dark:text-blue-300",
			proficient: "bg-green-500/20 text-green-700 dark:text-green-300",
		};
		return (
			<motion.div
				className="relative flex flex-col items-center gap-2 p-4 bg-neutral-50 dark:bg-neutral-900 shadow-sm border border-neutral-200 dark:border-neutral-700 rounded-lg cursor-default"
				variants={itemVariants}
			>
				<GlowingEffect
					spread={50}
					glow={true}
					disabled={false}
					proximity={64}
					inactiveZone={0.01}
					borderWidth={2}
				/>
				<Image src={logoSrc} alt={skill.name} width={50} height={50} />
				<p className="text-sm font-medium text-foreground text-center">
					{skill.name}
				</p>
				<span
					className={`text-xs mt-1 px-2 py-1 rounded-full font-medium ${
						levelColors[skill.level]
					}`}
				>
					{skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
				</span>
			</motion.div>
		);
	};

	return (
		<section
			className="space-y-8 max-w-7xl min-h-screen mx-auto flex flex-col justify-center px-4 py-16 md:py-32 w-full"
			id="skills"
		>
			<div className="space-y-2">
				<div className="section-title font-jetbrains-mono text-gray-600 dark:text-gray-400">
					/* Skills */
				</div>
				<h2 className="text-3xl sm:text-4xl font-bold text-foreground">
					My TechStack
				</h2>
			</div>
			{/* Tabs section */}
			<Tabs defaultValue="languages" className="w-full">
				{/* Desktop/Tablet TabsList */}
				<TabsList className="hidden md:grid w-full md:max-w-[80%] lg:max-w-[50%] grid-cols-5 mb-8">
					<TabsTrigger value="languages">Languages</TabsTrigger>
					<TabsTrigger value="frontend">Frontend</TabsTrigger>
					<TabsTrigger value="backend">Backend</TabsTrigger>
					<TabsTrigger value="databases">Databases</TabsTrigger>
					<TabsTrigger value="additional">Additional</TabsTrigger>
				</TabsList>

				{/* ------------------------ */}
				{/* Desktop/Tablet Content  */}
				{/* ------------------------ */}
				<motion.div variants={containerVariants} className="hidden md:block">
					<TabsContent value="languages">
						<motion.div
							className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
							variants={containerVariants}
						>
							{skillsData.languages.map((skill, idx) => (
								<SkillBadge key={idx} skill={skill} />
							))}
						</motion.div>
					</TabsContent>

					<TabsContent value="frontend">
						<motion.div
							className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
							variants={containerVariants}
						>
							{skillsData.frontend.map((skill, idx) => (
								<SkillBadge key={idx} skill={skill} />
							))}
						</motion.div>
					</TabsContent>

					<TabsContent value="backend">
						<motion.div
							className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
							variants={containerVariants}
						>
							{skillsData.backend.map((skill, idx) => (
								<SkillBadge key={idx} skill={skill} />
							))}
						</motion.div>
					</TabsContent>

					<TabsContent value="databases">
						<motion.div
							className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
							variants={containerVariants}
						>
							{skillsData.databases.map((skill, idx) => (
								<SkillBadge key={idx} skill={skill} />
							))}
						</motion.div>
					</TabsContent>

					<TabsContent value="additional">
						<motion.div
							className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
							variants={containerVariants}
						>
							{skillsData.additional.map((skill, idx) => (
								<SkillBadge key={idx} skill={skill} />
							))}
						</motion.div>
					</TabsContent>
				</motion.div>

				{/* ------------------------ */}
				{/* Mobile Full Stack View   */}
				{/* ------------------------ */}
				<div className="space-y-12 md:hidden">
					{/* Languages */}
					<div>
						<h3 className="text-xl font-semibold mb-4">Languages</h3>
						<motion.div
							className="grid grid-cols-2 gap-4"
							variants={containerVariants}
						>
							{skillsData.languages.map((skill, idx) => (
								<SkillBadge key={idx} skill={skill} />
							))}
						</motion.div>
					</div>

					{/* Frontend */}
					<div>
						<h3 className="text-xl font-semibold mb-4">Frontend</h3>
						<motion.div
							className="grid grid-cols-2 gap-4"
							variants={containerVariants}
						>
							{skillsData.frontend.map((skill, idx) => (
								<SkillBadge key={idx} skill={skill} />
							))}
						</motion.div>
					</div>

					{/* Backend */}
					<div>
						<h3 className="text-xl font-semibold mb-4">Backend</h3>
						<motion.div
							className="grid grid-cols-2 gap-4"
							variants={containerVariants}
						>
							{skillsData.backend.map((skill, idx) => (
								<SkillBadge key={idx} skill={skill} />
							))}
						</motion.div>
					</div>

					{/* Databases */}
					<div>
						<h3 className="text-xl font-semibold mb-4">Databases</h3>
						<motion.div
							className="grid grid-cols-2 gap-4"
							variants={containerVariants}
						>
							{skillsData.databases.map((skill, idx) => (
								<SkillBadge key={idx} skill={skill} />
							))}
						</motion.div>
					</div>

					{/* Additional */}
					<div>
						<h3 className="text-xl font-semibold mb-4">Additional</h3>
						<motion.div
							className="grid grid-cols-2 gap-4"
							variants={containerVariants}
						>
							{skillsData.additional.map((skill, idx) => (
								<SkillBadge key={idx} skill={skill} />
							))}
						</motion.div>
					</div>
				</div>
			</Tabs>
		</section>
	);
};

export default Skills;
