
import { useAuth, useAddress, useMetamask, useBalance } from "@thirdweb-dev/react";

//nextjs
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'

export default function Home() {

    //thirdweb
    const connect = useMetamask();

    //nextjs
    const { push } = useRouter();

    async function connectAccount() {
        try {
            await connect();
            router.push('/dashboard');
        } catch (error) {
            console.log(error);
        }
    }

    const { data: session } = useSession()
    const router = useRouter();

    if (!session) {
        return (
            <div className="flex justify-center">
                <button
                    onClick={connectAccount} 
                    className="bg-blue-500 w-32">
                        Connect
                </button >
            </div >
        )
    } else {
        return router.push("/dashboard");
    }
}