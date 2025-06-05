
import './App.css';
import Home from './pages/home';
import  {Routes,Route} from "react-router-dom"
import Favorites from './components/Favorites';
function App() {
  return (
   <main className="main-content">
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/' element={<Favorites/>}/>
   </Routes>
   
   </main>
  );
}
export default App;
