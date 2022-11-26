import classes from './Friends.module.css';

function Friends(props){

    if(props.users.length===0){
        props.setUsers([
            {id:1, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Ilya',status:'I am a boss',location:{city:'Minsk',country:'Belarus'}},
            {id:2, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Ivan',status:'I am a brothers',location:{city:'Novoelnya',country:'Belarus'}},
            {id:3, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Polina',status:'I am a daughter',location:{city:'Grodno',country:'Belarus'}},
            {id:4, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Roman',status:'I am a programmer',location:{city:'Brest',country:'Belarus'}},
            {id:5, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Ilya2',status:'I am a boss2followed:false,',location:{city:'Minsk',country:'Belarus'}},
        ])
    }

    
    return(
    <div className={classes.userList}>
        {props.users.map((e)=>{
            return <div key={e.id} >
                <div>
                    <div>
                        <img src={e.photoUrl} alt="" className={classes.userPhoto} />
                    </div>
                    {e.followed?<button onClick={()=>{props.unfollow(e.id)}}>Follow</button>:<button onClick={()=>{props.follow(e.id)}}>Unfollow</button>}
                </div>
                <div>
                    <div>
                        <p>{e.name}</p>
                        <p>{e.status}</p>
                    </div>
                    <div>
                        <p>{e.location.city}</p>
                        <p>{e.location.country}</p>
                    </div>
                </div>
            </div>
        })}
    </div>
    )
}
export default Friends;