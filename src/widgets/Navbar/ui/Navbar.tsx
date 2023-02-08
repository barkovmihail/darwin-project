import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps>= (props: NavbarProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.Navbar, {}, [className ])}>
            <div className={cls.links}>
                <AppLink to={'/'} className={cls.mainLink} theme={AppLinkTheme.INVERTED}>Main</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.INVERTED}>About</AppLink>
            </div>
        </div>
    );
};