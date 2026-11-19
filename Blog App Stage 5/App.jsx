import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
 
  return (
    <BrowserRouter>
    <Navbar/>
     <div className="content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/blogs/:id" element={<BlogDetails />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
     </div>
    </BrowserRouter>
  )
}

export default App;
