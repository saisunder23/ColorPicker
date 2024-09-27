import { useState } from 'react';

// Write your Color component here
const Color = ({ color, setSelectedColor }) => {
  return (
    <div 
      className={color} 
      onClick={() => setSelectedColor(color)} // Add onClick handler to set selected color
    >
      {color}
    </div>
  );
};

const App = () => {
  // Invoke useState to manage selectedColor
  const [selectedColor, setSelectedColor] = useState("red");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        {/* Display the selected color from state */}
        <div className={selectedColor}>{selectedColor}</div>
      </div>

      {/* Pass setSelectedColor down to each Color component */}
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;
