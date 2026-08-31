import { activeIngredients } from './activeIngredients';

export const activeIngredientCategories: string[] = [
  ...new Set(activeIngredients.map((ingredient) => ingredient.category)),
];
