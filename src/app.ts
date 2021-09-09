import * as express from 'express';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as expressValidator from 'express-validator';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import { HttpHandler } from './core/httpHandler';
import routes from './core/routes';

/**
 * @author ThanhBN
 */
class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.init();
  }

  private init(): void {
    // control cross resources
    this.app.use(cors());
    // protected http header
    this.app.use(helmet());
    // Add Parsing body to json
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use(compression());
    // Add validator for request
    this.app.use(expressValidator());
    // Add Url encoding
    this.app.use(express.urlencoded({ extended: false }));
    // Add Access-Control headers
    this.app.use(HttpHandler.headersHandler);
    // Add API Routes
    routes.registerRoute(this.app);
  }
}

export default new App().app;