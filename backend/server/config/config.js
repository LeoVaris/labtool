require('dotenv').config()

module.exports = {
  'development': {
    'username': 'postgres',
    'password': null,
    'database': 'labtool_development',
//    'username': process.env.DEV_DB_USERNAME,
//    'password': process.env.DEV_DB_PASSWORD,
//    'database': process.env.DEV_DB_NAME,
    'host': '127.0.0.1',
    'dialect': 'postgres'
  },
  'test': {
    'username': process.env.CI_DB_USERNAME,
    'password': process.env.CI_DB_PASSWORD,
    'database': 'labtool_test',
    'host': '127.0.0.1',
    'dialect': 'postgres'
  },
  'production': {
    'username': process.env.PROD_DB_USERNAME,
    'password': process.env.PROD_DB_PASSWORD,
    'database': process.env.PROD_DB_NAME,
    'host': process.env.PROD_DB_HOSTNAME,
    'dialect': 'postgres'
  },
}
