import React, { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// components
import Footer from './components/Footer';
import Header from './components/Header';
import { blueTheme, darkTheme, lightTheme } from './global/theme';
import { GlobalStyle } from './global/style';
import { router as routes } from './router';

const App = () => {
  const router = useRoutes(routes);
  const [theme, setTheme] = useState(lightTheme);

  const changeTheme = () => {
    if (theme.theme === 'light') setTheme(darkTheme);
    if (theme.theme === 'dark') setTheme(blueTheme);
    if (theme.theme === 'blue') setTheme(lightTheme);
  };

  useEffect(() => {
    const my = setInterval(changeTheme, 2000);
    return () => clearInterval(my);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <GlobalStyle />
        <Header />
        {theme.theme}
        {router}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
