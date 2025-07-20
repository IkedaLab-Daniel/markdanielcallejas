import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
// > lucide icons
import { CircleCheck, Calendar, SquareArrowOutUpRight, House } from 'lucide-react'

// > imgs - badges
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

// > img - certificates
import placeholder_ls from '../assets/placeholder-ls.jpg'
import metafrontend from '../assets/metafrontend.jpeg'
import metabackend from '../assets/metabackend.jpeg'
import googleux from '../assets/googleux.jpeg'
import metafullstack from '../assets/metafullstack.jpeg'
import dockeress from '../assets/docker-ess.jpg'
import reduxfundamentals from '../assets/redux-fundamentals.jpg'
import reduxfundamentalsdark from '../assets/redux-fundamentals-dark.jpg'


// > img - platforms, providers
import placeholder from '../assets/placeholder.jpeg'
import coursera from '../assets/icon-coursera.png'
import cognitiveclass from '../assets/cognitiveclass.png'
import frontendmasters from '../assets/frontendmasters.png'

// > style
import './CredentialsPage.css';
import { CheckCircle } from 'lucide-react'

// > CDN tech icons
const skillIcons = {
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  DRF: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  SQLite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  TailwindCSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  Vite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
  Linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  Postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  NPM: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  Bash: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
};


const badges = [
  {
    id: 1,
    type: 'badge',
    title: 'Meta Full-Stack Engineer Certificate',
    org: 'Coursera | META',
    date: 'Apr. 16, 2025',
    image: badgefullstack,
  },
  {
    id: 2,
    type: 'badge',
    title: 'Meta Front-End Developer Certificate',
    org: 'Coursera | META',
    date: 'Oct. 2, 2024',
    image: badgefrontend,
  },
  {
    id: 3,
    type: 'badge',
    title: 'Meta Back-End Developer Certificate',
    org: 'Coursera | META',
    date: 'March 29, 2025',
    image: badgebackend,
  },
  {
    id: 4,
    type: 'badge',
    title: 'Google UX Design Professional Certificate',
    org: 'Coursera | Google',
    date: 'Apr. 12, 2025',
    image: ux,
  },
  {
    id: 5,
    type: 'badge',
    title: 'JavaScript Essentials 2',
    org: 'Cisco',
    date: 'Oct 16, 2024',
    image: js2,
  },
  {
    id: 6,
    type: 'badge',
    title: 'JavaScript Essentials 1',
    org: 'Cisco',
    date: 'Sep 17, 2024',
    image: js1,
  },
  {
    id: 7,
    type: 'badge',
    title: 'Introduction to Cybersecurity',
    org: 'Cisco',
    date: 'Sep 18, 2024',
    image: cybersec,
  },
  {
    id: 8,
    type: 'badge',
    title: 'IT Essentials',
    org: 'Cisco',
    date: 'Dec 2, 2024',
    image: itess,
  },
  {
    id: 9,
    type: 'badge',
    title: 'HTML Essentials',
    org: 'Cisco',
    date: 'Apr 18, 2025',
    image: badgehtml,
  },
  {
    id: 10,
    type: 'badge',
    title: 'Node and Express Essentials',
    org: 'Coursera',
    date: 'Nov 10, 2024',
    image: nodeexpress,
  },
  {
    id: 11,
    type: 'badge',
    title: 'JavaScript Programming Essentials',
    org: 'Coursera',
    date: 'Oct 15, 2024',
    image: jsibm,
  },
  {
    id: 12,
    type: 'badge',
    title: 'Front-end Development with React V2',
    org: 'Coursera',
    date: 'Jul 27, 2024',
    image: frontendess,
  },
  {
    id: 13,
    type: 'badge',
    title: 'Web Development with HTML, CSS, JavaScript Essentials',
    org: 'Coursera',
    date: 'Mar 31, 2024',
    image: webdev,
  },
  {
    id: 14,
    type: 'badge',
    title: 'Git and GitHub Essentials',
    org: 'Coursera',
    date: 'Jul 6, 2024',
    image: gitess,
  },
  {
    id: 15,
    type: 'badge',
    title: 'Software Engineering Essentials',
    org: 'Coursera',
    date: 'Nov 21, 2024',
    image: seess,
  },
  {
    id: 16,
    type: 'badge',
    title: 'Introduction to Cloud Computing',
    org: 'Coursera',
    date: 'Mar 24, 2024',
    image: cloud,
  }
];

