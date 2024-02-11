import React, { FC } from "react";

import { CardProps } from './Card.types';
import { CardContainer, CardTitle } from './Card.styles';

/** Интерактивная карточка */
export const Card: FC<CardProps> = ({ title, onClick, disabled }) => (
    <CardContainer
        onClick={onClick}
        disabled={disabled}
    >
        <CardTitle>{title}</CardTitle>
    </CardContainer>
);
