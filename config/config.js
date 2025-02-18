import dotenv from "dotenv";
dotenv.config();

const env = {
    database: {
        url: process.env.DATABASE_URL,
    },
    port: process.env.PORT,
};

export { env };
