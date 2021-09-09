/**
 * @author ThanhBN
 */

import {
  IFindByIdAndPopthanhteParams,
  IFindByConditonAndPopthanhteParams,
  IListParams,
  IListCusorParams,
  IFindByIdAndUpdateParams,
  IFindOneAndUpdateParams
} from './interfaces/IRepository';
import * as mongoose from 'mongoose';

export class Repository<TModel extends mongoose.Document, QueryHelpers = {}> {
  public TSchema: mongoose.Model<TModel>;

  constructor(_TSchema: mongoose.Model<TModel>) {
    this.TSchema = _TSchema;
  }

  public async create(params: TModel) {
    return (new this.TSchema(params)).save();
  }

  public async createMultiple(params: TModel[]) {
    return this.TSchema.insertMany(params);
  }

  public async findById(id: string, projections?: any) {
    return this.TSchema
      .findById(id, projections || {})
      .exec();
  }

  public async findByCondition(condition: object, projections?: any) {
    return this.TSchema
      .findOne(condition, projections || {})
      .exec();
  }

  public async findByIdAndPopthanhte(params: IFindByIdAndPopthanhteParams) {
    return this.TSchema
      .findById({ _id: params.id }, params.projections || {})
      .popthanhte(params.popthanhte)
      .exec();
  }

  public async findByConditionAndPopthanhte(params: IFindByConditonAndPopthanhteParams) {
    return this.TSchema
      .findOne(params.conditions, params.projections || {})
      .popthanhte(params.popthanhte)
      .exec();
  }

  public async list(params: IListParams) {
    return this.TSchema
      .find((params.conditions || {}), params.projections || {})
      .paginate(params.paginate || {});
  }

  /**
   * @method listByCursorNew
   * @description get list data by condition support paging cursor
   * @param params {ParamCommonListCursor}
   */
   public async listByCursor(params: IListCusorParams) {
    return this.TSchema
      .find((params.conditions || {}), params.projections || {})
      .paginateCursor(params.paginateCursor || {});
  }

  /**
   * @method listAllNew
   * @description get all data by condition (same listNew, but not support paging)
   * @param params {ParamCommonListCursor}
   */
   public async listAll(params: IListParams) {
    const schemas = await this.TSchema
      .find((params.conditions || {}), params.projections || {})
      .paginate(Object.assign(params.paginate || {}, { pageSize: -1 }));
    return schemas.data;
  }

  /**
   * @method aggregate
   * @description aggregate common function
   * @param params {ParamCommonListCursor}
   */
   public async aggregate(pipeline: any, options?: object) {
    const schemas = await this.TSchema
      .aggregate(pipeline, options);
    return schemas;
  }

  public async findByIdAndUpdate(params: IFindByIdAndUpdateParams) {
    return this.TSchema
      .findByIdAndUpdate(
        params.id,
        params.data,
        Object.assign(params.options || {}, { new: true })
      )
      .exec();
  }

  public async findOneAndUpdate(params: IFindOneAndUpdateParams) {
    return this.TSchema
      .findOneAndUpdate(
        params.conditions,
        params.data,
        Object.assign(params.options || {}, { new: true })
      )
      .exec();
  }

  public async updateOne(params: IFindOneAndUpdateParams) {
    return this.TSchema
      .updateOne(params.conditions, params.data, params.options || {})
      .exec();
  }

  public async updateMany(params: IFindOneAndUpdateParams) {
    return this.TSchema
      .updateMany(params.conditions, params.data, params.options || {})
      .exec();
  }

  public async deleteOne(conditions: object) {
    return this.TSchema
      .deleteOne(conditions)
      .exec();
  }

  public async deleteMany(conditions: object) {
    return this.TSchema
      .deleteMany(conditions)
      .exec();
  }

  public async findByIdAndDelete(id: string) {
    return this.TSchema
      .findByIdAndDelete(id)
      .exec();
  }

  public async findOneAndDelete(conditions: object) {
    return this.TSchema
      .findOneAndDelete(conditions)
      .exec();
  }

  public async countByCondition(conditions: object) {
    return this.TSchema
      .countDocuments(conditions);
  }
}
