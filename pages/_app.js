// pages/_app.js
import '../styles/globals.css';
import Header from '../components/Header';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <>
      {!isHomePage && <Header />}
      <Component {...pageProps} />
    </>
  );
}
