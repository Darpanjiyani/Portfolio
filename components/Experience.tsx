import React from 'react';
import Section from './Section';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience">
      <div className="relative overflow-hidden max-w-6xl mx-auto pb-24">
        {/* Center vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 border-l-2 border-gray-700 border-opacity-30 h-full"></div>

        {EXPERIENCES.map((exp, index) => {
          const isOdd = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`relative mb-20 flex justify-between items-center w-full ${
                isOdd ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Spacer */}
              <div className="order-1 w-[47%]"></div>

              {/* Centered timeline circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-20 bg-accent shadow-lg w-8 h-8 rounded-full flex items-center justify-center">
                <div className="h-3 w-3 bg-primary rounded-full"></div>
              </div>

              {/* Experience Card */}
              <div
                className={`order-1 bg-secondary rounded-lg shadow-xl px-10 py-6 ${
                  isOdd ? 'mr-10' : 'ml-10'
                } w-[47%]`}
              >
                <h3 className="mb-1 font-bold text-light text-xl">{exp.role}</h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-accent">
                  {exp.company} | {exp.location}
                </p>
                <p className="text-xs text-medium mt-1 mb-3">{exp.duration}</p>
                <ul className="list-disc pl-5 mt-3 text-medium text-sm leading-relaxed">
                  {exp.description.map((point, i) => (
                    <li key={i} className="mb-2">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Experience;
