import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props: NavbarProps) => {
    const { t } = useTranslation();

    const { className } = props;

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/" className={cls.mainLink} theme={AppLinkTheme.INVERTED}>
                    {t('Главная страница')}
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.INVERTED}>
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
