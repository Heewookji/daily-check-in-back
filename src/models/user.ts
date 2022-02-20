import { db, Model } from "../db.ts";

export class User implements Model {
  static table = "users";

  uid: string;
  id: Number;
  display_name: string;
  email: string;
  photoUrl: string;
  created_at: Date;
  updated_at: Date;

  constructor(param: {
    uid: string;
    id: Number;
    display_name: string;
    email: string;
    photoUrl: string;
    created_at: Date;
    updated_at: Date;
  }) {
    this.uid = param.uid;
    this.id = param.id;
    this.display_name = param.display_name;
    this.email = param.email;
    this.photoUrl = param.photoUrl;
    this.created_at = param.created_at;
    this.updated_at = param.updated_at;
  }

  static fromMap(map: any): User {
    return new User(map);
  }

  static findByUid(uid: string) {
    return db.query("select * from users where uid = ?", [uid]).then(
      (result) => {
        return result[0];
      },
    );
  }
}
