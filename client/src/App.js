import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
