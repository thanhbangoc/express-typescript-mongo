import * as _ from 'lodash';
import {Request, Response} from 'express';
import * as Logger  from '../../utils/logger';
import { HttpHandler } from '../../core/httpHandler';
import { TestValidator } from './tests.validator';
import { TestService } from './test.service';

const testService = new TestService();

export class TestController {
  public async create(req: Request, res: Response): Promise<any> {
    try {
      req.checkBody(TestValidator.create);
      const errors = req.validationErrors();
      if (errors) {
        return HttpHandler.errorHandler(errors, res);
      }
      Logger.log(req.method, req.url, 'info', 'START', `Body: ${JSON.stringify(req.body)}`);
      const result = await testService.create(req.body);
      Logger.log(req.method, req.url, 'info', 'END', `Response: ${JSON.stringify(result)}`);
      return HttpHandler.responseHandler(result, res);
    } catch (err) {
      Logger.log(req.method, req.url, 'error', 'END', `Error: ${JSON.stringify(err)}`);
      return HttpHandler.errorHandler(err, res);
    }
  }
}