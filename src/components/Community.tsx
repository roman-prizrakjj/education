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
              <span className="community__feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </span>
              <span className="community__feature-text">Чат с экспертами</span>
            </div>
            <div className="community__feature">
              <span className="community__feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </span>
              <span className="community__feature-text">База промптов</span>
            </div>
            <div className="community__feature">
              <span className="community__feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              </span>
              <span className="community__feature-text">Еженедельные разборы</span>
            </div>
            <div className="community__feature">
              <span className="community__feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </span>
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
