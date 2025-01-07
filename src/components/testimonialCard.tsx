"use client";

import Image from "next/image";
import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  name: string;
  username: string;
  testimonial: string;
  imageUrl: string;
  maxTestimonialLength?: number;
  gridOrder?: number;
}

const MAX_TESTIMONIAL_LENGTH = 180;

const TestimonialCard: React.FC<TestimonialCardProps> = props => {
  const {
    name,
    username,
    testimonial,
    imageUrl,
    maxTestimonialLength = MAX_TESTIMONIAL_LENGTH,
    gridOrder
  } = props;

  const [isExpanded, setIsExpanded] = useState(false);
  const isTruncated = testimonial.length > maxTestimonialLength;
  const animationTrigger = useRef(null);

  useEffect(() => {
    if (animationTrigger.current) {
      autoAnimate(animationTrigger.current, {
        duration: 150,
        easing: "ease-in-out",
        disrespectUserMotionPreference: true
      });
    }
  }, []);

  return (
    <div
      // className={
      //   (gridOrder === 1 && "order-1") +
      //   " " +
      //   (gridOrder === 2 && "order-2") +
      //   " " +
      //   (gridOrder === 3 && "order-3") +
      //   " h-fit w-full max-w-[384px] rounded-lg bg-white p-6 leading-6 shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)]"
      // }
      className={cn(
        gridOrder === 1 && "lg:order-1",
        gridOrder === 2 && "lg:order-2",
        gridOrder === 3 && "lg:order-3",
        "h-fit w-full max-w-[384px] rounded-lg bg-white px-4 py-6 leading-6 shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)]"
      )}
    >
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-4'>
          <div className='relative aspect-square w-[48px] flex-shrink-0'>
            <Image
              src={imageUrl}
              alt={`Profile picture of ${name}`}
              fill
              className='rounded-full bg-gray-100 object-cover'
              sizes='(max-width: 48px) 100vw, 48px'
            />
          </div>

          <div className='flex min-w-0 flex-col gap-[1px]'>
            <h2 className='truncate text-lg font-semibold text-neutral-900'>{name}</h2>
            <span className='truncate text-sm text-neutral-600'>{username}</span>
          </div>
        </div>

        <div
          ref={animationTrigger}
          className='flex flex-col gap-2 overflow-hidden'
        >
          {!isExpanded && !isTruncated && (
            <p className='origin-top break-words text-base font-normal leading-6 text-neutral-600'>
              {testimonial}
            </p>
          )}
          {!isExpanded && isTruncated && (
            <p className='origin-top break-words text-base font-normal leading-6 text-neutral-600'>
              {testimonial.slice(0, maxTestimonialLength)}...
            </p>
          )}
          {isExpanded && isTruncated && (
            <p className='origin-top break-words text-base font-normal leading-6 text-neutral-600'>
              {testimonial}
            </p>
          )}
          {isTruncated && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className='m-0 p-0 text-sm font-medium text-neutral-500 hover:text-neutral-700'
            >
              {isExpanded && (
                <span className='flex items-center justify-end gap-1'>
                  Show less
                  <ChevronUpIcon size={16} />
                </span>
              )}
              {!isExpanded && (
                <span className='flex items-center justify-end gap-1'>
                  Show more
                  <ChevronDownIcon size={16} />
                </span>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
