import { combineReducers } from 'redux';
import  movieReducer from './movie';
import userReducer from './users';
import activeUserReducer from './activeUser';

const allReducers = combineReducers({
    users: userReducer,
    movies: movieReducer,
    activeUser: activeUserReducer
    //..
})

export default allReducers;