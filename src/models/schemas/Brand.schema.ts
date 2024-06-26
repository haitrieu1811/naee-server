import { ObjectId } from 'mongodb'

type BrandConstructor = {
  _id?: ObjectId
  userId: ObjectId
  name: string
  nation: string
  description?: string
  createdAt?: Date
  updatedAt?: Date
}

export default class Brand {
  _id?: ObjectId
  userId: ObjectId
  name: string
  nation: string
  description: string
  createdAt: Date
  updatedAt: Date

  constructor({ _id, userId, name, nation, description, createdAt, updatedAt }: BrandConstructor) {
    const date = new Date()
    this._id = _id
    this.userId = userId
    this.name = name
    this.nation = nation
    this.description = description || ''
    this.createdAt = createdAt || date
    this.updatedAt = updatedAt || date
  }
}
