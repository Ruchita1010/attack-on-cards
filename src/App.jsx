import { useState } from 'react';
import './App.css';
import StartScreen from './components/StartScreen';

const App = () => {
  const [showStartScreen, setShowStartScreen] = useState(true);

  return (
    <div className="App">
      {showStartScreen ? (
        <StartScreen setShowStartScreen={setShowStartScreen} />
      ) : (
        <div>GameScreen</div>
      )}
    </div>
  );
};

export default App;
