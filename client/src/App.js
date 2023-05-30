import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
