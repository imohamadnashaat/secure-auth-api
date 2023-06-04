import jwt from 'jsonwebtoken';

const generateToken = (payload, expiresIn = '1w') => {
  const token = jwt.sign(payload, 'your-secret-key', { expiresIn });
  return token;
};

const verifyToken = (token) => {
  const formattedToken = formatToken(token);
  try {
    const decoded = jwt.verify(formattedToken, 'your-secret-key');
    return decoded;
  } catch (err) {
    throw new Error('Invalid token');
  }
};

const formatToken = (token) => {
  if (token.startsWith('Bearer ')) {
    return token.slice(7);
  }
  return token;
};

export { generateToken, verifyToken };
