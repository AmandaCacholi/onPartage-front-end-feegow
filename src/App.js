import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Header/>
          <Home/>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
