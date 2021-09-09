import { Router } from 'express';
import { TestController } from './test.controller';

const testRoute = Router();
const testCtrl = new TestController();

testRoute.post('/tests', testCtrl.create);
// testRoute.get('/tests', testCtrl.list);

export default testRoute;