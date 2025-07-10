import cert1 from '../assets/metafrontend.jpeg';

// > bagdes
import badgefrontend from '../assets/badgefrontend.png'
import badgebackend from '../assets/badgebackend.png'
import './CredentialsPage.css';

const credentialsData = [
  {
    id: 1,
    type: 'certificate',
    title: 'Meta Back-End Developer',
    org: 'Coursera | META',
    image: cert1,
    stack: ['react', 'django', 'mysql'],
  },
  {
    id: 2,
    type: 'certificate',
    title: 'Meta Back-End Developer',
    org: 'Coursera | META',
    image: cert1,
    stack: ['react', 'django', 'mysql'],
  },
  {
    id: 3,
    type: 'certificate',
    title: 'Meta Back-End Developer',
    org: 'Coursera | META',
    image: cert1,
    stack: ['react', 'django', 'mysql'],
  },
  {
    id: 4,
    type: 'certificate',
    title: 'Meta Back-End Developer',
    org: 'Coursera | META',
    image: cert1,
    stack: ['react', 'django', 'mysql'],
  },
  {
    id: 1,
    type: 'certificate',
    title: 'Meta Back-End Developer',
    org: 'Coursera | META',
    image: cert1,
    stack: ['react', 'django', 'mysql'],
  },
  {
    id: 2,
    type: 'certificate',
    title: 'Meta Back-End Developer',
    org: 'Coursera | META',
    image: cert1,
    stack: ['react', 'django', 'mysql'],
  },
  {
    id: 3,
    type: 'certificate',
    title: 'Meta Back-End Developer',
    org: 'Coursera | META',
    image: cert1,
    stack: ['react', 'django', 'mysql'],
  },
  {
    id: 4,
    type: 'certificate',
    title: 'Meta Back-End Developer',
    org: 'Coursera | META',
    image: cert1,
    stack: ['react', 'django', 'mysql'],
  },
  {
    id: 5,
    type: 'badge',
    title: 'Meta Front-End Developer Certificate',
    org: 'Coursera | META',
    date: 'Oct. 2, 2024',
    image: badgefrontend,
    stack: ['react', 'django', 'mysql'],
  },
  {
    id: 6,
    type: 'badge',
    title: 'Meta Back-End Developer Certificate',
    org: 'Coursera | META',
    date: 'March 29, 2025',
    image: badgebackend,
    stack: ['react', 'django', 'mysql'],
  },
  {
    id: 7,
    type: 'badge',
    title: 'Sample Badge',
    org: 'Coursera | April 1, 2025',
    image: badgefrontend,
    stack: ['react', 'django', 'mysql'],
  },
  {
    id: 8,
    type: 'badge',
    title: 'Sample Badge',
    org: 'Coursera | April 1, 2025',
    image: badgefrontend,
    stack: ['react', 'django', 'mysql'],
  },
  {
    id: 5,
    type: 'badge',
    title: 'Sample Badge',
    org: 'Coursera | April 1, 2025',
    image: badgefrontend,
    stack: ['react', 'django', 'mysql'],
  },
  {
    id: 6,
    type: 'badge',
    title: 'Sample Badge',
    org: 'Coursera | April 1, 2025',
    image: badgefrontend,
    stack: ['react', 'django', 'mysql'],
  },
  {
    id: 7,
    type: 'badge',
    title: 'Sample Badge',
    org: 'Coursera | April 1, 2025',
    image: badgefrontend,
    stack: ['react', 'django', 'mysql'],
  },
  {
    id: 8,
    type: 'badge',
    title: 'Sample Badge',
    org: 'Coursera | April 1, 2025',
    image: badgefrontend,
    stack: ['react', 'django', 'mysql'],
  },
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
        <div className="card" key={item.id}>
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