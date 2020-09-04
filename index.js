const app = require('./src/app/app');
const config = require('./src/config/config');
const logger = require('./src/app/app.logger');
const database = require('./src/database/database');

(async () => {
    const { port } = config;
    try {
        await database.authenticate();
        app.listen(port, () => logger.info(`Server started on port ${port}.`));
    } catch (err) {
        logger.error('Cannot start the server.');
    }
})();
