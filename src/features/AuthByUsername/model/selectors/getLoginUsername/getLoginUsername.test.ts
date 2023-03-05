import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                username: 'admin',
            },
        };

        expect(getLoginUsername(state as StateScheme)).toEqual('admin');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = { };

        expect(getLoginUsername(state as StateScheme)).toEqual('');
    });
});
