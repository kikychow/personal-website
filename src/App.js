import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'
import ProjectsPage from './components/ProjectsPage'
import AboutPage from './components/AboutPage';

function App() {
  return (
    <div className="App">
        <Menu />
        <AboutPage />
        <ProjectsPage />
    </div>
  );
}

export default App;
