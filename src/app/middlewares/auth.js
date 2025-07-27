import jwt from 'jsonwebtoken';
import authconfig from '../../config/auth';

function authmiddlewares(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: "Token not provided" });
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return response.status(401).json({ error: "Token malformado" });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return response.status(401).json({ error: "Token malformado" });
  }

  try {
    const decoded = jwt.verify(token, authconfig.secret);
    request.userId = decoded.id;
    request.userName = decoded.name;

    return next();
  } catch (err) {
    return response.status(401).json({ error: 'Token is invalid' });
  }
}

export default authmiddlewares;




