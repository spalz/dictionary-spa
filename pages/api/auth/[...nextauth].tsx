import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";
// import GithubProvider from "next-auth/providers/github";
// import TwitterProvider from "next-auth/providers/twitter";
// import Auth0Provider from "next-auth/providers/auth0";

export const authOptions: NextAuthOptions = {
    providers: [
        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_ID,
        //     clientSecret: process.env.FACEBOOK_SECRET,
        // }),
        // GithubProvider({
        //     clientId: process.env.GITHUB_ID,
        //     clientSecret: process.env.GITHUB_SECRET,
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ? process.env.GOOGLE_ID : "",
            clientSecret: process.env.GOOGLE_SECRET
                ? process.env.GOOGLE_SECRET
                : "",
        }),
        // TwitterProvider({
        //     clientId: process.env.TWITTER_ID,
        //     clientSecret: process.env.TWITTER_SECRET,
        // }),
    ],
    theme: {
        colorScheme: "light",
    },
    callbacks: {
        async jwt({ token }) {
            token.userRole = "admin";
            return token;
        },
    },
    debug: true,
};

export default NextAuth(authOptions);
