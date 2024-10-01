import { useState } from 'react';
import './App.css';

function App() {
  const [amt, setAmt] = useState(5);
  const [position, setPosition] = useState({x:0, y: 0});

  function handleYes() {
    alert("I love you!");
  }
  function handleNo() {
    setAmt(amt+5);
    alert("You need to venmo @SusanZh4ng $"+amt+"!");
  }

  function move(){
    const newX = Math.random() * (window.innerWidth - 230);
    const newY = Math.random() * (window.innerHeight - 75);
    setPosition({ x: newX, y: newY });
  }
  return (
    <div className="App">
      <div className='content'>
        <p className='question'>Will you be my Valentine?</p>

        <div className='buttons'>
          <div className='button-container'>
            <button onClick={handleYes} className='button'>yes</button>
          </div>
          <div className='button-container'>
            <button onClick={handleNo} onMouseOver={move} className='moving-button' style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>no</button>
          </div>
        </div>

        <div className='definition'>
          <p className='def'>val·en·tine</p>
          <p className='def'>/'valən,tīn/</p>
          <i className='def'>noun</i>
          <p className='def'>a person one loves or is attracted to and is sent a card on St. Valentine's Day (February 14); a sweetheart</p>
        </div>
      </div>
    </div>
  );
}

export default App;