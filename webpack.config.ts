import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import {buildPlugins} from "./config/build/buildPlugins";
import {buildLoaders} from "./config/build/buildLoaders";
import {buildResolvers} from "./config/build/buildResolvers";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    const mode = env.mode || 'development';
    const port = env.port || 3000;

    const isDev = mode === 'development';

    return buildWebpackConfig({ mode, paths, isDev, port });
}
