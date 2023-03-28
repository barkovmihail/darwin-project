import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Article } from 'entities/Article';
import {
    getArticlesPageHasMore, getArticlesPageIsLoading,
    getArticlesPageLimit,
    getArticlesPageNum,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../../services/fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'article/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPageNum(getState());
        const isLoading = getArticlesPageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlePageActions.setPage(page + 1));
            dispatch(fetchArticlesList({
                page: page + 1,
            }));
        }
    },
);
