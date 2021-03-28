import { types } from '../types/types'

const authReducer = (state = {}, action) => {
  // reducers para manejar el login
  switch(action.type){
    case types.login:
      return {...action.payload, logged: true}

    case types.logout:
      return { logged: false }

    default:
      return state
  }
}

export default authReducer;
