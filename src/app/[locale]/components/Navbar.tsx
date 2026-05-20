"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { useActiveSection } from "./utils/useActiveSection";

export default function Navbar() {
	const t = useTranslations("nav");
	const locale = useLocale(); // current locale ('en' or 'fr')
	const router = useRouter(); // Next router
	const pathname = usePathname(); // current path

	const switchLocale = () => {
		const segments = pathname.split("/");
		segments[1] = locale === "en" ? "fr" : "en";
		const newPath = segments.join("/");

		router.push(newPath);
	};

	const sectionIds = ["home", "about", "skills", "projects", "contact"];
	const { activeSection } = useActiveSection(sectionIds);
	const { activeSection: activeSectionMobile } = useActiveSection(sectionIds);

	const [menuVisibility, setMenuVisibility] = useState(false);

	// Define delay with a useMemo to make sure window's available when running the function
	const delay = useMemo(() => {
		if (typeof window !== "undefined") {
			return window.innerWidth < 640 ? 0 : 0.5;
		}
		return 0.5;
	}, []);

	const handleToggleVisibility = () => {
		return setMenuVisibility((prev) => !prev);
	};

	return (
		<motion.div
			initial={{ y: "-100%", opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
		>
			{/* ----------- Navbar Desktop ----------- */}
			<nav className="w-full h-16 hidden md:block bg-glass border-b border-zinc-700 shadow-md">
				<div className="max-w-7xl h-full mx-auto flex justify-between items-center px-5">
					<a
						href="#home"
						className="font-bold text-3xl pt-1 text-cyan-500 hover:scale-110 active:scale-90 duration-100"
					>
						<Image src="/img/logo.png" alt="JD" width={40} height={24} />
					</a>
					<ul className="hidden md:flex space-x-3 lg:space-x-6 items-center">
						{/* ----------- Section links ----------- */}
						{sectionIds.map((id) => (
							<li key={id}>
								<a
									href={`#${id}`}
									className={`hover:text-blue-400 hover:cursor-pointer font-bold  border-neutral-700 h-full pr-3 lg:pr-5
                  ${sectionIds.indexOf(id) < sectionIds.length - 1 && "border-r-2"}
                  ${activeSection === id ? "text-cyan-500 underline underline-offset-28" : ""}`}
								>
									{t(id)}
								</a>
							</li>
						))}

						{/* ----------- Locale switch button ----------- */}
						<li className="h-full">
							<button
								type="button"
								onClick={switchLocale}
								className="group relative bg-linear-to-br from-zinc-800/70 to-zinc-900/90 w-18 py-2 text-sm font-bold border border-zinc-800 rounded-lg hover:bg-[rgba(91,91,115,0.15)] hover:cursor-pointer hover:border-zinc-700 hover:text-blue-300 active:scale-90 duration-100"
							>
								<span className="group-hover:hidden">
									{locale.toUpperCase()}
								</span>
								<span className="hidden group-hover:block">
									{(locale === "en" ? "fr" : "en").toUpperCase()}
								</span>
							</button>
						</li>
					</ul>
				</div>
			</nav>

			{/* ----------- Navbar Mobile ----------- */}
			<nav className="md:hidden w-full h-16 border-b border-zinc-700 shadow-md">
				<div className="w-full h-full bg-[rgba(11,11,14,0.5)] backdrop-blur-md flex justify-between items-center">
					<a
						href="#home"
						className="font-bold text-3xl pl-6 pt-1 text-cyan-500 hover:scale-110 active:scale-90 duration-100"
					>
						<Image src="/img/logo.png" alt="JD" width={40} height={24} />
					</a>
					<div className="flex gap-8">
						<button
							type="button"
							onClick={handleToggleVisibility}
							aria-label="Open menu"
							className="pr-4 hover:cursor-pointer"
						>
							<Menu size={36} />
						</button>
					</div>
				</div>

				<AnimatePresence>
					{menuVisibility && (
						<motion.div
							initial={{ x: "100%", opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: "100%", opacity: 0 }}
							transition={{ type: "spring", stiffness: 300, damping: 28 }}
							className="fixed w-screen h-svh flex flex-col items-center justify-center top-16 md:hidden z-50 bg-[rgba(11,11,16,0.98)]"
						>
							<ul className="flex flex-col w-full h-full max-h-175 justify-evenly items-center pb-16">
								{/* ----------- Locale switch button ----------- */}
								<li>
									<button
										type="button"
										onClick={switchLocale}
										className="bg-linear-to-br from-zinc-800/70 to-zinc-900/90 px-12 py-3 border border-zinc-800 rounded-lg hover:bg-zinc-700 text-sm font-bold active:scale-90"
									>
										{locale.toUpperCase()}
									</button>
								</li>

								{/* ----------- Section links ----------- */}
								{sectionIds.map((id) => (
									<li key={id}>
										<a
											href={`#${id}`}
											onClick={handleToggleVisibility}
											className={`hover:text-blue-400 hover:cursor-pointer text-xl font-bold h-full
                    ${activeSectionMobile === id ? "text-cyan-500 underline underline-offset-8" : ""}`}
										>
											{t(id)}
										</a>
									</li>
								))}
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</motion.div>
	);
}
