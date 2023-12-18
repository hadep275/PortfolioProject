import React, {useState, useEffect} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useTheme } from './ThemeProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/Contact.css';



const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus, isDarkMode] = useState(null);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      anchorPlacement: 'top-bottom',
    });
    AOS.refresh();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mdorbzvz', {
        method: 'POST',
        body: new URLSearchParams(formData),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        mode: 'no-cors',
      });

      setFormStatus('success');
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    setTimeout(() => {
      setFormStatus(null);
    }, 3000);
  } catch (error) {
    console.error('An error occurred:', error);
    setFormStatus('error');
  }
};

  
  return (
    <section id="contact" className={`contact ${isDarkMode ? 'dark-mode' : 'light-mode'}`} data-aos="zoom-in-right">
      <h2>Contact Me</h2>
      <form id="contact-form" method="post" action="https://formspree.io/f/mdorbzvz" onSubmit={handleSubmit} data-aos="flip-right">
        <label htmlFor="name" style={{ color: isDarkMode ? '' : '' }}>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required

        />

        <label htmlFor="message">Message:</label>
        <textarea
          type="message"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required

        ></textarea>

        <input type="submit" value="Submit" />

        {formStatus === 'success' && (
          <div className="success-message">
            Thank you for your message! Message sent successfully.
          </div>
        )}
        {formStatus === 'error' && (
          <div className="error-message">
            There was an error submitting your message. Please try again later.
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
