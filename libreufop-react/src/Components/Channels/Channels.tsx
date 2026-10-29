import './Channels.css';

function Channel({ title, icon, description, link, action }) {
  return (
    <article className="channel-card reveal">
      <div className="channel-icon" aria-hidden="true">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {link ? <a href={link} className="card-link">{action} <span aria-hidden="true">→</span></a> : <span className="coming-soon">Em breve</span>}
    </article>
  );
}

function Channels() {
  return (
    <section id="canais" className="section channels-section">
      <div className="reveal section-heading"><div className="section-label">Canais de conteúdo</div><h2>Acompanhe <em>onde preferir</em></h2></div>
      <div className="channel-grid">
        <Channel title="Podcast" icon="🎙️" description="Episódios com discussões aprofundadas, entrevistas e análises sobre software livre, cultura hacker e soberania digital." />
        <Channel title="Newsletter" icon="✉️" description="Receba novidades, tutoriais, ferramentas livres e informações sobre os próximos eventos." />
        <Channel title="Feed RSS" icon="📡" description="Atualizações em tempo real, de forma descentralizada e sem depender de algoritmos." link={`${process.env.PUBLIC_URL}/feed.xml`} action="Abrir Feed" />
        <Channel title="Base de Conhecimento Linux" icon="🐧" description="Tutoriais, guias, documentação e dicas práticas para iniciantes e usuários avançados." link={`${process.env.PUBLIC_URL}/../oficina.html`} action="Oficina LPIC" />
      </div>
    </section>
  );
}

export default Channels;
