import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'course',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="contact section section-dark" id="contact">
      <div className="container">
        <div className="contact__wrapper">
          <div className="contact__info">
            <h2 className="contact__title">
              Оставить <span className="text-gold">заявку</span>
            </h2>
            <p className="contact__description">
              Расскажите о вашей задаче, и мы подберем оптимальное решение — 
              курс для развития навыков или программу внедрения AI в компанию.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-icon">📧</span>
                <a href="mailto:hello@emd.education">hello@emd.education</a>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-icon">📱</span>
                <a href="https://t.me/emd_education" target="_blank" rel="noopener noreferrer">
                  @emd_education
                </a>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form__row">
              <div className="form__group">
                <label htmlFor="name">Имя *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Как вас зовут"
                />
              </div>
              <div className="form__group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="form__row">
              <div className="form__group">
                <label htmlFor="company">Компания</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Название компании"
                />
              </div>
              <div className="form__group">
                <label htmlFor="interest">Интересует</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <option value="course">Курс для себя</option>
                  <option value="corporate">Корпоративное обучение</option>
                  <option value="consulting">AI-консалтинг</option>
                  <option value="audit">AI-аудит компании</option>
                </select>
              </div>
            </div>

            <div className="form__group">
              <label htmlFor="message">Сообщение</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Расскажите о вашей задаче или вопросе"
              />
            </div>

            <button type="submit" className="btn btn-primary form__submit">
              Отправить заявку
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
