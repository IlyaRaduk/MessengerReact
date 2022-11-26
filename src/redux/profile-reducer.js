
let initialState ={
  postsItems:[
      {id:1, name:"Ilya", post:"Мой первый пост!!!",like:96},
      {id:2, name:"Polina", post:"Это пост от Полины эй!",like:28},
      {id:3, name:"Vanya", post:"третий пост",like:49},
      {id:4, name:"Roma", post:"АЙТИПУТЬ САМУРАЯ",like:4},
      {id:5, name:"Ecaterina", post:"Привет как дела?",like:2},
      {id:6, name:"Georgii", post:"assigned a value but",like:1},
  ],
  newPostText:'',
};

const profileReducer =(state=initialState,action)=>{
    if (action.type==='ADD-POST'){
        let newPost = {
            id: 1,
            name: 'Ilya',
            post: state.newPostText,
            like: 0,
        }
        let copyState={...state,
          postsItems:[...(state.postsItems)],
        };
        copyState.postsItems.push(newPost);
        copyState.newPostText='';
       return copyState;
    }
    else if (action.type==='CHANGE-LETTERS'){
        let copyState={...state,
          newPostText:  action.text
        };
        return copyState;
    }
    else {
    return state;
    }
}

export default profileReducer;

export const addPostActionCreator = ()=> {
    return {
      type:'ADD-POST',
    }
  }
  
export const changeLettersActionCreator = (text)=> {
    return {
      type:'CHANGE-LETTERS',
      text:text,
    }
}