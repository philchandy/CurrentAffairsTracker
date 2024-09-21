
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './views/Index.js'
import Eventpage from './views/Eventpage';
import Nav from "./components/Nav"
import PageNotFound from './views/PageNotFound';
import AllEvents from './views/AllEvents';

function App() {

  return (
    <div className="App"> 
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='/events' element={<AllEvents />}/>
          <Route path='/eventpage/:id' element={<Eventpage />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App;
