const jwt = require("jsonwebtoken");

// auth middleware..
exports.requireLogin = (req, res, next) => {
  try {
    let isAuthenticate = req.headers.authorization;
    if (isAuthenticate) {
      const token = isAuthenticate.split(" ")[1];
      // verifying token..
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      // Attach token to req...
      req.user = decode;
      next();
    } else {
      return res.status(400).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.log(error);
  }
};
