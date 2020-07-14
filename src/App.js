import React from 'react';
import {useSelector} from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  function displayLogMessage() {
    return(
      isLogged ? <h3>Here's is your info</h3>
      : <h3>You must be logged in.</h3>
    )
  }

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button>
        +
      </button>
      <button>
        -
      </button>

      {displayLogMessage()}
    </div>


  );
}

export default App;
