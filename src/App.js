
import Addblogs from './component/addblogs';
import Blogs from './component/blog';
import Homepage from './component/Home';
import NavbarHeader from './component/navbar';
import Edit from "./component/Edit"


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './component/login';
import Showblog from './component/showblog';



function App() {
  return (
    <div>
    
      <BrowserRouter>
      <NavbarHeader />
{/* <Add/> */}
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path="/addblogs" element={<Addblogs />} />
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/showblog/:id" element={<Showblog/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
