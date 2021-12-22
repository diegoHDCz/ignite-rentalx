import { AppError } from "../erros/AppError";
import { Request, Response, NextFunction } from "express";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("token missing", 401);
  }

  const [, token] = authHeader.split(" ");
  try {
    const { sub: user_id } = verify(
      token,
      "078629adf941fbb8461132a296d8766e"
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User does not exists!", 401);
    }

    next();
  } catch {
    throw new Error("Invalid token", 401);
  }
}
