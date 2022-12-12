/* eslint-disable import/no-cycle */
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import City from './components/city';
import Navigation from './components/navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city" element={<City />} />
      </Routes>
    </Router>
  );
}

export default App;
