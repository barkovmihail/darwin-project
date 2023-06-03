import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticlesFilters } from '../../../../widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const {
        onChangeSort,
        onChangeType,
        sort,
        type,
        onChangeSearch,
        search,
        onChangeOrder,
        order,
    } = useArticleFilters();

    return (
        <ArticlesFilters
            search={search}
            sort={sort}
            type={type}
            order={order}
            onChangeSearch={onChangeSearch}
            onChangeSort={onChangeSort}
            onChangeType={onChangeType}
            onChangeOrder={onChangeOrder}
            className={className}
        />
    );
});
