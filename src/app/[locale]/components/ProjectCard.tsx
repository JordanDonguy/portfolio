import { useTranslations } from "next-intl";

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

export default function ProjectCard({ title, img, img_mobile, description, tech_stack, live_url, github_url, imagePosition = "left" }: ProjectCardProps) {
  const t = useTranslations("projects");

  const imageSection = (
    <>
      <img src={img} alt={`${title} desktop screenshot`} className='hidden lg:block object-contain rounded-2xl w-full max-w-[600px]' />
      <img src={img_mobile} alt={`${title} mobile screenshot`} className='lg:hidden w-full h-full object-contain rounded-asym-project border border-zinc-700 md:border-0 md:outline outline-zinc-700' />
    </>
  );

  const infoSection = (
    <div className='flex flex-col justify-center text-white text-start lg:max-w-md xl:max-w-lg'>
      <h3 className='text-2xl lg:text-3xl 2xl:text-4xl mb-4 lg:mb-6 text-center lg:text-start'>{title}</h3>

      {/* ----------- Description ----------- */}
      <p className='text-gray-200 text-sm xl:text-base 2xl:text-[1.05rem] mb-6'>{description}</p>

      {/* ----------- Tech stack ----------- */}
      <div className='mb-6'>
        <h4 className='text-lg lg:text-xl mb-3 text-gray-400'>{t("tech-stack")}</h4>
        <div className='flex flex-wrap w-full gap-3'>
          {tech_stack.map((badge, index) =>
            <img key={badge.name + index} src={badge.url} alt={badge.name} className='h-6 2xl:h-7' />
          )}
        </div>
      </div>

      {/* ----------- Buttons ----------- */}
      <div className="flex gap-4">
        <a
          href={live_url}
          target="_blank"
          className="h-11 px-6 text-sm md:text-base flex items-center justify-center text-center border rounded-full bg-gradient-to-l from-blue-600 hover:cursor-pointer hover:scale-105 active:scale-90 duration-150"
        >
          {t("live-app")}
        </a>
        <a
          href={github_url}
          target="_blank"
          className="h-11 px-6 text-center border rounded-full flex justify-center items-center hover:cursor-pointer hover:scale-105 hover:bg-[rgba(60,60,82,0.2)] active:scale-90 duration-150"
        >
          <img src="/img/logo/GitHub.svg" alt="GitHub logo" className="mr-2 h-5 w-5" />
          <span className="text-sm md:text-base">GitHub</span>
        </a>
      </div>
    </div>
  );

  return (
    <article className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16 py-8 px-2 md:px-4">
      {/* On mobile always image then info; on desktop alternate based on imagePosition */}
      <div className={`lg:hidden w-full flex flex-col items-center gap-8`}>
        {imageSection}
        {infoSection}
      </div>
      <div className={`hidden lg:flex lg:flex-row items-center gap-12 xl:gap-16 w-full ${imagePosition === "right" ? "flex-row-reverse" : ""}`}>
        <div className="flex-1 flex justify-center">
          {imageSection}
        </div>
        <div className="flex-1">
          {infoSection}
        </div>
      </div>
    </article>
  )
}
