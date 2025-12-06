import './ForWhom.css';

const ForWhom = () => {
  return (
    <section className="for-whom section">
      <div className="container">
        <div className="for-whom__header">
          <h2 className="for-whom__title">
            Для <span className="text-accent">кого</span> это
          </h2>
        </div>

        <div className="for-whom__grid">
          <div className="for-whom__card">
            <div className="for-whom__icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 40C8 31.163 15.163 24 24 24C32.837 24 40 31.163 40 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="for-whom__card-title">Для людей</h3>
            <ul className="for-whom__list">
              <li>
                <span className="for-whom__list-icon">→</span>
                Разработчики, которые хотят кодить в 3-5 раз быстрее
              </li>
              <li>
                <span className="for-whom__list-icon">→</span>
                Аналитики, стремящиеся автоматизировать рутину
              </li>
              <li>
                <span className="for-whom__list-icon">→</span>
                Менеджеры, которые хотят принимать решения на основе AI
              </li>
              <li>
                <span className="for-whom__list-icon">→</span>
                Специалисты, желающие повысить свою ценность на рынке
              </li>
            </ul>
          </div>

          <div className="for-whom__card for-whom__card--accent">
            <div className="for-whom__icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="8" y="12" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 20H40" stroke="currentColor" strokeWidth="2"/>
                <circle cx="16" cy="28" r="3" stroke="currentColor" strokeWidth="2"/>
                <path d="M24 26H32M24 30H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="for-whom__card-title">Для компаний</h3>
            <ul className="for-whom__list">
              <li>
                <span className="for-whom__list-icon">→</span>
                Основатели, которые хотят снизить стоимость разработки
              </li>
              <li>
                <span className="for-whom__list-icon">→</span>
                Директора по продукту, стремящиеся ускорить команды
              </li>
              <li>
                <span className="for-whom__list-icon">→</span>
                C-level руководители, внедряющие AI в операционку
              </li>
              <li>
                <span className="for-whom__list-icon">→</span>
                HR-директора, развивающие AI-компетенции команд
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
