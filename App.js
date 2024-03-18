import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import Search from './components/Search';
import Delete from './components/Delete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewstudent from './components/Viewstudent';

function App() {
  return (
    <div>
  <BrowserRouter>
  
  <Routes>

   <Route path='/' element={<AddStudent/>}/>
   <Route path='/search' element={<Search/>} />
   <Route path='/delete' element={<Delete/>}/>
   <Route path='/viewstudent' element={<Viewstudent/>}/>

  
  </Routes>

  </BrowserRouter>
   
    </div>
  );
}

export default App;
