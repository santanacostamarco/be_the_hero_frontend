import React from 'react';
import 'normalize.css';
import { createGlobalStyle } from 'styled-components';
import Helmet from 'react-helmet';
import { colors } from './helpers/variables';

import Routes from './Routes';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${colors.bg};
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        color: ${colors.text};
    }
`;

function App() {
    return (
        <>
            <Helmet>
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
                <meta name="theme-color" content={colors.bg} />
            </Helmet>
            <GlobalStyle />
            <Routes />
        </>
    )
}

export default App;