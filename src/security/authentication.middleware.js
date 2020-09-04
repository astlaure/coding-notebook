/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const authenticationMiddleware = (req, res, next) => {
    if (req.isUnauthenticated()) {
        return res.sendStatus(401);
    }
    return next();
};

module.exports = authenticationMiddleware;
