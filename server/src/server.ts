// const { logger } = require('./common/logging');
// const mongoose = require('mongoose');
// const { PORT, MONGO_CONNECTION_STRING } = require('./common/config');

// import app = require('./app');
// import Server = require('./app');
// mongoose.connect(MONGO_CONNECTION_STRING, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false
// });

// const db = mongoose.connection;

// db.on('error', () => logger.error('MongoDB connection error:')).once(
//   'open',
//   () => {
//     logger.info('Successfully connect to DB');
//     app.listen(PORT, () =>
//       logger.info(`App is running on http://localhost:${PORT}`)
//     );
//   }
// );
// async function bootstrap() {
//     const server = new Server();
//     // server.port
//     await server.app.listen(server.port, () => console.log(`> Listening!! on port ${server.port}`));

// }
// bootstrap();