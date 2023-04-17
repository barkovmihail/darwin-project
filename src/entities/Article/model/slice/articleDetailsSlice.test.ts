import { DeepPartial } from '@reduxjs/toolkit';
import { ArticleType } from '../consts/consts';
import { articleDetailsReducer } from '../slice/articleDetailsSlice';
import { Article } from '../types/article';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

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

describe('articleDetailsSlice.test', () => {
    test('test get articleDetails service panding', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.pending,
            ),
        ).toEqual({
            isLoading: true,
        });
    });

    test('test get articleDetails service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };
        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.fulfilled(data, '', '1'),
            ),
        ).toEqual({
            isLoading: false,
            data,
        });
    });
});
