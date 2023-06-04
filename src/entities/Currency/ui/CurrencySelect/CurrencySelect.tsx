import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Currency } from '../../model/types/currency';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation();

    const { className, value, onChange, readonly } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    const listBoxProps = {
        defaultValue: t('Укажите валюту'),
        label: t('Укажите валюту'),
        onChange: onChangeHandler,
        value,
        items: options,
        readonly,
        direction: 'top right' as const,
        className: classNames('', {}, [className]),
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBox {...listBoxProps} />}
            off={<ListBoxDeprecated {...listBoxProps} />}
        />
    );
});
