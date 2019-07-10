import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'campus-bordeaux.ovh',
  user: 'passport',
  password: 'passport',
  database: 'lc_passport',
});

export default connection;
