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
      className="bg-obsidian pt-20 pb-24 md:pt-28 md:pb-36 overflow-hidden"
      aria-label="Brands Worked With"
    >
      <Container>
        {/* Section Intro */}
        <SectionTitle
          eyebrow="04 // TRUSTED BY"
          title="Worked With"
          subtitle="Collaborating with brands and creative teams to bring ideas to life."
          align="left"
          className="mb-16 md:mb-20"
        />
      </Container>

      {/* Marquee Full Width Container */}
      <div 
        className="w-full relative overflow-hidden py-8 md:py-12 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        onMouseEnter={() => setCursorVariant('hover')}
        onMouseLeave={() => setCursorVariant('default')}
      >
        <div className="animate-marquee flex items-center gap-16 sm:gap-24 md:gap-32 lg:gap-40 pr-16 sm:pr-24 md:pr-32 lg:pr-40">
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-14 sm:h-18 md:h-24 lg:h-28 max-w-[200px] sm:max-w-[280px] md:max-w-[340px] w-auto object-contain brightness-100 opacity-80 hover:opacity-100 transition-opacity duration-300 select-none pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkedWith;
