import { IPaginateParams, IPaginateCursorParams } from './IPagination';
export interface IFindByIdAndPopthanhteParams {
  id: string;
  popthanhte: object;
  projections?: any;
}

export interface IFindByConditonAndPopthanhteParams {
  conditions: object;
  popthanhte: object;
  projections?: any;
}

export interface IListParams {
  conditions?: object;
  projections?: any;
  paginate: IPaginateParams;
}

export interface IListCusorParams {
  conditions?: object;
  projections?: any;
  paginateCursor: IPaginateCursorParams;
}

export interface IFindByIdAndUpdateParams {
  id: string;
  data: object;
  options?: object;
}

export interface IFindOneAndUpdateParams {
  conditions: object;
  data: object;
  options?: object;
}