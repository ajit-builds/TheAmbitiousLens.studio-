import React from 'react';
import Container from '../components/Container/Container';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import { brandLogos } from '../data/brandLogos';
import { useCursor } from '../context/CursorContext';

export const WorkedWith: React.FC = () => {
  const { setCursorVariant } = useCursor();
  // Duplicate array for seamless infinite looping animation
  const marqueeLogos = [...brandLogos, ...brandLogos];

  return (
    <section
      id="worked-with"
      className="bg-obsidian pt-12 pb-14 md:pt-16 md:pb-20 overflow-hidden"
      aria-label="Brands Worked With"
    >
      <Container>
        {/* Section Intro */}
        <SectionTitle
          eyebrow="04 // CREATIVE PARTNERSHIPS"
          title="Creative Partnerships"
          subtitle="Helping brands grow through strategy, storytelling, and creative execution."
          align="left"
          className="mb-8 md:mb-10"
        />
      </Container>

      {/* Marquee Full Width Container */}
      <div 
        className="w-full relative overflow-hidden py-4 md:py-6 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        onMouseEnter={() => setCursorVariant('hover')}
        onMouseLeave={() => setCursorVariant('default')}
      >
        <div className="animate-marquee flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 pr-8 sm:pr-12 md:pr-16 lg:pr-20">
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-20 sm:h-28 md:h-36 lg:h-40 max-w-[300px] sm:max-w-[400px] md:max-w-[500px] w-auto object-contain brightness-100 opacity-85 hover:opacity-100 transition-opacity duration-300 select-none pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkedWith;
