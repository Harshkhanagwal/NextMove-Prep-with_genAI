import jwt from 'jsonwebtoken'

export const generateToken = (userId) => {
  return jwt.sign({ id: userId },  process.env.jwtSecret, {
    expiresIn: "7d"
  });
};

