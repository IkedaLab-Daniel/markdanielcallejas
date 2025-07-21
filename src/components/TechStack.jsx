import frontendgif from '../assets/frontend.gif'
import backendgif from '../assets/backend.gif'
import databasegif from '../assets/database.gif'
import tools from '../assets/deployment.gif'

const TechStack = () => {

    return(
        <section className="tech-stack">
            <h2 data-aos="fade-up">Tech Stack</h2>
            <p className="subtitle" data-aos="fade-up">Technologies I use across the full stack.</p>
            <div className="card-grid">
                <div 
                    className="tech-card"
                    data-aos="flip-down">
                    <div className="category-head">
                        <img src={frontendgif} alt="" />
                        <h3>Frontend</h3>
                    </div>
                    
                    <ul>
                        <li className='float-1'>
                            <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML" />
                            <span className="tech-name">HTML</span>
                        </li>
                        <li className='float-2'>
                            <img src="https://cdn.simpleicons.org/css?color=1572B6" alt="CSS" />CSS
                        </li>
                        <li className='float-1'>
                            <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" /> JavaScript
                        </li>
                        <li className='float-2'>
                            <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" /> React
                        </li>
                        <li className='float-1'>
                            <img src="https://cdn.simpleicons.org/bootstrap/7952B3" alt="Bootstrap" /> Bootstrap
                        </li>
                        <li className='float-2'>
                            <img src="https://cdn.simpleicons.org/redux/764ABC" alt="Redux" />Redux
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
                        <li className='float-1'>
                            <img src="https://cdn.simpleicons.org/node.js/339933" alt="Node.js" /> Node.js
                        </li>
                        <li className='float-2'>
                            <img src="https://cdn.simpleicons.org/express/000000" alt="Express" /> Express
                        </li>   
                        <li className='float-1'>
                            <img src="https://cdn.simpleicons.org/django/092E20" alt="Django" /> Django
                        </li>
                         <li className='float-2'>
                            <img src="https://cdn.simpleicons.org/flask/000000" alt="Flask" /> Flask
                        </li>
                        <li className='float-1'>
                            <img src="https://cdn.simpleicons.org/php/777BB4" alt="PHP" /> PHP
                        </li>
                        <li className='float-2'>
                            <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" /> Docker
                        </li>
                        <li className='float-1'>
                            <img src="https://cdn.simpleicons.org/kubernetes/326CE5" alt="Kubernetes" /> Kubernetes
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
                        <li className='float-1'>
                            <img src="https://cdn.simpleicons.org/mongodb/47A248" alt="MongoDB" /> MongoDB
                        </li>
                        <li className='float-2'>
                            <img src="https://cdn.simpleicons.org/mysql/4479A1" alt="MySQL" /> MySQL
                        </li>
                        <li className='float-1'>
                            <img src="https://cdn.simpleicons.org/sqlite/003B57" alt="SQLite" /> SQLite
                        </li>
                        <li className='float-2'>
                            <img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="PostgreSQL" /> PostgreSQL
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
                        <li className='float-1'>
                            <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" /> Git
                        </li>
                        <li className='float-2'>
                            <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub" /> GitHub
                        </li>
                        <li className='float-1'>
                            <img src="https://cdn.simpleicons.org/figma/F24E1E" alt="Figma" /> Figma
                        </li>
                        <li className='float-2'>
                            <img src="https://cdn.simpleicons.org/vite/646CFF" alt="Vite" /> Vite
                        </li>
                        <li className='float-2'>
                            <img src="https://cdn.simpleicons.org/webpack/8DD6F9" alt="Webpack" /> Webpack
                        </li>
                        <li className='float-1'>
                            <img src="https://cdn.simpleicons.org/jsonwebtokens/000000" alt="jsonwebtokens" /> JWT
                        </li>
                        <li className='float-2'>
                            <img src="https://cdn.simpleicons.org/insomnia/4000BF" alt="Insomnia" /> Insomnia
                        </li>
                        <li className='float-1'>
                            <img src="https://cdn.simpleicons.org/netlify/00C7B7" alt="Netlify" /> Netlify
                        </li>
                        <li className='float-2'>
                            <img src="https://cdn.simpleicons.org/render/000000" alt="Render" /> Render
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default TechStack