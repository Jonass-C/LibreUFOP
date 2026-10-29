import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid" />
      <div className="hero-content">
        <div className="eyebrow">ICEA · UFOP · João Monlevade</div>
        <h1>Libre<span>UFOP</span></h1>
        <p className="hero-slogan">Programar liberta!</p>
        <p className="hero-subtitle">Software livre, formação e integração com a comunidade. Promovendo soberania digital e conhecimento aberto na Universidade Federal de Ouro Preto.</p>
        <div className="hero-actions">
          <a href="#sobre" className="button button-primary">Conheça nossas iniciativas <span aria-hidden="true">→</span></a>
          <a href="#eventos" className="button button-secondary">Próximos eventos</a>
        </div>
      </div>
      <div className="hero-mark" aria-hidden="true">
        <div className="hero-ring hero-ring-one" />
        <div className="hero-ring hero-ring-two" />
        <img src={`${import.meta.env.BASE_URL}docs/LibreUFOP_logo.jpeg`} alt="" />
      </div>
    </section>
  );
}

export default Hero;
