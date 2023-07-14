import './App.css';

import GroupExample from './components/Detail';
import BasicExample from './components/User';
import TabsExample from './components/Navbar';

import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <div>
      <br/>  
      <br/>  
      <h2 className='titulo'>Dashboards DDecoHouse</h2>
      </div>
        <br/>
        <div>
        <GroupExample />
        <BasicExample />
        </div>
        <br/>
    </div>
  );
}

export default App;
