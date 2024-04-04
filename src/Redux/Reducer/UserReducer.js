export const loginUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST': return {
            ...state, loading: true,
        }
        case 'USER_LOGIN_SUCCESS': return {
            ...state, loading: false,
            success: true
        }
        case 'USER_LOGIN_FAIL': return {
            ...state, loading: false,
            error: 'Invaild credential'
        }

        case 'USER_LOGOUT': return {
            ...state
        }

        default: return state
    }
}

export const googleLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GOOGLE_LOGIN_REQUEST': return {
            ...state, loading: true,
        }
        case 'GOOGLE_LOGIN_SUCCESS': return {
            ...state, loading: false,
            success: true, googleUser: action.googleUser
        }
        case 'GOOGLE_LOGIN_FAIL': return {
            ...state, loading: false,
            error: 'Invaild credential'
        }

        case 'GOOGLE_LOGOUT': return {
            ...state
        }

        default: return state
    }
}

export const addNewAdressReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_NEW_ADDRESS_REQUEST': return {
            ...state, loading: true,
        }
        case 'ADD_NEW_ADDRESS_SUCCESS': return {
            ...state, loading: false,
            success: true
        }
        case 'ADD_NEW_ADDRESS_FAIL': return {
            ...state, loading: false,
            error: 'Something went Wrong'
        }

        default: return state
    }
}