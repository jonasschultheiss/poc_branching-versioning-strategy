import '../styles/global.css';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps): React.JSX.Element {
  return <Component {...pageProps} />;
}