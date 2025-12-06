import './Corporate.css';

const corporateServices = [
  {
    id: 1,
    tag: '#аудит',
    title: 'AI Audit Pro',
    description: 'Полный аудит процессов компании с рекомендациями по внедрению AI. Дорожная карта трансформации.',
    result: '+40% эффективности',
    duration: '2 недели',
  },
  {
    id: 2,
    tag: '#разработка',
    title: 'AI для команд разработки',
    description: 'Обучение и внедрение AI-ассистентов для разработчиков. Copilot, Cursor, автогенерация кода.',
    result: '3-5x ускорение',
    duration: '4 недели',
  },
  {
    id: 3,
    tag: '#менеджмент',
    title: 'AI для менеджмента',
    description: 'Корпоративная программа для руководителей. AI в принятии решений, аналитике, управлении.',
    result: '-30% рутины',
    duration: '3 недели',
  },
  {
    id: 4,
    tag: '#трансформация',
    title: 'Full AI R&D',
    description: 'Полный цикл внедрения AI в процессы компании. От аудита до интеграции и сопровождения.',
    result: 'Полная трансформация',
    duration: '8 недель',
  },
];

const Corporate = () => {
  return (
    <section className="corporate" id="corporate">
      <div className="container">
        <div className="corporate__header">
          <h2 className="corporate__title">
            Корпоративные<br />
            <span className="text-gold">решения</span>
          </h2>
        </div>
      </div>

      <div className="corporate__stack">
        {corporateServices.map((service, index) => (
          <div 
            key={service.id} 
            className="corporate-card"
            style={{ '--card-index': index } as React.CSSProperties}
          >
            <div className="corporate-card__inner">
              <div className="corporate-card__left">
                <span className="corporate-card__tag">{service.tag}</span>
                <div className="corporate-card__icon">
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <rect x="20" y="20" width="60" height="60" rx="8"/>
                    <rect x="35" y="35" width="30" height="30" rx="4" fill="#0D0D0D"/>
                  </svg>
                </div>
              </div>
              
              <div className="corporate-card__right">
                <div className="corporate-card__badges">
                  <span className="corporate-card__result">{service.result}</span>
                  <span className="corporate-card__duration">{service.duration}</span>
                </div>
                
                <h3 className="corporate-card__title">{service.title}</h3>
                <p className="corporate-card__description">{service.description}</p>
                
                <div className="corporate-card__footer">
                  <a href="#contact" className="corporate-card__link">
                    Запросить консультацию
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 16L16 4M16 4H6M16 4V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Corporate;
