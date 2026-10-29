import { useEffect } from 'react';
import About from '../../Components/About/About';
import Channels from '../../Components/Channels/Channels';
import Events from '../../Components/Events/Events';
import Footer from '../../Components/Footer/Footer';
import Formation from '../../Components/Formation/Formation';
import Hero from '../../Components/Hero/Hero';
import Navigation from '../../Components/Navigation/Navigation';

function Home() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Channels />
        <Events />
        <Formation />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
