import { useEffect, useState } from 'react';
import Home from './Pages/Home/Home';
import Oficina from './Pages/Oficina/Oficina';
import './App.css';

function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return route === '#oficina' ? <Oficina /> : <Home />;
}

export default App;
