import { useState } from 'react';

// > certificates
import metafrontend from '../assets/metafrontend.jpeg'
import metabackend from '../assets/metabackend.jpeg'
import googleux from '../assets/googleux.jpeg'

// > badges
import badgefullstack from '../assets/badgefullstack.png'
import badgefrontend from '../assets/badgefrontend.png'
import badgebackend from '../assets/badgebackend.png'
import ux from '../assets/badgeux.png'
import js2 from '../assets/badgejs2.png'
import js1 from '../assets/badgejs1.png'
import cybersec from '../assets/badgecyber.png'
import itess from '../assets/badgeitess.png'
import badgehtml from '../assets/badgehtmless.png'
import nodeexpress from '../assets/nodeexpress.png'
import jsibm from '../assets/jsessibm.png'
import frontendess from '../assets/frontendreact.png'
import webdev from '../assets/webdev.png'
import gitess from '../assets/gitess.png'
import seess from '../assets/seess.png'
import cloud from '../assets/cloud.png'
import './credential.css';
import { ExternalLink, Medal } from 'lucide-react';

const Credentials = () => {
  const featuredCertificates = [
    {
      id: 1,
      title: "Meta Front-End Developer Certificate",
      subtitle: "Coursera | Meta",
      description: "This 9-course program prepares learners for an entry-level career as a front-end developer.",
      image: `${metafrontend}`,
      verificationUrl: "https://credly.com/badges/example-1",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "Git", "GitHub"]
    },
    {
      id: 2,
      title: "Meta Back-End Developer Certificate",
      subtitle: "Coursera | Meta",
      description: "This 9-course program prepares learners for an entry-level career as a oack-end developer.",
      image: `${metabackend}`,
      verificationUrl: "https://credly.com/badges/example-2",
      technologies: ["Python", "Django", "REST-API", "MySQL", "Web Security"]
    },
    {
      id: 3,
      title: "Google UX Design",
      subtitle: "Coursera | Google",
      description: "Include hands-on, practice-based assessments and are designed to prepare them for introductory-level roles in UX design.",
      image: `${googleux}`,
      verificationUrl: "https://credly.com/badges/example-3",
      technologies: ["UX Design", "User Research","Prototyping", "Figma", "Responsive & Accessibility Design"]
    }
  ];

  const allBadges = [
    { id: 1, name: "badge1", icon: `${badgefullstack}` },
    { id: 1, name: "badge1", icon: `${badgefrontend}` },
    { id: 1, name: "badge1", icon: `${badgebackend}` },
    { id: 1, name: "badge1", icon: `${ux}` },
    { id: 1, name: "badge1", icon: `${js2}` },
    { id: 1, name: "badge1", icon: `${js1}` },
    { id: 1, name: "badge1", icon: `${cybersec}` },
    { id: 1, name: "badge1", icon: `${itess}` },
    { id: 1, name: "badge1", icon: `${badgehtml}` },
    { id: 1, name: "badge1", icon: `${nodeexpress}` },
    { id: 1, name: "badge1", icon: `${jsibm}` },
    { id: 1, name: "badge1", icon: `${frontendess}` },
    { id: 1, name: "badge1", icon: `${webdev}` },
    { id: 1, name: "badge1", icon: `${gitess}` },
    { id: 1, name: "badge1", icon: `${seess}` },
    { id: 1, name: "badge1", icon: `${cloud}` },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex(prev => (prev + 1) % allBadges.length);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, [allBadges.length]);

  return (
    <section className="credentials-section" id='credentials'>
      <div className="container">
        <div className="card">
          <div className="section-header" data-aos="fade-up">
            <h2>Credentials</h2>
            <p>A showcase of the certificates and badges I've earned through hands-on learning and professional development.</p>
          </div>

          <div className="cert-grid">
            {featuredCertificates.map(cert => (
              <div className="cert-card" key={cert.id} data-aos="fade-up">
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

          <div className="skills-section" data-aos="fade-up">
            <div className="carousel">
              <div className="link-to-badge">
                <div className="wrapper">
                  <Medal />
                  <p>See All Credentials</p>
                </div>
                
              </div>
              <div className="carousel-track">
                {[...allBadges, ...allBadges].map((badge, index) => (
                  <div className="badge" key={`${badge.id}-${index}`}>
                    <div className="icon">
                      <img src={badge.icon} alt={badge.name} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Credentials;
