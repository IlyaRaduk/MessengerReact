import { followAPI, unfollowAPI, getUsersAPI } from "../api";

let initialState = {
  users: [
  ],
  pageSize: 5,
  totalUsersCount: '',
  currentPage: 1,
  isFetching: true,
}

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map((e) => {
          if (e.id === action.userId) {
            return { ...e, followed: true }
          }
          return e;
        })
      }

    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map((e) => {
          if (e.id === action.userId) {
            return { ...e, followed: false }
          }
          return e;
        })
      }
    case 'SET_USERS': {
      return {
        ...state,
        users: [...action.users]
      }
    }
    case 'SELECTED_PAGE': {
      return {
        ...state,
        currentPage: action.page,
      }
    }
    case 'SET_TOTAL_USERS_COUNT': {
      return {
        ...state,
        totalUsersCount: action.TotalUsersCount,
      }
    }
    case 'TOGLE_IS_FETCHING': {
      return {
        ...state,
        isFetching: action.isFetching,
      }
    }
    default:
      return state;
  }
}

export default friendsReducer;





export const followActionCreator = (userId) => {
  return {
    type: 'FOLLOW',
    userId,
  }
}
export const unfollowActionCreator = (userId) => {
  return {
    type: 'UNFOLLOW',
    userId,
  }
}
export const setUsersActionCreator = (users) => {
  return {
    type: 'SET_USERS',
    users,
  }
}
export const selectedPage = (page) => {
  return {
    type: 'SELECTED_PAGE',
    page,
  }
}
export const setTotalUsersCount = (TotalUsersCount) => {
  return {
    type: 'SET_TOTAL_USERS_COUNT',
    TotalUsersCount,
  }
}
export const togleIsFetching = (isFetching) => {
  return {
    type: 'TOGLE_IS_FETCHING',
    isFetching,
  }
}

export const followThunkCreator = (id) => (dispatch) => {
  followAPI(id)
    .then((data) => {
      if (data) {
        dispatch(followActionCreator(id))
      }
    })
}

export const unFollowThunkCreator = (id) => (dispatch) => {
  unfollowAPI(id)
    .then((data) => {
      if (data) {
        dispatch(unfollowActionCreator(id))
      }
    })
}

export const selectedPagesThunkCreator = (page) => (dispatch) => {
  dispatch(togleIsFetching(true));
  dispatch(selectedPage(page));
  getUsersAPI(page)
    .then(data => {
      dispatch(togleIsFetching(false));
      dispatch(setUsersActionCreator(data.users));
      dispatch(setTotalUsersCount(data.totalUsersCount));
    })
}


