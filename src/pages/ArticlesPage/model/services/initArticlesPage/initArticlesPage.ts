import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { articlePageActions } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'article/initArticlesPage',
    async (props, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;

        const inited = getArticlesPageInited(getState());

        if (!inited) {
            dispatch(articlePageActions.initState());
            dispatch(fetchArticlesList({
                page: 1,
            }));
        }
    },
);
