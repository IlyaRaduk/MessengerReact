let initialState ={
  dialogsItems: [
      {name: 'Ilya', id:1},
      {name: 'Polina', id:2},
      {name: 'Vanya', id:3},
      {name: 'Roma', id:4},
      {name: 'Ecaterina', id:5},
      {name: 'Georgii', id:6},
  ],
  messages:[
      'Привет ',
      'Привет как дела?',
      'Всё отлично у тебя как!?',
      'хорошо, пока',
  ],
  newMessageText:'',
}

const dialogsReducer =(state=initialState,action)=>{
    if (action.type==='CHANGE-LETTERS-MESSAGE'){
        state.newMessageText = action.text;
    }
    else if (action.type==='ADD-MESSAGE'){
        state.messages.push(state.newMessageText);
        state.newMessageText='';
    }
    return state;
}

export default dialogsReducer;

export const addMessageActionCreator = ()=> {
    return {
      type:'ADD-MESSAGE',
    }
  }
  
export const changeLettersMessageActionCreator = (text)=> {
    return {
      type:'CHANGE-LETTERS-MESSAGE',
      text:text,
    }
}