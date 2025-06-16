"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { SlideFromTopOrBottom } from "./animations/SlideFromTopOrBottom";
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const htmlBadge = "https://img.shields.io/badge/Html-E34F26?logo=Html5&logoColor=white&style=flat"
  const cssBadge = "https://img.shields.io/badge/CSS-663399?logo=CSS&logoColor=white&style=flat"
  const jsBadge = "https://img.shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=white&style=flat"
  const reactBadge = "https://img.shields.io/badge/React-61DAFB?logo=React&logoColor=white&style=flat";
  const reactRouterBadge = "https://img.shields.io/badge/React Router-CA4245?logo=reactrouter&logoColor=white&style=flat";
  const reduxBadge = "https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white&style=flat";
  const tailwindBadge = "https://img.shields.io/badge/Tailwind CSS-06B6D4?logo=tailwindcss&logoColor=white&style=flat";
  const nodeBadge = "https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=white&style=flat";
  const expressBadge = "https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white&style=flat";
  const postgresqlBadge = "https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white&style=flat";
  const netlifyBadge = "https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white&style=flat";
  const railwayBadge = "https://img.shields.io/badge/Railway-0B0D0E?logo=railway&logoColor=white&style=flat";
  const supabaseBadge = "https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=white&style=flat";

  const projectList = [
    {
      title: "Guitar Shop",
      img: "/img/projects/guitar-shop.webp",
      img_mobile: "/img/projects/guitar-shop-mobile.webp",
      description: "A responsive e-commerce web app for browsing and purchasing guitars. Users can view product details, manage a cart, and check out. The app also features Google OAuth login, newsletter subscription and dynamic product filtering.",
      tech_stack: [reactBadge, reactRouterBadge, tailwindBadge, nodeBadge, expressBadge, postgresqlBadge, netlifyBadge, railwayBadge, supabaseBadge],
      live_url: "https://guitar-shop-frontend.netlify.app/",
      github_url: "https://github.com/JordanDonguy/guitar-shop-frontend",
    },
    {
      title: "Mini Reddit",
      img: "/img/projects/mini-reddit.webp",
      img_mobile: "/img/projects/mini-reddit-mobile.webp",
      description: "A front-end web application built with React and Redux that mimics core features of Reddit. It fetches real-time content using the Reddit API, allowing users to browse subreddits, view posts, and explore comment threads. Designed to showcase API integration, state management, and responsive UI development. Deployed on Netlify.",
      tech_stack: [reactBadge, reduxBadge, netlifyBadge],
      live_url: "https://jordandonguy-minireddit.netlify.app/",
      github_url: "https://github.com/JordanDonguy/mini-reddit",
    },
    {
      title: "Jamming",
      img: "/img/projects/jamming.webp",
      img_mobile: "/img/projects/jamming-mobile.webp",
      description: "A React application that lets users search for songs and create custom playlists using the Spotify Web API. Features include live track search, playlist editing, and direct playlist saving to the user's Spotify account (with OAuth). Built to demonstrate API integration, component-based architecture, and user authentication. Deployed on GitHub Pages.",
      tech_stack: [reactBadge],
      live_url: "https://jordandonguy.github.io/jamming/",
      github_url: "https://github.com/JordanDonguy/jamming",
    },
    {
      title: "Film Finder",
      img: "/img/projects/film-finder.webp",
      img_mobile: "/img/projects/film-finder-mobile.webp",
      description: "A movie search app built with React that uses the OMDb API to fetch film data based on user queries. Users can search for movies by title and view key details such as release year, genre, and plot summary. Designed to highlight API integration, dynamic rendering, and clean UI design. Deployed on GitHub Pages.",
      tech_stack: [htmlBadge, cssBadge, jsBadge],
      live_url: "https://jordandonguy.github.io/film-finder/",
      github_url: "https://github.com/JordanDonguy/film-finder",
    },
  ]

  return (
    <section id="projects" className="relative w-full min-h-screen xl:h-screen snap-start">
      <img src="/img/left.svg" loading="lazy" className="absolute z-[-1] top-0 left-0 scale-y-[-1] max-w-1/2 lg:max-w-1/3 aspect-auto" />
      <img src="/img/right.svg" loading="lazy" className="absolute z-[-1] bottom-0 right-0 scale-y-[-1] max-w-1/2 lg:max-w-1/3 aspect-auto" />
      <SlideFromTopOrBottom>
        <div className="max-w-full mx-auto h-full text-center pt-24 xl:pb-24">
          <h2 className="text-4xl font-bold mb-8">Projects</h2>
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
