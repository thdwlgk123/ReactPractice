import './App.css';
import React from 'react';
import { Route, Routes, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

const App=()=> {
  return (
    <div>
      <ul>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/about'>Introduce</Link></li>
        <li><Link to='/profile/velopert'>Jiha</Link></li>
        <li><Link to='/profile/gildong'>Gildong</Link></li>
      </ul>  
      <hr/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/profile/:username' element={<Profile/>}/>
        </Routes>

    </div>    
  );
}

export default App;
