import logo from './logo.svg';
import './App.css';
import Board from './Board';
import Home from './Home';
import "aos/dist/aos.css";
import AOS from "aos";
import {useEffect} from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="tokyo_tm_all_wrap">
      <Home />
      <Board />
    </div>
  );
}

export default App;
