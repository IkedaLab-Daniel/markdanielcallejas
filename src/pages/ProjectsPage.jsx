import { Link } from "react-router-dom";
import { House } from 'lucide-react'
import "./ProjectsPage.css";

// > images - mockups
import explainora from '../assets/explainora-square.png'
import freedomnotes from '../assets/freedomnotes-square.png'
import phpets from '../assets/phpets-square.png'
import cvdrive from '../assets/cvdrive-square.png'

// > images - svgs
import repoSVG from '../assets/repository.svg'
import liveSVG from '../assets/live.svg'

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
        codeLink: "",
        demoLink: "https://explainora.netlify.app/",
    },
    {
        id: 2,
        title: "FreedomNotes",
        subtitle: "MERN Stack Freedom-Wall-Like Web Application",
        description:
            "Freedom Notes is a web application for creating, sharing, and managing notes within a board-based system. It provides features for both public and anonymous note posting, note approval by admins, and user authentication.",
        tags: ["React", "CSS", "Node", "Express", "MongoDB"],
        features: ["Anonymous Post", "Admin Panel", "Account Management"],
        stack: ["react", "css", "node", "express"],
        image: `${freedomnotes}`,
        codeLink: "",
        demoLink: "https://freedomnotes.netlify.app/",
    },
    {
        id: 3,
        title: "PHPets",
        subtitle: "E-commerce Website built with PHP and MySQL",
        description:
            "A simple e-commerce platform built in PHP for managing pet products, shopping cart, and checkout workflows.",
        tags: ["PHP", "CSS", "MySQL"],
        features: ["Buyer", "Seller", "Admin Panel"],
        stack: ["react", "css", "node", "express"],
        image: `${phpets}`,
        codeLink: "",
        demoLink: "",
    },
    {
        id: 4,
        title: "CV Drive",
        subtitle: "File Storing Stystem",
        description:
            "My first full stack web application.",
        tags: ["React", "CSS", "Node", "Express", "MongoDB"],
        features: ["Account Management", "Upload, Download, Delete"],
        stack: ["react", "css", "node", "express"],
        image: `${cvdrive}`,
        codeLink: "https://github.com/IkedaLab-Daniel/CV_Drive",
        demoLink: "",
    },
];

const ProjectsPage = () => {
    return (
        <section className="project-page">
            <h2 data-aos="fade-up">My Works</h2>
            <p className="header-subtitle" data-aos="fade-up">lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
            <Link to="/">
              <div className="back-modal" data-aos="fade-up">
                <House size={17}/>
                <p>Back Home</p>
              </div>
              <div className="back-modal-mobile" data-aos="fade-up">
                <House size={17}/>
                <p>Back</p>
              </div>
            </Link>

            {projects.map((proj, index) => (
                <div
                    className={`project-card ${index % 2 !== 0 ? "reverse" : ""}`}
                    key={proj.id}
                    data-aos="fade-up"
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
                          <a 
                              href={proj.codeLink} 
                              className={`btn code ${!proj.codeLink && 'disabled'}`}
                          >
                              <img src={repoSVG} alt="" />
                              <span>Code</span>
                          </a>
                          <a 
                              href={proj.demoLink} 
                              className={`btn demo ${!proj.demoLink && 'disabled'}`}
                          >
                              <img src={liveSVG} alt="" />
                              <span>Live Demo</span>
                          </a>
                      </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ProjectsPage;
