import { Request, Response, NextFunction } from "express";

export const getUsers = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
	} catch (error) {
		res.status(400).json(error);
		next(error);
	}
};
