// components/ui/theme-toggle.tsx
"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils"; // optional helper you already use

export function ThemeToggle({ className }: { className?: string }) {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// avoid hydration mismatch
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<button
				aria-hidden
				className={cn(
					"w-10 h-10 rounded-md inline-flex items-center justify-center",
					className
				)}
			/>
		);
	}

	const isDark = resolvedTheme === "dark";

	return (
		<button
			aria-label="Toggle theme"
			title={isDark ? "Switch to light theme" : "Switch to dark theme"}
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className={cn(
				"w-10 h-10 rounded-md inline-flex items-center justify-center border transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-1 cursor-pointer",
				"border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60",
				className
			)}
		>
			{isDark ? (
				// show Sun when resolved theme is dark (so clicking will switch to light)
				<Sun className="w-5 h-5 text-yellow-500" />
			) : (
				// show Moon when resolved theme is light
				<Moon className="w-5 h-5" />
			)}
		</button>
	);
}
