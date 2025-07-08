import homesvg from '../assets/home.svg'
import aboutsvg from '../assets/about.svg'
import skillsvg from '../assets/skill.svg'
import projectssvg from '../assets/projects.svg'
import githubsvg from '../assets/github.svg'
import linkedinsvg from '../assets/linkedin.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-wrapper">
                <div className="link-container">
                    <a href="#home">
                        <span className="nav-item nav-text">Home</span>
                    </a>
                    <a href="#about">
                        <span className="nav-item nav-text">About</span>
                    </a>
                    <a href="#credentials">
                        <span className="nav-item nav-text">Credentials</span>
                    </a>
                    <a href="#projects">
                        <span className="nav-item nav-text">Project</span>
                    </a>
                </div>
                
                <a className='nav-icon' href="#home">
                    <img className="nav-item" src={homesvg} alt="Home" />
                </a>
                <a className='nav-icon' href="#about">
                    <img className="nav-item " src={aboutsvg} alt="About" />
                </a>
                <a className='nav-icon' href="#credentials">
                     <img className="nav-item" src={skillsvg} alt="Skills" />
                </a>
                <a className='nav-icon' href="#projects">
                    <img className="nav-item" src={projectssvg} alt="Project" />
                </a>

                <div className="divider"></div>
                
                <div className="social-container">
                    <a href="https://github.com/IkedaLab-Daniel">
                        <img src={githubsvg} className='social' alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/mark-daniel-callejas-b18b37230/">
                        <img src={linkedinsvg} className='social' alt="linkedin" />
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar