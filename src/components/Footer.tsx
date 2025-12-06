import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <span className="footer__logo-text">EMD</span>
              <span className="footer__logo-accent">Education</span>
            </a>
            <p className="footer__tagline">
              AI-академия и консалтинг по внедрению нейротехнологий
            </p>
          </div>

          <div className="footer__nav">
            <div className="footer__nav-group">
              <h4>Обучение</h4>
              <a href="#courses">Все курсы</a>
              <a href="#courses">AI для специалистов</a>
              <a href="#courses">AI для менеджеров</a>
              <a href="#courses">Нейроассист-кодинг</a>
            </div>

            <div className="footer__nav-group">
              <h4>Для бизнеса</h4>
              <a href="#corporate">AI Audit Pro</a>
              <a href="#corporate">Корпоративное обучение</a>
              <a href="#corporate">Full AI R&D</a>
              <a href="#contact">Консультация</a>
            </div>

            <div className="footer__nav-group">
              <h4>Контакты</h4>
              <a href="mailto:hello@emd.education">hello@emd.education</a>
              <a href="https://t.me/emd_education" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} EMD Education. Все права защищены.
          </p>
          <div className="footer__links">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
