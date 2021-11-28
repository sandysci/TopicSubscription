"use strict";

const app = require('./app');

const debug = require('debug')(process.env.DEBUG);
const http = require('http');
const {log} = console;

const server = http.createServer(app);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

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

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error,port) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}


const setupExpress = async () => {

    /**
     *
     * Create HTTP server.
     */

    try {
        /**
         * Create HTTP server.
         */


        /**
         * Get port from environment and store in Express.
         */

        const port = process.env.PORT ||normalizePort('8000');
        app.set('port', port);
        log(" Server Starting up ON", port, 'Topic Subscription');
        /**
         * Listen on provided port, on all network implementations.
         */

        server.listen(port,function () {
            const { address, port } = this.address();
            const server = `http://${address === '::' ? '0.0.0.0' : address}:${port}`;
            log('\n\nServer Started ON:', '\x1b[36m\x1b[89m', server);
            log('Press Ctrl+C to quit.');
            // log('\n\n\x1b[1m\x1b[31m Server Started ON:', '\x1b[36m\x1b[89m\x1b[4m', server, '\x1b[0m');
            // log('\x1b[1m\x1b[31m', 'Press Ctrl+C to quit.\n\x1b[0m');
        })
        ;
        server.setTimeout(500000);
        server.on('error', (error) => {
            onError(error, port)
        });
        server.on('listening', () => {
            const addr = server.address();
            const bind = typeof addr === 'string'
                ? 'pipe ' + addr
                : 'port ' + addr.port;
            debug('Listening on ' + bind);
        });


    } catch (err) {
        log("Erorr here");
        log(err);
        debug(err);
        process.exit(1)
    }
};
// start server

setupExpress();