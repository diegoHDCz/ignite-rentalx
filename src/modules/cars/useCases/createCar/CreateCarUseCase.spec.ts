import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it("Should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "car name",
      description: "description car",
      daily_rate: 100,
      license_plate: "AWI-1020",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });
    expect(car).toHaveProperty("id");
  });
  it("Should not be able to create car with same license plate", async() => {
    await createCarUseCase.execute({
      name: "car1",
      description: "description car",
      daily_rate: 100,
      license_plate: "AWI-1020",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });
   await expect(
      createCarUseCase.execute({
        name: "car2",
        description: "description car",
        daily_rate: 100,
        license_plate: "AWI-1020",
        fine_amount: 60,
        brand: "Brand",
        category_id: "category",
      })
    ).rejects.toEqual(new AppError("Car Already Exists!"));
  });
  it("Should not be able to create car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "car1",
      description: "description car",
      daily_rate: 100,
      license_plate: "AWID-1120",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });
    expect(car.available).toBe(true);
  });
});
