import {
    CombinedState, configureStore, DeepPartial, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateScheme } from 'app/providers/StoreProvider';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { $api } from 'shared/api/api';
import { To } from 'history';
import { NavigateOptions } from 'react-router';
import { ThunkExtraArg } from './StateSchema';

export function createReduxStore(
    initialState?: StateScheme,
    asyncReducers?: ReducersMapObject<StateScheme>,
) {
    const rootReducers: ReducersMapObject<StateScheme> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const exrtaArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateScheme>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: exrtaArg,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
