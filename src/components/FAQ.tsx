import { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    id: 1,
    question: 'Как проходит обучение?',
    answer: 'Обучение проходит онлайн в удобном для вас темпе. Вы получаете доступ к видеолекциям, практическим заданиям и менторской поддержке. Каждый урок включает теорию и практику на реальных кейсах.',
  },
  {
    id: 2,
    question: 'Есть ли записи уроков?',
    answer: 'Да, все уроки доступны в записи. Вы можете пересматривать материалы в любое время. Доступ к курсу сохраняется навсегда.',
  },
  {
    id: 3,
    question: 'Можно ли прийти с задачами своей компании?',
    answer: 'Конечно! Это даже приветствуется. На курсах мы работаем с вашими реальными задачами и процессами. Обучение = внедрение.',
  },
  {
    id: 4,
    question: 'Даете ли вы сертификаты?',
    answer: 'Да, по окончании курса вы получаете сертификат EMD Education, подтверждающий ваши компетенции в области AI.',
  },
  {
    id: 5,
    question: 'Можно ли оплатить как юрлицо/компания?',
    answer: 'Да, мы работаем с юридическими лицами. Предоставляем все необходимые документы для бухгалтерии. Для корпоративных клиентов доступны специальные условия.',
  },
  {
    id: 6,
    question: 'В чём разница между курсами и консалтингом?',
    answer: 'Курсы — это обучение ваших сотрудников навыкам работы с AI. Консалтинг — это полное сопровождение внедрения AI в процессы компании: от аудита до интеграции и поддержки.',
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="faq__header">
          <h2 className="faq__title">
            Вопросы и <span className="text-accent">ответы</span>
          </h2>
        </div>

        <div className="faq__list">
          {faqData.map((item) => (
            <div 
              key={item.id} 
              className={`faq__item ${openId === item.id ? 'faq__item--open' : ''}`}
            >
              <button 
                className="faq__question"
                onClick={() => toggleFaq(item.id)}
              >
                <span className="faq__number">{String(item.id).padStart(2, '0')}</span>
                <span className="faq__question-text">{item.question}</span>
                <span className="faq__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              <div className="faq__answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
