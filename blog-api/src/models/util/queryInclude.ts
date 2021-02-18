// TODO 2.2 如何缓存重复查询？https://github.com/rfink/sequelize-redis-cache
import { Helper } from './helper'
import User from '../bo/user'
import { IncludeOptions } from 'sequelize'

declare interface IQueryInclude {
  [key: string]: IncludeOptions
}

const QueryInclude: IQueryInclude = {
  User: {
    model: User,
    as: 'user',
    attributes: { exclude: ['password', ...Helper.exclude.generalities] },
    required: true,
  },
  UserForSearch: {
    model: User,
    as: 'user',
    attributes: { include: ['id', 'fullname'] },
    required: true,
  },
  Creator: {
    model: User,
    as: 'creator',
    attributes: { exclude: ['password', ...Helper.exclude.generalities] },
    required: true,
  },
  Owner: {
    model: User,
    as: 'owner',
    attributes: { exclude: ['password', ...Helper.exclude.generalities] },
    required: true,
  },
  Locker: {
    model: User,
    as: 'locker',
    attributes: { exclude: ['password', ...Helper.exclude.generalities] },
    required: false,
  },
  Members: {
    model: User,
    as: 'members',
    attributes: { exclude: ['password', ...Helper.exclude.generalities] },
    through: { attributes: [] },
    required: false,
  }
}

export default QueryInclude