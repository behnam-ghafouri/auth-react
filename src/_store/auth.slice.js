import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { history, fetchWrapper } from '../_helpers';

// create slice

const name = 'auth';
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

// exports

export const authActions = { ...slice.actions, ...extraActions };
export const authReducer = slice.reducer;

// implementation

function createInitialState() {
    return {
        // initialize state from local storage to enable user to stay logged in
        user: JSON.parse(localStorage.getItem('user')),
        error: null,
        jsonObject:"e"
    }
}

function createReducers() {
    return {
        logout,
    };

    function logout(state) {
        state.user = null;
        localStorage.removeItem('user');
        history.navigate('/login');
    }
}

function createExtraActions() {
    const baseUrl = `${process.env.REACT_APP_API_URL}/users`;

    return {
        login: login(),
        jsonP: jsonP()
    };    

    function login() {
        return createAsyncThunk(
            `${name}/login`,
            async ({ username, password }) => await fetchWrapper.post(`${baseUrl}/authenticate`,{ username, password })
        );
    };

    function jsonP() {
        let todoId = 1
        return createAsyncThunk(
            `get json`,
            async () => await fetchWrapper.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        )
    }
}

function createExtraReducers() {
    // return {
    //     ...login(),
    //     ...jsonP
    // };

    // function login() {
    //     var { pending, fulfilled, rejected } = extraActions.login;
    //     return {
    //         [pending]: (state) => {
    //             state.error = null;
    //         },
    //         [fulfilled]: (state, action) => {
    //             const user = action.payload;
                
    //             // store user details and jwt token in local storage to keep user logged in between page refreshes
    //             localStorage.setItem('user', JSON.stringify(user));
    //             state.user = user;

    //             // get return url from location state or default to home page
    //             const { from } = history.location.state || { from: { pathname: '/' } };
    //             history.navigate(from);
    //         },
    //         [rejected]: (state, action) => {
    //             state.error = action.error;
    //         }
    //     };
    // }


    // function jsonP(){
    //     var { pending, fulfilled, rejected } = extraActions.jsonP;
    //     return {
    //         [pending]: (state) => {
    //             state.error = null;
    //         },
    //         [fulfilled]: (state, action) => {
                
    //             state.jsonObject = action.payload

    //         },
    //         [rejected]: (state, action) => {
    //             state.error = action.error;
    //         }
    //     };
    // }
    return {
        [extraActions.login.pending]: (state) => {
            state.error = null;
        },
        [extraActions.login.fulfilled]: (state, action) => {
            const user = action.payload;
            // ... your existing login logic
        },
        [extraActions.login.rejected]: (state, action) => {
            state.error = action.error;
        },
        [extraActions.jsonP.pending]: (state) => {
            state.error = null;
        },
        [extraActions.jsonP.fulfilled]: (state, action) => {
            state.jsonObject = action.payload;
        },
        [extraActions.jsonP.rejected]: (state, action) => {
            state.error = action.error;
        }
    };
}
