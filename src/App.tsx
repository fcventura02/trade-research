import Home from './pages/Home';
import  { Reset } from 'styled-reset';
import theme from './theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset/>
      <Home />
    </ThemeProvider>
  );
}

export default App;
