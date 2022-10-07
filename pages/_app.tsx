import type { AppProps } from "next/app";
import { SessionProvider, SessionProviderProps } from "next-auth/react";

import {
    FontsVarsStyle,
    GlobalStyle,
    GlobalVarsStyle,
    SpacingVarsStyle,
    ThemeVarsStyle,
    FontsStyle,
    FormVarsStyle,
} from "@styles";

function MyApp({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps<SessionProviderProps>) {
    return (
        <>
            <FontsVarsStyle />
            <GlobalStyle />
            <GlobalVarsStyle />
            <SpacingVarsStyle />
            <ThemeVarsStyle />
            <FontsStyle />
            <FormVarsStyle />
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        </>
    );
}

export default MyApp;
