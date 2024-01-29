import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
import DevImg from '@/components/DevImg';
// components
import Form from '@/components/Form';

const Contact = () => {
  return (
    <section className='py-12'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'></div>
        {/* text & illustration */}
        <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
          {/* text */}
          <div className='flex flex-col justify-center'>
            <h1 className='h1 max-w-md mb-8'>Let's Work Together.</h1>
            <p className='subtitle max-w-[400px]'>
              If you're around KCMO, I'd love to meet up. Otherwise, call or email me.
            </p>
          </div>
          {/* illustration */}
         
            <DevImg
              containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
              imgSrc='/hero/developer.png'
            />
        </div>
        {/* info text & form */}
        <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
          {/* info text */}
          <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
            {/* mail */}
            <div className='flex items-center gap-x-8'>
              <MailIcon size={18} className='text-[#5abb60]' />
              <div className='text-[#ae2a1e]'>patrickgbecker@gmail.com</div>
            </div>
            {/* address */}
            <div className='flex items-center gap-x-8'>
              <HomeIcon size={18} className='text-[#5abb60]' />
              <div className='text-[#ae2a1e]'>Kansas City Metropolitan Area</div>
            </div>
            {/* phone */}
            <div className='flex items-center gap-x-8'>
              <PhoneCall size={18} className='text-[#5abb60]' />
              <div className='text-[#ae2a1e]'>(720) 371-0394</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
