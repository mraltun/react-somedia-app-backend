import { db } from "../connect.js";

export const getComments = (req, res) => {
  const q = `SELECT c.*, u.id AS usedId, name, profilePic FROM comments AS c JOIN users AS u ON (u.id = c.userId) WHERE c.postId = ? ORDER BY c.createdAt DESC`;

  db.query(q, [req.query.postId], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Post has been created");
  });
};
