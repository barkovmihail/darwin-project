import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Country } from '../../model/types/country';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { ToggleFeatures } from '@/shared/lib/features';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.USA, content: Country.USA },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { t } = useTranslation();

    const { className, value, onChange, readonly } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    const listBoxProps = {
        defaultValue: t('Укажите страну'),
        label: t('Укажите страну'),
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
