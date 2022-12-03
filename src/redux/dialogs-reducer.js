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
  if (action.type === 'CHANGE-LETTERS-MESSAGE') {
    let copyState = {
      ...state,
      newMessageText: action.text,
    }
    return copyState;
  }
  else if (action.type === 'ADD-MESSAGE') {
    let copyState = {
      ...state,
      messages: [...state.messages]
    }
    copyState.messages.push(state.newMessageText);
    copyState.newMessageText = '';
    return copyState;
  }
  else {
    return state;
  }
}

export default dialogsReducer;

export const addMessageActionCreator = () => {
  return {
    type: 'ADD-MESSAGE',
  }
}

export const changeLettersMessageActionCreator = (text) => {
  return {
    type: 'CHANGE-LETTERS-MESSAGE',
    text: text,
  }
}