import './App.css';
import Navbar from './components/Navbar';
import Acceuil from './pages/Acceuil';
import Footer from './components/Footer';
import Realisations from './pages/Realisations';
import Agence from './pages/Agence'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
    <div>
     <Navbar/>
     <Routes>
     <Route exact path='/' element={<Acceuil/>} />
     <Route exact path='/realisations' element={<Realisations/>} />
     <Route exact path='/agence' element={<Agence/>} />
     </Routes>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
