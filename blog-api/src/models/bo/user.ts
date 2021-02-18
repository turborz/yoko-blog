import { Table, Column, Model, AutoIncrement, PrimaryKey, AllowNull, DataType, Unique} from 'sequelize-typescript'

@Table({ paranoid: true, freezeTableName: false, timestamps: true })
export default class User extends Model<User> {

  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @AllowNull(false)
  @Column(DataType.STRING(32))
  fullname: string

  @Column(DataType.STRING(32))
  password: string

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(128))
  email: string


}