import { Provider } from 'react-redux';
import './../styles/globals.css';
import { store } from './../redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page);

  return getLayout(
    <Provider store={store}>
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  );
}
