
import { getProfileAPI, setStatusAPI } from "../api";

let initialState = {
  profile: null,
  postsItems: [
    { id: 1, name: "Ilya", post: "Мой первый пост!!!", like: 96 },
    { id: 2, name: "Polina", post: "Это пост от Полины эй!", like: 28 },
    { id: 3, name: "Vanya", post: "третий пост", like: 49 },
    { id: 4, name: "Roma", post: "АЙТИПУТЬ САМУРАЯ", like: 4 },
    { id: 5, name: "Ecaterina", post: "Привет как дела?", like: 2 },
    { id: 6, name: "Georgii", post: "assigned a value but", like: 1 },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-POST': {
      let newPost = {
        id: state.postsItems.length + 1,
        name: 'Ilya',
        post: state.newPostText,
        like: 0,
      }
      let copyState = {
        ...state,
        postsItems: [...(state.postsItems)],
      };
      copyState.postsItems.push(newPost);
      copyState.newPostText = '';
      return copyState;
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

export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST',
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
    })
}

export const setStatusThunkCreator = (id, text) => (dispatch) => {
  setStatusAPI(id, text)
    .then((resaultCode) => {
      dispatch(setStatusActionCreator(resaultCode, text));
    })
}



export const setStatusActionCreator = (resaultCode, text) => {
  return {
    type: 'SET_STATUS',
    text: text,
    resaultCode,
  }
}
