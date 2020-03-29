import styled from 'styled-components';
import { colors } from './variables'

export const Container = styled.div`
    max-width: 80rem;
    margin-left: 1rem;
    margin-right: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
`;

export const Input = styled.input`
    height: 45px;
    color: ${colors.text};
    border: 1px solid ${colors.inputBorder};
    border-radius: 8px;
    padding: 0 24px;
`;

export const Submit = styled.button`
    background-color: ${colors.btnPrimary};
    border: 0;
    height: 45px;
    border-radius: 8px;
    color: #fff;
    font-weight: 500;
    margin-top: 16px;
    font-size: 16px;
    transition: filter .2s;

    &&:hover {
        filter: brightness(90%);
    }
`;