import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenidos al sitio</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Por qué utilizar React JS?</h3>
        <ul>
          <li>Seguridad</li>
          <li>Performance</li>
          <li>Escalabilidad</li>
        </ul>
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React haciendo click aquí
        </a>
      </header>
    </div>
  );
}

export default App;
