import { Link } from 'react-router-dom';

import certificategif from '../assets/certificate.gif'
import badgegif from '../assets/badge.gif'
import projectsgif from '../assets/projects.gif'
import GitHubCalendar from 'react-github-calendar';

const stats = [
  {
    icon: <img src={certificategif} alt="Certificate" className='card-gif' />,
    number: 99,
    label: 'Certificates',
    to: '/credentials#certificates',
  },
  {
    icon: <img src={badgegif} alt="Badge" className='card-gif' />,
    number: 20,
    label: 'Badges',
    to: '/credentials',
  },
  {
    icon: <img src={projectsgif} alt="Projects" className='card-gif' />,
    number: 50,
    label: 'Projects',
    to: '/projects',
  },
];

const About = () => {
    return (
        <div className="about-wrapper" id='about'>
            <div className="about-left">
                {stats.map((stat, index) => (
                <div 
                  className="stat-card" 
                  key={index}
                  data-aos="flip-down"
                  // data-aos-delay={index * 100}
                >
                    <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-info">
                            <span className="stat-number">{stat.number}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>

                      <Link to={stat.to}>
                        <button className="view-button">view</button>
                      </Link>
                    
                </div>
            ))}
        </div>

        <div className="about-right" data-aos="fade-up">
            <h2 className="about-heading">About</h2>
            <p className="about-quote"><em>“Spend nights improving...”</em></p>
            <p className="about-description">IT student and aspiring full-stack developer from the Philippines. I enjoy building clean, functional web apps using tools like React, Node.js, Django, and MongoDB. I’m self-taught through hands-on projects and online courses from Meta, IBM, and Google.</p>
            <h3>GitHub Contribution Chart:</h3>
            <div className='calendar-wrapper'>
                <GitHubCalendar
                  username="Ikedalab-Daniel"
                  colorScheme="light"
                  theme={{
                    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']
                  }}
                />
            </div>
        </div>
    </div>
  );
};

export default About;
