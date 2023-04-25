import { useSession, signOut } from "next-auth/react";

const checkUser = () => {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return true;
  }
};

export default checkUser;
