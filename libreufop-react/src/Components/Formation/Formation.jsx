import './Formation.css';

const topics = ['GNU/Linux e distribuições livres', 'Instalação, configuração e uso de sistemas GNU/Linux', 'Software e hardware livres', 'DevOps, computação em nuvem, sistemas embarcados e internet das coisas', 'Redes, servidores e infraestrutura aberta', 'Fediverso', 'Colaboração e comunidades de tecnologias livres', 'Inclusão, soberania digital e ética na computação'];

function Formation() {
  return (
    <section id="formacao" className="section formation-section">
      <div className="reveal section-heading"><div className="section-label">Temas de estudo</div><h2>O que <em>estudamos</em></h2><p>No LibreUFOP, estudamos tecnologias livres utilizadas tanto no meio acadêmico quanto em ambientes profissionais modernos.</p></div>
      <div className="topic-grid">{topics.map((topic, index) => <div className="topic-card reveal" key={topic}><strong>{String(index + 1).padStart(2, '0')}</strong><span>{topic}</span></div>)}</div>
      <div className="reveal formation-note"><p>As atividades são abertas a diferentes níveis de experiência, incentivando aprendizagem prática, colaboração e construção coletiva do conhecimento.</p></div>
    </section>
  );
}

export default Formation;
