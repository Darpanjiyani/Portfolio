
import React, { useRef, useEffect, useState } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id={id} ref={sectionRef} className={`py-20 md:py-28 container mx-auto px-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {title}
        <span className="text-accent">.</span>
      </h2>
      {children}
    </section>
  );
};

export default Section;
