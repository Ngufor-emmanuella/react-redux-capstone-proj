import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Villes from './components/city';
import Maison from './components/home';
import Navigation from './components/Navbar';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Maison />} />
        <Route path="/city" element={<Villes />} />
      </Routes>
    </Router>
  );
}

export default App;
