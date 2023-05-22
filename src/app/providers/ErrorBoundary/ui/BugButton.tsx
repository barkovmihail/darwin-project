import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/deprecated/Button';

interface BugButtonProps {
    className?: string;
}

// Компонент для тестирования
export const BugButton = ({ className }: BugButtonProps) => {
    const { t } = useTranslation();

    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    const onThrow = () => {
        setError(true);
    };

    return <Button onClick={onThrow}>{t('Пробросить ошибку')}</Button>;
};
