import React, { Suspense, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// components
import Footer from './components/Footer';
import Header from './components/Header';
import { lightTheme } from './global/theme';
import { GlobalStyle } from './global/style';
import { router as routes } from './router';

// contexts
import { AuthContext } from './context/authContect';
import { themeContext } from './context/themeContext';
import { useTranslation } from 'react-i18next';

const App = () => {
  const router = useRoutes(routes);

  const { i18n } = useTranslation();

  const [isAuthorized, setIsAuthorized] = useState(true);
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={[isAuthorized, setIsAuthorized]}>
        <themeContext.Provider value={[theme, setTheme]}>
          <div className='App'>
            <GlobalStyle dir={i18n.language === 'en' ? 'ltr' : 'rtl'} />
            <Header />

            <Suspense fallback={<div className='spinner' />}>{router}</Suspense>
            <Footer />
          </div>
        </themeContext.Provider>
      </AuthContext.Provider>
    </ThemeProvider>
  );
};

export default App;
