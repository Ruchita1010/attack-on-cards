import { useState } from 'react';
import './App.css';
import GameScreen from './components/GameScreen';
import StartScreen from './components/StartScreen';

const App = () => {
  const [showStartScreen, setShowStartScreen] = useState(true);

  return (
    <div className="App">
      {showStartScreen ? (
        <StartScreen setShowStartScreen={setShowStartScreen} />
      ) : (
        <GameScreen />
      )}
    </div>
  );
};

export default App;
