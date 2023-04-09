import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';
import { Text, TextAlign, TextTheme } from '../../../../shared/ui/Text/Text';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country?: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeCity,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,

    } = props;

    if (isLoading) {
        return (
            <HStack className={classNames(cls.profileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify="center" max className={classNames(cls.profileCard, { [cls.loading]: true }, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузки профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack max gap={16} className={classNames(cls.profileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify="center" max>
                    <Avatar src={data?.avatar} />
                </HStack>
            )}
            <Input
                value={data?.first}
                placeholder={t('Ваше имя')}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeFirstName}

            />
            <Input
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeLastName}
            />
            <Input
                value={data?.city}
                placeholder={t('Ваш город')}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeCity}
            />
            <Input
                value={data?.age}
                placeholder={t('Ваш возраст')}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeAge}
            />

            <Input
                value={data?.username}
                placeholder={t('Ваше логин')}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeUsername}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Ваш аватар')}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeAvatar}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
};
