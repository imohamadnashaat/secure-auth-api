import 'dotenv/config';
import http from 'http';

import app from './app.js';
import { createTables } from './models/database.js';

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

createTables();

server.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
