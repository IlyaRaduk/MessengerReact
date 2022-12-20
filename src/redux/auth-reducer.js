import { registrationNewAccount } from "../api";
import { login } from "../api";

const SET_USER_DATA = 'SET_USER_DATA';
const UNAUTH = 'UNAUTH';

let initialState = {
  isAuth: true,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        isAuth: true,
      }
    case UNAUTH:
      return {
        ...state,
        isAuth: false,
      }
    default:
      return state;
  }
}

export default authReducer;

export const unAuthActionCreator = () => {
  return {
    type: UNAUTH,
  }
}

export const setUserDataActionCreator = () => {
  return {
    type: SET_USER_DATA,
  }
}

export const unAuthThunkCreator = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(unAuthActionCreator())
}

export const registrationNewAccountThunkCreator = (user) => async (dispatch) => {
  const resultCode = await registrationNewAccount(user);
  if (resultCode) {
    alert('Пользователь зарегистрирован')
  }
  else {
    alert('Пользователь с таким email уже существует')
  };
}

export const loginThunkCreator = (user) => async (dispatch) => {
  const result = await login(user);
  if (result) {
    dispatch(setUserDataActionCreator(result));
  }
  else {
    alert('Неверный email или пароль');
  };
}






