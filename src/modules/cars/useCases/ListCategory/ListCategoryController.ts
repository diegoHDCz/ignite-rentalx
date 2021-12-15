import { Request, Response } from "express";
import { ListCategoriesUsecase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoriesUsecase) {}
  handle(request: Request, response: Response) {
    const all = this.listCategoryUseCase.execute()

    return response.json(all);
  }
}

export { ListCategoriesController };
