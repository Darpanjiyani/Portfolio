import type { SkillCategory, Experience, Project, Education } from './types';

export const SKILLS: SkillCategory[] = [
  {
    category: 'Languages',
    technologies: ['Python', 'SQL', 'R'],
  },
  {
    category: 'Libraries & Frameworks',
    technologies: ['Pandas', 'Numpy', 'Scikit-Learn', 'TensorFlow', 'PyTorch', 'Matplotlib', 'Seaborn', 'Plotly'],
  },
  {
    category: 'Data & Cloud',
    technologies: ['Power BI', 'Tableau', 'MySQL', 'PostgreSQL', 'MongoDB', 'AWS (EMR, S3)', 'Spark', 'Hadoop'],
  },
  {
    category: 'Tools',
    technologies: ['Git', 'GitHub', 'Jupyter', 'Docker'],
  },
  {
    category: 'Core Skills',
    technologies: ['Data Cleaning', 'Feature Engineering', 'Model Deployment', 'Statistical Analysis', 'Automation', 'A/B Testing'],
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Keysight Technologies',
    role: 'Data Science Intern',
    location: 'Santa Rosa, CA',
    duration: 'May 2024 - Present',
    description: [
      'Engineered an automated ETL pipeline using Python to extract and transform PRISM data into SQL Server, cutting dashboard refresh time by 90% and enabling near real-time analytics for fab engineers.',
      'Integrated a Power BI Tool Lookahead system that auto-fetches upcoming tools and visualizes their live status with color codes.',
      'Developed an AI-driven workflow in Power Automate to turn supervisor form inputs into structured shift reports, saving 10+ hours weekly of manual effort.',
      'Automated key performance metrics to help track fab performance and improve decision-making.',
      'Implemented a real-time logging system to track pipeline execution and automatically flag errors or interruptions.'
    ],
  },
  {
    company: 'Cerebulb',
    role: 'Jr. Data Scientist',
    location: 'Gujarat, India',
    duration: 'January 2022 - December 2023',
    description: [
      'Trained ML models with TensorFlow and Scikit-Learn to predict equipment failures with 25% higher accuracy, reducing maintenance costs by 15%.',
      'Processed 1M+ time-series sensor records in SQL to prepare high-quality data for predictive analytics.',
      'Deployed and maintained models on AWS servers, ensuring reproducibility and scalable performance.',
      'Designed dashboards in Tableau that visualized asset performance and failure risk, helping plant engineers make faster, data-backed maintenance decisions.'
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Multimodal LLM for Cancer Pathology Classification',
    description: 'Developed a dual-pipeline AI system combining image and text reasoning for 4-class cancer pathology diagnosis. Utilized BLIP to caption histopathology images and FAISS retrieval + GPT-3.5 for few-shot RAG classification. The MobileNetV2 + caption fusion model achieved 80% accuracy and 0.96 ROC-AUC, with efficiency optimized by LoRA fine-tuning.',
    tags: ['Python', 'PyTorch', 'BLIP', 'FAISS', 'GPT-3.5', 'LoRA'],
    imageUrl: 'https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41598-022-19278-2/MediaObjects/41598_2022_19278_Fig2_HTML.png?as=webp',
    repoUrl: 'https://github.com/Darpanjiyani/Multimodel-LLM-for-Cancer-Pathology-Classification/tree/main',
  },
  {
    title: 'Real-Time Cryptocurrency Trend Analysis',
    description: 'Built a real-time data pipeline on AWS EMR using Kafka and Spark to process live data from CoinGecko API. Analyzed over 100k data points per minute for volatility using MapReduce and streaming algorithms, visualized through interactive Plotly dashboards.',
    tags: ['CoinGecko API', 'Kafka', 'Spark', 'Hadoop', 'Plotly', 'AWS EMR'],
    imageUrl: 'https://holistic.capital/assets/images/6/DALL%C2%B7E-2024-06-03-22.12.26-An-extremely-minimalist-3D-image-for-a-blog-showing-glass-representations-of-four-well-known-cryptocurrencies-Bitcoin-Ethereum-Litecoin-and-Ripple-4d3bd4a4.webp',
    repoUrl: 'https://github.com/Darpanjiyani/Real-Time-Cryptocurrency-Trend-Analysis',
  },
  {
    title: "Comprehensive Analysis of Billionaires' Wealth",
    description: "Explored global wealth data to uncover trends by geography, industry, and net worth. Built interactive Tableau dashboards with drill-down filters for visualization. Led a 4-member team under an Agile-Waterfall hybrid methodology.",
    tags: ['Python', 'SQL', 'Power BI', 'Tableau'],
    imageUrl: 'https://s.yimg.com/ny/api/res/1.2/.FsKXDo5UQoTPo6FeXv_Kw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xMzUwO2NmPXdlYnA-/https://media.zenfs.com/en/realtor_com_468/0790533307c2dcf6980687e23f459c44',
    repoUrl: 'https://github.com/Darpanjiyani/Comprehensive-Analysis-of-Billionaire-s-Wealth',
  },
];

export const EDUCATION: Education[] = [
    {
        institution: 'San Jose State University',
        degree: 'Master of Science, Data Science',
        duration: 'January 2024 - December 2025',
        location: 'San Jose, CA',
        courses: ['Big Data Technology', 'Machine Learning', 'Deep Learning', 'Generative AI', 'Data Visualization']
    },
    {
        institution: 'LDRP-ITR',
        degree: 'Bachelor of Engineering, Computer Engineering',
        duration: 'July 2019 - May 2023',
        location: 'Gujarat, India',
        courses: ['Data Structures and Algorithms', 'Python Programming', 'Object-Oriented Programming with Java']
    }
];