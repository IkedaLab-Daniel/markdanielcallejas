import React from 'react';
import './contact.css';

const Contact = () => {

    const socialLinks = [
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/yourprofile',
        img: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
        description: 'Name Name Name Name',
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/anotherprofile',
        img: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
        description: 'Name Name Name Name',
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/thirdprofile',
        img: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
        description: 'Name Name Name Name',
    },
    ];

    return (
        <section id="contact">
            <h2 data-aos="fade-up">Contact</h2>
            <p className="subtitle" data-aos="fade-up">Get in touch with me</p>
            <div className="contact-container">
                <div className="form-card">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea placeholder="Your Message"></textarea>
                    <button>Send Message</button>
                </div>

                <div className="social-links">
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-card">
                        <img src={link.img} alt={link.name} />
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
