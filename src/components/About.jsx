import certificategif from '../assets/certificate.gif'
import badgegif from '../assets/badge.gif'
import projectsgif from '../assets/projects.gif'
import GitHubCalendar from 'react-github-calendar';

const stats = [
  {
    icon: <img src={certificategif} alt="Certificate" className='card-gif' />,
    number: 99,
    label: 'Certificates',
  },
  {
    icon: <img src={badgegif} alt="Badge" className='card-gif' />,
    number: 20,
    label: 'Badges',
  },
  {
    icon: <img src={projectsgif} alt="Projects" className='card-gif' />,
    number: 50,
    label: 'Projects',
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
                  data-aos-delay={index * 100}
                >
                    <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-info">
                            <span className="stat-number">{stat.number}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    <button className="view-button">view</button>
                </div>
            ))}
        </div>

        <div className="about-right" data-aos="fade-up">
            <h2 className="about-heading">About</h2>
            <p className="about-quote"><em>“Spend nights improving...”</em></p>
            <p className="about-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus praesentium, beatae sed ullam ipsam distinctio consequuntur quos autem dolor accusantium corporis quibusdam alias eius sunt est fugit tenetur ab laboriosam.</p>
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
