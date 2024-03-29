import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildType, BuildPaths } from './config/build/types/config';

function getApiUrl(mode: BuildType, apiUrl?: string) {
    if (apiUrl) {
        return apiUrl;
    }

    if (mode === 'production') {
        return '/api';
    }

    return 'http://localhost:8000';
}

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales'),
    };

    const mode = env?.mode || 'development';
    const port = env?.port || 3000;
    const apiUrl = getApiUrl(env.mode, env?.apiUrl);

    const isDev = mode === 'development';

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
        apiUrl,
        project: 'frontend',
    });
};
