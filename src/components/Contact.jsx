import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hygre9a',
        'template_q46i833',
        form.current,
        'yC0pUFC1hdOKFi7Lv'
      )
      .then(() => {
        alert('Mensaje enviado exitosamente!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(error => {
        console.error('Error de EmailJS:', error);
        alert('Hubo un error, por favor inténtalo de nuevo.');
      });
  };

  return (
    <section id="contact" className="contact">
      <h2>CONTACTE</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Nom:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="email">Correu electrònic:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="message">Missatge:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit">Envia&#39;m un missatge</button>
      </form>
    </section>
  );
};

export default Contact;