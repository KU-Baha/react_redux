const defaultState = {
    users: []
}

export const ADD_MANY_USERS = "ADD_MANY_USERS"
export const FETCH_USERS = "FETCH_USERS"

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_USERS:
            console.log(action.payload)
            return {...state, users: [...state.users, ...action.payload]}
        default:
            return state
    }
}


export const addManyUsersAction = (payload) => ({type: ADD_MANY_USERS, payload})
export const fetchUsersAction = () => ({type: FETCH_USERS})