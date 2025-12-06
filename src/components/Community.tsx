import './Community.css';

const Community = () => {
  return (
    <section className="community section">
      <div className="container">
        <div className="community__card">
          <div className="community__content">
            <div className="community__icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 28.1818 5.21552 32.0811 7.34267 35.3404L4 44L12.6596 40.6573C15.9189 42.7845 19.8182 44 24 44Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 18L28 24L20 30V18Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="community__text">
              <h3 className="community__title">Комьюнити</h3>
              <p className="community__description">
                Присоединяйтесь к нашему сообществу в Telegram. Практика, разборы кейсов, 
                созвоны с экспертами, обмен промптами и помощь с внедрением AI.
              </p>
            </div>
          </div>
          
          <div className="community__features">
            <div className="community__feature">
              <span className="community__feature-icon">💬</span>
              <span className="community__feature-text">Чат с экспертами</span>
            </div>
            <div className="community__feature">
              <span className="community__feature-icon">📚</span>
              <span className="community__feature-text">База промптов</span>
            </div>
            <div className="community__feature">
              <span className="community__feature-icon">🎯</span>
              <span className="community__feature-text">Еженедельные разборы</span>
            </div>
            <div className="community__feature">
              <span className="community__feature-icon">🤝</span>
              <span className="community__feature-text">Нетворкинг</span>
            </div>
          </div>

          <a 
            href="https://t.me/emd_education" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary community__btn"
          >
            Войти в комьюнити
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
