import type { AppProps } from "next/app";
import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { Provider } from "react-redux";

import store from "../src/app/store";

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
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </SessionProvider>
        </>
    );
}

export default MyApp;
