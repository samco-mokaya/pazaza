
import './App.css';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <>
  <MovieCard movie={{title : "somesonsam",release_date:"2025"}}/>
  <MovieCard movie={{title: "jojo bizzare adventures",release_date:"2023 "}}/>
    </>
  );
}
export default App;
