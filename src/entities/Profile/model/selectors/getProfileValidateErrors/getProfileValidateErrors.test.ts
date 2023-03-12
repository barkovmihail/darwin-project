import { StateScheme } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'entities/Profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                validateErrors: [ValidateProfileError.SERVER_ERROR],
            },
        };

        expect(getProfileValidateErrors(state as StateScheme)).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = { };

        expect(getProfileValidateErrors(state as StateScheme)).toEqual(undefined);
    });
});
