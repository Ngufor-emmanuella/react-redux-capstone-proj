import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cities from './components/city';
import Home from './components/home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city" element={<Cities />} />
      </Routes>
    </Router>
  );
}

export default App;
