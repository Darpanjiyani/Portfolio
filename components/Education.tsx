import React from 'react';
import Section from './Section';
import { EDUCATION } from '../constants';
import type { Education as EducationType } from '../types';

const GraduationCapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-accent">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c0 1.66 4 3 10 0v-5"></path>
    </svg>
);


const EducationItem: React.FC<{ edu: EducationType, isLast: boolean }> = ({ edu, isLast }) => (
    <div className="flex">
        <div className="flex flex-col items-center mr-6">
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 border-2 border-accent rounded-full bg-secondary">
                    <GraduationCapIcon />
                </div>
            </div>
            {!isLast && <div className="w-px h-full bg-gray-600 mt-2"></div>}
        </div>
        <div className={`pb-12 ${isLast ? '' : 'border-l-transparent'}`}>
            <p className="mb-1 text-sm text-medium">{edu.duration}</p>
            <h3 className="text-xl font-bold text-light">{edu.degree}</h3>
            <p className="text-accent mb-3">{edu.institution} - {edu.location}</p>
            <p className="text-medium text-sm">
                <span className="font-semibold text-light">Relevant Coursework:</span> {edu.courses.join(', ')}
            </p>
        </div>
    </div>
);


const Education: React.FC = () => {
    return (
        <Section id="education" title="Education">
            <div className="max-w-3xl mx-auto">
                {EDUCATION.map((edu, index) => (
                    <EducationItem key={index} edu={edu} isLast={index === EDUCATION.length - 1} />
                ))}
            </div>
        </Section>
    );
};

export default Education;
