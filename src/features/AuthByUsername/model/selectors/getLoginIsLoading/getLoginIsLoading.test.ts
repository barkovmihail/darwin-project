import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from 'features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                isLoading: true,
            },
        };

        expect(getLoginIsLoading(state as StateScheme)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = { };

        expect(getLoginIsLoading(state as StateScheme)).toEqual(false);
    });
});
