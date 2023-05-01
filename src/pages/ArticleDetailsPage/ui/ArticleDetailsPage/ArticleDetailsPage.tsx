import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './ArticleDetailsPage.module.scss';
import { getAddCommentFormText } from '../../../../features/addCommentForm/model/selectors/addCommentFormSelectors';
import { Page } from '../../../../widgets/Page/ui/Page/Page';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from '../../../../shared/ui/Stack';
import { ArticleRecommendationsList } from '../../../../features/articleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '../../../../features/articleRating';
import { getRouteArticles } from '../../../../shared/const/router';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const {
        className,
    } = props;

    const { id } = useParams<{ id: string }>();

    const text = useSelector(getAddCommentFormText);

    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    if (!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ActicleDetailsPage, {}, [className])}>
                <VStack gap={16} max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ArticleRating articleId={id} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>

    );
};

export default ArticleDetailsPage;
