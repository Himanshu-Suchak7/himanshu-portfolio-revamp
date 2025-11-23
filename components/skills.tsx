"use client";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, Variants } from "motion/react";
import { GlowingEffect } from "./ui/glowing-effect";

const Skills = () => {
	const skillsData = {
		languages: [
			{ name: "Python", logo: "/logos/python.svg" },
			{ name: "JavaScript", logo: "/logos/javascript.svg" },
			{ name: "TypeScript", logo: "/logos/typescript.svg" },
		],
		frontend: [
			{ name: "HTML", logo: "/logos/html.svg" },
			{ name: "CSS", logo: "/logos/css.svg" },
			{ name: "React", logo: "/logos/react.svg" },
			{ name: "Next.js", logo: "/logos/next-js.svg" },
			{ name: "Vue.js", logo: "/logos/vue-js.svg" },
			{ name: "Tailwind CSS", logo: "/logos/tailwind-css.svg" },
			{ name: "Bootstrap", logo: "/logos/bootstrap.svg" },
			{ name: "SASS", logo: "/logos/sass.svg" },
			{ name: "shadcn/ui", logo: "/logos/shadcn-ui.svg" },
			{ name: "Material UI", logo: "/logos/material-ui.svg" },
		],
		backend: [
			{ name: "Django", logo: "/logos/django.svg" },
			{ name: "Flask", logo: "/logos/flask.svg" },
			{ name: "FastAPI", logo: "/logos/FastAPI.svg" },
			{ name: "Wagtail CMS", logo: "/logos/wagtail.svg" },
			{ name: "Django Rest Framework", logo: "/logos/Django REST.svg" },
			{ name: "Swagger / OpenAPI", logo: "/logos/Swagger.svg" },
			{
				name: "Selenium (Backend/Browser Automation)",
				logo: "/logos/Selenium.svg",
			},
		],
		databases: [
			{ name: "MySQL", logo: "/logos/mysql.svg" },
			{ name: "PostgreSQL", logo: "/logos/PostgresSQL.svg" },
			{ name: "SQLite", logo: "/logos/SQLite.svg" },
			{ name: "MongoDB", logo: "/logos/MongoDB.svg" },
			{ name: "Prisma", logo: "/logos/prisma-orm.svg" },
		],
		additional: [
			{ name: "Wordpress", logo: "/logos/wordpress.svg" },
			{ name: "Shpoify", logo: "/logos/shopify.svg" },
			{ name: "Firebase", logo: "/logos/Firebase.svg" },
			{ name: "Supabase", logo: "/logos/supabase.svg" },
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

	const SkillBadge = ({ skill }: { skill: any }) => (
		<motion.div
			className="relative flex flex-col items-center gap-2 p-4 bg-card border border-border rounded-lg cursor-default"
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
			<Image
				src={skill.logo || "/placeholder.svg"}
				alt={skill.name}
				width={50}
				height={50}
			/>
			<p className="text-sm font-medium text-foreground text-center">
				{skill.name}
			</p>
		</motion.div>
	);

	return (
		<section
			className="space-y-8 max-w-7xl min-h-screen mx-auto flex flex-col justify-center px-4 py-16 md:py-32"
			id="skills"
		>
			<div className="space-y-2">
				<div className="section-title font-jetbrains-mono text-gray-400">
					/* Skills */
				</div>
				<h2 className="text-3xl sm:text-4xl font-bold text-foreground">
					My TechStack
				</h2>
			</div>
			<Tabs defaultValue="languages" className="w-full">
				<TabsList className="grid w-full max-w-[50%] grid-cols-5 mb-8">
					<TabsTrigger value="languages">Languages</TabsTrigger>
					<TabsTrigger value="frontend">Frontend</TabsTrigger>
					<TabsTrigger value="backend">Backend</TabsTrigger>
					<TabsTrigger value="databases">Databases</TabsTrigger>
					<TabsTrigger value="additional">Additional</TabsTrigger>
				</TabsList>

				<motion.div variants={containerVariants}>
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
			</Tabs>
		</section>
	);
};

export default Skills;
