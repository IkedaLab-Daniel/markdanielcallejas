import "./ProjectsPage.css";

// > images - mockups
import explainora from '../assets/explainora-square.png'
import freedomnotes from '../assets/freedomnotes-square.png'
import phpets from '../assets/phpets-square.png'
import cvdrive from '../assets/cvdrive-square.png'
const projects = [
    {
        id: 1,
        title: "Explainora AI",
        subtitle: "Analyze, debug, improve code using AI",
        description:
            "Explainora.ai is a full-stack AI-powered web app that helps users understand and get explanations for code snippets. It allows users to input code and receive intelligent explanations using integrated AI models. Ideal for developers, students, and anyone learning to code.",
        tags: ["React", "CSS", "Node", "Express"],
        features: ["Fast Explain", "Smart Explain", "Suggestions"],
        stack: ["react", "css", "node", "express"],
        image: `${explainora}`,
        codeLink: "#",
        demoLink: "#",
    },
    {
        id: 2,
        title: "FreedomNotes",
        subtitle: "MERN Stack Freedom-Wall-Like Web Application",
        description:
            "Freedom Notes is a web application for creating, sharing, and managing notes within a board-based system. It provides features for both public and anonymous note posting, note approval by admins, and user authentication.",
        tags: ["React", "CSS", "Node", "Express", "MongoDB"],
        features: ["Feature", "Feature", "Feature"],
        stack: ["react", "css", "node", "express"],
        image: `${freedomnotes}`,
        codeLink: "#",
        demoLink: "#",
    },
    {
        id: 3,
        title: "PHPets",
        subtitle: "E-commerce Website built with PHP and MySQL",
        description:
            "A simple e-commerce platform built in PHP for managing pet products, shopping cart, and checkout workflows.",
        tags: ["PHP", "CSS", "MySQL"],
        features: ["Feature", "Feature", "Feature"],
        stack: ["react", "css", "node", "express"],
        image: `${phpets}`,
        codeLink: "#",
        demoLink: "#",
    },
    {
        id: 4,
        title: "CV Drive",
        subtitle: "File Storing Stystem",
        description:
            "My first full stack web application.",
        tags: ["React", "CSS", "Node", "Express", "MongoDB"],
        features: ["Feature", "Feature", "Feature"],
        stack: ["react", "css", "node", "express"],
        image: `${cvdrive}`,
        codeLink: "#",
        demoLink: "#",
    },
];

const stackIcons = {
    react: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    css: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    node: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    express: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
};

const ProjectsPage = () => {
    return (
        <section className="project-page">
            <h2>My Works</h2>
            <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>

            {projects.map((proj, index) => (
                <div
                    className={`project-card ${index % 2 !== 0 ? "reverse" : ""}`}
                    key={proj.id}
                >
                    <div className="image-section">
                        <img
                            src={proj.image}
                            alt="Preview"
                            className="device-preview"
                        />
                    </div>

                    <div className="content-section">
                        <span className="tag">Full Stack</span>
                        <h3>{proj.title}</h3>
                        <h5>{proj.subtitle}</h5>

                        <div className="tech-tags">
                            {proj.tags.map((tag, i) => (
                                <span key={i}>{tag}</span>
                            ))}
                        </div>

                        <p className="description">{proj.description}</p>

                        <div className="features">
                            {proj.features.map((feature, i) => (
                                <span key={i}>⚡ {feature}</span>
                            ))}
                        </div>

                        <div className="buttons">
                            <a href={proj.codeLink} className="btn code">
                                Code
                            </a>
                            <a href={proj.demoLink} className="btn demo">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ProjectsPage;
