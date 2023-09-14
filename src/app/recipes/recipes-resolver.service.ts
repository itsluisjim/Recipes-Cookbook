import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    ResolveFn,
    RouterStateSnapshot,
} from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from './recipes.model';
import { RecipeService } from './recipes.service';

/**
 * User to fetch recipes before a route is loaded,
 * for this case we created a recipes resolver to be added to
 * the /recipes path.
 */

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

