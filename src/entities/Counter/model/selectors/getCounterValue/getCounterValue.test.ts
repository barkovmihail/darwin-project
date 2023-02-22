import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';
import { tsLoaderSource } from 'ts-loader/dist/utils';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateScheme> = {
            counter: { value: 10 },
        };

        expect(getCounterValue(state as StateScheme)).toEqual(10);
    });
});
