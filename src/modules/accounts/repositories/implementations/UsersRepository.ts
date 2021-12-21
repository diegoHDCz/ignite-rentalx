import { getRepository, Repository } from "typeorm";
import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUsersRepository";

class UsersRepository implements IUserRepository {
  private repository: Repository<User>;
  constructor() {
    this.repository = getRepository(User);
  }
  async create({
    name,
    email,
    driver_license,
    password,
  }: ICreateUsersDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      driver_license,
      password,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }
}

export { UsersRepository };