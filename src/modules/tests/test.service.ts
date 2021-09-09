import { ITestModel } from './test.interface';
import { TestRepository } from './test.repository';
import { ErrorConst } from '../../consts/error';
import share from '../../utils/share';

const testRepository = new TestRepository();

export class TestService {
  public async create(params: ITestModel) {
    const testFound = await testRepository.findByCondition({name: params.name});
    if (testFound) {
      throw {
        errorCode: ErrorConst.ERROR_CODE.TEST.ERR_EXIST,
        message: ErrorConst.ERROR_MESSAGE.TEST.ERR_EXIST,
      };
    }
    params.code = share.randomCode('TES');
    return await testRepository.create(params);
  }
}