import './App.css';
import Banner from './components/layout/Banner';

function App() {
  return (
    <div className='app-wrapper'>
      <header>
        <Banner />
      </header>
      <div className='layout-wrapper'>
        <nav className='sidebar'>
          <h2>Menu</h2>
          <ul>
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
          </ul>
          {/* Contenu de la barre de navigation */}
        </nav>
        <main className='content'>
          {/* Contenu principal */}
        </main>
      </div>
      <footer>
        {/* Contenu du footer */}
      </footer>
    </div>
  );
}

export default App;
