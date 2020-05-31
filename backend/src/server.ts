// Server setup
import express from 'express';
import bodyParser from 'body-parser';

// Routes
import userRouter from './routes/User';
import roleRouter from './routes/Role';
import db from './database/connection';
import authMiddlware from './middlewares/auth';

const { SERVER_PORT = '4500', JWT_SECRET = '' } = process.env;

class UgradeServer {
  app = express();
  serverPort = SERVER_PORT;
  sessionSecret = JWT_SECRET;

  async start() {
    try {
      require('./models');
      await db.sync({ force: true });
      console.log('🗃 Models synced');
    } catch (err) {
      console.log('🗃 Failed syncing models with database: ' + err);
      return;
    }

    this.parsers();
    this.middlewares();
    this.routes();

    this.app.listen(SERVER_PORT, () => {
      console.log('🚀 Server running at', SERVER_PORT);
    });
  }

  parsers() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
  }

  middlewares() {
    this.app.use(authMiddlware);
  }

  routes() {
    this.app.use('/user', userRouter);
    this.app.use('/role', roleRouter);
  }
}

export default new UgradeServer();
