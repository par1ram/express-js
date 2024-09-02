import express from "express"
import userRouter from "./routes/user.routes.js"
import postRouter from "./routes/post.routes.js"

const PORT = process.env.PORT || 4444

const app = express()

app.use(express.json())
app.use("/api", userRouter)
app.use("/api", postRouter)

app.listen(PORT, (error) => {
  if (error) {
    return console.log(error)
  }
  if (!error) {
    return console.log("Server started...")
  }
})
