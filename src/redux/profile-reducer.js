
import { getProfileAPI, setStatusAPI, addPostsAPI, checkStatusOwnerAPI } from "../api";
import { unAuthThunkCreator } from "./auth-reducer";

let initialState = {
  profile: null,
  postsItems: [
  ],
  newPostText: '',
  allowsEditStatus: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-POST': {
      return {
        ...state,
        postsItems: [...action.posts].reverse(),
        newPostText:''
      }
    }
    case 'CHANGE-LETTERS': {
      let copyState = {
        ...state,
        newPostText: action.text
      };
      return copyState;
    }
    case 'SET_PROFILE': {
      return {
        ...state,
        profile: action.profile,
        postsItems: [...action.profile.posts].reverse(),
      }
    }
    case 'SET_STATUS': {
      if (action.resaultCode) {
        return {
          ...state,
          profile: { ...state.profile, status: action.text },
        }
      }
    }
    case 'CHECK_STATUS_OWNER': {
      return {
        ...state,
        allowsEditStatus: action.allowsEdit,
      }
    }
    case 'BLOCK_STATUS_OWNER': {
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
    type: 'SET_PROFILE',
    profile,
  }
}

export const addPostActionCreator = (posts) => {
  return {
    type: 'ADD-POST',
    posts,
  }
}

export const changeLettersActionCreator = (text) => {
  return {
    type: 'CHANGE-LETTERS',
    text: text,
  }
}

export const getProfileThunkCreator = (id) => (dispatch) => {
  getProfileAPI(id)
    .then((data) => {
      dispatch(setProfileActionCreator(data));
    }, (error) => dispatch(unAuthThunkCreator()));
}

export const setStatusThunkCreator = (id, text) => (dispatch) => {
  setStatusAPI(id, text)
    .then((resaultCode) => {
      dispatch(setStatusActionCreator(resaultCode, text));
    })
}

export const checkStatusOwnerThunkCreator = (id) => (dispatch) => {
  checkStatusOwnerAPI(id)
    .then((resaultCode) => {
      dispatch(checkStatusOwnerActionCreator(resaultCode));
    })
}

export const checkStatusOwnerActionCreator = (resaultCode) => {
  return {
    type: 'CHECK_STATUS_OWNER',
    allowsEdit: resaultCode,
  }
}
export const blockStatusOwnerActionCreator = () => {
  return {
    type: 'BLOCK_STATUS_OWNER',
    allowsEdit: false,
  }
}

export const setStatusActionCreator = (resaultCode, text) => {
  return {
    type: 'SET_STATUS',
    text: text,
    resaultCode,
  }
}


export const addPostsThunkCreator = (text, id) => (dispatch) => {
  addPostsAPI(text, id)
    .then((data) => {
      dispatch(addPostActionCreator(data));
    });
}

