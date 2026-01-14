import { DataTypes, Model } from "sequelize"
import { db } from "../libs/db"

class Todo extends Model<ITodo> implements ITodo {
  public declare id: number
  public declare text: string
  public declare completed: boolean
}

Todo.init(
  {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "todos",
    timestamps: false,
  }
)

export default Todo
