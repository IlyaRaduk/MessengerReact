import { followAPI, unfollowAPI, getUsersAPI } from "../api";
import { unAuthThunkCreator } from "./auth-reducer";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SELECTED_PAGE = 'SELECTED_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGLE_IS_FETCHING = 'TOGLE_IS_FETCHING';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: '',
  currentPage: 1,
  isFetching: true,
}

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((e) => {
          if (e.id === action.userId) {
            return { ...e, followed: true }
          }
          return e;
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((e) => {
          if (e.id === action.userId) {
            return { ...e, followed: false }
          }
          return e;
        })
      }
    case SET_USERS: {
      return {
        ...state,
        users: [...action.users]
      }
    }
    case SELECTED_PAGE: {
      return {
        ...state,
        currentPage: action.page,
      }
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.TotalUsersCount,
      }
    }
    case TOGLE_IS_FETCHING: {
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
    type: FOLLOW,
    userId,
  }
}
export const unfollowActionCreator = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  }
}
export const setUsersActionCreator = (users) => {
  return {
    type: SET_USERS,
    users,
  }
}
export const selectedPageActionCreator = (page) => {
  return {
    type: SELECTED_PAGE,
    page,
  }
}
export const setTotalUsersCountActionCreator = (TotalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    TotalUsersCount,
  }
}
export const togleIsFetchingActionCreator = (isFetching) => {
  return {
    type: TOGLE_IS_FETCHING,
    isFetching,
  }
}

export const followThunkCreator = (id) => async (dispatch) => {
  const result = await followAPI(id);
  if (result) {
    dispatch(followActionCreator(id));
  }
}

export const unFollowThunkCreator = (id) => async (dispatch) => {
  const result = await unfollowAPI(id);
  if (result) {
    dispatch(unfollowActionCreator(id));
  }

}

export const selectedPagesThunkCreator = (page) => async (dispatch) => {
  try {
    dispatch(togleIsFetchingActionCreator(true));
    dispatch(selectedPageActionCreator(page));
    const pages = await getUsersAPI(page)
    dispatch(togleIsFetchingActionCreator(false));
    dispatch(setUsersActionCreator(pages.users));
    dispatch(setTotalUsersCountActionCreator(pages.totalUsersCount));
  }
  catch (error) {
    dispatch(unAuthThunkCreator());
  }
}


