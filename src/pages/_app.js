import { Provider } from 'react-redux';
import './../styles/globals.css';
import { store } from './../redux/store';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page);

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
