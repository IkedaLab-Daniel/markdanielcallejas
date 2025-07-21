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

// > img - platforms, providers
import placeholder from '../assets/placeholder.jpeg'
import coursera from '../assets/icon-coursera.png'

// > style
import './CredentialsPage.css';

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
    id: 4,
    type: 'badge',
    title: 'Meta Full-Stack Engineer Certificate',
    org: 'Coursera | META',
    date: 'Apr. 16, 2025',
    image: badgefullstack,
  },
  {
    id: 5,
    type: 'badge',
    title: 'Meta Front-End Developer Certificate',
    org: 'Coursera | META',
    date: 'Oct. 2, 2024',
    image: badgefrontend,
  },
  {
    id: 6,
    type: 'badge',
    title: 'Meta Back-End Developer Certificate',
    org: 'Coursera | META',
    date: 'March 29, 2025',
    image: badgebackend,
  },
  {
    id: 7,
    type: 'badge',
    title: 'Google UX Design Professional Certificate',
    org: 'Coursera | Google',
    date: 'Apr. 12, 2025',
    image: ux,
  },
  {
    id: 1,
    type: 'badge',
    title: 'JavaScript Essentials 2',
    org: 'Cisco',
    date: 'Oct 16, 2024',
    image: js2,
  },
  {
    id: 2,
    type: 'badge',
    title: 'JavaScript Essentials 1',
    org: 'Cisco',
    date: 'Sep 17, 2024',
    image: js1,
  },
  {
    id: 3,
    type: 'badge',
    title: 'Introduction to Cybersecurity',
    org: 'Cisco',
    date: 'Sep 18, 2024',
    image: cybersec,
  },
  {
    id: 4,
    type: 'badge',
    title: 'IT Essentials',
    org: 'Cisco',
    date: 'Dec 2, 2024',
    image: itess,
  },
  {
    id: 5,
    type: 'badge',
    title: 'HTML Essentials',
    org: 'Cisco',
    date: 'Apr 18, 2025',
    image: badgehtml,
  },
  {
    id: 6,
    type: 'badge',
    title: 'Node and Express Essentials',
    org: 'Coursera',
    date: 'Nov 10, 2024',
    image: nodeexpress,
  },
  {
    id: 7,
    type: 'badge',
    title: 'JavaScript Programming Essentials',
    org: 'Coursera',
    date: 'Oct 15, 2024',
    image: jsibm,
  },
  {
    id: 8,
    type: 'badge',
    title: 'Front-end Development with React V2',
    org: 'Coursera',
    date: 'Jul 27, 2024',
    image: frontendess,
  },
  {
    id: 9,
    type: 'badge',
    title: 'Web Development with HTML, CSS, JavaScript Essentials',
    org: 'Coursera',
    date: 'Mar 31, 2024',
    image: webdev,
  },
  {
    id: 10,
    type: 'badge',
    title: 'Git and GitHub Essentials',
    org: 'Coursera',
    date: 'Jul 6, 2024',
    image: gitess,
  },
  {
    id: 11,
    type: 'badge',
    title: 'Software Engineering Essentials',
    org: 'Coursera',
    date: 'Nov 21, 2024',
    image: seess,
  },
  {
    id: 12,
    type: 'badge',
    title: 'Introduction to Cloud Computing',
    org: 'Coursera',
    date: 'Mar 24, 2024',
    image: cloud,
  }
];

const certificates = [
  {
    id: 1,
    title: "Machine Learning Specialization",
    issuer: "Stanford University",
    icon: coursera,
    platform: "Coursera",
    dateEarned: "December 2024",
    credentialId: "COURSERA-ML-2024-001234",
    verificationUrl: "https://coursera.org/verify/specialization/001234",
    skills: ["Machine Learning", "Python", "Neural Networks", "TensorFlow", "Supervised Learning", "Unsupervised Learning"],
    certificateImage: placeholder_ls,
    instructor: "Andrew Ng",
    description: "Comprehensive specialization covering machine learning fundamentals and advanced techniques"
  },
  {
    id: 2,
    title: "Machine Learning Specialization",
    issuer: "Stanford University",
    icon: coursera,
    platform: "Coursera",
    dateEarned: "December 2024",
    credentialId: "COURSERA-ML-2024-001234",
    verificationUrl: "https://coursera.org/verify/specialization/001234",
    skills: ["Machine Learning", "Python", "Neural Networks", "TensorFlow", "Supervised Learning", "Unsupervised Learning"],
    certificateImage: placeholder_ls,
    instructor: "Andrew Ng",
    description: "Comprehensive specialization covering machine learning fundamentals and advanced techniques"
  },
  {
    id: 1,
    title: "Machine Learning Specialization",
    issuer: "Stanford University",
    icon: coursera,
    platform: "Coursera",
    dateEarned: "December 2024",
    credentialId: "COURSERA-ML-2024-001234",
    verificationUrl: "https://coursera.org/verify/specialization/001234",
    skills: ["Machine Learning", "Python", "Neural Networks", "TensorFlow", "Supervised Learning", "Unsupervised Learning"],
    certificateImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
    instructor: "Andrew Ng",
    description: "Comprehensive specialization covering machine learning fundamentals and advanced techniques"
  },
  {
    id: 2,
    title: "Machine Learning Specialization",
    issuer: "Stanford University",
    icon: coursera,
    platform: "Coursera",
    dateEarned: "December 2024",
    credentialId: "COURSERA-ML-2024-001234",
    verificationUrl: "https://coursera.org/verify/specialization/001234",
    skills: ["Machine Learning", "Python", "Neural Networks", "TensorFlow", "Supervised Learning", "Unsupervised Learning"],
    certificateImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
    instructor: "Andrew Ng",
    description: "Comprehensive specialization covering machine learning fundamentals and advanced techniques"
  }
]

const CredentialsPage = () => {
  const renderBadgeCards = (items) => (
    <div className="grid badge">
      {items.map((item) => (
        <div className="card" key={item.id} data-aos="flip-up">
          <img src={item.image} alt={item.title} />
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
        <div className="card" key={item.id} data-aos="flip-up">
          <div className="top">
            <div className="left">
              <img src={item.icon} alt="" className="course-icon" />
            </div>
            <div className="right">
              <p className="title">Certificate here</p>
              <p className="provider">Provider</p>
              <p className="platform">Platform</p>
            </div>
          </div>

          <div className="cert-img-container">
            <img src={item.certificateImage} alt={item.title} />
            <p>Click to view!</p>
          </div>
          <div className="info-wrapper">
            <h4>{item.title}</h4>
            <p>{item.org}</p>
            <p>{item.date}</p>
            {item.skills && (
              <div className="skills">
                {item.skills.map((skill, index) => (
                  <span key={index} className="skill-icon" title={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

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
      <h2>Credentials</h2>
      <p>These are some of my achievements and recognitions.</p>

      <h3 className="section-title">Badges</h3>
      {renderBadgeCards(badges)}
      <div className="link-wrapper" data-aos="fade-up">
        <a className='link-to-credly' href='https://www.credly.com/users/mark-daniel-callejas/' target='_blank'>Visit Official Credly Profile</a>
      </div>
      <h3 className="section-title">Certificates</h3>
      {renderCertificateCards(certificates)}
    </section>
  );
};

export default CredentialsPage;