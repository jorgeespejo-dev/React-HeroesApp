import { types } from "../types/types";

//state: objeto, action
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                //retornar todo lo del payload
                ...action.payload,
                logged: true
            }
        case types.logout:
            return{
                logged: false 
            }
        default:
            return state;
    }
}
