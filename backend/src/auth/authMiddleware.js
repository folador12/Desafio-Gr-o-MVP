import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.token;

    if (!authHeader) {
      return res.status(401).json({ message: "Token não fornecido." });
    }

    const secret = process.env.SECRET;
    const decoded = jwt.verify(authHeader, secret);
    req.userId = decoded.userId;

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido ou expirado." });
  }
};

export default authMiddleware;
