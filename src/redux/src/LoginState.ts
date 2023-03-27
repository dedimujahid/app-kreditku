import {createAction, createReducer} from '@reduxjs/toolkit'
import { RootState } from '..'

type LoginStateType = {
    isLoggedIn: boolean,
}

const initialState: LoginStateType = {
    isLoggedIn: false,
}


export const getLoginStatus = (state:RootState):boolean => state.loginState.isLoggedIn


export const setLogin = createAction('SET_LOGIN', (login: boolean) => ({
    payload: {login},
}))

const LoginStateReducer = createReducer(initialState, builder => {
        builder
            .addCase(setLogin, (state, action) => {
            const {login} = action.payload
            state.isLoggedIn = login
        })
    }
)

export default LoginStateReducer