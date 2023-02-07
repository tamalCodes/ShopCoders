import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import Users from "../../../models/UserSchema";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) return;

  mongoose.connect(process.env.MONGO_URI);
};

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    /*     GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
    }),
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
    }), */
    CredentialsProvider({
      async authorize(credentials, req) {
        dbConnect();

        const { email, password } = credentials;

        const user = await Users.findOne({ email });

        if (!user) {
          throw new Error("Invalid Email or Password");
        }

        if (user.password !== password) {
          throw new Error("Invalid Email or Password");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
