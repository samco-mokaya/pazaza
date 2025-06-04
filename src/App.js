import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <Text display="wagwaan"/>
    <Text display="brudda"/>
    <p>Hello</p>
    </>
  );
}
function Text({display}){
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}
export default App;
