import TestimonialSection from "@/components/testimonialSection";
import testimonialData from "data/testimonials-data";

export default function Home() {
  return (
    // `<main>` -> this is the "Page body" element in the Figma design
    <main className='gfe-main'>
      <TestimonialSection data={testimonialData} />
    </main>
  );
}
