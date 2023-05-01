import { StoreProvider } from './ui/StoreProvider';
import type {
    StateSchema, StateSchemeKey, ReduxStoreWithManager, ThunkConfig,
} from './config/StateSchema';
import { createReduxStore, AppDispatch } from './config/store';

export {
    createReduxStore,
    StoreProvider,
    StateSchema,
    StateSchemeKey,
    ReduxStoreWithManager,
    ThunkConfig,
};

export type {
    AppDispatch,
};
