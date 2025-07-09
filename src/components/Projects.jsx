import { useState } from 'react';
import { CircleX, Maximize2 } from 'lucide-react'
import { Link } from 'react-router-dom';
import './projects.css';

// > images
import livesvg from '../assets/live.svg'
import repositorysvg from '../assets/repository.svg'
import explainora from '../assets/explainora.png'
import phpets from '../assets/phpets.png'
import cvdrive from '../assets/cvdrive.png'
import freedomnotes from '../assets/freedomnotes.png'

const projectList = [
  {
    title: "Explainora AI",
    description: "A full-stack AI-powered web app that helps users understand and get explanations for code snippets. It allows users to input code and receive intelligent explanations using integrated AI models.",
    tech: ["React", "Node", "Express", "CSS"],
    image: `${explainora}`,
    github: "https://github.com/IkedaLab-Daniel/explainora.ai",
    demo: "https://explainora.netlify.app/",
  },
  {
    title: "PHPets",
    description: "A simple e-commerce platform built in PHP for managing pet products, shopping cart, and checkout workflows.",
    tech: ["PHP", "MySQL", "CSS"],
    image: `${phpets}`,
    // github: "https://github.com/IkedaLab-Daniel/explainora.ai",
    // demo: "https://explainora.netlify.app/",
  },
  {
    title: "FreedomNote.js",
    description: "A web application for creating, sharing, and managing notes within a board-based system. It provides features for both public and anonymous note posting, note approval by admins, and user authentication.",
    tech: ["React", "Node", "Express", "MongoDB", "CSS"],
    image: `${freedomnotes}`,
    // github: "https://github.com/IkedaLab-Daniel/explainora.ai",
    demo: "https://freedomnotes.netlify.app/",
  },
  {
    title: "CV Drive",
    description: "AFull stack JavaScript Website built in partial fulfillment of requirement for the subject Web Programming. In this website, users can register an account, upload, delete, and download documents.",
    tech: ["React", "Node", "Express", "MongoDB", "CSS"],
    image: `${cvdrive}`,
    github: "https://github.com/IkedaLab-Daniel/CV_Drive",
    demo: "",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="projects-gallery" id="projects">
      <h2 data-aos="fade-up">Projects</h2>
      <p className="subtitle" data-aos="fade-up">A selection of web projects I’ve built to learn, solve problems, and grow as a developer. Click on a project to learn more</p>
      <Link to="/projects">
        <p data-aos="fade-up" className="subtitle">Go to Project Showcase</p>
      </Link>

      <div className="gallery-grid">
        {projectList.map((proj, i) => (
          <div key={i} className="gallery-item" data-aos="fade-up" onClick={() => setSelected(proj)}>
            <img src={proj.image} alt={proj.title} />
            <div className="project-title">{proj.title}</div>
            <Maximize2 className='maximize' size={30} />
            <Maximize2 className='maximize-mobile' size={20} />
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selected.image} alt={selected.title} />
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
            <div className="tech-tags">
              {selected.tech.map((t, idx) => (
                <span key={idx} className="tag">{t}</span>
              ))}
            </div>
            <div className="project-links">
                {selected.github && 
                <a href={selected.github} target="_blank" className='code-btn'>
                    <img src={repositorysvg} alt="" />
                    <span>Code</span>
                </a>}
                {/* {selected.demo && <a href={selected.demo} target="_blank">Live Demo <ExternalLink size={14} /></a>} */}
                {selected.demo && 
                    <a href={selected.demo} target="_blank" className='live-demo-btn'>
                        <img src={livesvg} alt="" />
                        <span>Live Demo</span>
                    </a>}
            </div>
            <button className="close-btn" onClick={() => setSelected(null)}><CircleX size={30} /></button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
