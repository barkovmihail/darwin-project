import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups';
import { Country } from '../../model/types/country';

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

    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            defaultValue={t('Укажите страну')}
            label={t('Укажите страну')}
            onChange={onChangeHandler}
            value={value}
            items={options}
            readonly={readonly}
            direction="top right"
            className={classNames('', {}, [className])}
        />
    );
});
