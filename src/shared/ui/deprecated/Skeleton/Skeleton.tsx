import { useTranslation } from 'react-i18next';
import { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    border?: string;
}

/**
 * Компонент устарел, используйте новые компоненты из папки redesigned
 * @deprecated
 */
export const Skeleton = memo((props: SkeletonProps) => {
    const { t } = useTranslation();

    const { className, width, height, border } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    );
});
