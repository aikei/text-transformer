import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="trs-input-panel trs-panel"></div>
      <div className="trs-transforms-panel trs-panel"></div>
      <div className="trs-output-panel trs-panel"></div>
    </div>
  );
}

export default App;
