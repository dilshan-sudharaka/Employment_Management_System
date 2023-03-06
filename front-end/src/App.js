import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './components/Navbar';
import EmployeeList from './pages/EmployeeList';
import AddEmployee from './pages/AddEmployee';
import UpdateEmployee from "./pages/UpdateEmployee";

function App() {
  return (
    
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<EmployeeList />} />
        <Route path='/addemployee' element={<AddEmployee />} />
        <Route path='/updateemployee/:id' element={<UpdateEmployee />} />
        </Routes>
      </Router>
  );
}

export default App;
