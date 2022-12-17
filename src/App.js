import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Villes from './components/villes';
import Maison from './components/maison';
import Navigation from './components/navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Maison />} />
        <Route path="/villes" element={<Villes />} />
      </Routes>
    </Router>
  );
}

export default App;
