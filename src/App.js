

import Home from './pages/home';
import  {Routes,Route} from "react-router-dom"
import Favorites from './pages/Favorites';
import NavBar from './components/Navbar';
import "./css/App.css"
function App() {
  return (
    <div>
     <NavBar/>
<main className="main-content">
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/favorites' element={<Favorites/>}/>
  </Routes>
    </main>
  </div>
   
  );
}
export default App;
