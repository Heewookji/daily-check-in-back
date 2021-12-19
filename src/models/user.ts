import { Model, DataTypes, db } from "../db.ts";

export class User extends Model {
    static table = 'users';
    static timestamps = true;

    static fields = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            length: 8,
        },
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            length: 50,
        },
    };
}

db.link([User]);
// await db.sync();