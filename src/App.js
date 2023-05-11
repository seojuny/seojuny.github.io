import Home from './Home.js';
import SideBar from './SideBar.js';
import AboutMe from './AboutMe.js';
import './App.css';

//npm run deploy will update site

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="contentContainer">
        <Home />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
