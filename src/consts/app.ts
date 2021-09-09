export class AppConst {

  static readonly SCHEMA_OPTIONS: any = {
    versionKey: false,
    toJSON: {
      virtuals: true
    },
    toObject: {
      virtuals: true
    },
    id: false,
    timestamps: {
      createdAt: 'dateCreated',
      updatedAt: 'dateUpdated'
    }
  };

  static readonly STATUS = {
    ACTIVE: 'Active',
    INACTIVE: 'Inactive',
  };

  static readonly PAGE_LIMIT = 10;

  static readonly COLLECTION_NAME = {
    TEST: 'tests',
  };

}

