import React from 'react';

export const ArticlesPageAsync = React.lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticlesPage')), 1000);
}));
