import { Story } from '@storybook/react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateScheme, StoreProvider } from '../../../app/providers/StoreProvider';
import { loginReducer } from '../../../features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from '../../../entities/Profile';
import { ReducerList } from '../../lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../../entities/Article/model/slice/articleDetailsSlice';
import { articleDetailsCommentsReducer }
    from '../../../pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import { addCommentFormReducer } from '../../../features/addCommentForm/model/slice/addCommentFormSlice';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
    addCommentForm: addCommentFormReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateScheme>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
