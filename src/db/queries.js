// Prisma
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// pg
import pool from "./pool.js";
import { env } from "../config/config.js";
