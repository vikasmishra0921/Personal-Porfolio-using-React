export const PROFILE = {
  name: "Vikas Mishra",
  role: "Tech Enthusiast",
  location: "Bhiwandi, Maharashtra, India",
  openToRelocation: true,
  phone: "+91 8087440342",
  avatar: "/vikas.png",
  email: "mishravikas8087@gmail.com",
  github: "https://github.com/vikasmishra0921",
  linkedin: "https://www.linkedin.com/in/vikasmishra3",
  instagram: "https://www.instagram.com/vikasmiishra/",
  resume: "", // served from public/
  summary:
    "AI Engineer & Full-Stack Developer specializing in the MERN Stack and Artificial Intelligence. I build scalable, data-driven applications by integrating Machine Learning and NLP with high-impact visualizations and clean UX.",
};

export const EDUCATION = [ 
  {
    degree: "B.Com",
    school: "Swayam Siddhi Mitra sangh College",
  },
  {
    degree: "H.S.C {Science}",
    school: "N.J.B Jr. College",
  }
];

export const EXPERIENCE = [
//   {
//     title: "Hackathon – Odoo x Gujarat Vidyapith",
//     company: "Ahmedabad",
//     period: "2025",
//     bullets: [
//       "Built a complete E‑commerce platform in 48 hours using modern web tech.",
//       "Implemented surprise mentor‑requested features under pressure.",
//       "Top 50 among 500+ teams.",
//     ],
//   },
//   {
//     title: "Apprentice",
//     company: "Canon India Pvt. Ltd.",
//     period: "12/2022 – 11/2023",
//     bullets: [
//       "Reduced printer downtime by 30% via proactive maintenance.",
//       "Managed Canon ↔ JSW Steel relationships achieving 99% satisfaction.",
//       "Adapted and solved issues in high‑pressure environments.",
//     ],
//   },
//   {
//     title: "Trainee Engineer",
//     company: "Sysnet Global Technologies",
//     period: "09/2022 – 11/2022",
//     bullets: [
//       "Desktop support and Windows OS troubleshooting.",
//       "Hands‑on hardware experience at JSW Steel, Wadkhal.",
//     ],
//   },
//   {
//     title: "Intern",
//     company: "TCR Innovation",
//     period: "08/2021 – 10/2021",
//     bullets: ["Worked on Python and machine learning mini‑projects."],
//   },
 ];

export const PROJECTS = [
  // {
  //   title: "VaayuTrace – Carbon Footprint Tracker",
  //   blurb:
  //     "MERN-based carbon emission tracker with ML predictions and analytics dashboard.",
  //   tags: ["React", "Node", "Express", "MongoDB", "Recharts", "JWT", "ML"],
  //   link: "#",
  //   highlights: [
  //     "5 ML models (LR, RF, XGBoost, NN, Ensemble) across 5 domains.",
  //     "Cookie-based JWT auth, protected routes, Recharts analytics.",
  //   ],
  // },
  // {
  //   title: "Harvest Trace",
  //   blurb:
  //     "Farmer-to-customer platform with real-time 3D product views via Three.js.",
  //   tags: ["React", "Node", "Express", "MongoDB", "Three.js", "Payments"],
  //   link: "#",
  //   highlights: [
  //     "3D product visualization for engagement.",
  //     "Secure payments + full auth system.",
  //   ],
  // },
  // {
  //   title: "Custom URL Shortener",
  //   blurb:
  //     "URL shortener with auth, link analytics, click tracking, and 99% uptime.",
  //   tags: ["MERN", "Redux", "TanStack Query", "Analytics"],
  //   link: "#",
  //   highlights: [
  //     "Redux for state, TanStack for data fetching.",
  //     "Responsive UI for mobile/desktop.",
  //   ],
  // },
  // {
  //   title: "Scatch Bag Shop",
  //   blurb:
  //     "Full e‑commerce app with image upload and secure payments using EJS templates.",
  //   tags: ["Express", "MongoDB", "EJS", "Multer", "Payments"],
  //   link: "#",
  //   highlights: [
  //     "End-to-end shop with uploads via Multer.",
  //     "Server-rendered with EJS for speed.",
  //   ],
  // },
  // {
  //   title: "Productivity Tools",
  //   blurb: "Clock, To‑Do list, and Issue Tracker utilities.",
  //   tags: ["JavaScript"],
  //   link: "#",
  //   highlights: ["Lightweight, focused tools for productivity."],
  // },

 
  {
    title: "Prescripto",
    blurb: "A full-stack medical prescription management system for doctors and patients.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    link: "#",
    highlights: [
      "Built secure authentication and role-based access (Doctor/Admin/Patient).",
      "Implemented digital prescription creation and management system.",
      "Integrated image/file upload for medical records.",
      "Designed responsive UI for seamless cross-device usage.",
    ],
  },
  {
    title: "Go Food",
    blurb: "A full-stack food ordering web application with cart and online checkout.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "REST API"],
    link: "#",
    highlights: [
      "Developed dynamic food listing with category filtering.",
      "Implemented cart management with real-time price calculation.",
      "Built user authentication and order history tracking.",
      "Created admin panel for product and order management.",
    ],
  },
  {
    title: "Energy Consumption Prediction",
    blurb: "End-to-end ML pipeline to predict daily energy consumption for commercial buildings.",
    tags: ["Python", "XGBoost", "Random Forest", "Flask", "Docker", "CI/CD"],
    link: "#",
    highlights: [
      "Achieved 92% prediction accuracy with Random Forest & XGBoost ensemble.",
      "Conducted full EDA — data cleaning, feature engineering, outlier treatment.",
      "Deployed best model via Flask API, containerized with Docker.",
      "Reduced manual reporting by 60% and improved inference speed by 30%.",
    ],
  },
  {
    title: "Supply Chain Monitoring Dashboard",
    blurb: "Interactive dashboard to monitor inventory, supplier performance, and logistics efficiency.",
    tags: ["Power BI", "Tableau", "SQL", "Excel"],
    link: "#",
    highlights: [
      "Collected, cleaned, and integrated data from ERP systems and SQL databases.",
      "Built drill-through reports, KPIs, and predictive indicators for demand forecasting.",
      "Reduced stockouts by 25% and decreased inventory holding costs by 15%.",
      "Enabled real-time decision-making for supply chain managers.",
    ],
  },
  {
    title: "Crop Recommendation System",
    blurb: "ML-powered web app that recommends the best crop based on soil and climate conditions.",
    tags: ["Python", "Scikit-learn", "Flask", "Pickle", "Render"],
    link: "https://crop-predictor-ro1c.onrender.com",
    highlights: [
      "Trained RandomForestClassifier across 22 crop categories with real agricultural data.",
      "Preprocessed with MinMaxScaler + StandardScaler for optimal model performance.",
      "Built user-friendly frontend with Flask and deployed live on Render.",
      "Accessible to farmers anywhere via just a browser — no setup needed.",
    ],
  },
  {
    title: "Heart Stroke Prediction",
    blurb: "ML web app predicting heart stroke likelihood based on key health metrics.",
    tags: ["Python", "Scikit-learn", "Streamlit", "Logistic Regression", "Joblib"],
    link: "https://heart-d-app.streamlit.app/",
    highlights: [
      "Trained Logistic Regression model on real-world health dataset.",
      "Built interactive Streamlit UI for instant stroke risk analysis.",
      "Managed model serialization with Joblib and deployed on Streamlit Cloud.",
      "Inputs include age, cholesterol, chest pain type, resting blood pressure.",
    ],
  },
  {
    title: "DesiPay Transactional Analysis",
    blurb: "SQL-based deep dive into user behavior and transaction patterns for a digital payment app.",
    tags: ["MySQL", "SQL", "Data Analytics"],
    link: "https://github.com/vikasmishra0921/DesiPay-Analysis-",
    highlights: [
      "Queried large datasets to uncover peak transaction times and usage trends.",
      "Identified frequently used services and app engagement levels.",
      "Used complex JOINs, subqueries, and data filtering for insight extraction.",
      "Recommended strategies to improve user retention and app optimization.",
    ],
  },
  {
    title: "Sentiment Analysis Web App",
    blurb: "NLP-based emotion classifier detecting six emotions from user-provided text in real time.",
    tags: ["Python", "NLTK", "Scikit-learn", "TF-IDF", "Streamlit"],
    link: "https://github.com/vikasmishra0921/Sentiment_Analysis_NLP",
    highlights: [
      "Classified six emotions — joy, sadness, anger, fear, surprise, love.",
      "Implemented TF-IDF Vectorization + Logistic Regression for training.",
      "Serialized model and vectorizer with Pickle for fast deployment.",
      "Built real-time interactive Streamlit interface for instant predictions.",
    ],
  },


];

