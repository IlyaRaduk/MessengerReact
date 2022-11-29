import {NavLink} from 'react-router-dom';
import classes from './Friends.module.css';
import Prelouder from '../../Prelouder/Prelouder';

function Friends(props){

    let pageCount = Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = [];
    for (let i=1;i<=pageCount;i++){
        pages.push(i);
    }
    
    return(
        <>  
            
            <div className={classes.userList}>
                <div>
                    <ul className={classes.pageList}>
                        {pages.map((e)=>{
                            return <li onClick={()=>{props.selectedPages(e)}} className={props.currentPage===e && classes.selectedPage}>{e}</li>
                        })}
                    
                    </ul>
                </div>

                {props.isFetching?<Prelouder/>:<>{props.users.map((e)=>{
                    return <div key={e.id} >
                            <div>
                                <div>
                                   
                                <NavLink to={"/profile"+"/"+e.id}> <img src={e.photoUrl} alt="" className={classes.userPhoto} /></NavLink >
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
                </>}
                
                
            </div>
        </>
    )
}
export default Friends;