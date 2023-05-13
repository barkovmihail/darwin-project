import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '../../types/article';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const fetchArticleById = createAsyncThunk<
    Article,
    string | undefined,
    ThunkConfig<string>
>('article/fetchArticleById', async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        if (!articleId) {
            return rejectWithValue('error');
        }

        const response = await extra.api.get<Article>(
            `/articles/${articleId}`,
            {
                params: {
                    _expand: 'user',
                },
            },
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
