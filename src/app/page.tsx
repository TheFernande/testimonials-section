import { TestimonialCardProps } from "@/components/testimonialCard";
import TestimonialSection from "@/components/testimonialSection";

const testimonialData: TestimonialCardProps[] = [
  {
    name: "Sarah Dole",
    username: "@sarahdole",
    testimonial:
      "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
    imageUrl: "/images/profile-thumbnail.jpg"
  },
  {
    name: "John Appleseed",
    username: "@johnaseed",
    testimonial:
      "As an artist, finding inspiration is crucial. This platform has become my go-to source for unique abstract images that ignite my creativity like never before.",
    imageUrl: "/images/profile-thumbnail_1.jpg"
  },
  {
    name: "Jean Gray",
    username: "@jeniic",
    testimonial:
      "I never thought I'd find such stunning abstract images for free! This platform has exceeded my expectations in every way.",
    imageUrl: "/images/profile-thumbnail_2.jpg"
  },
  {
    name: "Jake Johnson",
    username: "@jakejohnshon",
    testimonial:
      "From corporate presentations to personal projects, the abstract images on this platform have added a touch of elegance and sophistication to everything I create..",
    imageUrl: "/images/profile-thumbnail_3.jpg"
  },
  {
    name: "Igor Stravinsky",
    username: "@igorstrav",
    testimonial:
      "The subscription plans are worth every penny. Having unlimited access to premium abstract images has transformed my design workflow and elevated the quality of my work",
    imageUrl: "/images/profile-thumbnail_4.jpg"
  },
  {
    name: "Declan Rice",
    username: "@drice",
    testimonial:
      "I'm amazed by the attention to detail in every image on this platform. It's clear that a lot of thought and creativity goes into curating the collection.",
    imageUrl: "/images/profile-thumbnail_5.jpg"
  },
  {
    name: "Marcus Thompson",
    username: "@mthompson",
    testimonial:
      "Using abstract images from this platform has helped me convey complex concepts in a visually engaging way. My clients are always impressed!",
    imageUrl: "/images/profile-thumbnail_6.jpg"
  },
  {
    name: "Oliver Neverloved",
    username: "@olivernever",
    testimonial:
      "I appreciate how user-friendly the platform is. Browsing, downloading, and managing my image library couldn't be easier.",
    imageUrl: "/images/profile-thumbnail_7.jpg"
  },
  {
    name: "Mark Dennis",
    username: "@marked",
    testimonial:
      "The customer support team went above and beyond to help me with a subscription issue. Their dedication to customer satisfaction is truly commendable",
    imageUrl: "/images/profile-thumbnail_8.jpg"
  }
];

export default function Home() {
  return (
    // `<main>` -> this is the "Page body" element in the Figma design
    <main className='gfe-main'>
      <div className='relative'>
        <TestimonialSection data={testimonialData} />
      </div>
    </main>
  );
}
