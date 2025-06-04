import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';

import {
  RiArrowDownSLine,
} from 'react-icons/ri';

// components
import DevImg from './DevImg';
import Socials from './Socials';

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
          {/* text */}
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-[#5abb60] text-md uppercase font-semibold mb-4 tracking-[4px]'>
              Software Developer
            </div>
            <h1 className='text-[#ae2a1e]/90 h1 mb-4'>Hello, my name is Patrick Becker</h1>
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
              I'm a strategic & collaborative creator with a positive & teachable can-do attitude.  
            </p>
            {/* buttons */}
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href='/contact'>
                <Button className='bg-[#5abb60] gap-x-2'>
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button 
                className='bg-[#5abb60] gap-x-2 min-w-44'>
                  <a
                    className='inline-flex items-center justify-center'
                    href='./../PatrickBecker_Resume_2025_PDF.pdf' 
                    target='_blank'
                    variant='secondary' 
                    >
                      Download CV
                    <Download size={18} />  
                  </a>
              </Button>
            </div>
            {/* socials */}
            <Socials
              containerStyles='flex gap-x-6 mx-auto xl:mx-0'
              iconsStyles='text-[#ae2a1e] text-[22px] hover:text-white transition-all'
            />
          </div>
          {/* image */}
          <div className='hidden xl:flex relative'>
            {/* badge 1 
          /*  <Badge
              containerStyles='absolute top-[24%] -left-[5rem]'
              icon={<RiBriefcase4Fill />}
              endCountNum={2}
              badgeText='Years Of Experience'
            />
            badge 2 
     
            <Badge
              containerStyles='absolute top-[80%] -left-[1rem]'
              icon={<RiTodoFill />}
              endCountNum={6}
              endCountText='k'
              badgeText='Finished Projects'
            />
            {/* badge 3 
            <Badge
              containerStyles='absolute top-[55%] -right-8'
              icon={<RiTeamFill />}
              endCountNum={9}
              endCountText='k'
              badgeText='Happy Clients'
  /> */}
            <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
            <DevImg
              containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
              imgSrc='/hero/developer.png'
            />
          </div>
        </div>
        {/* icon */}
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-[#ae2a1e] text-3xl' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
