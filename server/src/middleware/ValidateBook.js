import { network } from "../utils/constants.js"

export const ValidateBook = (req, res, next) => {
    const { title, description, price } = req.body

    if (!title || !description || !price) {
        return res.status(network.BAD_REQUEST).json({
            message: "Missing required fields"
        })
    }

    next()
}