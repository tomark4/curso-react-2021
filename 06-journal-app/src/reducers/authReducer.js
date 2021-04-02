import { types } from "../types/types"

export const authReducer = (state = {}, action) => {

  switch(action.type){
    //  login
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.name,
      }

    // logout
    case types.logout:
      return {}

    // default action
    default:
      return state
  }
}
