import { db } from "../db.ts";

export class Comment {
  static table = "comment";

  uid: string | undefined;
  id: Number | undefined;
  answer_id: Number | undefined;
  user_id: Number | undefined;
  content: string | undefined;
  created_at: Date | undefined;
  updated_at: Date | undefined;
}
