import frontendgif from '../assets/frontend.gif'
import backendgif from '../assets/backend.gif'
import databasegif from '../assets/database.gif'
import tools from '../assets/deployment.gif'
const TechStack = () => {

    return(
        <section className="tech-stack">
            <h2>Tech Stack</h2>
            <p className="subtitle">Technologies I use across the full stack.</p>
            <div className="card-grid">
                <div 
                    className="tech-card"
                    data-aos="flip-down">
                    <div className="category-head">
                        <img src={frontendgif} alt="" />
                        <h3>Frontend</h3>
                    </div>
                    
                    <ul>
                        <li>
                            <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML" />
                            <span className="tech-name">HTML</span>
                        </li>
                        <li>
                            <img src="https://cdn.simpleicons.org/css3/1572B6" alt="CSS" /> CSS
                        </li>
                        <li>
                            <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" /> JavaScript
                        </li>
                        <li>
                            <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" /> React
                        </li>
                        <li>
                            <img src="https://cdn.simpleicons.org/redux/764ABC" alt="Redux" /> Redux
                        </li>
                    </ul>
                </div>

                <div 
                    className="tech-card"
                    data-aos="flip-down"
                    data-aos-delay={250}>
                    <div className="category-head">
                        <img src={backendgif} alt="" />
                        <h3>Backend</h3>
                    </div>
                    <ul>
                        <li>
                            <img src="https://cdn.simpleicons.org/node.js/339933" alt="Node.js" /> Node.js
                        </li>
                        <li>
                            <img src="https://cdn.simpleicons.org/express/000000" alt="Express" /> Express
                        </li>   
                        <li>
                            <img src="https://cdn.simpleicons.org/django/092E20" alt="Django" /> Django
                        </li>
                    </ul>
                </div>

                <div 
                    className="tech-card"
                    data-aos="flip-down"
                    data-aos-delay={500}>
                    <div className="category-head">
                        <img src={databasegif} alt="" />
                        <h3>Database</h3>
                    </div>
                    <ul>
                        <li>
                            <img src="https://cdn.simpleicons.org/mongodb/47A248" alt="MongoDB" /> MongoDB
                        </li>
                        <li>
                            <img src="https://cdn.simpleicons.org/mysql/4479A1" alt="MySQL" /> MySQL
                        </li>
                    </ul>
                </div>

                <div 
                    className="tech-card"
                    data-aos="flip-down"
                    data-aos-delay={750}>
                    <div className="category-head">
                        <img src={tools} alt="" />
                        <h3>Tools & Others</h3>
                    </div>
                    <ul>
                        <li>
                            <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" /> Git
                        </li>
                        <li>
                            <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub" /> GitHub
                        </li>
                        <li>
                            <img src="https://cdn.simpleicons.org/vite/646CFF" alt="Vite" /> Vite
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default TechStack