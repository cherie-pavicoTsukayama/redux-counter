export const increment = (nr) => {
  return {
    type: "INCREMENT",
    payload: nr
  };
}

export const decrement = () => {
  return {
    type: "DECREMENT"
  }
}

export const loginLogout = () => {
  return {
    type: "SIGN_IN"
  }
}

export const userNum = (num) => {
  return {
    type: "USER_NUM",
    payload: num
  }
}
