import './About.css';

const directions = [
  {
    id: 1,
    title: 'Курсы для специалистов',
    description: 'Обучение AI для профессионального роста. От базового применения нейросетей до продвинутого кодинга с AI-ассистентами.',
    link: '#courses',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="16" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Решения для бизнеса',
    description: 'AI-аудит, внедрение и сопровождение. Дорожная карта трансформации и обучение корпоративных команд.',
    link: '#corporate',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="6" y="14" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 14V10a8 8 0 1116 0v4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="28" r="4" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__header">
          <span className="about__label">О нас</span>
          <h2 className="about__title">
            Помогаем людям и компаниям<br />
            <span className="text-accent">расти с AI</span>
          </h2>
          <p className="about__description">
            EMD Education — академия и консалтинг в сфере искусственного интеллекта. 
            Мы обучаем специалистов и внедряем AI-решения в бизнес-процессы компаний.
          </p>
        </div>

        <div className="about__directions">
          {directions.map((direction) => (
            <a href={direction.link} key={direction.id} className="direction-card">
              <div className="direction-card__icon">
                {direction.icon}
              </div>
              <h3 className="direction-card__title">{direction.title}</h3>
              <p className="direction-card__description">{direction.description}</p>
              <span className="direction-card__link">
                Подробнее
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
