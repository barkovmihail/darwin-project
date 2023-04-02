import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollRestoration = (state: StateSchema) => state.scroll.scroll;
export const getScrollRestorationByPath = createSelector(
    getScrollRestoration,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
