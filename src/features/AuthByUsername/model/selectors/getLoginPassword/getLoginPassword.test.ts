import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';

describe('getLoginPassword.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                password: '123',
            },
        };

        expect(getLoginError(state as StateScheme)).toEqual('123');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = { };

        expect(getLoginError(state as StateScheme)).toEqual('');
    });
});
