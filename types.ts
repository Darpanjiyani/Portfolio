export interface SkillCategory {
  category: string;
  technologies: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  courses: string[];
}
