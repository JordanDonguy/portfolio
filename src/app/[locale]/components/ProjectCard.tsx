import { useTranslations } from "next-intl";
import { ScaleUpImage } from "./animations/ScaleUpImage";

type ProjectCardProps = {
	title: string;
	img: string;
	img_mobile: string;
	description: string;
	tech_stack: Array<{ name: string; url: string }>;
	live_url: string;
	github_url: string;
	imagePosition?: "left" | "right";
};

export default function ProjectCard({
	title,
	img,
	img_mobile,
	description,
	tech_stack,
	live_url,
	github_url,
	imagePosition = "left",
}: ProjectCardProps) {
	const t = useTranslations("projects");

	const imageSection = (
		<>
			<ScaleUpImage>
				<img
					src={img}
					alt={`${title} desktop screenshot`}
					className="hidden lg:block object-contain rounded-2xl w-full  "
				/>
			</ScaleUpImage>
			<img
				src={img_mobile}
				alt={`${title} mobile screenshot`}
				className="lg:hidden w-full h-full object-contain rounded-asym-project border border-zinc-700 md:border-0 md:outline outline-zinc-700"
			/>
		</>
	);

	const infoSection = (
		<div className="flex flex-col justify-center text-white text-start lg:max-w-md xl:max-w-lg">
			<h3 className="text-2xl lg:text-3xl 2xl:text-4xl mb-4 lg:mb-6 text-center lg:text-start">
				{title}
			</h3>

			{/* ----------- Description ----------- */}
			<p className="text-gray-200 text-sm 2xl:text-base mb-6">
				{description}
			</p>

			{/* ----------- Tech stack ----------- */}
			<div className="mb-6">
				<h4 className="text-lg lg:text-xl mb-3">
					{t("tech-stack")}
				</h4>
				<div className="flex flex-wrap w-full gap-3">
					{tech_stack.map((badge) => (
						<img
							key={badge.name}
							src={badge.url}
							alt={badge.name}
							className="h-6 2xl:h-7"
						/>
					))}
				</div>
			</div>
		</div>
	);

	return (
		<article className="flex flex-col items-center gap-8 lg:gap-12 xl:gap-16 py-8 px-2 md:px-4">
			{/* On mobile always image then info; on desktop alternate based on imagePosition */}
			<div className="flex">
				<div className={`lg:hidden w-full flex flex-col items-center gap-8`}>
					{imageSection}
					{infoSection}
				</div>
				<div
					className={`hidden lg:flex items-center gap-12 xl:gap-16 w-full ${imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"}`}
				>
					<div className="flex-1 flex justify-center">{imageSection}</div>
					<div className="flex-1">{infoSection}</div>
				</div>
			</div>

			{/* ----------- Buttons ----------- */}
			<div className="grid grid-cols-2 gap-4 md:gap-16 w-full">
				<a
					href={live_url}
					target="_blank"
					className="h-11 px-6 text-sm md:text-base flex items-center justify-center text-center border-y border-sky-900 rounded-full bg-linear-to-tr from-gray-700/60 to-gray-800/60 hover:cursor-pointer hover:border-sky-700 active:scale-90 duration-150"
				>
					{t("live-app")}
				</a>
				<a
					href={github_url}
					target="_blank"
					className="h-11 px-6 text-center border-y border-gray-700 bg-zinc-900 rounded-full flex justify-center items-center hover:cursor-pointer hover:border-gray-500 active:scale-90 duration-150"
				>
					<img
						src="/img/logo/GitHub.svg"
						alt="GitHub logo"
						className="mr-2 h-5 w-5"
					/>
					<span className="text-sm md:text-base">GitHub</span>
				</a>
			</div>
		</article>
	);
}
