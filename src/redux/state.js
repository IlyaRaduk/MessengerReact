import { rerender } from "../render";
const state = {
    profilePage:{
        postsItems:[
            {id:1, name:"Ilya", post:"Мой первый пост!!!",like:96},
            {id:2, name:"Polina", post:"Это пост от Полины эй!",like:28},
            {id:3, name:"Vanya", post:"третий пост",like:49},
            {id:4, name:"Roma", post:"АЙТИПУТЬ САМУРАЯ",like:4},
            {id:5, name:"Ecaterina", post:"Привет как дела?",like:2},
            {id:6, name:"Georgii", post:"assigned a value but",like:1},
        ],
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
    },
}

export let addPost = (postMessage) =>{
    let newPost = {
        id: 1,
        name: 'Ilya',
        post: postMessage,
        like: 0,
    }
    state.profilePage.postsItems.push(newPost);
    rerender(state);
}
export default state;