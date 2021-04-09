const jwt = require("jsonwebtoken");

export const auth = (req, res, next) => {
  const headers = req.headers;
  const token = headers.authorization && headers.authorization.split(" ")[1];

  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.SECRET, (error, decoded) => {
    if (error) return res.sendStatus(403);

    req.email = decoded;

    next();
  });
};
