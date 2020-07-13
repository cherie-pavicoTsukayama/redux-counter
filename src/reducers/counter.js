const counterReducer = (state = 0, action) {
  swtich(action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state -1;
    default
      return;
  }
}

export default counterReducer;
