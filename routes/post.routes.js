import { Router } from "express"
import PostController from "../controllers/post.controller.js"

const router = new Router()

router.post("/post", PostController.createPost)
router.get("/post", PostController.getPostByUser)

export default router
