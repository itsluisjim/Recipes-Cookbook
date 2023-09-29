import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Recipe } from '../recipes/recipes.model';
import { RecipeService } from '../recipes/recipes.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  private localData: {
    email: string;
    id: string;
    _token: string;
    _tokenExpirationDate: string;
  };

  constructor(
    private http: HttpClient,
    private recipesService: RecipeService
  ) {}

  private getUid() {
    return JSON.parse(localStorage.getItem('userData'));
  }

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.localData = this.getUid();

    this.http
      .put(
        `https://recipes-cookbook-9eb80-default-rtdb.firebaseio.com/recipes/${this.localData.id}.json`,
        recipes
      )
      .subscribe((response: any) => {
        console.log('Saving...');
        console.log(response);
      });
  }

  fetchRecipes() {
    this.localData = this.getUid();

    return this.http
      .get<Recipe[]>(
        `https://recipes-cookbook-9eb80-default-rtdb.firebaseio.com/recipes/${this.localData.id}.json`
      )
      .pipe(
        map((recipes: Recipe[]) => {
          if(recipes == null){
            return [];
          }

          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipesService.setRecipes(recipes);
        })
      );
  }
}
