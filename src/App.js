import React, { useState } from 'react';
import './App.css';

function App() {
  const [button1Clicked, setButton1Clicked] = useState(false);
  const [button2Clicked, setButton2Clicked] = useState(false);

  const handleButtonClick1 = () => {
    setButton1Clicked(true);
    setButton2Clicked(false);
  };

  const handleButtonClick2 = () => {
    setButton1Clicked(false);
    setButton2Clicked(true);
  };

  return (
    <div className="App">
      <button onClick={handleButtonClick1}>
        Button 1
      </button>
      <button onClick={handleButtonClick2}>
        Button 2
      </button>
      {button1Clicked && <p>Button 1 was clicked!</p>}
      {button2Clicked && <p>Button 2 was clicked!</p>}
    </div>
  );
}

export default App;
