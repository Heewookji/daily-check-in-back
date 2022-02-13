import { DataTypes, db, Model } from "../db.ts";

export class User extends Model {
  static table = "users";
  static timestamps = true;

  static fields = {
    uid: {
      primaryKey: true,
      type: DataTypes.STRING,
    },
    id: {
      autoIncrement: true,
      type: DataTypes.BIG_INTEGER,
    },
    display_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      length: 50,
    },
    photoURL: DataTypes.STRING,
    created_at: DataTypes.TIMESTAMP,
    updated_at: DataTypes.TIMESTAMP,
  };
}

db.link([User]);
