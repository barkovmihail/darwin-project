import { StoreProvider } from './ui/StoreProvider';
import type { StateScheme, ReduxStoreWithManager } from './config/StateSchema';
import { createReduxStore } from './config/store';

export {
    createReduxStore,
    StoreProvider,
    StateScheme,
    ReduxStoreWithManager,
};
