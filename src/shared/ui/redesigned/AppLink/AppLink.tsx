import React, { FC, memo } from 'react';
import { Link, LinkProps, NavLink } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'inverted';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
    activeClassName?: string;
}

export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        variant = 'primary',
        children,
        activeClassName = '',
        ...otherProps
    } = props;

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(cls.appLink, { [activeClassName]: isActive }, [
                    className,
                    cls[variant],
                ])
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});
