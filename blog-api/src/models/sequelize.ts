import { Sequelize } from 'sequelize-typescript'
import config from '../config'
// import MigrateService from '../service/migrate'

const chalk = require('chalk')
const now = () => new Date().toISOString().replace(/T/, ' ').replace(/Z/, '')
const logging = process.env.NODE_ENV === 'development'
  ? (sql: string) => {
    sql = sql.replace('Executing (default): ', '')
    console.log(`${chalk.bold('SQL')} ${now()} ${chalk.gray(sql)}`)
  }
  : console.log

const sequelize = new Sequelize({
  database: config.db.database,
  dialect: config.db.dialect,
  username: config.db.username,
  password: config.db.password,
  host: config.db.host,
  port: config.db.port,
  pool: config.db.pool,
  logging: config.db.logging ? logging : false,
  dialectOptions: config.db.dialectOptions,
})

sequelize.addModels([__dirname + '/bo'])

export default sequelize
