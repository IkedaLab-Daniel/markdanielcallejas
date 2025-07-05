import certificategif from '../assets/certificate.gif'
import badgegif from '../assets/badge.gif'
import projectsgif from '../assets/projects.gif'

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
        <div className="about-wrapper">
            <div className="about-left">
                {stats.map((stat, index) => (
                <div className="stat-card" key={index}>
                    <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-info">
                            <span className="stat-number">{stat.number}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    <button className="view-button">view</button>
                </div>
            ))}
        </div>

        <div className="about-right">
            <h2 className="about-heading">About</h2>
            <p className="about-quote"><em>“Spend nights improving...”</em></p>
            <p className="about-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus praesentium, beatae sed ullam ipsam distinctio consequuntur quos autem dolor accusantium corporis quibusdam alias eius sunt est fugit tenetur ab laboriosam.</p>
            <p className="about-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus praesentium, beatae sed ullam ipsam distinctio consequuntur quos autem dolor accusantium corporis quibusdam alias eius sunt est fugit tenetur ab laboriosam.</p>
            <p className="about-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus praesentium, beatae sed ullam ipsam distinctio consequuntur quos autem dolor accusantium corporis quibusdam alias eius sunt est fugit tenetur ab laboriosam.</p> 
        </div>
    </div>
  );
};

export default About;
