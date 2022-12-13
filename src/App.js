/* eslint-disable import/no-cycle */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import City from './components/city';
import Navigation from './components/navigation';
import Polls from './components/polution';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city" element={<City />} />
        <Route path="/pollutants" element={<Polls />} />
      </Routes>
    </Router>
  );
}

export default App;
