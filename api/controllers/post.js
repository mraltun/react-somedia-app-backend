import { db } from "../connect.js";

export const getPosts = (req, res) => {
  const q = `SELECT p.*, u.id AS usedId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.p.userId)`;

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.statu(200).json(data);
  });
};
