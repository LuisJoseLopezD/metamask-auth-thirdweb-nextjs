import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: any, res: any) => {
  // Get the session on the server-side by passing in our previously configured authOptions
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ message: "Not authorized." });
    return;
  }

  // Get the wallet address if the user is logged in with their wallet
  // Otherwise get their email
  return res.status(200).json({
    message: `This is a secret for ${
      session.user?.address || session.user?.email
    }`,
  });
};
