import './App.css';
import AboutMe from './views/aboutMe/AboutMe';
import ContactMe from './views/contactMe/ContactMe';
import Home from './views/home/Home';
import Portfolio from './views/portfolio/Portfolio';
import Technology from './views/technologies/Technology';



function App() {
  return (
    <div className="App">
        <Home/>
        <AboutMe/>
        <Technology/>
        <Portfolio/>
        <ContactMe/>
    </div>
  );
}

export default App;
