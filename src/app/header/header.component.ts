import { Component } from '@angular/core';
import { RecipeService } from '../recipes/recipes.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from '../recipes/recipes.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
fetchRecipes() {
throw new Error('Method not implemented.');
}
  
  collapsed = true;

  constructor(private dataStorageService: DataStorageService) {}

  onSaveData(){
    this.dataStorageService.storeRecipes();
  }

  onFetchData(){
    console.log('fired')
    this.dataStorageService.fetchRecipes().subscribe();
  }


}
