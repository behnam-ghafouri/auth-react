import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth.slice';
import { usersReducer } from './users.slice';
import { rolesReducer } from './roles.slice';

export * from './auth.slice';
export * from './users.slice';
export * from './roles.slice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer,
        roles: rolesReducer
    },
});