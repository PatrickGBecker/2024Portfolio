'use client';
import Link from 'next/link';
import { Button } from './ui/button';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/cerulean2.png',
    category: 'Next.js - Sanity.io - Tailwind CSS - Material UI',
    name: 'Cerulean Media',
    description:
      'This app displays video & audio from a REST API, integrates SendGrid email functionality, and optimizes SEO with semantic, responsive UI/UX design & cross- browser functionality.',
    link: 'https://cerulean.media/',
    github: 'https://github.com/PatrickGBecker/cerulean-media/',
  },
  {
    image: '/work/muck-savage3.png',
    category: 'Wordpress',
    name: 'Muck Savage',
    description:
      'The purpose of this site was to create a responsive UI/UX design, a contact form that sends an email to the band, an easy way for users to hear our music and a page that displays the history of our performances.',
    link: 'https://muck-savage.com/',
    github: '/',
  },
  {
    image: '/work/mock-search-app.png',
    category: 'Next.js - Tailwind CSS - Mapbox',
    name: 'Mock Search App',
    description:
      'This app implements date & calendar functionality, displays all listings, an image carousel, loading bars, Mapbox functionality and responsive UI/UX design implementations.',
    link: 'https://mock-search-app.vercel.app/',
    github: 'https://github.com/PatrickGBecker/mock-search-app/',
  },
  {
    image: '/work/tiltons.png',
    category: 'Squarespace - JavaScript - HTML - CSS',
    name: 'Tilton\'s Therapy',
    description:
      'This responsive site displays downloadable content for customers, integrates contact forms, provides an easy way for users to book appointments, and a careers page that displays job openings.',
    link: 'https://tiltonstherapy.com/',
    github: '/',
  },
  {
    image: '/work/lit-salon.png',
    category: 'Squarespace - JavaScript - HTML - CSS',
    name: 'Las Vegas Lit',
    description:
      'This responsive site displays upcoming events & an updated blog, integrates contact forms with email sign-up functionality, provides links for users to purchase local writing.',
    link: 'https://lvlitsalon.squarespace.com/',
    github: '/',
  },
  {
    image: '/work/rancid-tomatillos.png',
    category: 'React - Cypress.io Testing Framework',
    name: 'Rancid Tomatillos',
    description:
      'This app displays a movie catalog with functionality to see individual movie summaries through dynamic searching, and relevant movie trailers from YouTube on the details page. Deployment to Heroku.',
    link: 'https://patrickgbecker.github.io/rancidTomatillos/',
    github: 'https://github.com/PatrickGBecker/rancidTomatillos/',
  },
  {
    image: '/work/daily-dispatch.png',
    category: 'React',
    name: 'Daily Dispatch',
    description:
      'This project was an 8-hour coding challenge. The Daily Dispatch allows users to browse article samples from various sections of The New York Times. The samples also include links to the full articles.',
    link: 'https://daily-dispatch.vercel.app/',
    github: 'https://github.com/PatrickGBecker/daily-dispatch/',
  },
  {
    image: '/work/sansukumi-ken.png',
    category: 'JavaScript - HTML - CSS',
    name: 'Sansukumi-Ken (Paper-Rock-Scissors)',
    description:
      'A school project that demonstrates an understanding of event delegation to handle similar even listeners and understanding the difference between the data model and the DOM with DRY JavaScript.',
    link: 'https://patrickgbecker.github.io/Sansukumi-Ken-Solo-Project/',
    github: 'https://github.com/PatrickGBecker/Sansukumi-Ken-Solo-Project/',
  },
  {
    image: '/work/graphic-design.png',
    category: 'Adobe Dreamweaver',
    name: 'Digital Media Portfolio',
    description:
      'This responsive site is a portfolio of wireframes, graphic design work and multi-media art. The purpose of the site is to display my design skills and project planning abilities.',
    link: 'https://patrickgbecker.myportfolio.com/',
    github: '/',
  },
];

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mt-32 mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'>What I've Done</h2>
          <p className='subtitle mb-8'></p>
          <Link href='/projects'>
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper
            className='h-[480px]'
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
