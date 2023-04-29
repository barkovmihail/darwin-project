import { Story } from '@storybook/react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '../../../app/providers/StoreProvider';
import { loginReducer } from '../../../features/AuthByUsername/model/slice/loginSlice';
import { ReducerList } from '../../lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../../entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from '../../../features/addCommentForm/model/slice/addCommentFormSlice';
import { articleDetailsPageReducer } from '../../../pages/ArticleDetailsPage/model/slice';
import { profileReducer } from '../../../features/editableProfileCard/model/slice/profileSlice';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsPage: articleDetailsPageReducer,
    addCommentForm: addCommentFormReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
