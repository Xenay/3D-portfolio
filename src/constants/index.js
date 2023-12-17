import {huawei, tfpu, coimbra, labin } from "../assets/images";
import {
    car,
    contact,
    css,
    python,
    django,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    spring,
    unity,
    java,
    vue,
    bootstrap,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    foundry
} from "../assets/icons";

export const skills = [
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: vue,
        name: "Vue",
        type: "FullStack",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "State Management",
    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "Game Development",
    },
    
    {
        imageUrl: spring,
        name: "Spring",
        type: "Backend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: foundry,
        name: "foundry",
        type: "Backend",
    },
    
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
  
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Student",
        company_name: "Tehnički Fakultet u Puli",
        icon: tfpu,
        iconBg: "#accbe1",
        date: "September 2019 - Present",
        points: [
            "Developing web and standalone applications according to the curriculum ",
            "Team lead in most projects",
            "Going far and above the project requirements on multiple occasions",
            "Participating and helping in the organisation of events in the Esports group of the college.",
        ],
    },
    {
        title: "Huawei Seeds for the Future",
        company_name: "Huawei",
        icon: huawei,
        iconBg: "#fbc3bc",
        date: "Feb 2022",
        points: [
            "Leader of one of two teams in Croatia to design an idea for a new, sustainable energy-saving solution",
            "Managed and assigned task to members",
            "Was selected as the top performing candidate in Croatia and was invited to the Huawei Talent Summit in Athens, Greece",
            
        ],
    },
]
export const courses = [
    {
        title: "SusTrainable Summer School 2023",
        company_name: "University of Coimbra, Portugal",
        icon: coimbra,
        iconBg: "#b7e4c7",
        date: "Jul 2023",
        points: [
            "Attending lectures",
            "Participating in Lab sessions and workshops ",
            "Meeting other aspiring software engineers from around Europe"
        ],
    },
    {
        title: "Java and Spring boot training ",
        company_name: "Istra Tech",
        icon: spring,
        iconBg: "#a2d2ff",
        date: "Jul 2023",
        points: [
            "Attended workshops and lectures about Spring Boot",
            "Implemented Oracle and Spring Boot to create a robust Backend for production applications"
            
        ],
    },
    {
        title: "Building a Healthcare startup in Digital Labin workshop",
        company_name: "Lloyds Digital, Human",
        icon: labin,
        iconBg: "#a2d2ff",
        date: "Sep 2023",
        points: [
            "Introduction to Healthcare apps",
            "Building the app using NodeJS, React, AWS Cognito, Formsort",
            "Exploring Best Practices and Design Considerations"
            
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: vue,
        theme: 'btn-back-green',
        name: 'Music Workshop',
        description: 'Developed a web application serves as a hub for music related challenges, with built in shop.',
        link: 'https://github.com/Xenay/Music-workshop-frontend',
    },
    {
        iconUrl: unity,
        theme: 'btn-back-black',
        name: '3D RPG with procedurally generated terrain',
        description: 'An 3D infinite runner with RPG elements, such as player levels and abilities with complex 3d procedural terrain generation ',
        link: 'https://github.com/Xenay/ProcedurallyGenerated3DRPG-Bachelorss',
    },
    {
        iconUrl: django,
        theme: 'btn-back-light-green',
        name: 'Password Manager',
        description: 'A simple password manager using complex hashing methods to keep them safe and sound.',
        link: 'https://github.com/Xenay/PasswordManager',
    },
    {
        iconUrl: react,
        theme: 'btn-back-pink',
        name: '3D portfolio',
        description: "Hey, you're here already!",
        link: "https://github.com/Xenay/3D-portfolio",
    },
    {
        iconUrl: react,
        theme: 'btn-back-black',
        name: 'Movie searcher',
        description: 'A really simple web application to search movies using OmdbAPI',
        link: 'https://github.com/Xenay/movie-searcher-react',
    },
    
];