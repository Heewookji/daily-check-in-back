import { MysqlClient } from "../../deps.ts";
import { db, Model } from "../db.ts";

export class Answer implements Model {
  static table = "answer";
  uid: string;
  id: Number;
  emotion_id: Number;
  user_id: Number;
  content: string;
  created_at: Date;
  updated_at: Date;

  constructor(param: {
    uid: string;
    id: Number;
    emotion_id: Number;
    user_id: Number;
    content: string;
    created_at: Date;
    updated_at: Date;
  }) {
    this.uid = param.uid;
    this.id = param.id;
    this.emotion_id = param.emotion_id;
    this.user_id = param.user_id;
    this.content = param.content;
    this.created_at = param.created_at;
    this.updated_at = param.updated_at;
  }

  fromMap(map: any): Answer {
    return new Answer(map);
  }

  static select() {
    return db.query("");
  }
}
