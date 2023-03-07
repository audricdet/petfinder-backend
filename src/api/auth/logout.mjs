import express from "express";

const logoutRouter = express.Router()

const logout = (request, response) => {
    return response
        .clearCookie("access_token")
        .status(200)
        .json({ message: "Successfully logged out" });
};

logoutRouter.get('/logout', logout)

export default logoutRouter