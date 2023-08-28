import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Main from './Components/Main';

function App() {
  return (
    <div className="App h-[100vh] flex">
      <Navbar/>
      <Main/>
    </div>
  );
}

export default App;
