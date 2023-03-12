import { StateScheme } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    const form = {
        username: 'admin',
        age: 34,
        country: Country.Russia,
        lastname: 'Barkov',
        first: 'Mikhail',
        currency: Currency.RUB,
        city: 'Izhevsk',
    };

    test('should return error', () => {
        const state: DeepPartial<StateScheme> = {
            profile: {
                form,
            },
        };

        expect(getProfileForm(state as StateScheme)).toEqual(form);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = { };

        expect(getProfileForm(state as StateScheme)).toEqual(undefined);
    });
});
