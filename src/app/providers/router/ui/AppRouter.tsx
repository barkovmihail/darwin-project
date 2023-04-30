import React, {
    memo, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth';
import { Page } from '@/widgets/Page';
import { PageLoader } from '@/widgets/PageLoader';
import { routeConfig } from '@/app/providers/router/config/routeConfig';
import { AppRoutesProps } from '@/shared/types/router';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <Page>
                    {route.element}
                </Page>
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {routeConfig.map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);
