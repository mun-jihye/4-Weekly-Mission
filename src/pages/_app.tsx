import Footer from 'components/common/footer/Footer';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { theme } from 'styles/theme.js';

declare global {
  /* eslint-disable-next-line */
  interface Window {
    Kakao: any;
  }
}

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const hideFooter =
    router.pathname === '/signin' || router.pathname === '/signup';
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        {!hideFooter && <Footer />}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
