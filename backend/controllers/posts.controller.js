const Posts = require("../models/posts.model.js");

const createBlogPost = (req, res) => {
  const { title, slug, category, body, author } = req.body;

  try {
    const blogPost = new Posts({
      title,
      author: author.toLowerCase() || req.headers["x-author-name"],
      slug,
      category: category.toLowerCase(),
      body,
      image: req.file.filename,
    });
    blogPost.save();
    return res.send(blogPost);
  } catch (error) {
    console.log(error);
  }
};

const getBlogPost = async (req, res) => {
  try {
    const blogPost = await Posts.find({}).lean().exec();
    return res.send(blogPost);
  } catch (error) {
    console.log(error);
  }
};

const getBlogPostBySlug = async (req, res) => {
  const slug = req.params.slug.trim();
  try {
    const blogPost = await Posts.find({ slug }).lean().exec();
    return res.send(blogPost);
  } catch (error) {
    console.log(error);
  }
};

const getBlogsCategory = async (req, res) => {
  console.log(req, res);
  try {
    const blogCategories = await Posts.find({}).lean().exec();
    console.log("blogCategories", blogCategories);
    // const categories = blogCategories?.map((blog) => blog.category);
    // return res.send(categories);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};

const getBlogPostByCategory = async (req, res) => {
  const category = req.params.category.trim();
  const regex = new RegExp(`^${category}$`, "i");
  try {
    const blogPost = await Posts.find({ category: { $regex: regex } })
      .lean()
      .exec();
    return res.send(blogPost);
  } catch (error) {
    console.log(error);
  }
};

const getBlogPostByAuthor = async (req, res) => {
  const author = req.params.author.trim();
  const regex = new RegExp(`^${author}$`, "i");
  try {
    const blogPost = await Posts.find({ author: { $regex: regex } })
      .lean()
      .exec();
    return res.send(blogPost);
  } catch (error) {
    console.log(error);
  }
};

const deleteBlogPost = async (req, res) => {
  const id = req.params.id;
  try {
    const blogPost = await Posts.findOneAndDelete({ _id: id });
    if (!blogPost) {
      return res.status(404).json({
        message: "Blog post not found or you are not authorized to delete",
      });
    }
    res.status(200).send(blogPost);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createBlogPost,
  getBlogPost,
  getBlogPostBySlug,
  getBlogsCategory,
  getBlogPostByCategory,
  getBlogPostByAuthor,
  deleteBlogPost,
};
