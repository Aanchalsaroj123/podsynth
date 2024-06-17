import React, { useCallback } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { CarouselProps } from '@/types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import LoaderSpinner from './LoaderSpinner';

const EmblaCarousel = ({ fansLikeDetail }: CarouselProps) => {
  const router = useRouter();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay || !("stopOnInteraction" in autoplay.options)) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? (autoplay.reset as () => void)
        : (autoplay.stop as () => void);

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  const slides = fansLikeDetail && fansLikeDetail.filter((item: any) => item.totalPodcasts > 0);

  if (!slides) return <LoaderSpinner />

  return (
    <section className="flex w-full flex-col gap-4 overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((item) => (
          <figure
            key={item._id}
            className="carousel_box_small"
            onClick={() => router.push(`/podcasts/${item.podcast[0]?.podcastId}`)}
            style={{
              position: 'relative',
              width: '200px',
              height: '150px',
              overflow: 'hidden',
              borderRadius: '12px',
              margin: '0 10px'
            }}
          >
            <Image 
              src={item.imageUrl}
              alt="card"
              fill
              style={{
                objectFit: 'cover'
              }}
              className="absolute size-full rounded-xl border-none"
            />
            <div 
              className="glassmorphism-black relative z-10 flex flex-col rounded-b-xl p-2"
              style={{
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <h2 className="text-12 font-semibold text-white-1" style={{ fontSize: '12px', color: '#fff' }}>{item.podcast[0]?.podcastTitle}</h2>
              <p className="text-10 font-normal text-white-2" style={{ fontSize: '10px', color: '#ccc' }}>{item.name}</p>
            </div>
          </figure>
        ))}
      </div>
      <div className="flex justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            selected={index === selectedIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default EmblaCarousel;
