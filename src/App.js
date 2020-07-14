import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  function displayLogMessage() {
    return(
      isLogged ? <h3>Here's is your info</h3>
      : <h3>You must be logged in.</h3>
    )
  }

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>
        +
      </button>
      <button onClick={() => dispatch(decrement())}>
        -
      </button>

      {displayLogMessage()}
    </div>


  );
}

export default App;
