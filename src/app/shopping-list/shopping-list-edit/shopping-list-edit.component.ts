import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {

  editingSub: Subscription;
  editMode = false;
  editingItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('itemForm', {static: false}) itemForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) {}
  
  ngOnInit(): void {
    this.editingSub = this.shoppingListService.startedEditing
    .subscribe(
      (index: number) => {
        this.editingItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.itemForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
      );
    }
  ngOnDestroy(): void {
    this.editingSub.unsubscribe();
  }
    
  onSubmit(form: NgForm) {
    const data =  form.value;

    const ingredient = new Ingredient(
      data.name, data.amount
    );
    
    if(form.valid){
      if(this.editMode){
        this.shoppingListService.updateIngredient(this.editingItemIndex, ingredient)
        this.editMode = false;
      } else {
        this.shoppingListService.addIngredient(ingredient);
      }
    }
    form.reset();
  }

  onClear(){
    this.itemForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editingItemIndex);
    this.onClear()
  }
}
