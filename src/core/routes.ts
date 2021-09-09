import * as glob from 'glob';
import * as path from 'path';

export default class Routes {
  static readonly PREFIX = {
    AUTH: '/auth/v1',
    API: '/api/v1',
  };

  static readonly END_POINT = {
    TEST: '/tests'
  };

  public static registerRoute(app) {
    const ROOT = path.normalize(__dirname + '/..');
    const routes = glob.sync(path.normalize(`${ROOT}/**/*.route.{ts,js}`));
    routes.forEach((item) => {
      const route = require(item).default;
      app.use(Routes.PREFIX.API, route);
    });
  }
}

