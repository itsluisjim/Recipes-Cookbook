import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', { static: false }) ingredientName: ElementRef;
  @ViewChild('amountInput', { static: false }) ingredientAmount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredient() {
    const ingredient = new Ingredient(
      this.ingredientName.nativeElement.value,
      this.ingredientAmount.nativeElement.value
    );

    this.shoppingListService.addIngredient(ingredient);
  }
}
