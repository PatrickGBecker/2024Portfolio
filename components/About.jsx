import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from 'lucide-react';

const infoData = [
  {
    icon: <User2 className='text-[#5abb60]' size={20} />,
    text: 'Patrick Becker',
  },
  {
    icon: <PhoneCall className='text-[#5abb60]' size={20} />,
    text: '(720) 371-0394',
  },
  {
    icon: <MailIcon className='text-[#5abb60]' size={20} />,
    text: 'patrickgbecker@gmail.com',
  },
  {
    icon: <Calendar className='text-[#5abb60]' size={20} />,
    text: 'Born in Kansas, 1986',
  },
  {
    icon: <GraduationCap className='text-[#5abb60]' size={20} />,
    text: 'Accredited Frontend Engineering Certification',
  },
  {
    icon: <HomeIcon className='text-[#5abb60]' size={20} />,
    text: 'Kansas City Area',
  },
];

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'Turing School of Software & Design',
        qualification: 'Accredited Frontend Engineering Certification',
        years: '2022',
      },
      {
        university: 'Emporia State University',
        qualification: 'Bachelor of Arts',
        years: '2005 - 2009',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Nebraska Furniture Mart',
        role: 'Adobe Multi-Solutions Engineer',
        years: '3/2024 - 5/2024',
      },
      {
        company: 'Moon Bloom Marketing Services',
        role: 'Frontend Developer & Graphic Designer',
        years: '11/2022 - 2/2024',
      },
      {
        company: 'Ascend Learning',
        role: 'Associate Test Developer',
        years: '5/2023 - 1/2024',
      },
      {
        company: 'Westmont Hospitality Group',
        role: 'Regional Revenue Analyst',
        years: '3/2020 - 4/2021',
      },
      {
        company: 'Sage Hospitality Management',
        role: 'Front Office Supervisor/Revenue Analyst',
        years: '7/2014 - 3/2020',
      },

    ],
  },
];

const skillData = [
  {
    title: 'technical skills',
    data: [
      {
        name: 'Adobe Workfront/Fusion, AEM, AEP Launch & Data Collection,'
      },
      {
        name: 'JavaScript, TypeScript, React.js, HTML, CSS/SCSS',
      },
      {
        name: 'Next.js, Sanity.io, MySQL, GraphQL,',
      },
      {
        name: 'Cypress.io Testing, Jest, CircleCI Integration Platform,',
      },
      {
        name: 'Wordpress, Squarespace, Adobe Creative Cloud,',
      },
      {
        name: 'and many more!',
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/github.svg',
      },
      {
        imgPath: '/about/vercel.svg',
      },
      {
        imgPath: '/about/heroku.svg',
      },
      {
        imgPath: '/about/postman.svg',
      },
      {
        imgPath: '/about/firebase.svg',
      },
      {
        imgPath: '/about/figma.svg',
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 mt-36 xl:mb-16 text-center mx-auto'>
          Who I Am
        </h2>
        <div className='flex flex-col xl:flex-row relative'>
          {/* image */}
          <div className='hidden xl:flex flex-1 relative'>
            <DevImg
              containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
              imgSrc='/about/developer2.png'
            />
          </div>
          {/* tabs */}
          <div className='text-[#ae2a1e] flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='qualifications'
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className='text-lg mt-12 xl:mt-8'>
                {/* personal */}
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>
                      Adaptable, Tech-savvy & Empathetic
                    </h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                      While I am an adept problem solver and highly skilled, my natural inclination toward cooperation and empathy are my greatest strengths. Coalesced together, I believe my personal qualities will provide a lucky company with a curious, tech-savvy, and congenial employee.
                    </p>
                    {/* icons */}
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className='flex items-center gap-x-4 mx-auto xl:mx-0'
                            key={index}
                          >
                            <div className='text-primary'>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className='flex flex-col gap-y-2'>
                      <div className='text-[#5abb60]'>Language Skill</div>
                      <div className='border-b border-border'></div>
                      <div>Fluent English, Conversational Spanish</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value='qualifications'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>
                      My Professional Journey. . . so far. . .
                    </h3>
                    {/* experience & education wrapper */}
                    <div className='grid md:grid-cols-2 gap-y-8'>
                      {/* experience */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <Briefcase className='text-[#5abb60]'/>
                          <h4 className='text-[#5abb60] capitalize font-medium'>
                            {getData(qualificationData, 'experience').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'experience').data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-[#5abb60] absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {company}
                                    </div>
                                    <div className='text-[#ae2a1e] text-lg leading-none mb-4'>
                                      {role}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px]'>
                          <GraduationCap className='text-[#5abb60]' size={28} />
                          <h4 className='text-[#5abb60] capitalize font-medium'>
                            {getData(qualificationData, 'education').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'education').data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-[#5abb60] absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {university}
                                    </div>
                                    <div className='text-[#ae2a1e] text-lg leading-none mb-4'>
                                      {qualification}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value='skills'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'>My Wheelhouse Technologies</h3>
                    {/* skills */}
                    <div className='mb-16'>
                      <h4 className='text-[#5abb60] text-xl font-semibold mb-2'>Technical Skills</h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, 'technical skills').data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className='w-4/4 text-center xl:text-center mx-auto xl:mx-0'
                                key={index}
                              >
                                <div className='text-[#ae2a1e] font-medium'>{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className='text-[#5abb60] text-xl font-semibold mb-2 xl:text-left'>
                        Tools
                      </h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* tool list */}
                      <div className='flex gap-x-8 justify-center xl:justify-start'>
                        {getData(skillData, 'tools').data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=''
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
