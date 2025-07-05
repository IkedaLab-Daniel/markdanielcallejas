import homesvg from '../assets/home.svg'
import aboutsvg from '../assets/about.svg'
import skillsvg from '../assets/skill.svg'
import projectssvg from '../assets/projects.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-wrapper">
                <span className="nav-item nav-text">Home</span>
                <span className="nav-item nav-text">About</span>
                <span className="nav-item nav-text">Skills</span>
                <span className="nav-item nav-text">Project</span>
                <img className="nav-item nav-icon" src={homesvg} alt="Home" />
                <img className="nav-item nav-icon" src={aboutsvg} alt="About" />
                <img className="nav-item nav-icon" src={skillsvg} alt="Skills" />
                <img className="nav-item nav-icon" src={projectssvg} alt="Project" />
            </div>
        </div>
    )
}

export default Navbar