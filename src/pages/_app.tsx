import '../shared/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Layout from '../shared/components/Layout';
import ContextWrapper from '../shared/components/ContextWrapper';
import store, { persistor } from '../redux/store';

// optional configuration
const alertOptions = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ContextWrapper>
          <AlertProvider template={AlertTemplate} {...alertOptions}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AlertProvider>
        </ContextWrapper>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
