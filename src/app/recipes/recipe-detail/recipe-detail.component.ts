import { Component, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  
  @Input() recipeInfo: Recipe;

  constructor(private recipeService: RecipeService) {}
  
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeInfo.ingredients);
  }
}
