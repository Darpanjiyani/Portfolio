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
      'Built a scalable Python-based incremental ETL pipeline processing 2M+ production records using timestamp-based change detection, materializing indexed SQL Server tables and reducing Power BI dashboard refresh latency by 98%.',
      'Developed transformation and key-standardization logic using Power Query (M) to reconcile inconsistent tool identifiers across relational tables, enabling accurate joins and reliable mapping of tool statuses for forecasting analytics.',
      'Partnered with operations teams to automate shift-level reporting using Power Automate, standardizing daily reporting workflows across 10 supervisors, saving 30 minutes per supervisor per shift and reducing manual reporting errors.',
      'Implemented DAX-based 7/30/90-day rolling averages to analyze shift-level throughput and uptime trends, enabling data-driven identification of underperforming shifts and supporting proactive production adjustment',
      'Designed a scalable ETL monitoring and data validation framework using Python alerts and SQL-based data quality checks, reducing mean time to detect pipeline failures from hours to minutes.'
    ],
  },
  {
    company: 'Cerebulb',
    role: 'Jr. Data Scientist',
    location: 'Gujarat, India',
    duration: 'January 2022 - December 2023',
    description: [
      'Analyzed 100+ industrial sensor streams using multivariate time-series techniques to detect early degradation signals and abnormal operating patterns, enabling proactive reliability interventions and improving system uptime by 12%.',
      'Developed predictive time-series regression models to forecast performance drift and dynamically identify anomaly thresholds, reducing unplanned downtime and supporting data-driven maintenance planning.',
      'Engineered interactive diagnostic dashboards using Plotly and Streamlit to visualize temperature, pressure, and flow trends, enabling rapid root-cause analysis and cross-equipment performance comparison.',
      'Automated KPI aggregation and anomaly reporting workflows, standardizing reliability metrics across engineering teams and improving data accessibility for operational decision-making.'
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
  {
    title: "Retail Sales Analytics Platform",
    description: "Built a scalable analytics transformation layer on Databricks using modular dbt models with ref() and source() to turn raw data into production-ready Gold tables. Created reusable Jinja macros to standardize logic across models, improving maintainability and reducing repetitive SQL. Also set up GitHub Actions–based CI/CD pipelines with automated dbt builds, testing, and separate Dev/Prod catalogs to ensure secure and reliable deployment to production.",
    tags: ["dbt", "Databricks", "SQL", "Jinja", "GitHub Actions", "CI/CD", "Data Warehousing"],
    imageUrl: 'https://chatgpt.com/s/m_69badfd60b548191841ba8ae2a71728d',
    repoUrl: 'https://github.com/Darpanjiyani/Retail-Sales-Analytics-Platform---dbt',
  },
  {
    title: "E-Commerce Analytics Platform",
    description: "Built an end-to-end E-Commerce Analytics Platform on Databricks using PySpark and a Bronze–Silver–Gold Lakehouse architecture to process high-volume transactional data for KPI reporting and operational monitoring. Enhanced performance with Delta Lake partitioning and incremental ingestion for faster sales analysis across product and customer segments. Automated reliable data delivery through Databricks Workflows with built-in validation and monitoring for downstream analytics and reporting.",
    tags: ["Databricks", "PySpark", "Delat Lake", "Databricks Workflows", "Lakehouse Architecture", "ETL/ELT"],
    imageUrl: 'https://synder.com/blog/wp-content/uploads/sites/5/2022/07/e-commerce-analytics-tools-800x500.png',
    repoUrl: 'https://github.com/Darpanjiyani/E-Commerce-Analytics-Platform',
  }

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