import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateScheme } from 'app/providers/StoreProvider';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';

export function createReduxStore(initialState?: StateScheme) {
    const rootReducers: ReducersMapObject<StateScheme> = {
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateScheme>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
