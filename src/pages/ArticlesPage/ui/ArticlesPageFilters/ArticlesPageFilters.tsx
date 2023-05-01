import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { SortOrder } from '@/shared/types';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import cls from './ArticlesPageFilters.module.scss';
import {
    ArticleSortField, ArticleSortSelector, ArticleType, ArticleTypeTabs, ArticleView, ArticleViewSelector,
} from '../../../../entities/Article';
import {
    getArticlesPageOrder,
    getArticlesPageSearch, getArticlesPageSort, getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlePageActions } from '../../model/slices/articlePageSlice';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const view = useSelector(getArticlesPageView);
    const order = useSelector(getArticlesPageOrder);
    const sort = useSelector(getArticlesPageSort);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const ferchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(ferchData, 500);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
        dispatch(articlePageActions.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlePageActions.setOrder(order));
        dispatch(articlePageActions.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);

    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlePageActions.setSort(sort));
        dispatch(articlePageActions.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);

    const onChangeSearch = useCallback((value: string) => {
        dispatch(articlePageActions.setSearch(value));
        dispatch(articlePageActions.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);

    const onChangeType = useCallback((type: ArticleType) => {
        dispatch(articlePageActions.setType(type));
        dispatch(articlePageActions.setPage(1));
        ferchData();
    }, [ferchData, dispatch]);

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input value={search} placeholder={t('Поиск')} onChange={onChangeSearch} />
            </Card>
            <ArticleTypeTabs
                className={classNames(cls.tabs, {}, [])}
                value={type}
                onChangeType={onChangeType}
            />
        </div>
    );
});
