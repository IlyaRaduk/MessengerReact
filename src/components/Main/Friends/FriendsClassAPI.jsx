import React from 'react';
import classes from './Friends.module.css';
import Friends from './Friends';


class FriendsClassAPI extends React.Component {



    getUsers(currentPage){
        const USERS = [
            {id:1, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Ilya',status:'I am a boss',location:{city:'Minsk',country:'Belarus'}},
            {id:2, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Ivan',status:'I am a brothers',location:{city:'Novoelnya',country:'Belarus'}},
            {id:3, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Polina',status:'I am a daughter',location:{city:'Grodno',country:'Belarus'}},
            {id:4, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Roman',status:'I am a programmer',location:{city:'Brest',country:'Belarus'}},
            {id:5, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Ecaterina',status:'I am a boss2followed:false,',location:{city:'Minsk',country:'Belarus'}},
            {id:6, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Ilya2',status:'I am a boss',location:{city:'Minsk',country:'Belarus'}},
            {id:7, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Ivan2',status:'I am a brothers',location:{city:'Novoelnya',country:'Belarus'}},
            {id:8, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Polina2',status:'I am a daughter',location:{city:'Grodno',country:'Belarus'}},
            {id:9, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Roman2',status:'I am a programmer',location:{city:'Brest',country:'Belarus'}},
            {id:10, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Ecaterina2',status:'I am a boss2followed:false,',location:{city:'Minsk',country:'Belarus'}},
            {id:11, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Ilya3',status:'I am a boss',location:{city:'Minsk',country:'Belarus'}},
            {id:12, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Ivan3',status:'I am a brothers',location:{city:'Novoelnya',country:'Belarus'}},
            {id:13, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Polina3',status:'I am a daughter',location:{city:'Grodno',country:'Belarus'}},
            {id:14, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Roman3',status:'I am a programmer',location:{city:'Brest',country:'Belarus'}},
            {id:15, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Ecaterina3',status:'I am a boss2followed:false,',location:{city:'Minsk',country:'Belarus'}},
            {id:16, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Ilya4',status:'I am a boss',location:{city:'Minsk',country:'Belarus'}},
            {id:17, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Ivan4',status:'I am a brothers',location:{city:'Novoelnya',country:'Belarus'}},
            {id:18, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Polina4',status:'I am a daughter',location:{city:'Grodno',country:'Belarus'}},
            {id:19, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Roman4',status:'I am a programmer',location:{city:'Brest',country:'Belarus'}},
            {id:20, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'Ecaterina4',status:'I am a boss2followed:false,',location:{city:'Minsk',country:'Belarus'}},
            {id:21, photoUrl:'https://www.iphones.ru/wp-content/uploads/2020/05/1-1-4.jpg',followed:false,name:'QQQQQQQQ',status:'I am a boss2followed:false,',location:{city:'Minsk',country:'Belarus'}},
        ]

        let userAPI= (pageSize,currentPage)=>{
            let users =[];
            if(currentPage==1){
                users = USERS.slice(0,pageSize)
            }
            else{
                users = USERS.slice(pageSize*currentPage-pageSize,pageSize*currentPage);
            }
            
            return {
                totalUsersCount: USERS.length,
                users:users,
            }
        }
        return userAPI(this.props.pageSize,currentPage);
    }

    // constructor(props){
    //     super(props);
    // }
    componentDidMount(){
        let users = this.getUsers(1);
        this.props.setUsers(users.users);
        this.props.setTotalUsersCount( users.totalUsersCount);
       
    }

    render(){
        let selectedPages = (page)=>{
            this.props.selectedPage(page);
            let users = this.getUsers(page);
            this.props.setUsers(users.users);
        }
        let pageCount = Math.ceil(this.props.totalUsersCount/ this.props.pageSize);
        let pages = [];
        for (let i=1;i<=pageCount;i++){
            pages.push(i);
        }
        return(
            <Friends/>
        )
    }
}
export default FriendsClassAPI;