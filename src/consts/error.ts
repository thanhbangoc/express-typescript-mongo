export class ErrorConst {
  static readonly ERROR_CODE = {
    COMMON: {
      SUCCESS: 200,
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      INTERNAL_SERVER_ERROR: 500,
      FOBIDDEN: 403,
    },
    TEST: {
      ERR_EXIST: 10001,
    }
  };

  static readonly ERROR_MESSAGE = {
    COMMON: {
      SUCCESS: 'Success',
      BAD_REQUEST: 'Bad Request',
      UNAUTHORIZED: 'You do not have permission to access resource!',
      FOBIDDEN: 'Fobidden',
      INTERNAL_SERVER_ERROR: 'Internal Server Error',
      VALIDATOR_REQUEST_FAILED: 'Entered credential is not correct',
    },
    TEST: {
      ERR_EXIST: 'Test is already exist'
    }
  };
}

