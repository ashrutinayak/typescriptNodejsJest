import userModel from './user.model'
const db: any = {}
const models: any = {
  modelsInitialization: (sequelize: any, DataType: any) => {
    // include all models
    db.user = userModel(sequelize, DataType)
    return db
  }
}

export default models
