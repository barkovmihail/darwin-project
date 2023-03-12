import { StateScheme } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    const data = {
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
                data,
            },
        };

        expect(getProfileData(state as StateScheme)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateScheme> = { };

        expect(getProfileData(state as StateScheme)).toEqual(undefined);
    });
});
