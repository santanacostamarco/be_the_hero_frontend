import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../variables';

export const Container = styled.div`
    max-width: 62rem;
    margin-left: 1rem;
    margin-right: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;

    ${ ({ full }) => full && `width: 100%;`}

    ${ ({ flex }) => flex && `display: flex;`}

    ${ ({ shadow }) => shadow && `
        padding: 25px;
        background-color: ${colors.bg};
        box-shadow: 0 0 100px rgba(0, 0, 0, .1);
        border-radius: 8px;
    ` }
`;

export const DefaultTitle = styled.h1`
    font-size: 1.5rem;
`;

export const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;

    ${ ({ vCenter }) => vCenter && `align-items: center;`}
`;

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    margin-top: 16px;
    color: ${colors.link};
    text-decoration: none;
`;