

import Home from './pages/home';
import  {Routes,Route} from "react-router-dom"
import Favorites from './components/Favorites';
import NavBar from './components/Navbar';

function App() {
  return (
    <div>
     <NavBar/>
<main className="main-content">
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/' element={<Favorites/>}/>
  </Routes>
    </main>
  </div>
   
  );
}
export default App;
