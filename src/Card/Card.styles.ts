import styled from "styled-components";

import { CardProps } from './Card.types';

type CardContainerProps = Pick<CardProps, 'disabled'>;

export const CardContainer = styled.div<CardContainerProps>`
  border: 2px dashed #0ebeff;
  border-radius: 20px;
  padding: 12px 24px;
  ${({ disabled }) => disabled ? `pointer-events: none;` : `cursor: pointer;`}
`;

export const CardTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
`;
