import { useState } from 'react';
import { CircleX } from 'lucide-react'
import './projects.css';

// > images
import explainora from '../assets/explainora.png'

const projectList = [
  {
    title: "Explainora AI",
    description: "A full-stack AI-powered web app that helps users understand and get explanations for code snippets. It allows users to input code and receive intelligent explanations using integrated AI models. Ideal for developers, students, and anyone learning to code.",
    tech: ["React", "Node", "Express", "CSS"],
    image: `${explainora}`,
    github: "https://github.com/IkedaLab-Daniel/explainora.ai",
    demo: "https://explainora.netlify.app/",
  },
  {
    title: "Explainora AI",
    description: "A full-stack AI-powered web app that helps users understand and get explanations for code snippets. It allows users to input code and receive intelligent explanations using integrated AI models. Ideal for developers, students, and anyone learning to code.",
    tech: ["React", "Node", "Express", "CSS"],
    image: `${explainora}`,
    // github: "https://github.com/IkedaLab-Daniel/explainora.ai",
    demo: "https://explainora.netlify.app/",
  },
  {
    title: "Explainora AI",
    description: "A full-stack AI-powered web app that helps users understand and get explanations for code snippets. It allows users to input code and receive intelligent explanations using integrated AI models. Ideal for developers, students, and anyone learning to code.",
    tech: ["React", "Node", "Express", "CSS"],
    image: `${explainora}`,
    // github: "https://github.com/IkedaLab-Daniel/explainora.ai",
    demo: "https://explainora.netlify.app/",
  },
  {
    title: "Task Scheduler AI",
    description: "AI-powered scheduler that recommends the best time for tasks using uploaded routines.",
    tech: ["React", "Django", "MongoDB", "ML"],
    image: "/assets/scheduler.png",
    github: "https://github.com/yourusername/scheduler-ai",
    demo: "",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="projects-gallery" id="projects">
      <h2 data-aos="fade-up">Projects</h2>
      <p className="subtitle" data-aos="fade-up">Click on a project to learn more</p>

      <div className="gallery-grid">
        {projectList.map((proj, i) => (
          <div key={i} className="gallery-item" data-aos="fade-up" onClick={() => setSelected(proj)}>
            <img src={proj.image} alt={proj.title} />
            <div className="project-title">{proj.title}</div>
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
                {selected.github && <a href={selected.github} target="_blank" className='code-btn'>Code</a>}
                {/* {selected.demo && <a href={selected.demo} target="_blank">Live Demo <ExternalLink size={14} /></a>} */}
                {selected.demo && 
                    <a href={selected.demo} target="_blank" className='live-demo-btn'>
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
