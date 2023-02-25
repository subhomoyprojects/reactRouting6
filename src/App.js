import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import ObjectPass from './components/ObjectPass';
import Routing1 from './components/Routing1';
import Routing2 from './components/Routing2';
import Routing3 from './components/Routing3';
import User from './components/User';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu/>} />
          <Route path='/routing1' element={<Routing1/>} />
          <Route path='/newcomp/routing2' element={<Routing2/>} />
          <Route path='/routing3/:id' element={<Routing3/>} />
          <Route path='/users' element={<User/>} />
          <Route path='/objectpass' element={<ObjectPass/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
