export type BuildType = 'production' | 'development'

export interface BuildPaths {
    entry: string,
    build: string,
    html: string,
    src: string;
}

export interface BuildOptions {
    mode: BuildType;
    paths:BuildPaths;
    isDev: boolean;
    port: number;
    apiUrl: string;
    project: 'frontend' | 'storybook' | 'jest';
}

export interface BuildEnv {
    mode: BuildType;
    port: number;
    apiUrl: string;
}
