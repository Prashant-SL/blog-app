const express = require("express");
const router = express.Router();
const {
  getBlogPost,
  getBlogPostBySlug,
  getBlogsCategory,
  getBlogPostByCategory,
  getBlogPostByAuthor,
  createBlogPost,
  deleteBlogPost,
} = require("../controllers/posts.controller");
const checkUserType = require("../middlewares/usertype");
const upload = require("../middlewares/fileupload");

router.get("", getBlogPost);
router.get("/:slug", getBlogPostBySlug);
router.get("/category/", getBlogsCategory);
router.get("/author/:author", getBlogPostByAuthor);
router.get("/category/:category", getBlogPostByCategory);
router.post("", upload.single("file"), createBlogPost);
// router.post("", checkUserType, upload.single("file"), createBlogPost);
router.delete("/:id", deleteBlogPost);

module.exports = router;
