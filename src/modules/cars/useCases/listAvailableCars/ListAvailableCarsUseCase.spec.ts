import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
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

    const cars = await listAvailableCarsUseCase.execute({});
    expect(cars).toEqual([car]);
  });
  it("Should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "up!",
      description: "carro turbo",
      daily_rate: 110.0,
      license_plate: "ABC334",
      fine_amount: 50,
      brand: "car_brand",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "up!",
    });
    expect(cars).toEqual([car]);
  });
  it("Should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "up!",
      description: "carro turbo",
      daily_rate: 110.0,
      license_plate: "ABC33",
      fine_amount: 50,
      brand: "car_brand",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "car_brand",
    });
    expect(cars).toEqual([car]);
  });
  it("Should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "up!",
      description: "carro turbo",
      daily_rate: 110.0,
      license_plate: "ABC33",
      fine_amount: 50,
      brand: "car_brand",
      category_id: "123456",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "123456",
    });
    expect(cars).toEqual([car]);
  });
});
