import express from 'express';
import jwt from 'jsonwebtoken';
import { Pool } from 'pg';

const app = express();
app.use(express.json());

export default app;
