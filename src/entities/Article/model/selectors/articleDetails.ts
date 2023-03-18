import { StateScheme } from 'app/providers/StoreProvider';

export const getArticleDetailsData = (state: StateScheme) => state?.articleDetails?.data;
export const getArticleDetailsError = (state: StateScheme) => state?.articleDetails?.error;
export const getArticleDetailsIsLoading = (state: StateScheme) => state?.articleDetails?.isLoading;
