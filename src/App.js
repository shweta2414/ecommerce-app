import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {HomePage} from "./pages/Homepage"
import { Cart } from './pages/Cart';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </Router>
    // <div className="App">
    //   <HomePage />
    // </div>
  );
}

export default App;
