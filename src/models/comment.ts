import { DataTypes, db, Model } from "../db.ts";

export class Comment extends Model {
  static table = "comment";
  static timestamps = true;

  static fields = {
    uid: DataTypes.STRING,
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIG_INTEGER,
    },
    answer_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    content:  DataTypes.TEXT,
    created_at: DataTypes.TIMESTAMP,
    updated_at: DataTypes.TIMESTAMP,
  };
}

db.link([Comment]);
