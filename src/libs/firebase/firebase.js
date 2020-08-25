import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const envConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
}

const stgConfig = {
  apiKey: process.env.REACT_APP_STG_APIKEY,
  authDomain: process.env.REACT_APP_STG_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_STG_DATABASEURL,
  projectId: process.env.REACT_APP_STG_PROJECTID,
  storageBucket: process.env.REACT_APP_STG_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_STG_MESSAGINGSENDERID,
}

const config = process.env.REACT_APP_ENV === 'DEV' ? envConfig : stgConfig 

class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();
      this.db = app.database();
    }

    example = () => this.db.ref('example');

}

export default Firebase;
