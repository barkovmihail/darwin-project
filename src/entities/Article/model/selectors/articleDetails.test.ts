import { DeepPartial } from '@reduxjs/toolkit';
import { StateScheme } from 'app/providers/StoreProvider';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails';
import { Article } from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';

const data: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    blocks: [],
    user: { id: '1', username: 'user' },
};

describe('articleDetails.test', () => {
    test('should return data', () => {
        const state: DeepPartial<StateScheme> = {
            articleDetails: {
                data,
            },
        };

        expect(getArticleDetailsData(state as StateScheme)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticleDetailsData(state as StateScheme)).toEqual(undefined);
    });
    test('should return isLoading', () => {
        const state: DeepPartial<StateScheme> = {
            articleDetails: {
                isLoading: true,
            },
        };

        expect(getArticleDetailsIsLoading(state as StateScheme)).toEqual(true);
    });
    test('should work with empty state isLoading', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticleDetailsIsLoading(state as StateScheme)).toEqual(undefined);
    });
    test('should return error', () => {
        const state: DeepPartial<StateScheme> = {
            articleDetails: {
                error: 'error',
            },
        };

        expect(getArticleDetailsError(state as StateScheme)).toEqual('error');
    });
    test('should work with empty state error', () => {
        const state: DeepPartial<StateScheme> = {};
        expect(getArticleDetailsError(state as StateScheme)).toEqual(undefined);
    });
});
