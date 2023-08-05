import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipes.model";

export class RecipeService {
    recipeSelected =  new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'alfredo past',
          'this is alfredo pasta',
          'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?cs=srgb&dl=pexels-engin-akyurt-1437267.jpg&fm=jpg'
        ),
        new Recipe(
          'pasta',
          'this is pasta',
          'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?cs=srgb&dl=pexels-engin-akyurt-1437267.jpg&fm=jpg'
        ),
      ];

      getRecipes() {
        return this.recipes.slice();
      }
}