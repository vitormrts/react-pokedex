import { PokemonContextProvider, PaginatorContextProvider } from 'contexts';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from 'styles/theme';
import AppRoutes from 'routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PokemonContextProvider>
        <PaginatorContextProvider>
          <AppRoutes />
        </PaginatorContextProvider>
      </PokemonContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
