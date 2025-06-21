import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import BeneficiaryList from './pages/payment';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BeneficiaryList />} />
      

      </Routes>
    </Router>
  );
}

export default App;
