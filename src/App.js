import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, loginLogout, userNum} from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  const userIncrementNumber = useSelector(state => state.userNum);
  const isDisableIncrementButton = useSelector(state => state.isLogged.counterButtonsDisabled);

  function displayLogMessage() {
    return(
      isLogged.isLogged ?
      <h5 className="col-12 text-center mt-4">You are logged in.<br/> Would you like to logout?</h5>
      : <h5 className="col-12 text-center mt-4">You must be logged in to use the coutner.</h5>
    )
  }

  function displayLoginOrLogOut() {
    return(
      isLogged.isLogged ?
        <button
          onClick={() => dispatch(loginLogout())}
          className="btn btn-primary font-weight-bold">
           Logout
        </button>
        : <button
            onClick={() => dispatch(loginLogout())}
            className="btn btn-primary font-weight-bold">
              LogIn
          </button>
    )
  }

  function handleChange(event) {
    console.log(event.target.value)
    dispatch(userNum(parseInt(event.target.value)))
  }

  return (
    <div className="d-flex flex-wrap justify-content-center container mt-5">
      <h1 className="col-12 text-center">Counter {counter}</h1>
      <div className="col-12 text-center">
        <input
          type="text"
          placeholder="Increment number"
          onChange={handleChange}
          className="text-center">
        </input>
      </div>
      <div className="col-12 text-center mt-3">
        <button
          onClick={() => dispatch(increment(userIncrementNumber))}
          className={`btn ${isLogged.buttonType} font-weight-bold px-4 py-0 mx-3`}
          disabled={isDisableIncrementButton}>
          +
      </button>
        <button
          onClick={() => dispatch(decrement(userIncrementNumber))}
          className={`btn ${isLogged.buttonType} font-weight-bold px-4 py-0 mx-3`}
          disabled={isDisableIncrementButton}>
          -
      </button>
      </div>
      {displayLogMessage()}
      <div>
        {displayLoginOrLogOut()}
      </div>
    </div>


  );
}

export default App;
