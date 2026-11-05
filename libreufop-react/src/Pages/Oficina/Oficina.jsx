import { useEffect } from 'react';
import Footer from '../../Components/Footer/Footer';
import Navigation from '../../Components/Navigation/Navigation';
import './Oficina.css';

const documents = [
  {
    type: 'Conteúdo da Aula',
    title: 'Slides',
    description: 'Apresentações de slides utilizados em sala.',
  },
  {
    type: 'Exercícios',
    title: 'Listas de Exercícios',
    description: 'Listas de exercícios colocando a mão na massa e reforçando o aprendizado.',
  },
];

function Oficina() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((element) => element.classList.add('visible'));
  }, []);

  return (
    <div className="app-shell">
      <Navigation homeLinks />
      <main>
        <section id="oficina-documentos">
          <div className="documentos-header">
            <div className="section-label">Oficina LPIC</div>
            <h1 className="section-title">Materiais para <em>Download</em></h1>
            <p className="documentos-intro">
              Acesse os arquivos disponibilizados pelo LibreUFOP para acompanhar as atividades da
              Oficina LPIC e consultar os conteúdos do projeto.
            </p>
          </div>
          <div className="documentos-area">
            <div className="documentos-area-header">
              <div className="section-label">LPI 101</div>
              <h2 className="documentos-area-title">Oficina 101</h2>
            </div>
            <div className="documentos-grid">
              {documents.map((document) => (
                <article className="documento-card reveal" key={document.title}>
                  <div>
                    <div className="documento-tipo">{document.type}</div>
                    <h2 className="documento-title">{document.title}</h2>
                    <p className="documento-desc">{document.description}</p>
                  </div>
                  <span className="canal-link canal-btn documento-download" aria-disabled="true">
                    Em breve
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer homeLinks />
    </div>
  );
}

export default Oficina;
