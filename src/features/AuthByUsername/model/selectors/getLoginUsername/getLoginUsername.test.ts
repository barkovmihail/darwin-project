import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';

describe('getLoginUsername.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                username: 'admin',
            },
        };

        expect(getLoginError(state as StateScheme)).toEqual('admin');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = { };

        expect(getLoginError(state as StateScheme)).toEqual('');
    });
});
