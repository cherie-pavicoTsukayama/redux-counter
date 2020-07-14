import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, loginLogout, userNum} from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  const userIncrementNumber = useSelector(state => state.userNum)

  function displayLogMessage() {
    return(
      isLogged ? <h3>Would you like to logout?</h3>
      : <h3>You must be logged in.</h3>
    )
  }

  function displayLoginOrLogOut() {
    return(
      isLogged ? <button onClick={() => dispatch(loginLogout())}>Logout</button>
        : <button onClick={() => dispatch(loginLogout())}>LogIn</button>
    )
  }

  function handleChange(event) {
    console.log(event.target.value)
    dispatch(userNum(parseInt(event.target.value)))
  }

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(userIncrementNumber))}>
        +
      </button>
      <button onClick={() => dispatch(decrement(userIncrementNumber))}>
        -
      </button>
      <div>
        <input type="text" placeholder="Increment number" onChange={handleChange}>

        </input>
      </div>
      {displayLogMessage()}
      <div>
        {displayLoginOrLogOut()}
      </div>
    </div>


  );
}

export default App;
