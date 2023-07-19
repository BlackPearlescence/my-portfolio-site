import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/landing/LandingPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
