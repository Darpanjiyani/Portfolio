import React from 'react';

const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-cover bg-center" style={{ backgroundImage: "url('https://www.sjsu.edu/communications/pics/ADJ_sjsu-gate-dschmitz-111417-3154_flat.jpg')" }}>
      <div className="absolute inset-0 bg-primary/80"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Hi, I'm Darpan Jiyani
          </h1>
          <p className="text-xl md:text-2xl text-medium mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            A Data Scientist skilled in building intelligent data systems for faster analytics and decision-making.
          </p>
          <div 
            className="flex justify-center items-center space-x-6 mb-10 animate-fade-in-up" 
            style={{ animationDelay: '0.6s' }}
          >
            <a href="https://github.com/Darpanjiyani" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-medium hover:text-accent transition-colors duration-300">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/darpanjiyani/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-medium hover:text-accent transition-colors duration-300">
              <LinkedinIcon />
            </a>
          </div>
          <a
            href="#contact"
            className="inline-block bg-accent text-primary font-bold py-3 px-8 rounded-full hover:bg-sky-300 transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: '0.8s' }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;