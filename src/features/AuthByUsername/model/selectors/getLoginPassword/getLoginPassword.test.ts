import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                password: '123',
            },
        };

        expect(getLoginPassword(state as StateScheme)).toEqual('123');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = { };

        expect(getLoginPassword(state as StateScheme)).toEqual('');
    });
});
