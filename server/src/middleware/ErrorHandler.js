import { network } from "../utils/constants.js"

export const ErrorHandler = (err, req, res, next) => {
    console.error("GLOBAL ERROR:", err)

    res.status(network.INTERNAL_SERVER_ERROR).json({
        message: "Something went wrong"
    })
}