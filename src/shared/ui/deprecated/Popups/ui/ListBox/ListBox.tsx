import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import { HStack } from '../../../../redesigned/Stack/HStask/HStack';
import cls from './ListBox.module.scss';
import { classNames } from '../../../../../lib/classNames/classNames';
import { Button } from '../../../Button/Button';
import popupCls from '../../styles/popups.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

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

/**
 * Компонент устарел, используйте новые компоненты из папки redesigned
 * @deprecated
 */
export const ListBox = (props: ListBoxProps) => {
    const {
        className,
        items,
        value,
        defaultValue,
        readonly,
        label,
        direction = 'bottom left',
        onChange,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap={4}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <HListBox
                as="div"
                className={classNames(cls.ListBox, {}, [
                    className,
                    popupCls.popup,
                ])}
                value={value}
                disabled={readonly}
                onChange={onChange}
            >
                <HListBox.Button className={popupCls.trigger}>
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                    })}
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
