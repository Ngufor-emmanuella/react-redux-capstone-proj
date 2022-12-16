import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cities from './components/city';
import Home from './components/home';
import Navbar from './components/Navbar';
import Pollution from './components/Pollution';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city" element={<Cities />} />
        <Route path="/pollutiondata" element={<Pollution />} />
      </Routes>
    </Router>
  );
}

export default App;
