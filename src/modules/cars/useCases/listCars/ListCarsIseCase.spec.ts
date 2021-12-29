import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it("Should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "up!",
      description: "carro turbo",
      daily_rate: 110.0,
      license_plate: "ABC33",
      fine_amount: 50,
      brand: "volkswagen",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({});
    expect(cars).toEqual([car]);
  });
  it("Should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "up!",
      description: "carro turbo",
      daily_rate: 110.0,
      license_plate: "ABC33",
      fine_amount: 50,
      brand: "car_brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      brand: "car_brand",
    });
    expect(cars).toEqual([car]);
  });
});