export const SKILLS = {
  languages: ["JavaScript (ES6+)", "Java", "Python"],
  libraries: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
  machineLearning: ["Linear Regression","Logistic Regression","Decision Trees","Random Forest", "K-Means Clustering"],
  dataAnalysis: ["Data Cleaning","Exploratory Data Analysis (EDA)","Statistical Analysis", "Hypothesis Testing","Data Wrangling","Model Evaluation"],
  dataVisualization: ["Matplotlib", "Seaborn", "Plotly", "Tableau","PowerBI"],
  frontend: ["React", "Tailwind", "Bootstrap", "Responsive Design", "DOM"],
  backend: ["Node.js", "Express.js", "REST APIs"],
  databases: ["MySQL", "PostgreSQL", "MongoDB"],
  fullstack: ["MERN", "System Architecture", "Component Architecture"],
  libs: ["Redux", "TanStack Query", "EJS", "Multer", "Three.js"],
  tools: ["Git", "GitHub", "VS Code", "Android Studio", "Version Control","Jupyter Notebook", "Google Colab","Excel","Anaconda"],
  other: [
    "DSA",
    "Windows OS",
    "Cross-browser Compatibility",
  ],
};

export const CERTS = [
  // "Introduction to Large Language Models (2025)",
  // "CodeAlpha Web Development Internship (2024)",
  // "TCS iON Career Edge – Young Professional (2023)",
  // "Android App using Kotlin training (2025)",
  // "SAP Overview Training (2020)",
  // "Flutter Workshop (2025)",
  // "Machine Learning Workshop (2024)",
  // "Smart India Hackathon Participation (2024)",
];

export const ACHIEVEMENTS = [
  // "Open-source contribution – Fixed notification delay in React Toastify.",
  // "GDG PHCET on-campus Technical Head (2025).",
  // "Selected Participant – Smart India Hackathon (2024).",
  // "Top 50 Finalist – Odoo x Gujarat Vidyapith Hackathon (2025).",
  // "Maintained 99% client satisfaction at Canon ↔ JSW Steel.",
  // "Coordinated sports events (Futsal, Basketball) during Engineering Fest.",
];

export const ACTIVITIES = [
  // "Organized inter-college Shiv Jayanti event as Cultural Head.",
  // "Managed IT department's social media presence.",
  // "Conducted Flutter Workshop for 30+ students.",
  // "Managed Futsal and Basketball events during Engineering Fest.",
  // "Active in tech communities and knowledge sharing.",
];
