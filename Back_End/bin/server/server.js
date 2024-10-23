import { app } from '../../app/app.js';
import { createServer } from 'http';
import { defaultConfig } from './cfg/config.js';
import { normalizePort } from './utils/normalize/normalize.js';
import { onError } from './utils/error/onError.js';
import { onListening } from './utils/listening/onListening.js';
import 'dotenv/config';

const port = normalizePort(defaultConfig.port);
const host = defaultConfig.host;

app.set('port', port);

const server = createServer(app);

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});

server.listen(port, host);
server.on('error', (error) => onError(error, port));
server.on('listening', () => onListening(server));
