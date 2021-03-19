import './App.css';
import {useContext} from 'react';
import ReadString from './ReadString.js';
import SetString from './SetString.js';
import {DrizzleContext} from '@drizzle/react-plugin';

function App() {

  const drizzleData = useContext(DrizzleContext.Context);


    if(!drizzleData.initialized) return "Loading Drizzle...";
    return (
      <div className="App">
      
      Drizzle is Ready
      
      <ReadString />
      <SetString />
      
      </div>
      
    );
}

export default App;
