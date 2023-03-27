import {combineReducers} from '@reduxjs/toolkit'
import userReducer from "./src/Users";
import appStateReducer from "./src/AppState";
import LoginStateReducer from './src/LoginState';

const RootReducer = combineReducers({
    user: userReducer,
    appState: appStateReducer,
    loginState:LoginStateReducer
})

export default RootReducer
