import './Events.css';

const events = [
  { date: '16 de Agosto · 2025 · João Monlevade', name: 'Debian Day 2025', description: 'Celebração do aniversário do Projeto Debian com Festival de Instalação, Lightning Talks e palestras sobre o ecossistema Debian GNU/Linux.', tags: ['Festival de Instalação', 'Lightning Talks', 'Debian GNU/Linux com C', 'Projeto Debian'], link: 'https://wiki.debian.org/DebianDay/2025/Brazil/JoaoMonlevade', status: 'Realizado' },
  { date: '25 de Abril · 2026 · João Monlevade', name: 'FLISOL 2026', description: 'Festival Latino-americano de Instalação de Software Livre, com palestras, installfest e atividades abertas à comunidade.', tags: ['Redes Federadas', 'Soberania Digital', 'GNU/Linux', 'Installfest', 'Software Livre Criativo'], link: 'https://flisol.info/FLISOL2026/Brasil/JoaoMonlevade', status: 'Realizado' },
  { date: '04 de setembro · 2026 · João Monlevade', name: 'Debian Day 2026', description: 'Celebração anual do nascimento do Projeto Debian, com instalação, tutoriais e discussões sobre GNU/Linux.', tags: ['Debian GNU/Linux', 'Empacotamento', 'Comunidade'], status: 'Realizado' },
  { date: 'Em breve · 2027', name: 'DevOps Day', description: 'Evento com foco em cultura DevOps, ferramentas abertas de CI/CD, containers, automação e infraestrutura como código.', tags: ['CI/CD', 'Containers', 'Linux', 'Automação'], status: 'Em breve' },
];

function EventCard({ event }) {
  const card = <article className={`event-card ${event.name === 'Debian Day 2026' ? 'cancelled' : ''} ${event.status === 'Em breve' ? 'future' : ''}`}><div className="event-date">{event.date}</div><h3>{event.name}</h3><p>{event.description}</p><div className="event-tags">{event.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>;
  return event.link ? <a className="event-link" href={event.link} target="_blank" rel="noreferrer">{card}</a> : card;
}

function Events() {
  return (
    <section id="eventos" className="section events-section">
      <div className="reveal section-heading"><div className="section-label">Eventos</div><h2>Nossa <em>linha do tempo</em></h2></div>
      <div className="events-grid">
        <div><div className="column-title">● Realizados</div>{events.filter((event) => event.status === 'Realizado').map((event) => <EventCard key={event.name} event={event} />)}</div>
        <div><div className="column-title">◌ Em breve</div>{events.filter((event) => event.status === 'Em breve').map((event) => <EventCard key={event.name} event={event} />)}</div>
      </div>
    </section>
  );
}

export default Events;
