import { useAuth, useAddress, useMetamask, useBalance } from "@thirdweb-dev/react";
import { useUser } from "@thirdweb-dev/react";

//nextjs
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'

export default function Home() {

    //thirdweb
    const { user, isLoggedIn, isLoading } = useUser();
    const { data: session } = useSession()
    const address = useAddress();
    const connect = useMetamask();
    const router = useRouter();
    const auth = useAuth();

    //nextjs
    const { push } = useRouter();

    // CONNECT WALLET
    async function connectWallet() {
        try {
            await connect();
        } catch (error) {
            console.log(error);
        }
    }

    // FIRMA
    async function signInWallet() {
        try {
            // Prompt the user to sign a login with wallet message
            const payload = await auth?.login();

            // Then send the payload to next auth as login credentials
            // using the "credentials" provider method
            await signIn("credentials", {
                payload: JSON.stringify(payload),
                redirect: false,
            });
            push('/dashboard');
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {!address ?
                <div className="flex justify-center">
                    <button
                        onClick={() => connectWallet()}
                        className="bg-blue-500 w-32">
                        Connect wallet
                    </button >
                </div >
                :
                <div className="flex justify-center">
                    <button
                        onClick={() => signInWallet()}
                        className="bg-yellow-500 w-32">
                        Sign In
                    </button >
                </div >
            }
        </>
    )
}
