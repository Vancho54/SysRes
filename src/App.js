import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Zones from './components/zones';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Zones></Zones>
    </div>
  );
}

export default App;
