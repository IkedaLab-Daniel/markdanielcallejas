import { useEffect, useState } from 'react';
import samplecert from '../assets/samplecert.jpeg'
import samplebadge from '../assets/samplebadge.png'
import './credential.css';
import { ExternalLink } from 'lucide-react';

const Credentials = () => {
  const featuredCertificates = [
    {
      id: 1,
      title: "Certificate Certificate",
      subtitle: "Coursera",
      description: "Desription",
      image: `${samplecert}`,
      verificationUrl: "https://credly.com/badges/example-1",
      technologies: ["React", "Django", "MySQL"]
    },
    {
      id: 2,
      title: "Certificate Certificate",
      subtitle: "Coursera",
      description: "Desription Desription Desription",
      image: `${samplecert}`,
      verificationUrl: "https://credly.com/badges/example-2",
      technologies: ["React", "Django", "MySQL"]
    },
    {
      id: 3,
      title: "Certificate Certificate",
      subtitle: "Coursera",
      description: "Desription Desription Desription",
      image: `${samplecert}`,
      verificationUrl: "https://credly.com/badges/example-3",
      technologies: ["React", "Django", "MySQL"]
    }
  ];

  const allBadges = [
    { id: 1, name: "badge1", icon: `${samplebadge}` },
    { id: 1, name: "badge1", icon: `${samplebadge}` },
    { id: 1, name: "badge1", icon: `${samplebadge}` },
    { id: 1, name: "badge1", icon: `${samplebadge}` },
    { id: 1, name: "badge1", icon: `${samplebadge}` },
    { id: 1, name: "badge1", icon: `${samplebadge}` },
    { id: 1, name: "badge1", icon: `${samplebadge}` },
    { id: 1, name: "badge1", icon: `${samplebadge}` },
    { id: 1, name: "badge1", icon: `${samplebadge}` },
    { id: 1, name: "badge1", icon: `${samplebadge}` },
    { id: 1, name: "badge1", icon: `${samplebadge}` },
    { id: 1, name: "badge1", icon: `${samplebadge}` },
    { id: 1, name: "badge1", icon: `${samplebadge}` },
    { id: 1, name: "badge1", icon: `${samplebadge}` },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % allBadges.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [allBadges.length]);

  return (
    <section className="credentials-section">
      <div className="container">
        <div className="card">
          <div className="section-header">
            <h2>Section Section</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae praesentium odit non ea culpa dolorem, possimus ad voluptate excepturi odio distinctio unde esse, blanditiis, fugiat nihil exercitationem nulla accusamus quidem.</p>
          </div>

          <div className="cert-grid">
            {featuredCertificates.map(cert => (
              <div className="cert-card" key={cert.id}>
                <div className="cert-img-wrapper">
                  <img src={cert.image} alt={cert.title} />
                  <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer" className="cert-verify">
                    <ExternalLink size={16} />
                    <span>View</span>
                  </a>
                </div>
                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  <p className="subtitle">{cert.subtitle}</p>
                  <p className="desc">{cert.description}</p>
                  <div className="tags">
                    {cert.technologies.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="skills-section">
            {/* <h3>Technical Skills</h3>
            <p>Technologies and frameworks I work with</p> */}
            <div className="carousel">
              <div
                className="carousel-track"
                style={{
                  transform: `translateX(-${(currentIndex * 100) / 6}%)`,
                  width: `${(allBadges.length * 300) / 6}px`,
                }}
              >
                {[...allBadges, ...allBadges, ...allBadges].map((badge, index) => (
                  <div className="badge" key={`${badge.id}-${index}`}>
                    <div className="icon">
                        <img src={badge.icon} alt="" />
                    </div>
                    {/* <span>{badge.name}</span> */}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="stats">
            <div>
              <div className="stat-num">25+</div>
              <div className="stat-label">Certifications</div>
            </div>
            <div>
              <div className="stat-num">6</div>
              <div className="stat-label">Cloud Platforms</div>
            </div>
            <div>
              <div className="stat-num">12</div>
              <div className="stat-label">Tech Domains</div>
            </div>
          </div>

          <div className="btn-wrapper">
            <button onClick={() => window.open('/credentials', '_blank')}>
              View All Credentials <ExternalLink size={18} />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
