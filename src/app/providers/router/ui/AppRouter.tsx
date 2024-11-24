import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { PageLoader } from '@/widgets/PageLoader';
import { AppRoutesProps } from '@/shared/types/router';
import { RequireAuth } from '../ui/RequireAuth';
import { routeConfig } from '../config/routeConfig';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <Page>{route.element}</Page>
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth roles={route.roles}>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);

    return <Routes>{routeConfig.map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
