import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesUsecase } from "./ListCategoriesUseCase";
import { ListCategoriesController } from "./ListCategoryController";

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoriesUseCase = new ListCategoriesUsecase(categoriesRepository);

const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);

export { listCategoriesController };
