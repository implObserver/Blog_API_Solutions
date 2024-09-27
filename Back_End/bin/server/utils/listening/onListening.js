// Обработчик событий для успешного прослушивания
import createDebugMessages from 'debug';
const debug = createDebugMessages('authentification-basics:server');

export function onListening(server) {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
