import { useEffect, useRef } from 'react';
import './Courses.css';

const courses = [
  {
    id: 1,
    tag: '#AI для специалистов',
    title: 'Курс Рост через AI',
    description: 'Базовый флагманский курс по использованию AI в повседневной работе. Научитесь эффективно применять нейросети для решения рабочих задач.',
    level: 'Beginner',
    students: 234,
  },
  {
    id: 2,
    tag: '#AI для менеджеров',
    title: 'Курс AI для менеджеров',
    description: 'Как руководителю использовать AI для управления командой, принятия решений и оптимизации процессов.',
    level: 'Beginner',
    students: 156,
  },
  {
    id: 3,
    tag: '#нейроассист-кодинг',
    title: 'Курс Нейроассист-кодинг',
    description: 'Для разработчиков: как писать код в 3-5 раз быстрее с помощью AI-ассистентов. Copilot, Cursor, Claude.',
    level: 'Pro',
    students: 189,
  },
  {
    id: 4,
    tag: '#AI для бизнеса',
    title: 'Курс AI в бизнес-процессах',
    description: 'Практический курс по внедрению AI в операционные процессы компании. Автоматизация, аналитика, решения.',
    level: 'Pro',
    students: 98,
  },
];

const Courses = () => {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!stackRef.current) return;
      const cards = stackRef.current.querySelectorAll('.course-card');
      const stickyTop = 100;
      
      const cardsArray = Array.from(cards);
      
      cardsArray.forEach((card, index) => {
        if (index > 0) {
          const rect = card.getBoundingClientRect();
          const nextCard = cardsArray[index + 1];
          
          const isAtStickyPosition = rect.top <= stickyTop + 650;
          const nextCardCoversThis = nextCard 
            ? nextCard.getBoundingClientRect().top <= stickyTop + 5
            : false;
          
          if (isAtStickyPosition && !nextCardCoversThis) {
            card.classList.add('course-card--overlapping');
          } else {
            card.classList.remove('course-card--overlapping');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="courses" id="courses">
      <div className="container">
        <div className="courses__header">
          <h2 className="courses__title">
            Выберите подходящее<br />
            <span className="text-accent">направление</span>
          </h2>
        </div>
      </div>

      <div className="courses__stack" ref={stackRef}>
        {courses.map((course, index) => (
          <div 
            key={course.id} 
            className="course-card"
            style={{ '--card-index': index } as React.CSSProperties}
          >
            <div className="course-card__inner">
              <div className="course-card__left">
                <span className="course-card__tag">{course.tag}</span>
                <div className="course-card__icon">
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="30" r="25"/>
                    <circle cx="50" cy="75" r="20"/>
                    <polygon points="25,50 75,50 50,95"/>
                  </svg>
                </div>
              </div>
              
              <div className="course-card__right">
                <div className="course-card__meta">
                  <span className="course-card__students">Обучились {course.students} человек</span>
                </div>
                
                <h3 className="course-card__title">{course.title}</h3>
                <p className="course-card__description">{course.description}</p>
                
                <div className="course-card__footer">
                  <span className="course-card__level">Уровень {course.level}</span>
                  <a href="#contact" className="course-card__link">
                    Узнать подробнее
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

export default Courses;
