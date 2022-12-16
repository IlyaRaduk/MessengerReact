import { registrationNewAccount } from "../api";
import { login } from "../api";

let initialState = {
  isAuth: true,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        isAuth: true,
      }
    case 'AUTH':
      return {
        ...state,
        isAuth: true,
      }
    case 'UNAUTH':
      return {
        ...state,
        isAuth: false,
      }
    default:
      return state;
  }
}

export default authReducer;

export const authActionCreator = () => {
  return {
    type: 'AUTH',
  }
}
export const unAuthActionCreator = () => {
  return {
    type: 'UNAUTH',
  }
}

export const registrationNewAccountThunkCreator = (user) => (dispatch) => {
  registrationNewAccount(user)
    .then((resaultCode) => {
      if (resaultCode) {
        alert('Пользователь зарегистрирован')
      }
      else {
        alert('Пользователь с таким email уже существует')
      };
    })
}

export const loginThunkCreator = (user) => (dispatch) => {
  login(user)
    .then((result) => {
      if (result) {
        dispatch(setUserDataActionCreator(result))
      }
      else {
        alert('Либо нету такого эмейл либо неправильный пароль');
      };
    })
}

export const setUserDataActionCreator = () => {
  return {
    type: 'SET_USER_DATA',
  }
}

export const unAuthThunkCreator = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(unAuthActionCreator())
}






