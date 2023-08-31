import "@/styles/globals.css";
import type { AppProps } from "next/app";

import "regenerator-runtime/runtime";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { SessionProvider } from "next-auth/react";

// const supportedChains:any = [97]
// const connectors = {
//     injected: {},
// };

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider session={session}>
            <ThirdwebProvider
                clientId="d0d9a768e4b9809a494a792b60efa49e"
                authConfig={{
                    // authUrl: "/api/auth/[...nextauth]",
                    domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "http://localhost:3000/",
                }}
            >
                <Component {...pageProps} />
            </ThirdwebProvider>
        </SessionProvider>
    );
}

export default App;