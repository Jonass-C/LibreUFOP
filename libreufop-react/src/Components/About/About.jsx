import './About.css';

const tags = ['GNU/Linux', 'Software Livre', 'Redes Federadas', 'Soberania Digital', 'DevOps', 'Comunidade', 'Debian'];

function About() {
  return (
    <section id="sobre" className="section about-section">
      <div className="about-grid">
        <div className="reveal">
          <div className="section-label">Sobre o projeto</div>
          <h2>Conhecimento livre <em>para todos</em></h2>
          <p>O <strong>LibreUFOP</strong> é um projeto de extensão da Universidade Federal de Ouro Preto voltado à promoção do software livre, da inclusão digital e da formação tecnológica crítica e colaborativa.</p>
          <p>Mais do que ensinar ferramentas, o LibreUFOP constrói espaços de aprendizagem coletiva, troca de experiências e fortalecimento da autonomia tecnológica.</p>
          <div className="stats-grid">
            <div><strong>ICEA</strong><span>Campus João Monlevade</span></div>
            <div><strong>UFOP</strong><span>Universidade Federal de Ouro Preto</span></div>
            <div><strong>100%</strong><span>Tecnologias abertas</span></div>
            <div><strong>∞</strong><span>Conhecimento compartilhado</span></div>
          </div>
        </div>
        <div className="about-card reveal reveal-delay">
          <div className="about-card-title">Libre<span>UFOP</span></div>
          <div className="about-card-subtitle">Extensão universitária · UFOP</div>
          <div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <blockquote>“A liberdade de usar, estudar, modificar e distribuir software é um bem coletivo.”</blockquote>
        </div>
      </div>
    </section>
  );
}

export default About;
