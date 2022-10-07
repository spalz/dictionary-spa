import axios from "axios";
import { getSession } from "next-auth/react";

const baseURL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api`;

const ApiClient = () => {
    const defaultOptions = {
        baseURL,
    };

    const instance = axios.create(defaultOptions);

    instance.interceptors.request.use(async (request: any) => {
        const session = await getSession();
        if (session) {
            request.headers.Authorization = `Bearer ${session.jwt}`;
        }
        return request;
    });

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            console.log(`error`, error);
        }
    );

    return instance;
};

export default ApiClient();