const certificates = [
  {
    id: 17,
    title: "Meta Front-End Developer",
    issuer: "META",
    icon: coursera,
    platform: "Coursera",
    dateEarned: "October 2024",
    credentialId: "",
    verificationUrl: "https://coursera.org/share/6a6112589a37961242fb7e9c7ceb4eba",
    skills: ["HTML", "CSS", "JavaScript (ES6+)", "React", "Git", "GitHub", "UI/UX", "Debugging", "Unit Testing"],
    certificateImage: metafrontend,
    instructor: "META Staffs",
    description: "A beginner-friendly, project-based training program designed by Meta and delivered on Coursera. It spans nine self-paced courses, and guides students from foundational web technologies to a portfolio-level capstone and coding interview prep."
  },
  {
    id: 18,
    title: "Google UX Design",
    issuer: "Google",
    icon: coursera,
    platform: "Coursera",
    dateEarned: "April 2025",
    credentialId: "",
    verificationUrl: "https://coursera.org/share/d808401e214984822f5dabe51f543b12",
    skills: ["UX Research", "Usability Test", "Figma", "Wireframing", "Prototyping", "Mockups", "Design Principles"],
    certificateImage: googleux,
    instructor: "Andrew Ng",
    description: "This beginner-friendly 7‑course online certificate by Google (via Coursera) leads students through the complete UX design process—from empathizing with users and defining pain points to ideating, wireframing, prototyping, testing, and iterating designs."
  },
  {
    id: 19,
    title: "Meta Back-End Developer",
    issuer: "META",
    icon: coursera,
    platform: "Coursera",
    dateEarned: "April 2025",
    credentialId: "",
    verificationUrl: "https://coursera.org/share/cd08b51edb1470f7d4d839926f0f7729",
    skills: ["Python", "Git", "GitHub", "MySQL", "Django", "REST APIs", "Debugging", "Unit Testing"],
    certificateImage: metabackend,
    instructor: "",
    description: "A 9-course professional certificate focused on server-side development using Python and Django. Covered database management with SQL, RESTful API design, Git-based version control, and cloud deployment fundamentals. Completed a capstone full-stack project and algorithm-based coding interview prep."
  },
  {
    id: 20,
    title: "Meta Full-Stack Developer",
    issuer: "META",
    icon: coursera,
    platform: "Coursera",
    dateEarned: "July 2025",
    credentialId: "",
    verificationUrl: "https://coursera.org/share/23accd09363fb1a10da6f1d2ee533d20",
    skills: ["HTML", "CSS", "JavaScript", "React", "Python", "Django", "REST APIs", "SQL", "Git", "GitHub", "Debugging", "Unit Testing", "Responsive Design", "Cloud Hosting Basics", "Technical Interview Prep"],
    certificateImage: metafullstack,
    instructor: "",
    description: "Awarded after completing both the Front‑End and Back‑End Developer Professional Certificates—a combined full‑stack program designed to prepare learners for entry‑level full‑stack roles. Courses include HTML/CSS, JavaScript, React, Python, APIs, Django, and databases, culminating in capstone projects applying both front‑end and back‑end skills."
  },
  {
    id: 21,
    title: "Docker Essentials: A Developer Introduction",
    issuer: "IBM Developer Skills Network",
    icon: cognitiveclass,
    platform: "Cognitive Class",
    dateEarned: "July 2024",
    credentialId: "",
    verificationUrl: "https://courses.cognitiveclass.ai/certificates/a01e5cc6716b41c08beeb390791ac916",
    skills: ["Containers", "Docker", "Docker Swarm", "Docker Images", "CI/CD workflows", "Container Orchestration", "High Availability", "Service Discovery"],
    certificateImage: dockeress,
    instructor: "",
    description: "Covers container creation and management, Docker images, basic orchestration using Docker Swarm, CI/CD workflows, and running containers in production."
  },
  {
    id: 22,
    title: "Redux Fundamentals",
    issuer: "Frontend Masters",
    icon: frontendmasters,
    platform: "Frontend Masters",
    dateEarned: "July 2024",
    credentialId: "",
    verificationUrl: "",
    skills: ["Redux core API", "React-Redux integration", "State management", "Middleware & enhancers", "Redux Toolkit", "Async thunks"],
    certificateImage: reduxfundamentalsdark,
    instructor: "",
    description: "An in-depth ~4.5 hour developer-focused course on Redux—starting from pure Redux fundamentals, then integrating it into React, and extending it with ecosystem tools like Reselect, Immer, and Redux Toolkit. Ideal for building scalable, production-ready state management in mid-to-large React apps."
  }
]

