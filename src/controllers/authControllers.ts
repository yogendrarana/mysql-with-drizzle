import ErrorHandler from "../util/errorHandler.js";
import { NextFunction, Request, Response } from "express";
import { catchAsyncError } from "../util/catchAsyncError.js";

export const registerUser = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;
    if(!name || !email || !password) return next(new ErrorHandler('Please fill all fields', 400));

    console.log("Registering user...")
});


export const loginUser = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    if(!email || !password) return next(new ErrorHandler('Please fill all fields', 400));

    console.log("Logging in user...")
});