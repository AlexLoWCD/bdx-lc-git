import React from 'react';
import Form from './Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <Form onSubmit={(values) => {
          console.log("values", values);
        }
      } />
    </div>
  );
}

export default App;
