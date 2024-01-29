import Socials from './Socials';

const Footer = () => {
  return (
    <footer className='bg-[#db8102]/35 dark:bg-transparent py-4'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between'>
          {/* socials */}
          <Socials
            containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
            iconsStyles='text-[#ae2a1e] dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all'
          />
          {/* copyright */}
          <div className='text-muted-foreground'>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
