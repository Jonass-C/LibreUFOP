import './Footer.css';

function Footer() {
  return (
    <footer id="contato" className="site-footer">
      <div className="footer-top">
        <div><div className="footer-brand">Libre<span>UFOP</span></div><div className="footer-brand-inst">ICEA · Universidade Federal de Ouro Preto</div><p>Projeto de extensão dedicado à promoção do software livre, soberania digital e formação tecnológica no campus de João Monlevade.</p></div>
        <div><h3>Navegação</h3><a href="#sobre">Sobre o projeto</a><a href="#canais">Canais de conteúdo</a><a href="#eventos">Eventos</a><a href="#formacao">Formação</a></div>
        <div><h3>Contato</h3><a href="mailto:libreufop@ufop.edu.br">libreufop@ufop.edu.br</a><a href="https://ufop.br" target="_blank" rel="noreferrer">ufop.br</a><a href="https://github.com/lecompufop/LibreUFOP" target="_blank" rel="noreferrer">GitHub</a><a href={`${import.meta.env.BASE_URL}feed.xml`}>Feed RSS</a></div>
      </div>
      <div className="footer-bottom">© 2026 LibreUFOP · Conteúdo licenciado sob <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0</a></div>
    </footer>
  );
}

export default Footer;
