import { container } from "tsyringe";

import { IDateProvider } from "./DateProvider/IDateprovider";
import { DayjsDateprovider } from "./DateProvider/implementations/DayjsDateProvider";
import { IMailProvider } from "./MailProvider/IMailProvider";
import { EtherealMailProvider } from "./MailProvider/implementations/EthrealMailProvider";

container.registerInstance<IMailProvider>(
  "EtherealMailProvider",
  new EtherealMailProvider()
);
container.registerSingleton<IDateProvider>(
  "DayjsDateprovider",
  DayjsDateprovider
);
