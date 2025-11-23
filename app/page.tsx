import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<About />
			<Experience />
			<Skills />
			<Projects />
			<Contact />
		</main>
	);
}
