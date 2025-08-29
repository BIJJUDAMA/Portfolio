import React, { useState } from 'react';
import HomePage from './pages/InteractivePage';
import StaticPage from './pages/StaticPage';

function App() {
  // State to manage which mode is active. Starts in 2D (static) mode.
  const [is3dMode, setIs3dMode] = useState(false);

  // Function to toggle between 2D and 3D modes
  const handleSwitchMode = () => {
    setIs3dMode(prevMode => !prevMode);
  };

  // Render the correct page based on the current mode
  return (
    <>
      {is3dMode ? (
        <HomePage onSwitchMode={handleSwitchMode} />
      ) : (
        <StaticPage onSwitchMode={handleSwitchMode} />
      )}
    </>
  );
}

export default App;

