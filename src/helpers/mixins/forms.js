import styled, { css } from 'styled-components';
import { colors, pallete } from '../variables';

const defaultInput = css`
    color: ${colors.text};
    border: 1px solid ${colors.inputBorder};
    border-radius: 8px;
    margin-right: 2px;
    margin-left: 2px;
    flex: 1 1 auto;
`;

export const Input = styled.input`
    ${defaultInput}
    height: 45px;
    padding: 0 24px;

    ${ ({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
`;

export const Textarea = styled.textarea`
    ${defaultInput}
    padding: 16px 24px;
`;


export const Button = styled.button`
    color: ${colors.link};
    font-weight: 500;
    font-size: 16px;
    flex: 1 1 auto;
    
    cursor: pointer;

    ${ ({ link }) => link && `
        background-color: transparent;
        border: 0;
        padding: 0;
    ` || `
        background-color: ${colors.bg};
        border: 1px solid ${colors.inputBorder};
        height: 45px;
        border-radius: 8px;
        margin-right: 2px;
        margin-left: 2px;
    `}

    ${ ({ primary }) => primary && `
        border-color: ${colors.btnPrimaryBg};
        color: #fff;
        background-color: ${colors.btnPrimaryBg};
        transition: filter .2s;

        &&:hover {
            filter: brightness(90%);
        }
    ` || `
        transition: border-color .2s;

        &&:hover {
            border-color: ${pallete.red}
        }
    `}

    ${ ({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}

    
`;

export const FormRow = styled.div`
    display: flex;
    margin-top: 8px;
    padding-bottom: 8px;
`;