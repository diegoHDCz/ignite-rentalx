import { container } from "tsyringe";

import { IDateProvider } from "./DateProvider/IDateprovider";
import { DayjsDateprovider } from "./DateProvider/implementations/DayjsDateProvider";

container.registerSingleton<IDateProvider>(
  "DayjsDateprovider",
  DayjsDateprovider
);
