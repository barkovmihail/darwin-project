import React, {
    FC, memo, useCallback, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { HStack } from 'shared/ui/Stack';
import { NotificationButton } from 'features/notificationButton';
import { AvatarDropdown } from 'features/avatarDropdown';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = memo((props: NavbarProps) => {
    const { t } = useTranslation();

    const { className } = props;

    const authData = useSelector(getUserAuthData);

    const [isOpen, setIsOpen] = useState(false);

    const onCloseModel = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    const onShowModel = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('Darwin')}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={RoutePath.articles_create}
                    theme={AppLinkTheme.INVERTED}
                    className={cls.createLink}
                >
                    {t('Создать статью')}
                </AppLink>
                <HStack gap={16} className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.UNSTYLED}
                onClick={onShowModel}
            >
                {t('Войти')}
            </Button>
            {isOpen && <LoginModal isOpen={isOpen} onClose={onCloseModel} />}
        </header>
    );
});
