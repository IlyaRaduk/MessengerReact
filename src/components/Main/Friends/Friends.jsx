import { NavLink } from 'react-router-dom';
import classes from './Friends.module.css';
import Prelouder from './../../common/Prelouder/Prelouder';
import Btn from './../../common/Button/Btn';
import { useEffect } from 'react';

const getTotalPages = (totalUsers, pageSize) => {
    let pageCount = Math.ceil(totalUsers / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return pages;
}

function Friends(props) {
    useEffect(() => {
        props.selectedPages(1);
    }, [])

    let pages = getTotalPages(props.totalUsersCount, props.pageSize);
    return (
        <>
            <div className={classes.userList}>

                <ul className={classes.pageList}>
                    {pages.map((e) => {
                        if (props.currentPage === e) {
                            return <li key={e} onClick={() => { props.selectedPages(e) }} className={classes.selectedPage}>{e}</li>
                        }

                        return <li key={e} onClick={() => { props.selectedPages(e) }}>{e}</li>
                    })}
                </ul>

                {props.isFetching ? <div className={classes.prelouder}><Prelouder /></div> : <>{props.users.map((e) => {
                    return (
                        <div className={classes.user} key={e.id} >

                            <div className={classes.user__avatar}>
                                <NavLink to={"/profile/" + e.id}> <img src={e.photoUrl} alt="Avatar" className={classes.user__photo} /></NavLink >
                            </div>

                            <div className={classes.user__info}>

                                <NavLink to={"/profile/" + e.id}><p className={classes.user__name}>{e.name}</p></NavLink >
                                <p className={classes.user__city}>{e.location.city}</p>
                                <p className={classes.user__country}>{e.location.country}</p>
                                <p className={classes.user__status}>{e.status}</p>

                            </div>
                            {e.followed ? <Btn isActive={false} setClick={() => { props.unFollow(e.id) }} title={'Unollow'} />
                                : <Btn isActive={true} setClick={() => { props.follow(e.id) }} title={'Follow'} />}
                        </div>)
                })}
                </>}
            </div>
        </>
    )
}
export default Friends;