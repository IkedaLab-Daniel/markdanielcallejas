import "./ProjectsPage.css";

// > images - mockups
import explainora from '../assets/explainora-square.png'

const projects = [
    {
        id: 1,
        title: "Explainora AI",
        subtitle: "Analyze, debug, improve code using AI",
        description:
            "Explainora.ai is a full-stack AI-powered web app that helps users understand and get explanations for code snippets. It allows users to input code and receive intelligent explanations using integrated AI models. Ideal for developers, students, and anyone learning to code.",
        tags: ["React", "React"],
        features: ["Feature", "Feature", "Feature"],
        stack: ["react", "css", "node", "express"],
        image: `${explainora}`,
        codeLink: "#",
        demoLink: "#",
    },
    {
        id: 2,
        title: "Title Title Title Title",
        subtitle: "Subtitle Subtitle Subtitle Subtitle Subtitl",
        description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... Neque porro quisquam est...",
        tags: ["React", "React"],
        features: ["Feature", "Feature", "Feature"],
        stack: ["react", "css", "node", "express"],
        image: `${explainora}`,
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
