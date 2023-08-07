import styled from '@emotion/styled';
import { colors } from '../../constants/colors';

interface CountProps {
    success?: boolean;
}

export const ContestDiv = styled.div`
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 2px;
    background-color: ${colors.primary};
    border: 2px solid ${colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;

    .count {
        position: absolute;
        height: 18px;
        min-width: 18px;
        right: calc(100% - 9px);
        bottom: -9px;
        padding: 5px;
        border-radius: 9px;
        font-size: 14px;
        background-color: ${colors.danger};
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${colors.white};
    }
`;

export const CountDiv = styled.div<CountProps>`
    background-color: ${props => props.success ? props.theme.colors.success : props.theme.colors.danger};
`;