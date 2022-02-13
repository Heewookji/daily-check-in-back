import { DataTypes, db, Model } from "../db.ts";

export class Answer extends Model {
  static table = "answer";
  static timestamps = true;

  static fields = {
    uid: DataTypes.STRING,
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIG_INTEGER,
    },
    emotion_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    content:  DataTypes.TEXT,
    created_at: DataTypes.TIMESTAMP,
    updated_at: DataTypes.TIMESTAMP,
  };
}

db.link([Answer]);
