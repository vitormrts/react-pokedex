import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { Header } from './components';
import theme from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
  </ThemeProvider>
);

export default App;
