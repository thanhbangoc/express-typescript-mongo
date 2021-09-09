import { Request, Response } from 'express';
import { ErrorConst } from '../consts/error';
import shared from '../utils/share';

/**
 * @author ThanhBN
 */
export class HttpHandler {
  public static headersHandler(req: Request, res: Response, next: Function) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-API-USER-ID, X-API-PUBLIC-KEY');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method === 'OPTIONS') return res.status(200).end();
    next();
  }

  public static responseHandler(result: any, res: Response) {
    return res.json({
      success: true,
      errorCode: result.errorCode || ErrorConst.ERROR_CODE.COMMON.SUCCESS,
      message: result.message || ErrorConst.ERROR_MESSAGE.COMMON.SUCCESS,
      data: result
    });
  }

  public static errorHandler(err: any, res: Response) {
    res.status(err.statusCode || ErrorConst.ERROR_CODE.COMMON.INTERNAL_SERVER_ERROR);
    return res.json({
      success: false,
      errorCode: err.errorCode || ErrorConst.ERROR_CODE.COMMON.INTERNAL_SERVER_ERROR,
      message: shared.isArray(err) ? ErrorConst.ERROR_MESSAGE.COMMON.VALIDATOR_REQUEST_FAILED : (err.message || ErrorConst.ERROR_MESSAGE.COMMON.INTERNAL_SERVER_ERROR),
      errors: !err.errorCode ? err : undefined,
    });
  }
}