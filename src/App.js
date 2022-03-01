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
     <Route exact path='/madImpact-task1/' element={<Acceuil/>} />
     <Route  path='/realisations' element={<Realisations/>} />
     <Route  path='/agence' element={<Agence/>} />
     </Routes>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
