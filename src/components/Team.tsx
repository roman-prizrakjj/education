import './Team.css';

const partners = [
  { name: 'Сколково', logo: 'Sk' },
  { name: 'Zerocoder', logo: 'Zc' },
  { name: 'Hop Agency', logo: 'HA' },
  { name: 'EMD Labs', logo: 'EL' },
];

const Team = () => {
  return (
    <section className="team section section-dark" id="team">
      <div className="container">
        <div className="team__header">
          <h2 className="team__title">
            Кто <span className="text-gold">ведет</span> программы
          </h2>
          <p className="team__subtitle">
            Эксперты с многолетним опытом в AI, консалтинге и образовании
          </p>
        </div>

        <div className="team__main">
          <div className="team__founder">
            <div className="team__founder-avatar">
              <span>РШ</span>
            </div>
            <div className="team__founder-info">
              <h3 className="team__founder-name">Роман Шляхта</h3>
              <span className="team__founder-role">Основатель EMD Education</span>
              <p className="team__founder-bio">
                Визионер и основатель экосистемы EMD Labs. Более 10 лет в IT и консалтинге. 
                Специализация — внедрение AI-решений в бизнес-процессы компаний.
              </p>
            </div>
          </div>
        </div>

        <div className="team__partners">
          <h4 className="team__partners-title">Наши партнеры</h4>
          <div className="team__partners-grid">
            {partners.map((partner) => (
              <div key={partner.name} className="team__partner">
                <span className="team__partner-logo">{partner.logo}</span>
                <span className="team__partner-name">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
