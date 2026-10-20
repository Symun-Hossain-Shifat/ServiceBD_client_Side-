
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { client } from "@/db";

export const auth = betterAuth({
    database: mongodbAdapter(client.db("ServiceBD")),
    emailAndPassword: {
        enabled: true,
    },
    user: {
        additionalFields: {
            role: {
                type: "string",
                default: "customer",
                required: true,
            },
            mobile: {
                type: 'Number',
                default: '',
                required: true
            }

        }
    }
});
