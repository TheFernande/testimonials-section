"use client";

import TestimonialCard, { TestimonialCardProps } from "./testimonialCard";

interface TestimonialSectionProps {
  data: TestimonialCardProps[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = props => {
  const { data } = props;

  return (
    <section className='gfe-container'>
      <div className='flex flex-col gap-3'>
        <p className='text-xl font-semibold text-indigo-700'>Testimonials</p>
        <p className='text-3xl font-semibold text-neutral-900'>Countless users, countless smiles</p>
      </div>
      <p className='text-lg font-normal text-neutral-600'>
        Explore our community&#39;s journey and discover why satisfaction defines us.
      </p>
      {data.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          {...testimonial}
        />
      ))}
    </section>
  );
};

export default TestimonialSection;
