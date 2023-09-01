import { ThirdwebAuthProvider,authSession} from "@thirdweb-dev/auth/next-auth";
import NextAuth, { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    providers: [
        // Add the thirdweb auth provider to the providers configuration
        ThirdwebAuthProvider({
            domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "http://localhost:3000",
        }),
        // other providers...
    ],
    callbacks: {
        // Add the authSession callback to the callbacks configuration
        session: authSession,
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.AUTH_SECRET,
};

export default NextAuth(authOptions);
