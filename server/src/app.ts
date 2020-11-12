
import cors from 'cors';
import express, { Application } from 'express';

import MasterRouter from './routers/master.router';

import bodyParser from 'body-parser';
import logger from './common/logger';
import errorMiddleware from './middleware/error.middleware';


class App {
  public app: Application;
  public port: number;
  public router = MasterRouter;
  constructor(port) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeRouters();
    this.initializeErrorHandling()
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }
  private initializeRouters() {
    this.app.use('/api', this.router);
  }
  private initializeErrorHandling() {
    this.app.use(errorMiddleware)
  }
  public listen() {
    this.app.listen(this.port, () => logger.info(` App listening on port ${this.port}`))
  }
}

export default App;