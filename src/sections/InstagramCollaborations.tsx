import React from 'react';
import { motion } from 'motion/react';
import Container from '../components/Container/Container';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import { instagramCollaborations } from '../data/instagramCollaborations';
import { useCursor } from '../context/CursorContext';

export const InstagramCollaborations: React.FC = () => {
  const { setCursorVariant } = useCursor();

  return (
    <section
      id="collaborations"
      className="bg-obsidian pt-16 pb-16 md:pt-20 md:pb-24 relative overflow-hidden"
      aria-label="Featured Instagram Collaborations"
    >
      <Container>
        {/* Section Intro Header */}
        <SectionTitle
          eyebrow="03 // TRUSTED BY"
          title="Trusted By"
          subtitle="Helping channels grow through creative strategy and storytelling."
          align="left"
          className="mb-12 md:mb-16"
        />

        {/* Responsive Grid: 1 col mobile, 2 cols tablet & desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {instagramCollaborations.map((collab, index) => (
            <motion.a
              key={collab.id}
              href={collab.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="p-5 sm:p-6 rounded-md bg-white/[0.01] backdrop-blur-xl border border-white/[0.04] hover:border-white/20 hover:bg-white/[0.02] hover:-translate-y-1 transition-all duration-300 group flex items-center justify-between select-none outline-none"
            >
              {/* Left Profile Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors duration-300 flex-shrink-0 bg-neutral-900">
                  <img
                    src={collab.profileImage}
                    alt={collab.name}
                    className="w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col space-y-0.5">
                  <h4 className="text-sm sm:text-base font-display font-light text-neutral-100 group-hover:text-white transition-colors duration-300">
                    {collab.name}
                  </h4>
                  <span className="text-xs font-mono text-neutral-400 tracking-wide">
                    @{collab.username}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase pt-0.5">
                    {collab.followers}
                  </span>
                </div>
              </div>

              {/* Right Action: Instagram Icon */}
              <div className="flex items-center ml-3 flex-shrink-0">
                <span className="w-9 h-9 rounded-full bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default InstagramCollaborations;
