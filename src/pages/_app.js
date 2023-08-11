import { Provider } from 'react-redux';
import './../styles/globals.css';
import { store } from './../redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page);

  return (
    <SessionProvider session={pageProps.session}>
      {getLayout(
        <Provider store={store}>
          <ToastContainer />
          <Component {...pageProps} />
        </Provider>
      )}
    </SessionProvider>
  );
}
