import { ITestModel } from './test.interface';
import { TestSchema } from './test.schema';
import { Repository } from '../../core/repository';

export class TestRepository extends Repository<ITestModel> {
  constructor() {
    super(TestSchema);
  }
}