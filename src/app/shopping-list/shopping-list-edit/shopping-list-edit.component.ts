import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list-reducer';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  editingSub: Subscription;
  editMode = false;
  editedItem: Ingredient;
  @ViewChild('itemForm', { static: false }) itemForm: NgForm;

  constructor(
    private store: Store<fromShoppingList.AppState>
  ) {}

  ngOnInit(): void {
    this.editingSub = this.store.select('shoppingList').subscribe((stateData) => {
      if (stateData.editedIngredientIndex > -1) {
        this.editMode = true;
        this.editedItem = stateData.editedIngredient;

        this.itemForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      } else {
        this.editMode = false;
      }
    });
  }
  ngOnDestroy(): void {
    this.editingSub.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

  onSubmit(form: NgForm) {
    const data =  form.value;

    const ingredient = new Ingredient(
      data.name, data.amount
    );
    
    if(form.valid){
      if(this.editMode){
        this.store.dispatch(new ShoppingListActions.UpdateIngredient(ingredient))
        this.editMode = false;
      } else {
        this.store.dispatch(new ShoppingListActions.AddIngredient(ingredient));
      }
    }
    form.reset();
  }

  onClear(){
    this.itemForm.reset();
    this.editMode = false;
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

  onDelete() {
    this.store.dispatch(
      new ShoppingListActions.DeleteIngredient()
    );
    this.onClear();
  }
}
