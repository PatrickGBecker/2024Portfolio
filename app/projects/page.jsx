'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/cerulean2.png',
    category: 'Next.js',
    name: 'Cerulean Media',
    description:
      'This app displays video & audio from a REST API, integrates SendGrid email functionality, and optimizes SEO with semantic, responsive UI/UX design & cross- browser functionality.',
    link: 'https://cerulean.media/',
    github: 'https://github.com/PatrickGBecker/cerulean-media/',
  },
  {
    image: '/work/muck-savage.png',
    category: 'Wordpress',
    name: 'Muck Savage',
    description:
      'The purpose of this site was to create a responsive UI/UX design, a contact form that sends an email to the band, an easy way for users to hear our music and a page that displays the history of our performances.',
    link: 'https://muck-savage.com/',
    github: '/',
  },
  {
    image: '/work/mock-search-app.png',
    category: 'Next.js',
    name: 'Mock Search App',
    description:
      'This app implements date & calendar functionality, displays all listings, an image carousel, loading bars, Mapbox functionality and responsive UI/UX design implementations.',
    link: 'https://mock-search-app.vercel.app/',
    github: 'https://github.com/PatrickGBecker/mock-search-app/',
  },
  {
    image: '/work/tiltons.png',
    category: 'Squarespace',
    name: 'Tilton\'s Therapy',
    description:
      'This responsive site displays downloadable content for customers, integrates contact forms, provides an easy way for users to book appointments, and a careers page that displays job openings.',
    link: 'https://tiltonstherapy.com/',
    github: '/',
  },
  {
    image: '/work/lit-salon.png',
    category: 'Squarespace',
    name: 'Las Vegas Lit',
    description:
      'This responsive site displays upcoming events & an updated blog, integrates contact forms with email sign-up functionality, provides links for users to purchase local writing.',
    link: 'https://lvlitsalon.squarespace.com/',
    github: '/',
  },
  {
    image: '/work/hoovz.png',
    category: 'HTML/CSS',
    name: 'Hoovz Email Newsletter Template',
    description:
      'This email template showcases a comprehensive understanding of responsive email design, effective branding, and a unique voice that subscribers will recognize and trust.',
    link: 'https://patrickgbecker.github.io/hoovzEmailTemplate/',
    github: 'https://github.com/PatrickGBecker/hoovzEmailTemplate',
  },
  {
    image: '/work/rancid-tomatillos.png',
    category: 'React',
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
    category: 'JavaScript',
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

// remove category duplicates
const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    return category === 'all projects'
      ? project
      : project.category === category;
  });

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
