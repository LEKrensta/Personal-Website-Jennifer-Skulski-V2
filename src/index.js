import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './theme';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App /> 
    </ThemeProvider>,
    document.getElementById('root')
    );

