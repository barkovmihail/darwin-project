import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';

describe('getLoginIsLoading.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                isLoading: true,
            },
        };

        expect(getLoginError(state as StateScheme)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = { };

        expect(getLoginError(state as StateScheme)).toEqual(undefined);
    });
});
