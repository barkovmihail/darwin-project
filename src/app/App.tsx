import { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, initAuthData, useJsonSettings } from '../entities/User';
import { useAppDispatch } from '../shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '../widgets/PageLoader';
import { ToggleFeatures } from '../shared/lib/features';
import { MainLayout } from '../shared/layouts/MainLayout/MainLayout';
import { AppLoaderLayout } from '../shared/layouts/AppLoaderLayout';
import { useAppToolbar } from './lib/useAppToolbar';
import { withTheme } from './providers/ThemeProvider/ui/withTheme';

const App = memo(function App() {
    const dispatch = useAppDispatch();

    const inited = useSelector(getUserInited);

    const toolbar = useAppToolbar();

    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!inited) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div
                        id="app"
                        className={classNames('app_redesigned', {}, [])}
                    >
                        <AppLoaderLayout />
                    </div>
                }
                off={<PageLoader />}
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <div id="app" className={classNames('app_redesigned', {}, [])}>
                    <Suspense fallback="">
                        <MainLayout
                            header={<Navbar />}
                            content={<AppRouter />}
                            sidebar={<Sidebar />}
                            toolbar={toolbar}
                        />
                    </Suspense>
                </div>
            }
            off={
                <div id="app" className={classNames('app', {}, [])}>
                    <Suspense fallback="">
                        <Navbar />
                        <div className="content-page">
                            <Sidebar />
                            <AppRouter />
                        </div>
                    </Suspense>
                </div>
            }
        />
    );
});
export default withTheme(App);
