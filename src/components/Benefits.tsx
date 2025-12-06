import './Benefits.css';

const benefits = [
  {
    number: '01',
    title: 'Реальные кейсы AI-внедрения',
    description: 'Разбираем примеры из практики — как компании уже используют AI для роста эффективности.',
  },
  {
    number: '02',
    title: 'Практика на ваших задачах',
    description: 'Работаем с вашими реальными процессами и задачами. Обучение = внедрение.',
  },
  {
    number: '03',
    title: 'Поддержка менторов',
    description: 'Разбор домашних заданий, ответы на вопросы, помощь с внедрением в рабочие процессы.',
  },
  {
    number: '04',
    title: 'Путь в консалтинг',
    description: 'Возможность продолжить развитие: корпоративный консалтинг и глубокое внедрение AI.',
  },
];

const Benefits = () => {
  return (
    <section className="benefits section section-dark">
      <div className="container">
        <div className="benefits__header">
          <h2 className="benefits__title">
            Что вас <span className="text-gold">ждет</span>
          </h2>
        </div>

        <div className="benefits__grid">
          {benefits.map((benefit) => (
            <div key={benefit.number} className="benefit-card">
              <span className="benefit-card__number">{benefit.number}</span>
              <h3 className="benefit-card__title">{benefit.title}</h3>
              <p className="benefit-card__description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
