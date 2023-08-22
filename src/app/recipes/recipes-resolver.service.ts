import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    ResolveFn,
    RouterStateSnapshot,
} from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from './recipes.model';
import { RecipeService } from './recipes.service';


export const recipesResolver: ResolveFn<Recipe[]> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => { 
        const recipes = inject(RecipeService).getRecipes();

        if(recipes.length === 0){
            return inject(DataStorageService).fetchRecipes();
        }
        return recipes;
  };

