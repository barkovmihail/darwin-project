import { StoreProvider } from './ui/StoreProvider';
import type {
    StateScheme, ReduxStoreWithManager, ThunkConfig,
} from './config/StateSchema';
import { createReduxStore, AppDispatch } from './config/store';

export {
    createReduxStore,
    StoreProvider,
    StateScheme,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkConfig,
};
