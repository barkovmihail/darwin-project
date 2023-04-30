import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { RoutePath } from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';

export const routeConfig: AppRoutesProps[] = [
    {
        path: RoutePath.main,
        element: <MainPage />,
    },
    {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    {
        path: `${RoutePath.articles}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    {
        path: `${RoutePath.articles_create}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    {
        path: `${RoutePath.articles_edit}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    {
        path: `${RoutePath.admin_panel}`,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    {
        path: `${RoutePath.forbidden}`,
        element: <ForbiddenPage />,
    },
    {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
];
