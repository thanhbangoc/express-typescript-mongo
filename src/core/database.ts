import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import * as signale from 'signale';

export default function () {
  (<any>mongoose).Promise = Promise;
  connectDb(() => {
    // some function
  });
}

/**
 * @method connectDb
 * @description connection database
 * @param {Function} callback
 */
function connectDb(callback?: Function) {
  if ('function' !== typeof callback) callback = function () {
  };
  let isConnectedBefore = false;
  const uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/`
    + `${process.env.DB_NAME}`;
  const connectionOptions: mongoose.ConnectionOptions = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    user: process.env.DB_USER,
    pass: process.env.DB_PWD
  };

  connect();

  function connect() {
    if (isConnectedBefore) {
      signale.await('Database reconnecting...');
    }
    mongoose.connect(uri, connectionOptions);
  }

  mongoose.connection.on('error', function (err) {
    signale.error('Could not connect to Database: ', err);
  });

  mongoose.connection.on('disconnected', function () {
    signale.error('Database has lost connection...');
    if (!isConnectedBefore) {
      setTimeout(connect, 5000);
    }
  });

  mongoose.connection.on('connected', function () {
    isConnectedBefore = true;
    signale.success(`[Database] "${process.env.DB_NAME}" has connected successfully!`);
    callback();
  });

  mongoose.connection.on('reconnected', function () {
    // tslint:disable-next-line:no-console
    console.log('Database has reconnected!');
  });

  process.on('SIGINT', function () {
    mongoose.connection.close()
      .then(() => {
        // tslint:disable-next-line:no-console
        console.log('Mongoose default connection disconnected through app terminal!');
        process.exit(0);
      });
  });
}
