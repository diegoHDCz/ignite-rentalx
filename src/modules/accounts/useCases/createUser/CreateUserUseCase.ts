import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { IUserRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUserCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {}

  async execute({
    name,
    email,
    driver_license,
    password,
  }: ICreateUsersDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      driver_license,
      password: passwordHash,
    });
  }
}

export { CreateUserUserCase };
