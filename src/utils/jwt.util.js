import jwt from 'jsonwebtoken';

const generateToken = (payload, expiresIn = '2w') => {
  const token = jwt.sign(payload, 'your-secret-key', { expiresIn });
  return token;
};

const verifyToken = (token) => {
  try {
    const formattedToken = formatToken(token);
    const decoded = jwt.verify(formattedToken, 'your-secret-key');
    return decoded;
  } catch (err) {
    throw err;
  }
};

const formatToken = (token) => {
  if (token.startsWith('Bearer ')) {
    return token.slice(7);
  }
  return token;
};

export { generateToken, verifyToken };
