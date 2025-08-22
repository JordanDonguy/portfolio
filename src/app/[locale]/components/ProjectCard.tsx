import { useTranslations } from "next-intl";

type ProjectCardProps = {
  title: string;
  img: string;
  img_mobile: string;
  description: string;
  tech_stack: Array<{ name: string; url: string }>;
  live_url: string;
  github_url: string
};

export default function ProjectCard({ title, img, img_mobile, description, tech_stack, live_url, github_url }: ProjectCardProps) {
  const t = useTranslations("projects");

  return (

    <article key={title} className='min-h-[50svh] flex flex-col xl:flex-row h-full justify-center items-center gap-4 pb-12 lg:gap-x-12 xl:mr-4 xl:my-0'>
      <h3 className='absolute hidden xl:block top-8 text-2xl lg:text-3xl 2xl:text-4xl text-center'>{title}</h3>
      <img src={img} alt={`${title} desktop screenshot`} className='hidden xl:block object-contain h-2/3 my-auto' />
      <img src={img_mobile} alt={`${title} mobile screenshot`} className='xl:hidden w-full h-full object-contain rounded-asym-project md:p-1 border border-zinc-800' />
      <div className='lg:max-h-3/5 min-h-2/3 xl:w-1/3 my-auto text-white text-start mx-4 xl:mx-0'>
        <h3 className='xl:hidden text-2xl lg:text-3xl mb-4 lg:mb-6 text-center'>{title}</h3>
        <div className="grid grid-cols-2 w-full gap-3 md:gap-6 mb-6">
          <a
            href={live_url}
            target="_blank"
            className="h-12 text-sm md:text-base flex items-center justify-center text-center border rounded-full bg-gradient-to-l from-blue-600 hover:cursor-pointer hover:scale-115 active:scale-90 duration-150"
          >
            {t("live-app")}
          </a>
          <a
            href={github_url}
            target="_blank"
            className="h-12 text-center border rounded-full flex justify-center items-center hover:cursor-pointer hover:scale-115 hover:bg-[rgba(60,60,82,0.2)] active:scale-90 duration-150"
          >
            <img src="/img/logo/GitHub.svg" alt="GitHub logo" className="mr-2 mb-[1px] h-6 w-6 md:mb-0" />
            <p className="text-sm md:text-base pt-[1px] md:h-5 md:pt-0">GitHub</p>
          </a>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6'>

          <div>
            <h4 className='text-xl lg:text-2xl mb-4'>Description</h4>
            <p className='text-gray-200 text-sm xl:text-md lg:pb-2 2xl:text-[1.05rem]'>{description}</p>
          </div>

          <div>
            <h4 className='text-xl lg:text-2xl mb-4'>{t("tech-stack")}</h4>
            <div className='flex flex-wrap w-full gap-4 2xl:gap-x-6'>
              {tech_stack.map((badge, index) =>
                <img key={badge.name + index} src={badge.url} alt={badge.name} className='h-6 2xl:h-8' />
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
