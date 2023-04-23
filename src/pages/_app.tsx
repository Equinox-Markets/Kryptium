import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import Web3Provider from '@/components/Web3Provider'

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider defaultTheme="dark" enableSystem={false} attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;

