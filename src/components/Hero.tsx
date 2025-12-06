import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__bg-gradient"></div>
        <div className="hero__bg-pattern"></div>
      </div>
      
      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__badge">AI-академия и консалтинг</div>
          
          <h1 className="hero__title">
            <span className="hero__title-main">EMD Education</span>
            <span className="hero__title-sub">Внедряем AI в бизнес за 2-8 недель</span>
          </h1>
          
          <p className="hero__description">
            Обучаем команды и помогаем компаниям встроить нейротехнологии в процессы. 
            Курсы по AI для специалистов и менеджеров. AI-аудит и дорожная карта для бизнеса.
          </p>
          
          <div className="hero__actions">
            <a href="#courses" className="btn btn-primary btn-lg">
              Выбрать курс
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#corporate" className="btn btn-outline btn-lg">
              AI-аудит компании
            </a>
          </div>
          
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">500+</span>
              <span className="hero__stat-label">Обучено специалистов</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">50+</span>
              <span className="hero__stat-label">Компаний-партнеров</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">95%</span>
              <span className="hero__stat-label">Довольных клиентов</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
