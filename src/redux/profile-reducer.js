import { getProfileAPI, setStatusAPI, addPostsAPI, checkStatusOwnerAPI } from "../api";
import { unAuthThunkCreator } from "./auth-reducer";

const ADD_POST = 'ADD_POST';
const CHANGE_LETTERS = 'CHANGE_LETTERS';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const CHECK_STATUS_OWNER = 'CHECK_STATUS_OWNER';
const BLOCK_STATUS_OWNER = 'BLOCK_STATUS_OWNER';

let initialState = {
  profile: null,
  postsItems: [
  ],
  newPostText: '',
  allowsEditStatus: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postsItems: [...action.posts].reverse(),
        newPostText: ''
      }
    }
    case CHANGE_LETTERS: {
      let copyState = {
        ...state,
        newPostText: action.text
      };
      return copyState;
    }
    case SET_PROFILE: {
      return {
        ...state,
        profile: action.profile,
        postsItems: [...action.profile.posts].reverse(),
      }
    }
    case SET_STATUS: {
      if (action.resaultCode) {
        return {
          ...state,
          profile: { ...state.profile, status: action.text },
        }
      }
      break;
    }
    case CHECK_STATUS_OWNER: {
      return {
        ...state,
        allowsEditStatus: action.allowsEdit,
      }
    }
    case BLOCK_STATUS_OWNER: {
      return {
        ...state,
        allowsEditStatus: false,
      }
    }
    default: {
      return state;
    }
  }
}

export default profileReducer;

export const setProfileActionCreator = (profile) => {
  return {
    type: SET_PROFILE,
    profile,
  }
}

export const addPostActionCreator = (posts) => {
  return {
    type: ADD_POST,
    posts,
  }
}

export const changeLettersActionCreator = (text) => {
  return {
    type: CHANGE_LETTERS,
    text: text,
  }
}

export const checkStatusOwnerActionCreator = (resaultCode) => {
  return {
    type: CHECK_STATUS_OWNER,
    allowsEdit: resaultCode,
  }
}
export const blockStatusOwnerActionCreator = () => {
  return {
    type: BLOCK_STATUS_OWNER,
    allowsEdit: false,
  }
}

export const setStatusActionCreator = (resaultCode, text) => {
  return {
    type: SET_STATUS,
    text: text,
    resaultCode,
  }
}

export const getProfileThunkCreator = (id) => async (dispatch) => {
  try {
    const data = await getProfileAPI(id);
    dispatch(setProfileActionCreator(data));
  }
  catch (error) {

    dispatch(unAuthThunkCreator());
  }
}

export const setStatusThunkCreator = (id, text) => async (dispatch) => {
  const resaultCode = await setStatusAPI(id, text);
  dispatch(setStatusActionCreator(resaultCode, text));
  dispatch(blockStatusOwnerActionCreator());
}

export const checkStatusOwnerThunkCreator = (id) => async (dispatch) => {
  const resaultCode = await checkStatusOwnerAPI(id);
  dispatch(checkStatusOwnerActionCreator(resaultCode));
}

export const addPostsThunkCreator = (text, id) => async (dispatch) => {
  const data = await addPostsAPI(text, id)
  dispatch(addPostActionCreator(data));
}