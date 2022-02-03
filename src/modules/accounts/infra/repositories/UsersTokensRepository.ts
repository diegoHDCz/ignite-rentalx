import { IUsersTokensRepository } from "@modules/accounts/repositories/ICreateUsersTokens";
import { ICreateUserTokenDTO } from "@modules/rentals/dtos/ICreateUserTokenDTO";
import { getRepository, Repository } from "typeorm";
import { UserTokens } from "../typeorm/entities/UserTokens";

class UsersTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UserTokens>;

  constructor() {
    this.repository = getRepository(UserTokens);
  }

  async create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = this.repository.create({
      expires_date,
      refresh_token,
      user_id,
    });

    await this.repository.save(userToken);

    return userToken;
  }
}

export { UsersTokensRepository };
