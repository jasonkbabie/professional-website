import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { GetInTouch } from './components/GetInTouch';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <NavBar />
       <Banner />
       <Skills/>
       <Projects/>
       <GetInTouch/>
       <Footer/>
    </div>
  );
}

export default App;