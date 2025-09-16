"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import { useTranslations } from "next-intl";
import { SlideFromTopOrBottom } from "./animations/SlideFromTopOrBottom";
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const t = useTranslations("projects")

  const tsBadge = { name: "TypeScript", url: "https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white&style=flat" };
  const reactBadge = { name: "React.js", url: "https://img.shields.io/badge/React-61DAFB?logo=React&logoColor=white&style=flat" };
  const reactRouterBadge = { name: "React Router", url: "https://img.shields.io/badge/React Router-CA4245?logo=reactrouter&logoColor=white&style=flat" };
  const nextJsBadge = { name: "Next.js", url: "https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white&style=flat" };
  const tailwindBadge = { name: "Tailwind", url: "https://img.shields.io/badge/Tailwind CSS-06B6D4?logo=tailwindcss&logoColor=white&style=flat" };
  const nodeBadge = { name: "Node.js", url: "https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=white&style=flat" };
  const expressBadge = { name: "Express.js", url: "https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white&style=flat" };
  const postgresqlBadge = { name: "PostgreSQL", url: "https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white&style=flat" };
  const vercelBadge = { name: "Vercel", url: "https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white&style=flat" };
  const prismaBadge = { name: "Prisma", url: "https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white&style=flat" };
  const supabaseBadge = { name: "Supabase", url: "https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=white&style=flat" };
  const neonBadge = { name: "Neon", url: "/img/badge/neon.webp" };
  const northflankBadge = { name: "Northflank", url: "/img/badge/Northflank.webp" };
  const cloudflareBadge = { name: "Cloudflare", url: "https://img.shields.io/badge/Cloudflare-F38020?logo=cloudflare&logoColor=white&style=flat" };
  const geminiBadge = { name: "Gemini", url: "https://img.shields.io/badge/Google Gemini-8E75B2?logo=google gemini&logoColor=white&style=flat" };
  const mistralBadge = { name: "Mistral", url: "https://img.shields.io/badge/Mistral AI-FA520F?logo=Mistral AI&logoColor=white&style=flat" };
  const jestBadge = { name: "Jest", url: "https://img.shields.io/badge/Jest-C21325?logo=Jest&logoColor=white&style=flat" };

  const projectList = [
    {
      title: "Traduxo",
      img: "/img/projects/traduxo.webp",
      img_mobile: "/img/projects/traduxo-mobile.webp",
      description: t("traduxo"),
      tech_stack: [tsBadge, nextJsBadge, geminiBadge, tailwindBadge, prismaBadge, jestBadge, vercelBadge, neonBadge, cloudflareBadge],
      live_url: "https://traduxo.app",
      github_url: "https://github.com/JordanDonguy/traduxo",
    },
    {
      title: "Aria",
      img: "/img/projects/aria.webp",
      img_mobile: "/img/projects/aria-mobile.webp",
      description: t("aria"),
      tech_stack: [tsBadge, nextJsBadge, mistralBadge, tailwindBadge, vercelBadge, supabaseBadge],
      live_url: "https://chat-with-aria.vercel.app",
      github_url: "https://github.com/JordanDonguy/aria",
    },
    {
      title: "Guitar Shop",
      img: "/img/projects/guitar-shop.webp",
      img_mobile: "/img/projects/guitar-shop-mobile.webp",
      description: t("guitar-shop"),
      tech_stack: [reactBadge, reactRouterBadge, tailwindBadge, nodeBadge, expressBadge, postgresqlBadge, cloudflareBadge, northflankBadge, supabaseBadge],
      live_url: "https://app.guitar-shop.store",
      github_url: "https://github.com/JordanDonguy/guitar-shop-frontend",
    },
  ];

  return (
    <section id="projects" className="relative w-full min-h-screen xl:h-screen">
      <img src="/img/left.svg" loading="lazy" alt="" className="absolute z-[-1] top-0 left-0 scale-y-[-1] max-w-1/2 lg:max-w-1/3 aspect-auto" />
      <img src="/img/right.svg" loading="lazy" alt="" className="absolute z-[-1] bottom-0 right-0 scale-y-[-1] max-w-1/2 lg:max-w-1/3 aspect-auto" />
      <SlideFromTopOrBottom>
        <div className="px-2 md:px-0 md:max-w-[90%] mx-auto h-full text-center pt-16 xl:pb-24">
          <h2 className="text-4xl font-bold mb-8">{t("title")}</h2>
          <Swiper
            modules={[Pagination, Navigation, EffectCoverflow]}
            loop={projectList.length > 2}
            effect={'coverflow'}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 100,
              stretch: 0,
              depth: 100,
              modifier: 1,
            }}
            navigation={projectList.length > 2}
            spaceBetween={100}
            pagination={projectList.length > 2}
            className="!hidden md:!block w-full h-full mySwiper"
          >
            {projectList.map(project =>
              <SwiperSlide key={project.title} className="h-auto min-h-[900px] lg:min-h-[1000px] xl:min-h-fit bg-glass rounded-asym border-y border-zinc-700 xl:mb-40">
                <ProjectCard
                  title={project.title}
                  img={project.img}
                  img_mobile={project.img_mobile}
                  description={project.description}
                  tech_stack={project.tech_stack}
                  live_url={project.live_url}
                  github_url={project.github_url}
                />
              </SwiperSlide>
            )}
          </Swiper>
          <div className="md:hidden w-full h-full">
            {projectList.map(project =>
              <div key={project.title}
                className={`h-full bg-glass border-zinc-700 ${(projectList.findIndex(x => x === project)) < (projectList.length - 1) ? "mb-16  border-b" : "pb-12 border-b-2"}`}>
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  img={project.img}
                  img_mobile={project.img_mobile}
                  description={project.description}
                  tech_stack={project.tech_stack}
                  live_url={project.live_url}
                  github_url={project.github_url}
                />
              </div>
            )}
          </div>
        </div>
      </SlideFromTopOrBottom>
    </section>
  )
}
