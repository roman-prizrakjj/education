import './Cases.css';

const cases = [
  {
    id: 1,
    company: 'Tech Startup',
    industry: 'Разработка ПО',
    result: '+320% скорости разработки',
    description: 'Внедрили AI-ассистентов для команды из 15 разработчиков. Время на рутинные задачи сократилось в 4 раза.',
    quote: 'Теперь наши разработчики тратят время на архитектуру, а не на бойлерплейт.',
    author: 'CTO компании',
  },
  {
    id: 2,
    company: 'E-commerce',
    industry: 'Ритейл',
    result: '-40% операционных расходов',
    description: 'Автоматизировали обработку заказов и клиентскую поддержку с помощью AI. ROI — 6 месяцев.',
    quote: 'AI обрабатывает 70% обращений без участия операторов.',
    author: 'Директор по операциям',
  },
];

const Cases = () => {
  return (
    <section className="cases section">
      <div className="container">
        <div className="cases__header">
          <h2 className="cases__title">
            <span className="text-accent">Кейсы</span> внедрения
          </h2>
          <p className="cases__subtitle">
            Реальные результаты наших клиентов
          </p>
        </div>

        <div className="cases__grid">
          {cases.map((item) => (
            <div key={item.id} className="case-card">
              <div className="case-card__header">
                <div className="case-card__company">
                  <span className="case-card__name">{item.company}</span>
                  <span className="case-card__industry">{item.industry}</span>
                </div>
                <div className="case-card__result">{item.result}</div>
              </div>

              <p className="case-card__description">{item.description}</p>

              <blockquote className="case-card__quote">
                <p>"{item.quote}"</p>
                <cite>— {item.author}</cite>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="cases__cta">
          <p>Хотите такой же результат?</p>
          <a href="#contact" className="btn btn-primary">
            Обсудить проект
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cases;
