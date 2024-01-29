'use client';

import Image from 'next/image';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const reviewsData = [
  {
    avatar: '/reviews/shauna.png',
    name: 'Shauna MacFarlane-Okongo',
    job: 'Software Engineer @ Clearsense',
    review:
      'Very calm, kind, gracious and patient. He was encouraging, gave great ideas and feedback. Patrick was a pleasure to work with and I would love the opportunity to work with him again on any project!',
  },
  {
    avatar: '/reviews/amelia.png',
    name: 'Amelia Eiger',
    job: 'Full Stack Developer @ Sigmatech',
    review:
      'Your knack for verbalizing processes in plain English was the most helpful resource I had during our project. It is such a useful skill and made working with you easy and breezy. Your positive demeanor and persistence was encouraging and, in the end, look at what we made! We did it!',
  },
  {
    avatar: '/reviews/steven.png',
    name: 'Steven Mancine',
    job: 'Software Engineer @ Charter Communications',
    review:
      'I was his mentor at Turing and helped him build many beautiful, accessible, and responsive applications. He demonstrated expert skill in CSS and JavaScript. If your team is looking for a fantastic frontend engineer with a great personality, look no further!',
  },
];

const Reviews = () => {
  return (
    <section className='mb-6 mt-12 xl:mb-22 xl:mt-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 text-center mx-auto overflow-y-scroll'>Who I've Worked With</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className='h-[350px]'
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className='bg-[#db9d00]/20 dark:bg-secondary/40 p-8 min-h-[300px]'>
                  <CardHeader className='p-0 mb-4'>
                    <div className='flex items-center gap-x-4'>
                      {/* image */}
                      <Image
                        className='rounded-full'
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=''
                        priority
                      />
                      {/* name */}
                      <div className='text-[#ae2a1e] flex flex-col'>
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className='text-lg text-[#136955]'>
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
