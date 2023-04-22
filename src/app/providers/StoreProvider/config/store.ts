import {
    CombinedState, configureStore, DeepPartial, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { To } from 'history';
import { NavigateOptions } from 'react-router';
import { counterReducer } from '@/entities/Counter';
import { StateSchema } from '@/app/providers/StoreProvider';
import { userReducer } from '@/entities/User';
import { createReducerManager } from '@/app/providers/StoreProvider/config/reducerManager';
import { $api } from '@/shared/api/api';
import { scrollRestorationReducer } from '@/widgets/Page/ui/ScrollRestoration/model/slices/scrollRestorationSlice';
import { rtkApi } from '@/shared/api/rtkApi';
import { ThunkExtraArg } from './StateSchema';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scroll: scrollRestorationReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const exrtaArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: exrtaArg,
            },
        }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
