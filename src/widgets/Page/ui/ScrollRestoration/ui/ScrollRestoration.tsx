import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ScrollRestoration.module.scss';

interface ScrollRestorationProps {
    className?: string;
}

export const ScrollRestoration = memo((props: ScrollRestorationProps) => {
    const { t } = useTranslation();

    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.ScrollRestoration, {}, [className])}>
            /
        </div>
    );
});
