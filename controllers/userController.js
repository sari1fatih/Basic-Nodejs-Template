import asyncHandler from 'express-async-handler'
import { REQ_SUCCESS, REQ_NOT_FOUND } from '../consts/generals.js'
import { errorMessage, response } from '../utils/settings.js'

export const index = asyncHandler(async (req, res, next) => {
    try {
        if (true) {
            var dataObj = { status: REQ_SUCCESS, json: { text: 'User Page' } }
            response(res, dataObj)
        } else {
            res.status(REQ_NOT_FOUND)
            throw new Error('The user or password are wrong')
        }
    } catch (error) {
        errorMessage(res, error)
    }
})