const CredentialsPage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [selectedBadge, setSelectedBadge] = useState(null);

  const renderBadgeCards = (items) => (
    <div className="grid badge">
      {items.map((item) => (
        <div className="card" key={item.id} data-aos="fade-up" onClick={() => setSelectedBadge(item)}>
          <img
            src={item.image}
            alt={item.title}
            style={{ cursor: 'pointer' }}
          />
          <div className="info-wrapper">
            <h4>{item.title}</h4>
            <p>{item.org}</p>
            <p>{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCertificateCards = (items) => (
    <div className="flex certificate">
      {items.map((item) => (
        <div className="card" key={item.id} data-aos="fade-up">
          <div className="top">
            <div className="left">
              <img src={item.icon} alt="" className="course-icon" />
            </div>
            <div className="right">
              <p className="title">{item.title}</p>
              <p className="provider">{item.issuer}</p>
              <p className="platform">{item.platform}</p>
            </div>
          </div>

          <div className="cert-img-container">
            <img
              src={item.certificateImage}
              alt={item.title}
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedCertificate(item)}
            />          
          </div>

          <div className="info-container">
            <p className='description'>{item.description}</p>

            <div className="icon-text">
              <CircleCheck />
              <p>Skills gained:</p>
            </div>

            {item.skills && (
              <div className="skill-gain-wrapper">
                {item.skills.map((skill, index) => (
                  <span key={index} className="skill-icon" title={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            )}

            <div className="icon-text below">
              <Calendar />
              <p>Date earned:</p>
            </div>
            <p className="date">{item.dateEarned}</p>
            
            {item.verificationUrl && (
              <a href={item.verificationUrl} className="verify" target='_blank'>
                Verify
                <SquareArrowOutUpRight />
              </a>
            )}
            
          </div>
        </div>
      ))}
    </div>
  );

  const renderModal = () => {
    if (!selectedCertificate) return null;
    const item = selectedCertificate;
    return (
      <div
        className="modal-overlay"
        onClick={() => setSelectedCertificate(null)}
      >
        <div
          className="modal-content"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={() => setSelectedCertificate(null)}
            aria-label="Close"
          >
            ×
          </button>
          <img
            src={item.certificateImage}
            alt={item.title}
          />
          <div style={{ textAlign: 'center' }}>
            {/* <h3 style={{ margin: '8px 0 4px 0' }}>{item.title}</h3> */}
            <p style={{ margin: 0, color: '#666', fontWeight: 500 }}>{item.issuer} &middot; {item.platform}</p>
            <p style={{ margin: '8px 0', color: '#888', fontSize: '0.95em' }}>{item.dateEarned}</p>
            {/* <p style={{ margin: '8px 0', color: '#444', fontSize: '0.9rem' }}>{item.description}</p> */}
            {item.skills && (
              <div style={{ margin: '12px 0', display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
                {item.skills.map((skill, idx) => (
                  <span key={idx} style={{
                    background: '#f3f6fa',
                    color: '#2563eb',
                    borderRadius: 6,
                    padding: '4px 10px',
                    fontSize: '0.85em',
                    border: '1px solid #dbeafe'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            )}
            <a
              href={item.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                color: '#2563eb',
                fontWeight: 500,
                textDecoration: 'none',
                marginTop: 8
              }}
            >
              Verify Certificate <SquareArrowOutUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    );
  };


  const renderBadgeModal = () => {
    if (!selectedBadge) return null;
    const item = selectedBadge;
    return (
      <div
        className="modal-overlay"
        onClick={() => setSelectedBadge(null)}
      >
        <div
          className="modal-content"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={() => setSelectedBadge(null)}
            aria-label="Close"
          >
            ×
          </button>
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: '50%',
              borderRadius: 8,
              marginBottom: 16,
              border: '1px solid #eee'
            }}
          />
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ margin: '8px 0 4px 0' }}>{item.title}</h3>
            <p style={{ margin: 0, color: '#666', fontWeight: 500 }}>{item.org}</p>
            <p style={{ margin: '8px 0', color: '#888', fontSize: '0.95em' }}>{item.date}</p>
          </div>
        </div>
      </div>
    );
  };


  // const renderCards = (items, type) => (
  //   <div className={`grid ${type}`}>
  //     {items.map((item) => (
  //       <div className="card" key={item.id} data-aos="flip-up">
  //         <img src={item.image} alt={item.title} />
  //         <div className="info-wrapper">
  //           <h4>{item.title}</h4>
  //           <p>{item.org}</p>
  //           <p>{item.date}</p>
  //             {item.skills && (
  //               <div className="skills">
  //                 {item.skills.map((skill, index) => (
  //                   <span key={index} className="skill-icon" title={skill}>
  //                     {skillIcons[skill] ? (
  //                       <img src={skillIcons[skill]} alt={skill} />
  //                     ) : (
  //                       <span>{skill}</span>
  //                     )}
  //                   </span>
  //                 ))}
  //               </div>
  //             )}
  //         </div>
          
  //       </div>
  //     ))}
  //   </div>
  // );

  return (
    <section className="credentials" id="credentials-page">
      <Link to="/">
        <div className="back-modal">
          <House size={17}/>
            <p>Back Home</p>
        </div>
        <div className="back-modal-mobile">
          <House size={17}/>
          <p>Back</p>
        </div>
      </Link>

      <h2>Credentials</h2>
      <p>These are some of my achievements and recognitions.</p>

      <h3 className="section-title">Badges</h3>
      {renderBadgeCards(badges)}
      <div className="link-wrapper" data-aos="fade-up">
        <a className='link-to-credly' href='https://www.credly.com/users/mark-daniel-callejas/' target='_blank'>Visit Official Credly Profile</a>
      </div>
      <h3 className="section-title" data-aos="fade-up">Certificates</h3>
      {renderCertificateCards(certificates)}
      {renderModal()}
      {renderBadgeModal()}
      <Footer />
    </section>
  );
};

export default CredentialsPage;