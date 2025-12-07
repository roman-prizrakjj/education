import './Team.css';

const partners = [
  { 
    name: 'Сколково', 
    logo: <img src="/skolkovo-logo.svg" alt="Сколково" />
  },
  { 
    name: 'Zerocoder', 
    logo: <img src="/zerocoder-logo.png" alt="Zerocoder" />
  },
  { 
    name: 'Hop Agency', 
    logo: <img src="/hopagency-logo.svg" alt="Hop Agency" />
  },
  { 
    name: 'EMD Labs', 
    logo: <img src="/emd-labs-logo.png" alt="EMD Labs" />
  },
];

const teamMembers = [
  {
    initials: 'РШ',
    name: 'Роман Шляхта',
    role: 'Основатель EMD Education',
    bio: 'Визионер в AI, основатель крупного сообщества по нейроассист-кодингу. Более 10 лет в IT и консалтинге. Специализация — внедрение AI-решений в бизнес-процессы.',
    photo: '/shlyahta.jpg',
  },
  {
    initials: 'АФ',
    name: 'Александр Фомин',
    role: 'Основатель EMD Labs',
    bio: 'IT-предприниматель и разработчик. Эксперт в веб-разработке, автоматизации и low-code решениях. Энтузиаст AI и no-code интеграций.',
    photo: '/fomin.webp',
  },
  {
    initials: 'ЕП',
    name: 'Евгений Полевов',
    role: 'Fullstack Developer & DevOps',
    bio: 'Более 15 лет в IT: fullstack JS-разработка, DevOps, запуск стартапов. Практик с глубокой экспертизой в построении масштабируемых решений.',
    photo: '/polevov.jpg',
  },
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

        <div className="team__grid">
          {teamMembers.map((member) => (
            <div key={member.name} className="team__member">
              <div className="team__member-avatar">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} />
                ) : (
                  <span>{member.initials}</span>
                )}
              </div>
              <div className="team__member-info">
                <h3 className="team__member-name">{member.name}</h3>
                <span className="team__member-role">{member.role}</span>
                <p className="team__member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="team__partners">
          <h4 className="team__partners-title">Наши партнеры</h4>
          <div className="team__partners-grid">
            {partners.map((partner) => (
              <div key={partner.name} className="team__partner">
                <div className="team__partner-logo">{partner.logo}</div>
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
