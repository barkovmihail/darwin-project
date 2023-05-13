import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { CommentType } from '@/entities/Comment';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const fetchCommentsByArticleId = createAsyncThunk<
    CommentType[],
    string | undefined,
    ThunkConfig<string>
>('article/fetchCommentsByArticleId', async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        if (!articleId) {
            return rejectWithValue('error');
        }

        const response = await extra.api.get<CommentType[]>('/comments', {
            params: {
                articleId,
                _expand: 'user',
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
