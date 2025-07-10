// > placehoders
import cert1 from '../assets/metafrontend.jpeg';

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

// > style
import './CredentialsPage.css';

const credentialsData = [
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
// sample 
const techIcons = {
  react: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
  django: 'https://cdn-icons-png.flaticon.com/512/919/919837.png',
  mysql: 'https://cdn-icons-png.flaticon.com/512/919/919836.png',
};

const CredentialsPage = () => {
  const badges = credentialsData.filter(item => item.type === 'badge');
  const certificates = credentialsData.filter(item => item.type === 'certificate');

  const renderCards = (items, type) => (
    <div className={`grid ${type}`}>
      {items.map((item) => (
        <div className="card" key={item.id} data-aos="flip-up">
          <img src={item.image} alt={item.title} />
          <div className="info-wrapper">
            <h4>{item.title}</h4>
            <p>{item.org}</p>
            <p>{item.date}</p>
            {/* <div className="stack">
              {item.stack.map((tech) => (
                <img key={tech} src={techIcons[tech]} alt={tech} />
              ))}
            </div> */}
          </div>
          
        </div>
      ))}
    </div>
  );

  return (
    <section className="credentials" id="credentials-page">
      <h2>Credentials</h2>
      <p>These are some of my achievements and recognitions.</p>

      <h3 className="section-title">Badges</h3>
      {renderCards(badges, 'badge')}

      <h3 className="section-title">Certificates</h3>
      {renderCards(certificates, 'certificate')}
    </section>
  );
};

export default CredentialsPage;