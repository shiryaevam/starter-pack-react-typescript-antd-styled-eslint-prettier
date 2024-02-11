export interface CardProps {
    /** Заголовок карточки */
    title: string;
    /** Обработчик клика по карточке */
    onClick: () => void;
    /** Флаг блокировки карточки  */
    disabled?: boolean;
}
