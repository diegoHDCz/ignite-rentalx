import { CategoriesRepository } from "../model/repositories/CategoriesRepository";
import { ICategoriesRepository } from "../model/repositories/ICategoriesReposityory";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ description, name }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
