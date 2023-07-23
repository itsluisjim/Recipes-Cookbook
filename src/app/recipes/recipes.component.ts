import { Component } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipeComponent {
  
  selectedRecipe: Recipe;

  setSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
