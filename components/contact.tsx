"use client";

import React from "react";
import ContactForm from "./contact-form";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Contact = () => {
	return (
		<section
			className="relative min-h-screen flex flex-col justify-center px-4 py-16 md:py-32 overflow-hidden"
			id="contact"
		>
			<BackgroundBeams className="absolute inset-0" />
			<div className="relative z-10 space-y-8 max-w-7xl mx-auto w-full">
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
