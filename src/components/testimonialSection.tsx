"use client";

import TestimonialCard, { TestimonialCardProps } from "./testimonialCard";

interface TestimonialSectionProps {
  data: TestimonialCardProps[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = props => {
  const { data } = props;

  return (
    <section className='gfe-container'>
      <header className='flex flex-col gap-5 px-8 pb-12 text-center'>
        <div className='flex flex-col gap-3'>
          <p className='text-xl font-semibold text-indigo-700'>Testimonials</p>
          <p className='text-3xl font-semibold text-neutral-900 md:text-5xl'>
            Countless users, countless smiles
          </p>
        </div>
        <p className='text-lg font-normal text-neutral-600 md:text-xl'>
          Explore our community&#39;s journey and discover why satisfaction defines us.
        </p>
      </header>
      <div className='grid grid-cols-1 justify-items-center gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:space-y-8'>
        {data.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
