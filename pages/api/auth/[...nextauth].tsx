import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "login",
            name: "Email",
            credentials: {
                identifier: {
                    label: "Email",
                    type: "text",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials) {
                try {
                    const response = await axios.post(
                        `${process.env.NEXT_PUBLIC_STRSPI_API_URL}/api/auth/local`,
                        {
                            identifier: credentials?.identifier,
                            password: credentials?.password,
                        }
                    );
                    const user: any = {
                        accessToken: response?.data.jwt,
                        name: response?.data.user.username || "",
                        email: response?.data.user.email || "",
                        provider: response?.data.user.provider || "",
                    };
                    console.log(user);
                    return user;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            },
        }),
    ],
    // callbacks: {
    //     async signIn(user, account) {
    //         console.log(account);
    //         const { accessToken, idToken } = account;
    //     },
    //     async jwt(token, user) {
    //         if (user) {
    //             const { accessToken } = user;
    //             token.accessToken = accessToken;
    //         }
    //         return token;
    //     },
    //     async session(session, token) {
    //         console.log({ ses: session });
    //         session.accessToken = token.accessToken;
    //         return session;
    //     },
    // },
    debug: true,
};

export default NextAuth(authOptions);
