export class TestValidator {
  static create = {
    name: {
      notEmpty: true
    },
    descriptions: {
      optional: true,
    },
  };
}