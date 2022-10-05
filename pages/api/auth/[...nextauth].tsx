import NextAuth from "next-auth";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import CredentialsProvider from "next-auth/providers/credentials";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    const strapi_providers = (id: string | number, name: string) => [
        {
            clientId: "0",
            type: "oauth",
            id: id,
            name: name,
            authorization: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/connect/${id}`,
            token: {
                url: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/${id}/callback`,
                async request(context: Array<string>) {
                    const tokens = await context;
                    return { tokens };
                },
            },
            userinfo: {
                async request(context: {
                    tokens: { params: { access_token: string } };
                }) {
                    const tokens = await context;
                    const profile = await axios.get(
                        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/${id}/callback?access_token=${tokens.tokens.params.access_token}`
                    );
                    return await profile.data;
                },
            },
            profile(profile: {
                jwt: string;
                user: {
                    id: string;
                    username: string;
                    email: string;
                };
            }) {
                return {
                    jwt: profile.jwt,
                    id: profile.user.id.toString(),
                    name: profile.user.username,
                    email: profile.user.email,
                };
            },
        },
    ];

    const providers = [
        ...strapi_providers("google", "Google"),
        ...strapi_providers("twitter", "Twitter"),
        // ...strapi_providers("github", "Github"),
        ...strapi_providers("facebook", "Facebook"),
        CredentialsProvider({
            id: "login",
            name: "Credentials",
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
                        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local`,
                        {
                            identifier: credentials?.identifier,
                            password: credentials?.password,
                        }
                    );
                    const user: any = {
                        jwt: response?.data.jwt,
                        name: response?.data.user.username || "",
                        email: response?.data.user.email || "",
                    };
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
        CredentialsProvider({
            id: "register",
            name: "Credentials",
            credentials: {
                username: {
                    label: "username",
                    type: "text",
                },
                email: {
                    label: "email",
                    type: "text",
                },
                password: {
                    label: "password",
                    type: "password",
                },
            },
            async authorize(credentials) {
                try {
                    const response = await axios.post(
                        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local/register`,
                        {
                            username: credentials?.username,
                            email: credentials?.email,
                            password: credentials?.password,
                        }
                    );
                    const user: any = {
                        jwt: response?.data.jwt,
                        name: response?.data.user.username || "",
                        email: response?.data.user.email || "",
                    };
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
        // @ts-ignore
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
        debug: false,
    });
}
