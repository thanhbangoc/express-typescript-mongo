import { Schema, Model, model } from 'mongoose';
import { AppConst } from '../../consts/app';
import { ITestModel } from './test.interface';

const schema = new Schema({
  name: {
    type: String,
    unique: true,
    require: true
  },
  code: {
    type: String,
    unique: true,
    require: true,
  },
  descriptions: {
    type: String,
  },
  status: {
    type: String,
    default: AppConst.STATUS.ACTIVE,
    enum: Object.values(AppConst.STATUS),
  },
}, AppConst.SCHEMA_OPTIONS);

schema.index({
  name: 'text',
  code: 'text'
});

export const TestSchema: Model<ITestModel> = model(AppConst.COLLECTION_NAME.TEST, schema);
