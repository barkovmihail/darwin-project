import React, {
    FC, memo, useCallback, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = memo((props: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const { className } = props;

    const authData = useSelector(getUserAuthData);

    const [isOpen, setIsOpen] = useState(false);

    const onCloseModel = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    const onShowModel = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Button
                    className={cls.links}
                    theme={ButtonTheme.UNSTYLED}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
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
