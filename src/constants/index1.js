const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience & Education", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "testimonials", link: "#testimonials" },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 7, suffix: " Years", label: "Learning Coding" },
  { value: 1, suffix: "", label: "Hackathon Wins" },
  { value: 1000, suffix: "+", label: "Cups of Coffee" }, // 1 cup daily x ~3 years
];

const abilities = [
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Always meeting deadlines while ensuring quality and attention to detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Clear Communication",
    desc: "Reliable communication and transparency at every step of a project.",
  },
  {
    imgPath: "/images/AI.png",
    title: "AI Integration",
    desc: "Building intelligent apps powered by modern AI and automation tools.",
  },
];

const techStackImgs = [
  { name: "Frontend Developer", imgPath: "/images/logos/react.png" },
  { name: "Backend Developer", imgPath: "/images/logos/node.png" },
  { name: "AI & ML Enthusiast", imgPath: "/images/logos/python.svg" },
  { name: "Interactive Apps", imgPath: "/images/logos/three.png" },
  { name: "Animations & Motion", imgPath: "/images/logos/gsap.png" },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Motion Developer",
    modelPath: "/models/gsap-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/astradb.png",
  },
  {
    imgPath: "/images/logos/nextjs.png",
  },
  {
    imgPath: "/images/logos/react-logo.png",
  },
  {
    imgPath: "/images/logos/supa-logo.png",
  },
  {
    imgPath: "/images/logos/tailwind-logo.png",
  },
  {
    imgPath: "/images/logos/sanity-logo.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/postgress.png",
  },
  {
    imgPath: "/images/logos/typescript.png",
  },
  {
    imgPath: "/images/logos/twilio.png",
  },
];
const expLogos = [{ name: "mobelite", imgPath: "/images/logo1.png" }];

const education = [
  {
    degree:
      "Bachelor in Computer Science – Génie Logiciel & Systèmes d’Information",
    school: "ISSAT Sousse",
    date: "🎓 Graduated 2025",
    details: [
      "Final Year Project: MindCare AI – an AI-powered web platform for mental well-being, awarded 'Très Bien' mention",
      "Focused coursework in Software Engineering, Databases, and Information Systems",
      "Participated in tech events and hackathons, including DevFest On Campus (1st Place winner)",
    ],
    eduPath: "/images/issat.png",
  },
  {
    degree: "Engineering Cycle in AI & Data Science",
    school: "To Be Pursued",
    date: "⏳Expected 2028",
    details: [
      "Areas of interest: Computer Vision, Machine Learning, Large Language Models",
      "Passionate about applying AI across fields to improve everyday user experiences",
    ],
    eduPath: "/images/AI.png",
  },
];

const expCards = [
  {
    review:
      "During his internship, Amen quickly adapted to real-world challenges, delivering innovative solutions and applying strong technical knowledge.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Web Developer Intern",
    date: "Feb 2025 - July 2025",
    responsibilities: [
      "Built an advanced Retrieval-Augmented Generation (RAG) system.",
      "Designed and developed a mental health web app with integrated chatbot features.",
      "Collaborated with the Mobelite team to improve app efficiency and usability.",
    ],
  },
];
const achievements = [
  {
    title: `DevFest On Campus –
       Google Developer Groups On Campus ISSATSo`,
    date: "December 2023",
    position: "1st Place",
    project: "Eb7ath – Humanitarian Web Application",
    description: [
      "Collaborated with a team of four to develop a platform aimed at reuniting Palestinian families \n with their loved ones during crises.",
      "Leveraged advanced image recognition to match photos provided by users with hospital databases,\n enabling efficient identification of injured individuals.",
      "Developed using HTML, CSS, JavaScript, and Flask.",
    ],
    logoPath: "/images/df.png",
  },
];
const testimonials = [
  {
    name: "Daly C.",
    mentions: "Project Owner & Freelancer",
    review:
      "Youssef was a valuable addition to our team. His code is always clean and easy to work with, which made the entire integration process proceed smoothly. He accomplishes tasks efficiently without unnecessary complications.",
    // No imgPath
  },

  {
    name: "Wissem A.",
    mentions: "Web Developer & Designer",
    review:
      "I was impressed with how Youssef approached the RAG system. It was a complex issue, but he provided a solution that was both effective and straightforward. The final product's minimalist UI was precisely what I envisioned.",
    // No imgPath
  },
  {
    name: "Imen B.",
    mentions: "3D Designer & Web Developer",
    review:
      "Youssef’s work on the client-facing app was outstanding. The UI is clean and easy to navigate, which made testing straightforward. Everything was well-organized and functioned as anticipated, indicating high-quality work.",
    // No imgPath
  },
  {
    name: "Aymen B.",
    mentions: "Software Engineer & AI Developer",
    review:
      "I enjoyed working with Youssef. He is a skilled developer who is always open to feedback and quick to help. His methodical approach to building features is reliable.",
    // No imgPath
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/amen-allah-youssef-8685012bb/",
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    url: "https://github.com/Youssefamenallah23",
  },
  {
    name: "facebook",
    imgPath: "/images/fb.png",
    url: "https://www.facebook.com/amen.youssef.9",
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  expLogos,
  education,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  logoIconsList,
  achievements,
};
