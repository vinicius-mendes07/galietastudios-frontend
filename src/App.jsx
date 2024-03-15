import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';
import ToastContainer from './components/Toast/ToastContainer';
import Router from './Router';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer />

        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
