import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {

  return (
    <div className='relative'>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App
