import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slice/todo.slice';

import { testApi } from './api';

export const store = configureStore({
    reducer: {
        todos: todosReducer,

        // Configure RTK Query
        [testApi.reducerPath]: testApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(testApi.middleware),
    devTools: true,
});