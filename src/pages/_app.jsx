import '../../styles/main.css';
import { Inter } from 'next/font/google'

// See https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#with-tailwind-css
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export default function App({ Component, pageProps }) {
    return <Component className={`${inter.variable} font-sans`} {...pageProps} />
}
