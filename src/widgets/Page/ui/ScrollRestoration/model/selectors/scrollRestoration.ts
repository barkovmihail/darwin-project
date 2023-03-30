import { StateScheme } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollRestoration = (state: StateScheme) => state.scroll.scroll;
export const getScrollRestorationByPath = createSelector(
    getScrollRestoration,
    (state: StateScheme, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
