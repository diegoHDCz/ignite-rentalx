import { container } from "tsyringe";

import { IDateProvider } from "./DateProvider/IDateprovider";
import { DayjsDateprovider } from "./DateProvider/implementations/DayjsDateProvider";
import { IMailProvider } from "./MailProvider/IMailProvider";
import { EtherealMailProvider } from "./MailProvider/implementations/EtherealMailProvider";

container.registerSingleton<IDateProvider>(
  "DayjsDateprovider",
  DayjsDateprovider
);

container.registerInstance<IMailProvider>(
  "EtherealMailProvider",
  new EtherealMailProvider()
);
