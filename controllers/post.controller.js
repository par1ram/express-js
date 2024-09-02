import db from "../db.js"

class PostController {
  static async createPost(req, res) {
    const { title, content, user_id } = req.body
    const newPost = await db.query(
      "INSERT INTO post (title, content, user_id) VALUES ($1, $2, $3) RETURNING *",
      [title, content, user_id]
    )
    res.json(newPost.rows)
  }

  static async getPostByUser(req, res) {
    const id = req.query.id // берем из url (.../post?id=7)
    const post = await db.query("SELECT * FROM post WHERE user_id = $1", [id])
    res.json(post.rows)
  }
}

export default PostController
