
import classes from './Friends.module.css';

function Friends(props){

    let pageCount = Math.ceil(this.props.totalUsersCount/ this.props.pageSize);
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
                            return <li onClick={()=>{selectedPages(e)}} className={this.props.currentPage===e && classes.selectedPage}>{e}</li>
                        })}
                    
                    </ul>
                </div>
                {this.props.users.map((e)=>{
                    return <div key={e.id} >
                        <div>
                            <div>
                                <img src={e.photoUrl} alt="" className={classes.userPhoto} />
                            </div>
                            {e.followed?<button onClick={()=>{this.props.unfollow(e.id)}}>Follow</button>:<button onClick={()=>{this.props.follow(e.id)}}>Unfollow</button>}
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
        </>
    )
}
export default Friends;