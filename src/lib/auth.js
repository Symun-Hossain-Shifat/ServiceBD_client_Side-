import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { client } from "@/db"; // your mongodb client
import { MongoClient } from "mongodb";


const client = new MongoClient(process.env.MONGODB_URL);



export const auth = betterAuth({
    database: mongodbAdapter(client.db('ServiceBD'), { client }),
    emailAndPassword: {
        enabled: true,
    },
});