import { Fragment, ReactNode, useState } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { HStack } from '../Stack/HStask/HStack';
import cls from './ListBox.module.scss';
import { classNames } from '../../lib/classNames/classNames';
import { Button } from '../Button/Button';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';

interface ListBoxProps {
    className?: string;
    items?: ListBoxItem[];
    value?: string;
    defaultValue?: string;
    readonly?: boolean;
    label?: string;
    onChange: (value: string) => void;
    direction?: DropdownDirection;
}

export const ListBox = (props: ListBoxProps) => {
    const {
        className,
        items,
        value,
        defaultValue,
        readonly,
        label,
        direction = 'bottom',
        onChange,
    } = props;

    const optionsClasses = [cls[direction]];

    return (
        <HStack gap={4}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <HListBox
                as="div"
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                disabled={readonly}
                onChange={onChange}
            >
                <HListBox.Button
                    className={cls.trigger}
                >
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        { [cls.active]: active, [cls.disabled]: item.disabled },
                                    )}
                                >
                                    {selected && '*'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
};
