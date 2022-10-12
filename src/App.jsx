import './App.css'
import Mission from './components/Mission'
import "bootstrap/dist/css/bootstrap.css";
import ThemeBoard from './components/ThemeBoard'
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";


function App() {
  const [color, setColor] = useState('white');
  return (
    <div className="App">
      {/* <Mission /> */}
      <ThemeContext.Provider value={{
        color,
        setColor
      }}>
        <ThemeBoard />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
