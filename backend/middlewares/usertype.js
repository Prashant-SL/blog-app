const checkUserType = (req, res, next) => {
  if (req.headers.usertype === "author") {
    next();
  } else {
    res.status(403).json({
      error: "Access denied. You are not authorized to create blog posts.",
    });
  }
};

module.exports = checkUserType;
