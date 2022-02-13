import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";
import { DayjsDateprovider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";
import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let userRepositoryInMemory: UsersRepositoryInMemory;
let dateProvider: DayjsDateprovider;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let mailProvider: MailProviderInMemory;

describe("Send Forgot Mail", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UsersRepositoryInMemory();
    dateProvider = new DayjsDateprovider();
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    mailProvider = new MailProviderInMemory();
    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      userRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProvider
    );
  });

  it("Should be able to send forgot password mail to user", async () => {
    const sendMail = jest.spyOn(mailProvider, "sendMail");

    await userRepositoryInMemory.create({
      driver_license: "555040",
      email: "cek@ajcinab.ml",
      name: "Daisy Lambert",
      password: "1234",
    });
    await sendForgotPasswordMailUseCase.execute("cek@ajcinab.ml");
    expect(sendMail).toHaveBeenCalled();
  });

  it("Should not be able to send an email if user does not exists", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("huci@kuf.ao")
    ).rejects.toEqual(new AppError("User does not exists!"));
  });

  it("Should bee able to create ans users token", async () => {
    const generateTokenMail = jest.spyOn(
      usersTokensRepositoryInMemory,
      "create"
    );
      
    await userRepositoryInMemory.create({
      driver_license: "461968",
      email: "ak@faga.ai",
      name: "Phillip Brock",
      password: "1234",
    });
    await sendForgotPasswordMailUseCase.execute("ak@faga.ai");
    expect(generateTokenMail).toBeCalled();
  });
});
