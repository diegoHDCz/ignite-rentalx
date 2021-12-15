import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesReposityory";

class ListCategoriesUsecase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories
  }
}

export { ListCategoriesUsecase };
