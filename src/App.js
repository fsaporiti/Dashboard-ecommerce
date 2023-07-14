import './App.css';

import Productos from './components/Productos';
import BasicExample from './components/User';
import TabsExample from './components/Navbar';
import Vendidos from './components/Vendidos';

import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1 className='titulo'>Dashboard DDecoHouse</h1> 
        <br/>
          <div>
            <TabsExample />
          </div>
        <br/>
          <Routes>
            <Route path='/' element={<Productos />} />
            <Route exact path='/user' element={<BasicExample />} />
            <Route exact path='/vendidos' element={<Vendidos />} />
          </Routes>
    </div>
  );
}

export default App;
