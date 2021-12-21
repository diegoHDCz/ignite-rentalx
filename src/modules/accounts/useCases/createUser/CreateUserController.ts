import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { CreateUserUserCase } from "./CreateUserUseCase";

class CreateUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, driver_license } = request.body;
    const createUserUseCase = container.resolve(CreateUserUserCase);
    await createUserUseCase.execute({
      name,
      email,
      password,
      driver_license,
    });

    return response.status(201).send();
  }
}

export { CreateUsersController };
