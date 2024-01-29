import { Button } from './ui/button';
import Link from 'next/link';

const Cta = () => {
  return (
    <section className='py-24 h-[60vh] xl:pt-40 bg-cta bg-no-repeat bg-top dark:bg-none'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          <h2 className='h2 max-w-xl text-center  mt-24 mb-8'>
            What can I do for you?
          </h2>
          <Link href='/contact'>
            <Button className='mt-10' >Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
