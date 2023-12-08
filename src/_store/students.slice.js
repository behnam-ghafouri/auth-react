import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWrapper } from '../_helpers';

// create slice
const name = 'students';
const initialState = createInitialState();
const extraActions = createExtraActions();
const reducers = createReducers();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

// exports
export const studentsActions = { ...slice.actions, ...extraActions };
export const studentsReducer = slice.reducer;

function createInitialState() {
    return {
        students: {
            loading: false,
            studentsList: []
        }
    }
}


function createReducers() {
    const baseUrl = `${process.env.REACT_APP_API_BASE_URL}`;
    return {
        getOneStudent
    };
    function getOneStudent(state,action) {
        console.log('getOneStudents',state.students)
        console.log('look at me',action)
        state.students = action.payload;
        
    };
};


function createExtraActions() {
    const baseUrl = `${process.env.REACT_APP_API_BASE_URL}`;

    return {
        getAllStudents: getAllStudents(),
    };
    
    function getAllStudents() {
        console.log('GetStudents')
        return createAsyncThunk(
            `${name}/getAllStudents`,
            async () => await fetchWrapper.get(`${baseUrl}/api/student/all`)
        )
    };
};


function createExtraReducers() {
    return {
        ...getAllStudents(),
    };

    function getAllStudents() {
        var { pending, fulfilled, rejected } = extraActions.getAllStudents;
        return {
            [pending]: (state) => {
                state.students.loading = true;
            },
            [fulfilled]: (state, action) => {
                state.students.loading = false;
                state.students.studentsList = action.payload
            },
            [rejected]: (state, action) => {
                state.students.loading = false;
                state.students.studentsList = []
            }
        };
    };

};