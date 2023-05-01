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
import {
    getRouteAbout,
    getRouteAdmin,
    getRouteArticleCreate,
    getRouteArticleDetails,
    getRouteArticleEdit,
    getRouteArticles,
    getRouteForbidden,
    getRouteMain, getRouteProfile,
} from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';

export const routeConfig: AppRoutesProps[] = [
    {
        path: getRouteMain(),
        element: <MainPage />,
    },
    {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    {
        path: getRouteArticles(),
        element: <ArticlesPage />,
        authOnly: true,
    },
    {
        path: getRouteArticleDetails(':id'),
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    {
        path: getRouteAdmin(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
];
