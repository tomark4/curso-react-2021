import moment from 'moment';
import 'moment/locale/es';
import { types } from '../types/types';

const initialState = {
  events: [
    {
      id: new Date().getTime(),
      title:'lorem',
      start: moment().toDate(),
      end: moment().add(1,'hours').toDate(),
      bgcolor:'#fafafa',
      notes: 'lorem ipsum dolor sit amet.',
      user: {
          uid: '112123120',
          name: 'fernando'
      }
    }
  ],
  activeEvent: null
};

export const calendarReducer = (state = initialState, action) => {
  switch(action.type){

    case types.eventAddNew:
      return {
        ...state,
        events: [
          ...state.events,
          action.payload
        ]
      };

    case types.eventSetActive:
      return {...state, activeEvent: action.payload};

    case types.eventClearActive:
      return {...state, activeEvent: null};

    case types.eventUpdate:
      return {
        ...state,
        events: state.events.map( event => event.id === action.payload.id ? action.payload : event)
      };

    default:
      return state;
  }
}
