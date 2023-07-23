import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() aRecipeWasSelected = new EventEmitter<Recipe>();

  ngOnInit(): void {}

  constructor() {}

  recipes: Recipe[] = [
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

  onSelectedRecipe(recipe: Recipe) {
    this.aRecipeWasSelected.emit(recipe);
  }
}
