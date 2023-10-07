import { createSlice } from '@reduxjs/toolkit';


// Create slice
const name = 'roles';

const initialState = {
  roles: [],
  error:null
};

const slice = createSlice({
  name,
  initialState,
  reducers: {
    setRoles: (state,action) => {
      console.log('action',action.payload)
      state.roles = action.payload
    }
  },
});

// Export actions and reducer
export const { setRoles } = slice.actions;
export const rolesReducer = slice.reducer;
