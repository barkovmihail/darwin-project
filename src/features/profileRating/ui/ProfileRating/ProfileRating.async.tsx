import { lazy, Suspense } from 'react';
import { ArticleRatingProps } from '@/features/articleRating/ui/ArticleRating/ArticleRating';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export const ProfileRatingLazy = lazy(
    () => import('./ProfileRating'),
);

export const ProfileRatingAsync = (props: ArticleRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={140} />}>
            <ProfileRatingLazy {...props} />
        </Suspense>
    );
};
