import { injectable, inject } from "tsyringe";
import { AppError } from "../../../../erros/AppError";
import { IUserRepository } from "../../repositories/IUsersRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {}
  async execute({ email, password }: IRequest): Promise<IResponse> {
    //Usuario existe

    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password incorrect!");
    }

    //senha está correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!");
    }

    //Gerar token
    const token = sign({}, "078629adf941fbb8461132a296d8766e", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
