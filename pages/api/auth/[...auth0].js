// This is basically a slug
// anything with "/api/auth" will be coming in here

// pages/api/auth/[...auth0].js
import { handleAuth } from "@auth0/nextjs-auth0";

export default handleAuth();
