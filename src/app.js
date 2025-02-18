import express from "express";
import { env } from "../config/config.js";

const app = express();

app.listen(env.port, () => console.log(`Listening on port ${env.port}`));
