
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { client } from "@/db";

export const auth = betterAuth({
    database: mongodbAdapter(client.db("ServiceBD")),

    emailAndPassword: {
        enabled: true,
    },

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },

    user: {
        additionalFields: {
            role: {
                type: "string",
                required: false,
                defaultValue: "customer",
                input: false,
            },

            mobile: {
                type: "string",
                required: false,
            },
        },
    },
});
