import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import contactgif from '../assets/contact.gif'
import credlysvg from '../assets/credly.svg'
import tiktoksvg from '../assets/tiktok.svg'
import sendsvg from '../assets/send.svg'
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
            description: 'Mark Daniel Callejas',
        },
        {
            name: 'Facebook',
            url: 'https://facebook.com/yourprofile',
            img: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
            description: 'Mark Daniel Callejas',
        },
        {
            name: 'Credly',
            url: 'https://www.credly.com/users/mark-daniel-callejas',
            img: `${credlysvg}`,
            description: 'Mark Daniel Callejas',
        },
        {
            name: 'TikTok',
            url: 'https://tiktok.com/@dev.iceice',
            img: `${tiktoksvg}`,
            description: '@dev.iceice',
        },
    ];

    const formRef = useRef();
    const [sent, setSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true)
        emailjs.sendForm(
            'service_dev_iceice',     
            'template_mrfpb7y',    
            formRef.current,
            'iocACduXL1ysIjgcS'        
        )
        .then(() => {
            setSent(true);
            setIsLoading(false)
            setError("")
            formRef.current.reset();
        })
        
        .catch((error) => {
            setIsLoading(false)
            setError("Try again later")
            console.log('Error:', error);
        });
    };

    const getButtonLabel = () => {
        if (isLoading) return 'Sending...';
        if (sent && !error) return 'Sent!';
        if (error) return 'Try again later';
        return 'Send Message';
    };

    const isDisabled = isLoading || sent;

    return (
        <section id="contact">
            <h2 data-aos="fade-up">Let's Connect</h2>
            <p className="subtitle" data-aos="fade-up">Have a question, collaboration idea, or just want to say hi?  
    Drop me a message or reach out via socials!</p>
            <div className="contact-container">
                    <form ref={formRef} className="form-card" data-aos="fade-up" onSubmit={sendEmail}>
                    <div className="head-wrap">
                        <img src={contactgif} alt="" />
                        <p className='heading'>Send a message</p>
                    </div>
                   
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>

                    <button type="submit" disabled={isDisabled}>
                        <img src={sendsvg} alt="" />
                        {getButtonLabel()}
                    </button>
                </form>

                <div className="social-links">
                    {socialLinks.map((link, index) => (
                        <a 
                            key={index} 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={`social-card`}
                            data-aos="flip-down"
                            >
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
