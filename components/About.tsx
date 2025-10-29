import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';
import profileImg from '../assets/profile.png'; // ✅ import your image

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 flex justify-center">
          <img
            src={profileImg} // ✅ use imported image
            alt="Darpan Jiyani"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover object-top shadow-lg border-4 border-secondary"

          />
        </div>
        <div className="md:col-span-3">
          <p className="text-lg text-medium mb-6">
            Data Scientist skilled in building intelligent data systems for faster analytics and decision-making. Experienced in ETL automation, ML modeling, and Power BI-based dashboards. 
          </p>
          <p className="text-lg text-medium mb-8">
            Application-oriented with hands-on work across Python, SQL, and AWS, delivering measurable process efficiency and operational impact.
          </p>
          <h3 className="text-2xl font-bold text-light mb-6 mt-8">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-x-8 gap-y-6">
            {SKILLS.map((skillCategory) => (
              <div key={skillCategory.category}>
                <h4 className="font-semibold text-accent mb-3">{skillCategory.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.technologies.map((tech) => (
                    <span key={tech} className="bg-secondary text-sm text-medium px-3 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;