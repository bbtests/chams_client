import '@/styles/globals.scss'
import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { ThemeProvider } from '@mui/material'
import useTheme from '@/layouts/themes';
import { SessionProvider } from "next-auth/react"
import { Session } from 'next-auth';


export function reportWebVitals(metric: NextWebVitalsMetric) {
    console.log(metric)
}


export default function Afrikobo({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {
    const theme = useTheme()
    return <>
        <SessionProvider session={session}>
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme >
                    <Component {...pageProps} />
                </CssBaseline>
            </ThemeProvider>
        </SessionProvider>
    </>
}
