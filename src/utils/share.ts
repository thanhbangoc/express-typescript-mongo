import * as moment from 'moment-timezone';
import * as mongoose from 'mongoose';
import * as randomstring from 'crypto-random-string';

moment().tz('Asia/Ho_Chi_Minh').format();

export const generatorDateTime = (time = undefined) => {
  return moment().format('YYYY-MM-DD');
};

export const getTimeVietNamHCM = () => {
  return moment().format('YYYY-MM-DD hh:mm:ss');
};

export default {
  isMobilePhone: value => /(01|02|03|04|05|06|07|08|09[0|1|2|3|4|5|6|7|8|9])+([0-9]{7,9})\b/.test(value),
  hasProperty: (obj, value) => Object.prototype.hasOwnProperty.call(obj, value),
  isObject: a => !!a && a.constructor === Object && !!Object.keys(a).length,
  isObjectId: a => mongoose.Types.ObjectId.isValid(a) && typeof a !== 'number',
  inArray: (array, value) => array.indexOf(value) > -1,
  randomCode: (prefix) => `${prefix}` + randomstring({length: 6, type: 'numeric'}),
  isArray: a => Array.isArray(a),
};


