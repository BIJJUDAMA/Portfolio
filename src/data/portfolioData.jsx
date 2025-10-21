// This file acts as a single source of truth for all the content on your portfolio.
// This makes it easy to update text, projects, and skills without touching the component files.

export const personalInfo = {
    name: "Nitansh Shankar",
    introduction: "I'm an aspiring full-stack developer passionate about building complete, user-centric web applications from the ground up. I enjoy working across the entire development lifecycle, from designing interactive frontends to engineering robust, scalable backends.",
    passion: "My projects reflect my passion for creating engaging digital experiences, whether it's a modern social platform for artists or a classic game brought to life with code.",
    email: "shankarnitansh@gmail.com"
};

export const whatIDo = {
    title: "What I Do",
    description: "I specialize in bringing ideas to life by working across the entire stack. I'm comfortable building with modern JavaScript frameworks like React alongside powerful serverless backends like Supabase, as well as crafting applications with traditional, robust frameworks like Django.",
    frontend: "I focus on creating fast, responsive, and intuitive user interfaces using React, Vite, and Tailwind CSS. I love adding a layer of polish with animations using tools like Framer Motion.",
    backend: "I have experience building secure and scalable backend systems, handling everything from user authentication and database management (MySQL, Supabase, Firebase) to API logic.",
    integration: "I excel at connecting the frontend and backend seamlessly to create full-featured applications with features like user profiles, admin dashboards, and dynamic content."
};

export const skills = {
    "Frontend": ["React", "JavaScript (ES6+)", "HTML5 & CSS3"],
    "Backend": ["Python (Django)", "Supabase", "Node.js"],
    "Databases": ["MySQL", "Firebase"],
    "Styling & Animation": ["Tailwind CSS", "Bootstrap CSS", "Framer Motion", "shadcn/ui"],
    "DevOps & Tools": ["Git", "GitHub", "Vercel", "CLI"],
};

export const projects = [{
    id: 1,
    title: "Dead Poets Society",
    description: "A Poetry Sharing Website built with React and Supabase as a backend, providing a platform for users to share, read, and appreciate poetry in a community-driven environment.",
    liveLink: "https://dpsavv.vercel.app",
    githubLink: "https://github.com/BIJJUDAMA/Dead-Poets-Society",
},

{
    id: 2,
    title: "Dead Poets Society",
    description: "Recreation of Git in Python for my 3rd Sem CS Project. Implements core Git functionalities like init, add, commit, branch, checkout, merge, and log using file handling and data structures.",
    githubLink: "https://github.com/BIJJUDAMA/pit",
},
{
    id: 3,
    title: "Portfolio",
    description: "A personal portfolio website built with ReactJS and ThreeJS to showcase my projects, skills, and experience. Deployed on Netlify with Netlify Forms integration.",
    //No livelink since you are already on the site
    githubLink: "https://github.com/BIJJUDAMA/Portfolio",
},

];

// This array defines the sections that will orbit the globe.
export const orbitingSections = [{
    id: 'about',
    title: 'ABOUT',
}, {
    id: 'skills',
    title: 'SKILLS',
}, {
    id: 'projects',
    title: 'PROJECTS',
}, {
    id: 'resume',
    title: 'RESUME',
}, {
    id: 'contact',
    title: 'CONTACT',
}];

// This array provides data for the contact icons in the 3D scene.
export const contactPoints = [{
    id: 'linkedin',
    link: 'https://www.linkedin.com/in/nitansh-shankar/',
    logo: (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
    )
}, {
    id: 'github',
    link: 'https://github.com/BIJJUDAMA',
    logo: (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    )
},];

