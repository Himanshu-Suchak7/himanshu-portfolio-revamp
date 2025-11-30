import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import HeroSection from "@/components/sections/hero-section";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
	return (
		<main className="w-full">
			<HeroSection />
			<About />
			<Experience />
			<Skills />
			<Projects />
			<Contact />
		</main>
	);
}
