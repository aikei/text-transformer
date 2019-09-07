import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainScreenComponent } from './components/main-screen/MainScreenComponent';

const App: React.FC = () => {

  return (
    <div className="App">
      <MainScreenComponent></MainScreenComponent>
    </div>
  );
}

export default App;
