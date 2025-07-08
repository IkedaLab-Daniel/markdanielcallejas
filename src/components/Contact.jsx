import contactgif from '../assets/contact.gif'
import credlysvg from '../assets/credly.svg'
import tiktoksvg from '../assets/tiktok.svg'
import './contact.css';

const Contact = () => {

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/IkedaLab-Daniel',
            img: 'https://cdn-icons-png.flaticon.com/512/733/733553.png',
            description: '@Ikedalab-Daniel',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/mark-daniel-callejas-b18b37230/',
            img: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
            description: 'Name Name NameName',
        },
        {
            name: 'Facebook',
            url: 'https://facebook.com/yourprofile',
            img: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
            description: 'Your Facebook Profile',
        },
        {
            name: 'Credly',
            url: 'https://www.credly.com/users/mark-daniel-callejas',
            img: `${credlysvg}`,
            description: 'Name Name NameName',
        },
        {
            name: 'TikTok',
            url: 'https://tiktok.com/@dev.iceice',
            img: `${tiktoksvg}`,
            description: '@dev.iceice',
        },
    ];

    return (
        <section id="contact">
            {/* <h2 data-aos="fade-up">Contact</h2>
            <p className="subtitle" data-aos="fade-up">Get in touch with me</p> */}
            <div className="contact-container">
                <div className="form-card" data-aos="fade-up">
                    <div className="head-wrap">
                        <img src={contactgif} alt="" />
                        <h2>Send a message</h2>
                    </div>
                   
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea placeholder="Your Message"></textarea>
                    <button>Send Message</button>
                </div>

                <div className="social-links">
                    {socialLinks.map((link, index) => (
                        <a 
                            key={index} 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={`social-card`}
                            data-aos="flip-down"
                            data-aos-delay={index * 100}>
                        <img 
                        src={link.img} 
                        alt={link.name}
                        className={`${index % 2 === 0 ? 'float-1' : 'float-2'}`} />
                        <div className="social-text">
                            <h4>{link.name}</h4>
                            <p>{link.description}</p>
                        </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
        
  );
};

export default Contact;
