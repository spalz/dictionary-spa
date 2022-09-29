import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default async function auth(req: any, res: any) {
    const providers = [
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
                const data = {
                    identifier: credentials?.identifier,
                    password: credentials?.password,
                };
                try {
                    const response = await axios.post(
                        `${process.env.NEXT_PUBLIC_STRSPI_API_URL}/api/auth/local`,
                        {
                            ...data,
                        }
                    );
                    const user: any = {
                        jwt: response?.data.jwt,
                        name: response?.data.user.username || "",
                        email: response?.data.user.email || "",
                    };
                    console.log(user);
                    if (user) {
                        return user;
                    }
                    return null;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            },
        }),
    ];
    return await NextAuth(req, res, {
        providers,
        session: {
            strategy: "jwt",
        },
        secret: process.env.NEXTAUTH_SECRET,
        callbacks: {
            async jwt({ token, user }) {
                const isSignIn = user ? true : false;
                if (isSignIn) {
                    token.jwt = user?.jwt;
                    token.id = user?.id;
                    token.email = user?.email;
                    token.name = user?.name;
                }
                return Promise.resolve(token);
            },
            async session({ session, token }: { session: any; token: any }) {
                session.jwt = token.jwt;
                session.id = token.id;
                return session;
            },
        },
    });
}
