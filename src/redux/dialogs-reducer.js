const CHANGE_LETTERS_MESSAGE = 'dialogs/CHANGE_LETTERS_MESSAGE';
const ADD_MESSAGE = 'dialogs/ADD_MESSAGE';

let initialState = {
  dialogsItems: [
    { name: 'Ilya', id: 1 },
    { name: 'Polina', id: 2 },
    { name: 'Vanya', id: 3 },
    { name: 'Roma', id: 4 },
    { name: 'Ecaterina', id: 5 },
    { name: 'Georgii', id: 6 },
  ],
  messages: [
    'Привет ',
    'Привет как дела?',
    'Всё отлично у тебя как!?',
    'хорошо, пока',
  ],
  newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LETTERS_MESSAGE:
      return {
        ...state,
        newMessageText: action.text,
      }
    case ADD_MESSAGE:
      const messages = [...state.messages];
      messages.push(state.newMessageText);
      return {
        ...state,
        messages: messages,
        newMessageText: '',
      }
    default:
      return state;
  }
}

export default dialogsReducer;

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  }
}

export const changeLettersMessageActionCreator = (text) => {
  return {
    type: CHANGE_LETTERS_MESSAGE,
    text: text,
  }
}