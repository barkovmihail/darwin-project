import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props: NavbarProps) => {
    const { t } = useTranslation();

    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onCloseModel = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    const onShowModel = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.UNSTYLED}
                onClick={onShowModel}
            >
                {t('Войти')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <LoginModal isOpen={isOpen} onClose={onCloseModel} />
        </div>
    );
};
