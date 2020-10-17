import * as actionTypes from '../actions/actionTypes'


const initialState ={
     token: null,
     userId: null,
     error: null,
     loading: true

}
export const singUpReducer = (state=initialState,action) => {

    switch(action.type){

        case actionTypes.SIGN_UP:
            console.log('Signup',action)
            return {
                ...state,
                loading:false
            }
            case actionTypes.SIGN_UP_SUCCESS:
                console.log(action)
            return {
                ...state,
                token: action.idToken,
                userId: action.userId,
                error: null,
                loading:false
            }
            case actionTypes.SIGN_UP_FAIL:
                console.log('fail',action)
            return {
                ...state,
                token: null,
                userId: null,
                error: action.error,
                loading:false
            }
            case actionTypes.LOGOUT:
                return{
                ...state,
                token: null,
                userId: null,
                error: null,
                loading:false
                }
        default:
            return state
    }

}

export default singUpReducer