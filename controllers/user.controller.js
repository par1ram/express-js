import db from "../db.js"

class UserController {
  static async createUser(req, res) {
    const { name, surname } = req.body
    const newPerson = await db.query(
      "INSERT INTO person (name, surname) values ($1, $2) RETURNING *",
      [name, surname]
    )
    res.json(newPerson.rows)
  }

  static async getUsers(req, res) {
    const users = await db.query("SELECT * FROM person")
    res.json(users.rows)
  }

  static async getOneUser(req, res) {
    const id = req.params.id // достаем id из url (.../user/:id)
    const user = await db.query("SELECT * FROM person WHERE id = $1", [id])
    res.json(user.rows)
  }

  static async updateUser(req, res) {
    const { id, name, surname } = req.body
    const user = await db.query(
      "UPDATE person SET name = $1, surname = $2 WHERE id = $3 RETURNING *",
      [name, surname, id]
    )
    res.json(user.rows)
  }

  static async deleteUser(req, res) {
    const id = req.params.id
    const user = await db.query("DELETE FROM person WHERE id = $1", [id])
    res.json(user.rows)
  }
}

export default UserController
