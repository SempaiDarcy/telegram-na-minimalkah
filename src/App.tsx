import React from 'react';
import Display from "./components/Display";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.container}>
          <Display title ={'Что-то связанное с лимитами'}/>
    </div>
  );
}

export default App;
