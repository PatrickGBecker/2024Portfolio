import { LucideSquareCode, Gem, DraftingCompass, FileStack } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const servicesData = [
  {
    icon: <DraftingCompass className='text-[#5abb60]' size={72} strokeWidth={0.8} />,
    title: 'Design',
    description:
      'Whether it\'s making wireframes, data flow charts, digital content creation, crafting customized email templates, or using mixed media for handmade art, I can help you with whatever design you need realized.',
  },
  {
    icon: <LucideSquareCode className='text-[#5abb60]' size={72} strokeWidth={0.8} />,
    title: 'Develop',
    description:
      'I utilize Object-Oriented Programming fundamentals to build complex, scalable, and fully-tested applications. Leveraging Next.js, TypeScript & Tailwind CSS to build & deploy progressive web apps with dry, clean, semantic code.',
  },
  {
    icon: <FileStack className='text-[#5abb60]' size={72} strokeWidth={0.8} />,
    title: 'Document',
    description:
      'Communication and documentation are the most valuable skills in a collaborative environment. Thanks to my experience as a Revenue Analyst and team leader in the hospitality industry, these soft skills are second nature to me.',
  },
];

const Services = () => {
  return (
    <section className='mt-44 mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          What I Do
        </h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {servicesData.map((item, index) => {
            return (
              <Card
                className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                key={index}
              >
                <CardHeader className='!text-[#ae2a1e] absolute -top-[60px]'>
                  <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className='text-center'>
                  <CardTitle className='pt-6 mb-4'>{item.title}</CardTitle>
                  <CardDescription className='text-lg'>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
