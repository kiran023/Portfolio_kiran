import './App.css';
import { Navbar } from './myComponents/Navbar';
import {Footer } from './myComponents/Footer';
import { Landingpage } from './myComponents/Landingpage';

function App() {
  return (
    <div className='app'>
    <Navbar></Navbar>
    <Landingpage></Landingpage>
    <Footer></Footer>
    </div>
  );
}

export default App;
