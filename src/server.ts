#!/usr/bin/env node

/**
 * @author ThanhBN
 */
import app from './app';
import * as http from 'http';
import * as signale from 'signale';
import databaseConnect from './core/database';
import * as dotenv from 'dotenv';
dotenv.config();

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort((process.env.PORT || '3000'));
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
server.listen(port, '0.0.0.0', () => {
  signale.success(`Server listening on port: ${parseInt(port)}`);
});
server.on('error', onError);

function normalizePort(val) {
  let port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

// DB Connection
databaseConnect();

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: NodeJS.ErrnoException) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      signale.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      signale.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}