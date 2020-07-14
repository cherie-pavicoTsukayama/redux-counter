const userNum = (state = 1, action) => {
  switch(action.type) {
    case "USER_NUM":
      return state = action.payload ;
    default:
      return state;
  }
}

export default userNum;
