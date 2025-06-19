"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useTranslations } from "next-intl";
import { SlideFromTopOrBottom } from "./animations/SlideFromTopOrBottom";
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const t = useTranslations("projects")

  const htmlBadge = {name: "Html", url: "https://img.shields.io/badge/Html-E34F26?logo=Html5&logoColor=white&style=flat"};
  const cssBadge = {name: "CSS", url: "https://img.shields.io/badge/CSS-663399?logo=CSS&logoColor=white&style=flat"};
  const jsBadge = {name: "JavaScript", url: "https://img.shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=white&style=flat"};
  const reactBadge = {name: "React.js", url: "https://img.shields.io/badge/React-61DAFB?logo=React&logoColor=white&style=flat"};
  const reactRouterBadge = {name: "React Router", url: "https://img.shields.io/badge/React Router-CA4245?logo=reactrouter&logoColor=white&style=flat"};
  const reduxBadge = {name: "Redux", url: "https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white&style=flat"};
  const tailwindBadge = {name: "Tailwind", url: "https://img.shields.io/badge/Tailwind CSS-06B6D4?logo=tailwindcss&logoColor=white&style=flat"};
  const nodeBadge = {name: "Node.js", url: "https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=white&style=flat"};
  const expressBadge = {name: "Express.js", url: "https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white&style=flat"};
  const postgresqlBadge = {name: "PostgreSQL", url: "https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white&style=flat"};
  const netlifyBadge = {name: "Netlify", url: "https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white&style=flat"};
  const supabaseBadge = {name: "Supabase", url: "https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=white&style=flat"};
  const northflankBadge = {name: "Northflank", url: "/img/badge/Northflank.webp"};

  const projectList = [
    {
      title: "Guitar Shop",
      img: "/img/projects/guitar-shop.webp",
      img_mobile: "/img/projects/guitar-shop-mobile.webp",
      description: t("guitar-shop"),
      tech_stack: [reactBadge, reactRouterBadge, tailwindBadge, nodeBadge, expressBadge, postgresqlBadge, netlifyBadge, northflankBadge, supabaseBadge],
      live_url: "https://guitar-shop-frontend.netlify.app/",
      github_url: "https://github.com/JordanDonguy/guitar-shop-frontend",
    },
    {
      title: "Mini Reddit",
      img: "/img/projects/mini-reddit.webp",
      img_mobile: "/img/projects/mini-reddit-mobile.webp",
      description: t("mini-reddit"),
      tech_stack: [reactBadge, reduxBadge, netlifyBadge],
      live_url: "https://jordandonguy-minireddit.netlify.app/",
      github_url: "https://github.com/JordanDonguy/mini-reddit",
    },
    {
      title: "Jamming",
      img: "/img/projects/jamming.webp",
      img_mobile: "/img/projects/jamming-mobile.webp",
      description: t("jamming"),
      tech_stack: [reactBadge],
      live_url: "https://jordandonguy.github.io/jamming/",
      github_url: "https://github.com/JordanDonguy/jamming",
    },
    {
      title: "Film Finder",
      img: "/img/projects/film-finder.webp",
      img_mobile: "/img/projects/film-finder-mobile.webp",
      description: t("film-finder"),
      tech_stack: [htmlBadge, cssBadge, jsBadge],
      live_url: "https://jordandonguy.github.io/film-finder/",
      github_url: "https://github.com/JordanDonguy/film-finder",
    },
  ]

  return (
    <section id="projects" className="relative w-full min-h-screen xl:h-screen">
      <img src="/img/left.svg" loading="lazy" alt="" className="absolute z-[-1] top-0 left-0 scale-y-[-1] max-w-1/2 lg:max-w-1/3 aspect-auto" />
      <img src="/img/right.svg" loading="lazy" alt="" className="absolute z-[-1] bottom-0 right-0 scale-y-[-1] max-w-1/2 lg:max-w-1/3 aspect-auto" />
      <SlideFromTopOrBottom>
        <div className="max-w-full mx-auto h-full text-center pt-24 xl:pb-24">
          <h2 className="text-4xl font-bold mb-8">{t("title")}</h2>
          <Swiper
            modules={[Pagination, Navigation]}
            loop={projectList.length > 3}
            pagination={projectList.length > 3 ? { clickable: true } : false}
            navigation={projectList.length > 3}
            spaceBetween={40}
            slidesPerView={1.2}
            centeredSlides={true}
            className="!hidden md:!block w-full h-full "
          >
            {projectList.map(project =>
              <SwiperSlide key={project.title} className="h-auto min-h-[850px] xl:min-h-fit bg-glass rounded-asym border border-zinc-700 xl:mb-40">
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
                className={`mx-2 md:mx-auto h-full bg-glass rounded-asym border border-zinc-700 ${(projectList.findIndex(x => x === project)) < (projectList.length - 1) && "mb-16"}`}>
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
