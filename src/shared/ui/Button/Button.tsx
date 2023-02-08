import { Theme } from 'app/providers/ThemeProvider';
import React, {ButtonHTMLAttributes, FC, HTMLAttributes} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss';

export enum ThemeButton {
    UNSTYLED  = 'unstyled'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement >{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps>= (props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};