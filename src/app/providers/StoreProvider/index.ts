import { StoreProvider } from './ui/StoreProvider';
import type {
    StateScheme, ReduxStoreWithManager, ThunkExtraArg, ThunkConfig,
} from './config/StateSchema';
import { createReduxStore, AppDispatch } from './config/store';

export {
    createReduxStore,
    StoreProvider,
    StateScheme,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkExtraArg,
    ThunkConfig,
};
