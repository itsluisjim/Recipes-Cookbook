import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  recipeInfo: Recipe;
  id: number

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeInfo = this.recipeService.getRecipe(this.id);
      }
    )
  }
  
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeInfo.ingredients);
  }
}
