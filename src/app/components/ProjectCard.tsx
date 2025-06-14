type ProjectCardProps = {
  title: string;
  img: string;
  img_mobile: string;
  description: string;
  tech_stack: Array<string>;
  live_url: string;
  github_url: string
};

export default function ProjectCard({ title, img, img_mobile, description, tech_stack, live_url, github_url }: ProjectCardProps) {
  return (

    <article key={title} className='flex flex-col xl:flex-row h-full justify-center items-center gap-4 mb-12 lg:gap-x-12 xl:mr-4 xl:my-0'>
      <h3 className='absolute hidden xl:block top-8 text-2xl lg:text-3xl 2xl:text-4xl text-center'>{title}</h3>
      <img src={img} className='hidden xl:block object-contain w-[55%] 2xl:h-2/3' />
      <img src={img_mobile} className='xl:hidden w-full object-contain rounded-asym p-1' />
      <div className='min-h-fit lg:max-h-3/5 2xl:min-h-2/3 xl:w-1/3 my-auto text-white text-start mx-4 xl:mx-0'>
        <h3 className='xl:hidden text-2xl lg:text-3xl mb-4 lg:mb-6 text-center'>{title}</h3>
        <div className="grid grid-cols-2 w-full gap-6 mb-6">
          <a
            href={live_url}
            target="_blank"
            className="h-12 flex items-center justify-center border rounded-full bg-gradient-to-l from-blue-600 hover:cursor-pointer hover:scale-115 active:scale-90 duration-150"
          >
            Live app
          </a>
          <a
            href={github_url}
            target="_blank"
            className="h-12 text-center border rounded-full flex justify-center items-center hover:cursor-pointer hover:scale-115 hover:bg-[rgba(60,60,82,0.2)] active:scale-90 duration-150"
          >
            <img src="/img/logo/GitHub.svg" className="mr-2 h-6 w-6" />
            <p className="text-base h-5">GitHub</p>
          </a>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6'>

          <div>
            <h4 className='text-xl lg:text-2xl mb-4'>Description</h4>
            <p className='text-gray-200 text-sm xl:text-md lg:pb-2 2xl:text-[1.05rem]'>{description}</p>
          </div>

          <div>
            <h4 className='text-xl lg:text-2xl mb-4'>Tech stack</h4>
            <div className='flex flex-wrap w-full gap-4 2xl:gap-x-6'>
              {tech_stack.map((badge, index) =>
                <img key={badge + index} src={badge} className='h-6 2xl:h-8' />
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
