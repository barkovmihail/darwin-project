import React, { FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import cls from './DynamicModuleLoader.module.scss';
import { ReduxStoreWithManager } from '../../../../app/providers/StoreProvider';
import { loginReducer } from '../../../../features/AuthByUsername/model/slice/loginSlice';
import { StateSchemeKey } from '../../../../app/providers/StoreProvider/config/StateSchema';

export type ReducerList = {
    [name in StateSchemeKey]?: Reducer;
}

type ReducerListEntry = [StateSchemeKey, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount,
    } = props;

    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        { children }
    );
};
