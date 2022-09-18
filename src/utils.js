const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.SECRET;

const getTokenPayload = (token) => {
	return jwt.verify(token, secret);
};

const getUserId = (req, authToken) => {
	if (req) {
		const authHeader = req.headers.authorization;

		const token = authHeader.replace('Bearer ', '');
		if (!token) {
			throw new Error('No token found');
		}
		const { userId } = getTokenPayload(token);
		return userId;
	} else if (authToken) {
		const { userId } = getTokenPayload(authToken);
		return userId;
	}

	throw new Error('Not authorized');
};

module.exports = {
	secret,
	getUserId,
};
