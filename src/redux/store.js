import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"

let store ={
    _state: {
        profilePage:{
            postsItems:[
                {id:1, name:"Ilya", post:"Мой первый пост!!!",like:96},
                {id:2, name:"Polina", post:"Это пост от Полины эй!",like:28},
                {id:3, name:"Vanya", post:"третий пост",like:49},
                {id:4, name:"Roma", post:"АЙТИПУТЬ САМУРАЯ",like:4},
                {id:5, name:"Ecaterina", post:"Привет как дела?",like:2},
                {id:6, name:"Georgii", post:"assigned a value but",like:1},
            ],
            newPostText:'',
        },
        dialogsPage:{
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
        },
    },
    rerender(){
    
    },
   
    subscribe(observer){
        this.rerender=observer;
    },
    getState(){
        return this._state;
    },
    dispatch(action){ 
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action);
        this.rerender(this._state);
    }
}

  

// window.store = store;
export default store;