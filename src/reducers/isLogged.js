const loggedReducer = (state = {
  isLogged: false,
  counterButtonsDisabled: true,
  buttonType: 'btn-secondary disabled'
}, action) => {
  switch(action.type){
    case "SIGN_IN":
      if(!state.isLogged) {
        return {
          isLogged: true,
          counterButtonsDisabled: false,
          buttonType: 'btn-primary'
        }
      } else {
        return {
          isLogged: false,
          counterButtonsDisabled: true,
          buttonType: 'btn-secondary disabled'
        }
      }

    default:
      return state
  }
}

export default loggedReducer;
