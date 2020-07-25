import React from 'react';
import StudentInfo from './stdInfo';
import Users from './userInfo';
import './App.css';

function App() {
  return (
    <div>
        <div className="App">
          <StudentInfo stdName="Syed Zafar Abbas Bukhari"
                       classNo="2"
                       stdBatch="3"
                       stdCenter="Islamabad" />
        </div>
        
        <div className="App">
          <Users username="bukhary72pk@yahoo.com" />
        </div>
    </div>
  );
}

export default App;
