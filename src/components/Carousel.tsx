'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

type CustomCarouselProps = {
  children: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  orientation?: 'horizontal' | 'vertical';
};

export default function CustomCarousel({
  children,
  className,
  itemClassName,
  orientation = 'horizontal',
}: CustomCarouselProps) {
  return (
    <Carousel
      opts={{ align: 'start' }}
      orientation={orientation}
      className={cn('w-full max-w-5xl', className)}
    >
      <CarouselContent
        className={orientation === 'horizontal' ? 'gap-4' : 'gap-y-4'}
      >
        {children.map((child, index) => (
          <CarouselItem
            key={index}
            className={cn(
              orientation === 'horizontal'
                ? 'basis-full sm:basis-1/2 lg:basis-1/3 shrink-0'
                : '',
              itemClassName,
            )}
          >
            {child}
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="text-white" />
      <CarouselNext className="text-white" />
    </Carousel>
  );
}
