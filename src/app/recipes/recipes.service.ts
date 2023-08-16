import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipes.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    recipeSelected =  new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe(
          'alfredo past',
          'this is alfredo pasta',
          'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?cs=srgb&dl=pexels-engin-akyurt-1437267.jpg&fm=jpg',
          [
            new Ingredient('Pasta', 2),
            new Ingredient('Cheese', 1)
          ]
        ),
        new Recipe(
          'pasta',
          'this is pasta',
          'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?cs=srgb&dl=pexels-engin-akyurt-1437267.jpg&fm=jpg',
          [
            new Ingredient('Pasta', 5),
            new Ingredient('Cheese', 2)
          ]
        ),
      ];

      getRecipes() {
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }

      getRecipe(id: number){
        return this.recipes[id];
      }
}