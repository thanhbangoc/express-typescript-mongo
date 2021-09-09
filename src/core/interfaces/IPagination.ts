/**
 * @author ThanhBN
 */
export interface IPagination<T> {
  data: T;
  page: number;
  pageSize: number;
  totalPage: number;
  totalItem: number;
  // cursor paging
  next?: string;
  hashNext?: boolean;
  previous?: string;
  hashPrevious?: boolean;
}

export interface IPaginateParamsBase {
  /**
   * @field page_size
   * @type number
   * @description size page request.
   * * Default is 20
   * * If page_size=-1 <=> get all data
   * @example page_size=20
   */
  pageSize?: number;
  /**
   * @field sort
   * @type string
   * @description sort param
   * @example sort: _id:1;name:1;address:-1
   */
  sort?: string;
  /**
   * @field select
   * @type string
   * @description list field is preview
   * @example select: name:0;email:1,
   */
  select?: string;
  /**
   * @field popthanhtions
   * @type string
   * @description mongoose popthanhte. We are support popthanhte with field select
   * @example popthanhtions: account:name address  (<=> popthanhte field "account" and show list with field "name" & "address")
   */
  popthanhtions?: string;
  /**
   * @field where
   * @type string
   * @description search for absolute right data
   * @example where: role:wholesaler;status.active.is_active:1,
   */
  where?: string;
  /**
   * @field pattern
   * @type string
   * @description search for same like SQL
   * @example email:abc@example.com
   */
  pattern?: string;
  /**
   * @field content
   * @type string
   * @description full text search
   * @example duytm
   */
  content?: string;
}

export interface IPaginateParams extends IPaginateParamsBase {
  /**
   * @field page
   * @type number
   * @description set current page
   * @example page:2
   */
  page?: number;
}

export interface IPaginateCursorParams extends IPaginateParamsBase {
  /**
   * @field next
   * @type string
   * @description cursor next page (support solution chat with paging same facebook, twitter)
   */
  next?: string;
  /**
   * @field previous
   * @type string
   * @description cursor previous page (support solution chat with paging same facebook, twitter)
   */
  previous?: string;
}
