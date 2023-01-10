
import './App.css';
import Navbar from './components/Navbar/navbar';
import { useState } from 'react';
import Sidebar from './components/Sidebar/sidebar';
import Hidebar from './components/Sidebar/hidebar';
import Display from './components/Display/display';

function App() {


  const [val, setval] = useState("true");

  const increment = () => {

    setval(!val);
  }

  return (
    <>
    
     <Navbar increment={increment}/>
     <div className="container">
     {val ? <Sidebar/> : <Hidebar/>}
     <Display/>
    </div>
    </>
  );
}

export default App;
